<template>
  <ViewWrapper>
    <ViewTitle class="mt-[30px]" title="Редактирование курса" />
    <CourseContentEmpty v-if="emptyModules">
      <p>В курсе пока нет ни одного модуля</p>
      <template #footer>
        <UIButton @click="createModule"> Создать модуль </UIButton>
      </template>
    </CourseContentEmpty>
    <div v-else class="grow mt-[40px]">
      <div v-for="(_module, index) in modules" :key="_module.id">
        <ModuleCard
          @create-lesson="createLesson"
          @change-lesson-order="changeLessonOrder"
          :module-index="index"
          :id="_module.id"
          :lessons="_module.lessons"
          :name="_module.name"
          :order="_module.order"
        />
      </div>
      <UIButton @click="createModule"> Новый модуль </UIButton>
    </div>
  </ViewWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewTitle from '@/components/ViewTitle.vue'
import UIButton from '@/ui/UIButton.vue'
import { mapStores } from 'pinia'
import { useCourseContentStore } from '../store/.'
import { Module } from '../types'
import CourseContentEmpty from './CourseContentEmpty.vue'
import ModuleCard from './module/ModuleCard.vue'
import ViewWrapper from '@/components/ViewWrapper.vue'

export default defineComponent({
  components: { ViewTitle, ViewWrapper, UIButton, CourseContentEmpty, ModuleCard },
  computed: {
    ...mapStores(useCourseContentStore),
    modules(): Module[] {
      return this.courseContentStore.modules
    },
    courseId(): number {
      return Number(this.$route.params.courseId)
    },
    emptyModules() {
      return !this.modules.length
    }
  },
  methods: {
    createModule() {
      this.courseContentStore.createModule(this.courseId, 'Новый модуль', this.modules.length)
    },
    createLesson(moduleId: number, name: string, order: number) {
      this.courseContentStore.createLesson(moduleId, name, order)
    },
    changeLessonOrder(moduleId: number, lessonId: number, newOrder: number) {
      this.courseContentStore.changeLessonOrder(moduleId, lessonId, newOrder)
    }
  }
})
</script>

<style scoped></style>
