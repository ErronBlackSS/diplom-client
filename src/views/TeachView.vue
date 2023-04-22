<template>
  <div class="flex flex-row">
    <AsideMenu>
      <AsideMenuItem to="courses">Мои курсы</AsideMenuItem>
      <AsideMenuItem to="classes">Классы</AsideMenuItem>
      <AsideMenuItem to="students">Мои ученики</AsideMenuItem>
    </AsideMenu>
    <div class="grow px-[30px] pt-[30px]">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsideMenu from '@/components/AsideMenu/AsideMenu.vue'
import AsideMenuItem from '@/components/AsideMenu/AsideMenuItem.vue'

export default defineComponent({
  components: { AsideMenu, AsideMenuItem }
})
</script>

<style scoped></style>
