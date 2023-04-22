<template>
  <aside
    class="w-full md:w-[300px] h-[50px] md:h-screen bg-[#F5F5F5] scroll-style flex flex-row md:flex-col gap-[20px] px-[22px] py-[24px]"
  >
    <div class="flex flex-row md:flex-col justify-center gap-[15px]">
      <slot />
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped></style>
