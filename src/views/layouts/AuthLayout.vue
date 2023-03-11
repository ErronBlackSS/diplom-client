<template>
  <section class="flex h-screen justify-center items-center auth-bg">
    <div class="flex">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
.auth-bg {
  background: linear-gradient(to right, #fff 50%, #c3cfe2);
}
</style>
