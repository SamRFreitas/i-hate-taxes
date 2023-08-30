<template>
  <div class="flex flex-col justify-center items-center ">
    <FormView @update-taxes="updatecalculatedValues($event)"/>
    <TableData :values="state.calculatedValues" class="mt-4"/>
  </div>
</template>

<script lang="ts">

import { defineComponent, reactive } from 'vue'
import FormView from './FormView.vue'
import TableData from '../components/TableData.vue'
import { Vrau } from '@/models/Vrau/Vrau'

export default defineComponent({
  name: 'HomeView',
  components: {
    FormView,
    TableData
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
      }

    })


    function updatecalculatedValues(vrau: Vrau): void {

      state.calculatedValues.contabilizeiMonthlyFee  = vrau.contabilizeiMonthlyFee
      state.calculatedValues.inss = vrau.inss.getInssTax()
      state.calculatedValues.irrf = vrau.inss.getIrrfTax()
      state.calculatedValues.das = vrau.das.dasTax
      state.calculatedValues.dla = vrau.dla
      state.calculatedValues.proLabore = vrau.inss.getProLabore()
      state.calculatedValues.taxesTotal = vrau.inss.getInssTax() + vrau.inss.getIrrfTax() + vrau.das.dasTax + vrau.contabilizeiMonthlyFee
      state.calculatedValues.profit = vrau.inss.getProLabore() + vrau.dla
      
    }

    return {
      state,
      updatecalculatedValues
    }
  }
})
</script>