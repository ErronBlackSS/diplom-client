<template>
  <MainLoader class="!h-screen" v-if="isLoading" />
  <div v-else class="flex flex-row">
    <AsideMenu :width="230">
      <div class="text-[18px] font-[500]">{{ courseName }}</div>
      <div class="flex flex-col gap-[15px]">
        <div v-for="_module in modules" :key="_module.id" class="flex flex-col gap-[15px]">
          <div class="text-[16px] text-main-blue font-[500]">{{ _module.name }}</div>
          <div class="ml-[15px] flex flex-col gap-[10px]">
            <AsideMenuItem
              class="w-full"
              v-for="(lesson, index) in _module.lessons"
              :key="lesson.id"
              :to="`${prefix}/${lesson.id}`"
            >
              {{ index + 1 }}. {{ lesson.name }}
            </AsideMenuItem>
          </div>
        </div>
      </div>
    </AsideMenu>
    <div class="grow px-[60px] w-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsideMenu from '@/components/AsideMenu/AsideMenu.vue'
import AsideMenuItem from '@/components/AsideMenu/AsideMenuItem.vue'
import { mapStores } from 'pinia'
import { useLessonStore } from '@/modules/lesson/store'
import MainLoader from '@/components/MainLoader.vue'

export default defineComponent({
  data: () => ({
    isLoading: true
  }),
  components: { AsideMenu, AsideMenuItem, MainLoader },
  computed: {
    ...mapStores(useLessonStore),
    courseId() {
      return Number(this.$route.params.courseId)
    },
    lessonId() {
      return Number(this.$route.params.lessonId)
    },
    courseName() {
      return this.lessonStore.courseName
    },
    modules() {
      return this.lessonStore.modules
    },
    prefix() {
      return `/edit-lesson/${this.courseId}`
    }
  },
  async mounted() {
    if (!this.courseId) return
    await this.loadLessonsWithSteps(this.courseId)
  },
  methods: {
    async loadLessonsWithSteps(moduleId: number) {
      try {
        await this.lessonStore.getEditLessonContent(moduleId)
      } finally {
        this.isLoading = false
      }
    }
  }
})
</script>

<style scoped></style>
