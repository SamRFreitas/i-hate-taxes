<template>
  <div class="flex flex-col justify-center items-center ">
    <Form @update-taxes="updatecalculatedValues($event)" />
    <Modal :is-open="state.isModalOpen" :title="state.modalTitle" :values="state.calculatedValues" @close-modal="state.isModalOpen = false" class="mt-4"/>
  </div>
</template>

<script lang="ts">

import { defineComponent, reactive } from 'vue'
import Form from '../components/Form.vue'
import Modal from '../components/Modal.vue'
import { Vrau } from '@/business_rules/Vrau/Vrau'
import { formatAmount } from "../utils/format" 

export default defineComponent({
  name: 'HomeView',
  components: {
    Form,
    Modal
  },
  setup () {

    const state = reactive({

      calculatedValues: {
        contabilizeiMonthlyFee: 0,
        inss: 0,
        irrf: 0,
        das: 0,
        proLabore: 0,
        dla: 0,
        taxesTotal: 0,
        profit: 0,
        fundsEarmarkedForAnnualBills: 0
      },
      isModalOpen: false,
      modalTitle: 'Lançamento de Caixa'

    })


    function updatecalculatedValues(vrau: Vrau): void {

      state.calculatedValues.contabilizeiMonthlyFee  = vrau.contabilizeiMonthlyFee
      state.calculatedValues.inss = vrau.inss.getInssTax()
      state.calculatedValues.irrf = vrau.inss.getIrrfTax()
      state.calculatedValues.das = vrau.das.dasTax
      state.calculatedValues.dla = vrau.dla
      state.calculatedValues.proLabore = vrau.inss.getProLabore()
      state.calculatedValues.taxesTotal = formatAmount((vrau.inss.getInssTax() + vrau.inss.getIrrfTax() + vrau.das.dasTax + vrau.contabilizeiMonthlyFee), 2)
      state.calculatedValues.profit = vrau.inss.getProLabore() + vrau.dla
      state.calculatedValues.fundsEarmarkedForAnnualBills = vrau.fundsEarmarkedForAnnualBills
      
      state.isModalOpen = true
    }

    return {
      state,
      updatecalculatedValues
    }
  }
})
</script>