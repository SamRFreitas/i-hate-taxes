<template>
  
  <div class="max-w-xs">
    <label for="price" class="block text-sm font-medium leading-6 text-gray-900">{{label}}</label>
    <div class="relative mt-2 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span class="text-gray-500 sm:text-sm">{{ state.currencySymbol }}</span>
      </div>
      <input v-model="state.amount" type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 ml-1 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00">
    </div>

  </div>

</template>

<script lang="ts">

import { defineComponent, reactive, watch }  from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: 'Amount',
    }
  },
  emits: ['update:modelValue'],
  setup(props, context) {

    const state = reactive({
      amount: null,
      currencyOptions: ['USD', 'BRL'],
      selectedCurrency: 'USD',
      currencySymbol: 'R$'
    })

    watch(state, () => {

      // const symbol = stateNewValue.selectedCurrency == 'USD' ? '$' : 'R$'
      // stateNewValue.currencySymbol = 'R$'
      context.emit('update:modelValue', state.amount)

    })

    return {
      state,
    }

  }
})
</script>