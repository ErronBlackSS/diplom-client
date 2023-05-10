<template>
  <div class="flex flex-col gap-[15px] border p-[30px] relative">
    <div class="flex flex-row">
      <p class="text-[24px] mr-[20px]">{{ order }}</p>
      <CustomInput v-model="inputName" @input="changeModuleName" :initial-value="name" />
    </div>
    <CustomInput placeholder="Описание" />
    <div class="border w-full p-[30px]">
      <ModuleLessonsDragList
        :module-id="id"
        :module-order="order"
        @change-lesson-order="changeLessonOrder"
        :lessons="lessons"
      />
      <div class="flex flex-row items-center gap-[20px]">
        <CustomInput :class-name="'w-[80%]'" v-model="lessonName" placeholder="Название урока" />
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
import { saveNotify } from '@/helpers/notifications'
import { Lesson } from '../../types/lessons'
import ModuleLessonsDragList from './ModuleLessonsDragList.vue'

export default defineComponent({
  components: { CustomInput, UIButton, ModuleLessonsDragList },
  data: () => ({
    inputName: '',
    inputDescription: '',
    lessonName: ''
  }),
  props: {
    id: {
      type: Number,
      required: true
    },
    order: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    lessons: {
      type: Array as PropType<Lesson[]>,
      required: true
    }
  },
  emits: ['createLesson', 'changeLessonOrder'],
  mounted() {
    this.inputName = this.name
  },
  methods: {
    changeModuleName: debounce(() => {
      saveNotify('Название модуля сохранено')
    }, 3000),
    createLesson() {
      this.$emit('createLesson', this.id, this.lessonName, 0)
    },
    changeLessonOrder(moduleId: number, lessonId: number, newOrder: number) {
      this.$emit('changeLessonOrder', moduleId, lessonId, newOrder)
    }
  }
})
</script>

<style scoped></style>
