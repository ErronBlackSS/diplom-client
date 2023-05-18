<template>
  <MainLoader class="!h-screen" v-if="isLoading" />
  <div v-else class="flex flex-row">
    <AsideMenu :width="230">
      <div class="text-[18px] text-[#1d2f5d] font-[500]">{{ moduleName }}</div>
      <div class="ml-[15px] flex flex-col gap-[10px]">
        <AsideMenuItem
          class="w-full"
          v-for="(lesson, index) in lessons"
          :key="lesson.id"
          :to="`${prefix}/${lesson.id}`"
        >
          {{ index + 1 }}. {{ lesson.name }}
        </AsideMenuItem>
      </div>
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
import { mapStores } from 'pinia'
import { useEditLessonStore } from '@/modules/editLesson/store'
import MainLoader from '@/components/MainLoader.vue'

export default defineComponent({
  data: () => ({
    isLoading: true
  }),
  components: { AsideMenu, AsideMenuItem, MainLoader },
  computed: {
    ...mapStores(useEditLessonStore),
    moduleId() {
      return Number(this.$route.params.moduleId)
    },
    lessonId() {
      return Number(this.$route.params.lessonId)
    },
    moduleName() {
      return this.editLessonStore.moduleName
    },
    lessons() {
      return this.editLessonStore.lessons
    },
    prefix() {
      return `/edit-lesson/${this.moduleId}`
    }
  },
  async mounted() {
    if (!this.moduleId) return
    await this.loadLessonsWithSteps(this.moduleId)
  },
  methods: {
    async loadLessonsWithSteps(moduleId: number) {
      try {
        await this.editLessonStore.getEditLessonContent(moduleId)
      } finally {
        this.isLoading = false
      }
    }
  }
})
</script>

<style scoped></style>
