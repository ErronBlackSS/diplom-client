<template>
  <div class="flex flex-col justify-center items-center gap-[15px]">
    <slot />
    <slot name="footer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped></style>
