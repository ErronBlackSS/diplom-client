<template>
  <div class="flex flex-col gap-[40px]">
    <ViewTitle title="Редактирование курса" />
    <CourseContentEmpty v-if="emptyModules">
      <p>В курсе пока нет ни одного модуля</p>
      <template #footer>
        <UIButton @click="createModule"> Создать модуль </UIButton>
      </template>
    </CourseContentEmpty>
    <div v-else class="grow">
      <div v-for="_module in modules" :key="_module.id">
        <ModuleCard :name="_module.name" :order="_module.order" />
      </div>
      <UIButton @click="createModule"> Новый модуль </UIButton>
    </div>
  </div>
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

export default defineComponent({
  components: { ViewTitle, UIButton, CourseContentEmpty, ModuleCard },
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
    }
  }
})
</script>

<style scoped></style>
