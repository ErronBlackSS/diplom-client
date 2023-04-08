<template>
  <section class="flex flex-col h-screen justify-center overflow-y-auto">
    <MainHeader />
    <main class="flex-1 h-fit">
      <slot />
    </main>
    <MainFooter />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainFooter from '@/components/MainFooter.vue'
import MainHeader from '@/components/MainHeader.vue'

export default defineComponent({
  components: { MainFooter, MainHeader }
})
</script>
