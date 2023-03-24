<template>
  <form class="flex flex-col gap-[15px] w-full" @submit.prevent="submit">
    <div
      v-if="errorMessage"
      class="py-[22px] font-[500] flex items-center justify-center px-[20px] text-[#E53E3E] rounded-[6px] bg-[#FCE3E3] text-[15px] leading-[150%]"
    >
      {{ errorMessage }}
    </div>
    <div class="flex flex-col gap-[10px]">
      <slot />
    </div>
    <button class="px-[10px] py-[10px] border" type="submit">
      {{ submitText }}
    </button>
    <div class="text-center empty:hidden">
      <slot name="link"></slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    errorMessage: {
      type: String,
      default: ''
    },
    submitText: {
      type: String,
      default: ''
    }
  },
  emits: ['submit'],
  methods: {
    submit() {
      console.log('jopa')
      this.$emit('submit')
    }
  }
})
</script>
