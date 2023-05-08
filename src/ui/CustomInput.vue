<template>
  <input
    v-model="inputValue"
    @input="$emit('input')"
    :placeholder="placeholder"
    class="h-[42px] overflow-hidden flex gap-[12px] items-center px-[14px] box-border border border-[#212022]/[.12] outline-none rounded-[6px] justify-between"
    :class="className"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['change', 'update:modelValue', 'input'],
  computed: {
    inputValue: {
      get() {
        return this.modelValue
      },
      set(value: string) {
        this.$emit('update:modelValue', value)
      }
    }
  }
})
</script>

<style scoped></style>
