<template>
  <div class="w-full max-w-md px-2">
    <div class="flex justify-between">
      <p>Contabilizei</p>
      <p>{{ values.contabilizeiMonthlyFee }}</p>
    </div>

    <div class="flex justify-between">
      <p>INSS</p>
      <p>{{ values.inss }}</p>
    </div>

    <div class="flex justify-between">
      <p>IRRF</p>
      <p>{{ values.irrf }}</p>
    </div>

    <div class="flex justify-between">
      <p>DAS</p>
      <p>{{ values.das }}</p>
    </div>

    <div class="flex justify-between">
      <p>Pro-Lábore</p>
      <p>{{ values.proLabore }}</p>
    </div>

    <div class="flex justify-between">
      <p>DLA</p>
      <p>{{ values.dla }}</p>
    </div>

    <br>

    <div class="flex justify-between">
      <p>Total de Imposto</p>
      <p>{{ values.taxesTotal }}</p>
    </div>

    <div class="flex justify-between">
      <p>Lucro Total</p>
      <p>{{ values.profit }}</p>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TableData',
  props: {
    values: {
      type: Object,
    }
  },

  // setup ()
})
</script>