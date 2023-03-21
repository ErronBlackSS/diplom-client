<template>
  <div
    class="flex flex-col justify-center items-center w-[400px] border-[4px] border-[#F1F1F1] py-[10px] px-[15px]"
  >
    <div>
      <span class="text-[36px] text-center leading-[56px] text-[#000000]">{{ title }}</span>
    </div>
    <div class="flex flex-row items-center gap-[10px] w-full px-[10px]">
      <div class="flex-1">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped></style>
