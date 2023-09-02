<template>
  <div :class="modelValue ? 'bg-primary' : 'bg-gray-500'" @click="toggle" class="w-14 transition-all duration-500 h-6 flex items-center rounded-full p-1 cursor-pointer">
    <div :class="{'translate-x-6': modelValue}" class="w-6 h-6 transition-all duration-500 transform bg-white rounded-full shadow-md"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent }  from 'vue'
 
export default defineComponent({
  props: {
    modelValue:{
      type: Boolean
    }
  },
  emits: ['update:modelValue'],
  setup(props, context) {

    function toggle(){
      context.emit('update:modelValue', !props.modelValue)
    }

    return {
      toggle
    }
  }
})

</script>

<style scoped>

</style>