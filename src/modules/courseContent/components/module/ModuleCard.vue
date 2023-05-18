<template>
  <div class="flex flex-col gap-[15px] border p-[30px] text-blue relative">
    <div class="flex flex-row">
      <p class="text-[24px] mr-[20px]">{{ moduleIndex }}</p>
      <CustomInput
        v-model="inputName"
        @input="onChangeModuleName"
        :initial-value="name"
        placeholder="Название модуля"
      />
    </div>
    <CustomInput
      v-model="inputDescription"
      @input="onChangeModuleDescription"
      :initial-value="description"
      placeholder="Описание"
    />
    <div class="border w-full p-[30px]">
      <ModuleLessonsDragList
        :module-id="id"
        :module-order="moduleIndex"
        @change-lesson-order="changeLessonOrder"
        @delete-lesson="deleteLesson"
        :lessons="lessons"
      />
      <div class="flex flex-row items-center gap-[20px]">
        <CustomInput
          @enter="createLesson"
          :class-name="'w-[80%]'"
          v-model="lessonName"
          placeholder="Название урока"
        />
        <UIButton
          :class-name="'flex-none !w-[150px]'"
          :disabled="!lessonName"
          @click="createLesson"
        >
          Создать урок
        </UIButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import UIButton from '@/ui/UIButton.vue'
import { defineComponent, PropType } from 'vue'
import CustomInput from '@/ui/CustomInput.vue'
import { debounce } from '@/helpers/functions'
import ModuleLessonsDragList from './ModuleLessonsDragList.vue'
import { Module } from '../../types'
import { Lesson } from '../../types/lessons'

export default defineComponent({
  components: { CustomInput, UIButton, ModuleLessonsDragList },
  data: () => ({
    inputName: '',
    inputDescription: '',
    lessonName: ''
  }),
  props: {
    module: {
      type: Object as PropType<Module>,
      required: true
    },
    moduleIndex: {
      type: Number,
      required: true
    }
  },
  emits: [
    'createLesson',
    'changeLessonOrder',
    'changeModuleName',
    'changeModuleDescription',
    'deleteLesson'
  ],
  computed: {
    id(): number {
      return this.module.id
    },
    name(): string {
      return this.module.name
    },
    lessons(): Lesson[] {
      return this.module.lessons
    },
    description(): string {
      return this.module.description
    }
  },
  mounted() {
    this.inputName = this.name
    this.inputDescription = this.description
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChangeModuleName: debounce(function (this: any) {
      this.changeModuleName()
    }, 1000),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChangeModuleDescription: debounce(function (this: any) {
      this.changeModuleDescription()
    }, 1000),
    changeModuleName() {
      this.$emit('changeModuleName', this.id, this.inputName)
    },
    changeModuleDescription() {
      this.$emit('changeModuleDescription', this.id, this.inputDescription)
    },
    createLesson() {
      this.$emit('createLesson', this.id, this.lessonName, 0)
      this.lessonName = ''
    },
    changeLessonOrder(moduleId: number, lessonId: number, newOrder: number) {
      this.$emit('changeLessonOrder', moduleId, lessonId, newOrder)
    },
    deleteLesson(moduleId: number, lessonId: number) {
      this.$emit('deleteLesson', moduleId, lessonId)
    }
  }
})
</script>

<style scoped></style>
