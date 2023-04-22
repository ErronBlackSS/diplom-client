<template>
  <div class="flex flex-row gap-[30px]">
    <AsideMenu>
      <div>Мои курсы</div>
      <div>Классы</div>
      <div>Викторины</div>
    </AsideMenu>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsideMenu from '@/components/AsideMenu/AsideMenu.vue'

export default defineComponent({
  components: { AsideMenu }
})
</script>

<style scoped></style>
