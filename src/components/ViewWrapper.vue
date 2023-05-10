<template>
  <div class="h-screen overflow-y-scroll overflow-auto [&::-webkit-scrollbar]:hidden">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped></style>
