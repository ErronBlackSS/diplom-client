<template>
  <button
    class="px-[20px] py-[15px] outline-none border border-[#F1F1F1] rounded-[6px]"
    :class="{ className, 'cursor-not-allowed': disabled }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    hover: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    hoverClass() {
      return `hover:${this.hover}`
    }
  }
})
</script>

<style scoped></style>
