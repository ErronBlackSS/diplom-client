<template>
  <div
    class="flex flex-col justify-center items-center w-[600px] border-[4px] border-[#F1F1F1] py-[10px] px-[15px]"
  >
    <div>
      <span class="text-[36px] text-center leading-[56px] text-[#000000]">{{ title }}</span>
    </div>
    <div class="flex flex-row items-center gap-[10px]">
      <div class="flex-1">
        <slot name="left" />
      </div>
      <DeviderLine />
      <div class="flex-1">
        <slot name="right" />
      </div>
    </div>
    <div className="text-center text-[16px] leading-[20px]">
      <slot name="bottom" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DeviderLine from '@/ui/DeviderLine.vue'

export default defineComponent({
  components: { DeviderLine },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped></style>
