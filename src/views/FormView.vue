<template>
  <div class="w-full flex justify-center">
    <div class="flex flex-col justify-center items-center border w-full max-w-md py-4 px-28 bg-purple-400 rounded-2xl">
      <InputAmount v-model="state.amount"/>
      <InputAmount v-model="state.reciviedAmount" :label="'Recivied Amount'" class="mt-2"/>
      <div class="w-full flex flex-col justify-between items-center">
        <label class="text-sm font-medium leading-6 text-gray-900 mt-4">{{ checkIfToggleIsNational() }} Service </label>  
        <BaseToggle class="mt-2" v-model="state.isNational" />
      </div>
      <button class="bg-camaleao-green hover:bg-gray-300 text-white shadow-2xl font-bold py-2 px-4 rounded-full mt-4" @click="calculateTaxes">
        Calcular Impostos
      </button> 
    </div>

    
  </div>
</template>

<script lang="ts">

import { defineComponent, reactive, watch } from 'vue'
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
    })

    function checkIfToggleIsNational() {
      return state.isNational ? 'National' : 'International'
    }

    // watch(state, (stateNewValue) => {
    //   console.log(stateNewValue.amount)
    // })

    // watch(state, (stateNewValue) => {
    //   console.log(stateNewValue.reciviedAmount)
    // })
    
    function calculateTaxes() {

      const vrau = new Vrau(state.amount, 28, state.reciviedAmount, state.isNational)

      context.emit('updateTaxes', vrau)

    }
    

    return {
      state,
      checkIfToggleIsNational,
      calculateTaxes
    }
  }
})
</script>