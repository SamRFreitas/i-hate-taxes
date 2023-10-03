<template>

  <div class="w-full flex justify-center border rounded-2xl shadow-xl">
    <div class="flex flex-col justify-center items-center  w-full max-w-md py-4 px-28 ">

      <InputAmount v-model="state.amount"/>
      <span v-if="state.amountError" class="text-sm text-red-600"> Campo vazio ou valor inválido </span>
      
      <InputAmount v-model="state.reciviedAmount" :label="'Valor Recebido'" class="mt-2"/>
      <span v-if="state.reciviedAmountError" class="text-sm text-red-600"> Valor inválido   </span>

      <div class="w-full flex flex-col justify-between items-center mt-4">
        <label for="price" class="block text-sm font-medium leading-6 text-gray-900"> Prestação de Serviço </label>
        <div class="w-full flex justify-between items-center">
          <label class="text-sm font-medium leading-6 text-gray-900 ">{{ checkIfToggleIsNational() }} </label>  
          <BaseToggle class="mt-2" v-model="state.isNational" />
        </div>
      </div>

      <button 
        class="text-white shadow-2xl font-bold py-2 px-4 rounded-full mt-4" 
        :class="hasErrors ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary cursor-pointer'"
        :disabled="hasErrors"
        @click="calculateTaxes"
       >
        Calcular Impostos
      </button> 

    </div>
  </div>

</template>

<script lang="ts">

import { defineComponent, reactive, computed, watch } from 'vue'
import InputAmount from '../components/InputAmount.vue'
import BaseToggle from '@/components/BaseToggle.vue';
import { Vrau } from '@/models/Vrau/Vrau';
export default defineComponent({
  components: {
    BaseToggle,
    InputAmount
  },
  emits: ['updateTaxes'],
  setup(props, context) {

    const state = reactive({

      isNational: false,
      amount: 0,
      reciviedAmount: 0,
      amountError: false,
      reciviedAmountError: false,
      hasErrors: false,
      disabled: true

    })

    function checkIfToggleIsNational() {
      return state.isNational ? 'Nacional' : 'Internacional'
    }

    function checkInputErrors() {

      if (state.amount == null || state.amount == 0) {
        state.amountError = true
      }

    }

    const hasErrors = computed(() =>{
      return state.amountError
    })

    watch(() => state.amount, () => {
      state.amountError = false
    })

    watch(() => state.reciviedAmount, () => {
      state.reciviedAmountError = false
    })
    
    function calculateTaxes() {

      checkInputErrors()

      if (hasErrors.value) {
        return
      }

      const vrau = new Vrau(state.amount, 28, state.reciviedAmount, state.isNational)
      
      context.emit('updateTaxes', vrau)

    }
    

    return {
      state,
      hasErrors,
      checkIfToggleIsNational,
      calculateTaxes
    }
  }
})
</script>