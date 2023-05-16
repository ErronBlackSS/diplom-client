<template>
  <aside
    class="w-full h-[50px] md:h-screen scroll-style flex flex-row md:flex-col gap-[20px] px-[22px] py-[24px] border-t"
    :style="{
      width: width + 'px',
      backgroundColor: backgroundColor
    }"
  >
    <div class="flex flex-row md:flex-col justify-center gap-[15px]">
      <slot />
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    width: {
      type: Number,
      default: 300
    },
    backgroundColor: {
      type: String,
      default: '#F5F5F5'
    }
  }
})
</script>

<style scoped></style>
