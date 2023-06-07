<template>
  <div class="flex flex-row">
    <AsideMenu>
      <AsideMenuItem :to="`${prefix}/overview`">Содержание</AsideMenuItem>
      <AsideMenuItem :to="`${prefix}/edit`">Редактировать</AsideMenuItem>
      <AsideMenuItem :to="`${prefix}/students`">Ученики</AsideMenuItem>
      <AsideMenuItem :to="`${prefix}/publication`">Публикация</AsideMenuItem>
      <AsideMenuItem :to="`${prefix}/settings`">Настройки</AsideMenuItem>
    </AsideMenu>
    <div class="grow px-[60px] max-w-full">
      <MainLoader v-if="isLoading" />
      <router-view v-else></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsideMenu from '@/components/AsideMenu/AsideMenu.vue'
import AsideMenuItem from '@/components/AsideMenu/AsideMenuItem.vue'
import { mapStores } from 'pinia'
import { useCourseContentStore } from '@/modules/courseContent/store'
import MainLoader from '@/components/MainLoader.vue'

export default defineComponent({
  data: () => ({
    isLoading: true
  }),
  components: { AsideMenu, AsideMenuItem, MainLoader },
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
      try {
        await this.courseContentStore.getCourseContent(courseId)
        await this.courseContentStore.getCheckList(courseId)
      } finally {
        this.isLoading = false
      }
    }
  }
})
</script>

<style scoped></style>
