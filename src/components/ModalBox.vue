<template>
  <teleport to="body">
    <form
      class="z-50 flex items-center flex-col justify-center overflow-hidden fixed inset-0 border bg-[#000] bg-opacity-25"
      @submit.prevent="onSave"
    >
      <div class="rounded-xl border-[2px] border-[#212022] p-[20px] bg-white z-50">
        <div class="flex gap-[8px]">
          <div
            class="grow self-center text-[#111012] font-[500] text-[24px] leading-[19px] break-words"
          >
            {{ title }}
          </div>
          <div class="flex-none self-start cursor-pointer" @click="onClose">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.1749 10.5L14.7583 6.92499C14.9152 6.76807 15.0034 6.55524 15.0034 6.33333C15.0034 6.11141 14.9152 5.89858 14.7583 5.74166C14.6014 5.58474 14.3885 5.49658 14.1666 5.49658C13.9447 5.49658 13.7319 5.58474 13.575 5.74166L9.99995 9.32499L6.42495 5.74166C6.26803 5.58474 6.0552 5.49658 5.83328 5.49658C5.61136 5.49658 5.39854 5.58474 5.24162 5.74166C5.0847 5.89858 4.99654 6.11141 4.99654 6.33333C4.99654 6.55524 5.0847 6.76807 5.24162 6.92499L8.82495 10.5L5.24162 14.075C5.16351 14.1525 5.10151 14.2446 5.05921 14.3462C5.0169 14.4477 4.99512 14.5566 4.99512 14.6667C4.99512 14.7767 5.0169 14.8856 5.05921 14.9871C5.10151 15.0887 5.16351 15.1809 5.24162 15.2583C5.31908 15.3364 5.41125 15.3984 5.5128 15.4407C5.61435 15.483 5.72327 15.5048 5.83328 15.5048C5.94329 15.5048 6.05221 15.483 6.15376 15.4407C6.25531 15.3984 6.34748 15.3364 6.42495 15.2583L9.99995 11.675L13.575 15.2583C13.6524 15.3364 13.7446 15.3984 13.8461 15.4407C13.9477 15.483 14.0566 15.5048 14.1666 15.5048C14.2766 15.5048 14.3855 15.483 14.4871 15.4407C14.5886 15.3984 14.6808 15.3364 14.7583 15.2583C14.8364 15.1809 14.8984 15.0887 14.9407 14.9871C14.983 14.8856 15.0048 14.7767 15.0048 14.6667C15.0048 14.5566 14.983 14.4477 14.9407 14.3462C14.8984 14.2446 14.8364 14.1525 14.7583 14.075L11.1749 10.5Z"
                fill="#7e7e80"
              />
            </svg>
          </div>
        </div>
        <hr class="w-full mt-[15px]" />
        <div class="p-[20px]">
          <div class="max-w-[500px]">
            <slot />
          </div>
        </div>
        <div v-if="ok || cancel" class="flex gap-[4px] justify-center">
          <UIButton
            v-if="ok"
            type="submit"
            id="modalBoxSubmitButton"
            class="min-w-[169px] w-full px-[20px] py-[12px] rounded-md bg-[#111012] text-white text-[13px] leading-[15px] font-medium disabled:opacity-70 disabled:cursor-default hover:opacity-[0.8] transition-colors duration-[150ms] ease-in"
            :class="[disabled ? 'cursor-wait' : 'cursor-pointer']"
            :disabled="disabled"
          >
            {{ ok }}
          </UIButton>
          <UIButton class="min-w-[169px]" v-if="cancel" @click="onClose">
            {{ cancel }}
          </UIButton>
        </div>
      </div>
    </form>
  </teleport>
</template>

<script lang="ts">
import UIButton from '@/ui/UIButton.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { UIButton },
  props: {
    title: {
      type: String,
      required: true
    },
    ok: {
      type: String,
      default: ''
    },
    cancel: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close', 'save'],
  methods: {
    onClose() {
      this.$emit('close')
    },
    onSave() {
      this.$emit('save')
    }
  }
})
</script>

<style scoped></style>
