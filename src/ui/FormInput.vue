<template>
  <div class="flex flex-col w-full">
    <div class="font-[400] text-[13px] leading-[20px] mb-[5px]">
      {{ title }}
    </div>
    <input
      :type="inputType"
      maxlength="200"
      :name="inputName"
      :placeholder="placeholder"
      class="py-2 px-4 rounded-md border border-[#000] outline-none"
      v-model="inputValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  components: {},
  data: () => ({
    showPassword: false
  }),
  props: {
    title: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String as PropType<'name' | 'email' | 'password'>,
      default: 'name',
      validator(value: string) {
        return ['name', 'email', 'password'].includes(value)
      }
    },
    inputName: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  computed: {
    inputValue: {
      get() {
        return this.modelValue
      },
      set(value: string) {
        this.$emit('update:modelValue', value)
      }
    },
    inputType(): string {
      switch (this.type) {
        case 'email':
          return 'email'
        case 'password':
          return this.showPassword ? 'text' : 'password'
        case 'name':
          return 'text'
        default:
          return 'text'
      }
    }
  },
  methods: {}
})
</script>

<style scoped></style>
