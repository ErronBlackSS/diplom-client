<template>
  <input
    v-model="inputValue"
    @input="$emit('input')"
    @blur="$emit('blur')"
    @keyup.enter="$emit('enter')"
    :placeholder="placeholder"
    class="bg-[#f4f5f7]/50 rounded-[6px] pr-[10px] focus:ring-0 border border-black/12 focus:border-[#007BE5] px-[14px] py-[11px] text-[14px] leading-[16px] text-[#4c4c4d] focus:outline-none"
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
  emits: ['change', 'update:modelValue', 'input', 'blur', 'enter'],
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
