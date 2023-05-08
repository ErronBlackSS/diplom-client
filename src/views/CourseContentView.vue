<template>
  <div class="flex flex-row">
    <AsideMenu>
      <AsideMenuItem :to="`${prefix}/overview`">Содержание</AsideMenuItem>
      <AsideMenuItem :to="`${prefix}/edit`">Редактировать</AsideMenuItem>
      <AsideMenuItem :to="`${prefix}/overview`">Ученики</AsideMenuItem>
      <AsideMenuItem :to="`${prefix}/overview`">Настройки</AsideMenuItem>
    </AsideMenu>
    <div class="grow px-[60px] pt-[30px]">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsideMenu from '@/components/AsideMenu/AsideMenu.vue'
import AsideMenuItem from '@/components/AsideMenu/AsideMenuItem.vue'
import { mapStores } from 'pinia'
import { useCourseContentStore } from '@/modules/courseContent/store'

export default defineComponent({
  components: { AsideMenu, AsideMenuItem },
  computed: {
    ...mapStores(useCourseContentStore),
    courseId() {
      return Number(this.$route.params.courseId)
    },
    prefix() {
      return `/course/${this.courseId}`
    }
  },
  async mounted() {
    if (!this.courseId) return
    await this.loadCourseContent(this.courseId)
  },
  methods: {
    async loadCourseContent(courseId: number) {
      await this.courseContentStore.getCourseContent(courseId)
    }
  }
})
</script>

<style scoped></style>
