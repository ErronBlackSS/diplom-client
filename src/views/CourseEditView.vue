<template>
  <div class="flex flex-row">
    <AsideMenu>
      <AsideMenuItem :to="`${prefix}/overview`">Содержание</AsideMenuItem>
      <AsideMenuItem :to="`${prefix}/overview`">Редактировать</AsideMenuItem>
      <AsideMenuItem :to="`${prefix}/overview`">Ученики</AsideMenuItem>
      <AsideMenuItem :to="`${prefix}/overview`">Настройки</AsideMenuItem>
    </AsideMenu>
    <div class="grow px-[60px] pt-[30px] max-w-[800px]">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsideMenu from '@/components/AsideMenu/AsideMenu.vue'
import AsideMenuItem from '@/components/AsideMenu/AsideMenuItem.vue'

export default defineComponent({
  components: { AsideMenu, AsideMenuItem },
  computed: {
    courseId() {
      return this.$route.params.courseId
    },
    prefix() {
      return `course/${this.courseId}`
    }
  }
})
</script>

<style scoped></style>
