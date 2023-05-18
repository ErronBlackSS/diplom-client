<template>
  <ViewWrapper>
    <ViewTitle class="mt-[30px]" title="Редактирование курса" />
    <CourseContentEmpty v-if="emptyModules">
      <p>В курсе пока нет ни одного модуля</p>
      <template #footer>
        <UIButton @click="createModule"> Создать модуль </UIButton>
      </template>
    </CourseContentEmpty>
    <div v-else class="grow my-[40px]">
      <ModuleCard
        v-for="(_module, index) in modules"
        :key="_module.id"
        @create-lesson="createLesson"
        @change-lesson-order="changeLessonOrder"
        @change-module-name="changeModuleName"
        @change-module-description="changeModuleDescription"
        :module-index="index + 1"
        :module="_module"
      />
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
import { saveNotify } from '@/helpers/notifications'
import { useEditLessonStore } from '@/modules/editLesson/store'

export default defineComponent({
  components: { ViewTitle, ViewWrapper, UIButton, CourseContentEmpty, ModuleCard },
  computed: {
    ...mapStores(useCourseContentStore, useEditLessonStore),
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
      this.courseContentStore.createModule(this.courseId, 'Новый модуль', this.modules.length + 1)
    },
    createLesson(moduleId: number, name: string, order: number) {
      this.courseContentStore.createLesson(moduleId, name, order)
    },
    changeLessonOrder(moduleId: number, lessonId: number, newOrder: number) {
      this.courseContentStore.changeLessonOrder(moduleId, lessonId, newOrder)
    },
    async changeModuleName(moduleId: number, newName: string) {
      await this.courseContentStore.changeModuleName(moduleId, newName)
      saveNotify('Название модуля сохранено!')
    },
    async changeModuleDescription(moduleId: number, newDescription: string) {
      await this.courseContentStore.changeModuleDescription(moduleId, newDescription)
      saveNotify('Описание модуля сохранено!')
    }
  }
})
</script>

<style scoped></style>
