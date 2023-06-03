<template>
  <div class="flex flex-row">
    <AsideMenu>
      <router-link to="/teach/courses/create">
        <div class="p-[10px] border rounded-[6px]">Создать курс</div>
      </router-link>
      <AsideMenuItem to="/teach/courses">Мои курсы</AsideMenuItem>
      <AsideMenuItem to="/teach/classes">Классы</AsideMenuItem>
      <AsideMenuItem to="/teach/students">Мои ученики</AsideMenuItem>
    </AsideMenu>
    <div class="grow px-[60px]">
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
