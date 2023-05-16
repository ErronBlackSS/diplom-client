<template>
  <div class="flex flex-col items-center justify-center h-full w-full">
    <LottieAnimation class="!w-[350px] !h-[379px]" :animation-data="mainLoaderAnimationJSON" loop />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LottieAnimation } from 'lottie-web-vue'
import mainLoader from '@/assets/animations/mainLoader.json'

export default defineComponent({
  components: { LottieAnimation },
  computed: {
    mainLoaderAnimationJSON() {
      return mainLoader
    }
  }
})
</script>

<style scoped></style>
