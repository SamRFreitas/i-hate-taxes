<template>
  <div v-if="isOpen" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" >

  <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

      <div class="fixed md:relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full md:max-w-lg">
        <div class="bg-white">
          <div class="flex flex-col">
            <div class="flex justify-center items-center bg-primary px-6 py-4">
              <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white absolute left-5 ">
                <svg class="fixed left-7 h-7 w-7 text-primary" fill="#00AA5A"  width="800px" height="800px" viewBox="0 0 1024 1024" stroke-width="1.5"><path d="M491.52 618.879v190.075c0 16.968-13.754 30.72-30.72 30.72H71.68c-16.966 0-30.72-13.752-30.72-30.72v-593.91c0-16.968 13.754-30.72 30.72-30.72H460.8c16.966 0 30.72 13.752 30.72 30.72v241.664c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V215.044c0-39.591-32.094-71.68-71.68-71.68H71.68c-39.586 0-71.68 32.089-71.68 71.68v593.91c0 39.591 32.094 71.68 71.68 71.68H460.8c39.586 0 71.68-32.089 71.68-71.68V618.879c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"/><path d="M399.36 327.678c5.657 0 10.24-4.583 10.24-10.24v-40.96c0-5.657-4.583-10.24-10.24-10.24H133.12a10.238 10.238 0 00-10.24 10.24v40.96c0 5.657 4.583 10.24 10.24 10.24h266.24zm0 40.96H133.12c-28.278 0-51.2-22.922-51.2-51.2v-40.96c0-28.278 22.922-51.2 51.2-51.2h266.24c28.278 0 51.2 22.922 51.2 51.2v40.96c0 28.278-22.922 51.2-51.2 51.2zm-216.711 98.593c5.468 28.856-19.364 53.688-48.22 48.22-16.026-3.041-29.143-16.159-32.174-32.184-5.478-28.856 19.354-53.688 48.21-48.22 16.036 3.041 29.143 16.159 32.184 32.184zm122.88 0c5.468 28.856-19.364 53.688-48.22 48.22-16.026-3.041-29.143-16.159-32.174-32.184-5.478-28.856 19.354-53.688 48.21-48.22 16.036 3.041 29.143 16.159 32.184 32.184zm-122.88 123.904c5.468 28.856-19.364 53.688-48.22 48.22-16.026-3.041-29.143-16.159-32.174-32.184-5.478-28.856 19.354-53.688 48.21-48.22 16.036 3.041 29.143 16.159 32.184 32.184zm122.88 0c5.468 28.856-19.364 53.688-48.22 48.22-16.026-3.041-29.143-16.159-32.174-32.184-5.478-28.856 19.354-53.688 48.21-48.22 16.036 3.041 29.143 16.159 32.184 32.184zm122.88 0c5.468 28.856-19.364 53.688-48.22 48.22-16.026-3.041-29.143-16.159-32.174-32.184-5.478-28.856 19.354-53.688 48.21-48.22 16.036 3.041 29.143 16.159 32.184 32.184zm-245.76 122.88c5.468 28.856-19.364 53.688-48.22 48.22-16.026-3.041-29.143-16.159-32.174-32.184-5.478-28.856 19.354-53.688 48.21-48.22 16.036 3.041 29.143 16.159 32.184 32.184zm122.88 0c5.468 28.856-19.364 53.688-48.22 48.22-16.026-3.041-29.143-16.159-32.174-32.184-5.478-28.856 19.354-53.688 48.21-48.22 16.036 3.041 29.143 16.159 32.184 32.184zm122.88 0c5.468 28.856-19.364 53.688-48.22 48.22-16.026-3.041-29.143-16.159-32.174-32.184-5.478-28.856 19.354-53.688 48.21-48.22 16.036 3.041 29.143 16.159 32.184 32.184zm179.469-37.034l-199.67-199.67c-9.738-9.738-9.738-25.535 0-35.272l4.808-4.797c9.756-9.762 25.547-9.762 35.284-.02l199.674 199.664c7.998 7.998 20.965 7.997 28.963-.001s7.997-20.965-.001-28.963l-199.67-199.66c-25.73-25.745-67.468-25.745-93.202.005l-4.803 4.793c-25.749 25.749-25.749 67.48-.015 93.214l199.67 199.67c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963z"/><path d="M678.341 609.334l-104.54-104.54c-9.747-9.747-9.747-25.531-.004-35.268l4.832-4.843c9.722-9.722 25.519-9.722 35.257.015l104.551 104.541c7.998 7.998 20.966 7.997 28.963-.001s7.997-20.966-.001-28.963l-104.55-104.54c-25.733-25.733-67.464-25.733-93.198.001l-4.828 4.838c-25.729 25.714-25.729 67.439.015 93.183l104.54 104.54c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963z"/><path d="M766.665 559.551l-104.54-104.54c-9.747-9.747-9.747-25.531-.004-35.268l4.832-4.843c9.722-9.722 25.519-9.722 35.257.015l104.551 104.541c7.998 7.998 20.966 7.997 28.963-.001s7.997-20.966-.001-28.963l-104.55-104.54c-25.733-25.733-67.464-25.733-93.198.001l-4.828 4.838c-25.729 25.714-25.729 67.439.015 93.183l104.54 104.54c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963z"/><path d="M854.775 510.196l-104.54-104.54c-9.747-9.747-9.747-25.531-.004-35.268l4.832-4.843c9.722-9.722 25.519-9.722 35.257.015l104.551 104.541c7.998 7.998 20.966 7.997 28.963-.001s7.997-20.966-.001-28.963l-104.55-104.54c-25.733-25.733-67.464-25.733-93.198.001l-4.828 4.838c-25.729 25.714-25.729 67.439.015 93.183l104.54 104.54c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963zM685.653 754.755l-93-93-28.963 28.963 93 93z"/><path d="M818.516 393.754l119.562 119.562 28.963-28.963-119.562-119.562z"/><path d="M931.165 506.23c32.758 32.579 51.49 76.693 51.49 123.821 0 96.445-78.178 174.623-174.623 174.623-46.962 0-90.924-18.593-123.472-51.141l-28.963 28.963c40.154 40.154 94.499 63.138 152.435 63.138 119.066 0 215.583-96.516 215.583-215.583 0-58.143-23.155-112.673-63.567-152.864l-28.883 29.042z"/></svg>
              </div>
              <h3 class="text-base font-semibold leading-6 text-white" id="modal-title">{{ title }}</h3>
            </div>
            
            <div class="flex flex-col w-full mt-3 text-center sm:mt-0 px-6 pb-4">
              <div class="mt-2">
                <div class="w-full max-w-md px-2 font-bold">
                  <div class="flex justify-between text-danger border-b">
                    <p>Contabilizei</p>
                    <p>{{ values.contabilizeiMonthlyFee }}</p>
                  </div>

                  <div class="flex justify-between text-danger border-b">
                    <p>INSS</p>
                    <p>{{ values.inss }}</p>
                  </div>

                  <div class="flex justify-between text-danger border-b">
                    <p>IRRF</p>
                    <p>{{ values.irrf }}</p>
                  </div>

                  <div class="flex justify-between text-danger border-b">
                    <p>DAS</p>
                    <p>{{ values.das }}</p>
                  </div>

                  <div class="flex justify-between text-success border-b">
                    <p>Pro-Lábore</p>
                    <p>{{ values.proLabore }}</p>
                  </div>

                  <div class="flex justify-between text-success border-b">
                    <p>DLA</p>
                    <p>{{ values.dla }}</p>
                  </div>

                  <br>

                  <div class="flex justify-between text-danger border-b">
                    <p>Total de Imposto</p>
                    <p>{{ values.taxesTotal }}</p>
                  </div>

                  <div class="flex justify-between text-success border-b">
                    <p>Lucro Total</p>
                    <p>{{ values.profit }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button @click="closeModal" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Fechar</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Modal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true,
    },
    values: {
      type: Object,
      required: true
    }
  },
  emits: ['closeModal'],
  setup (props, context) {

    function closeModal() {
      context.emit('closeModal')
    }

    return {
      closeModal
    }
  }

})
</script>