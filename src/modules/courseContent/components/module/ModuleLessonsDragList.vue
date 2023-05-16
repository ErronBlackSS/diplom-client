<template>
  <draggable
    :list="lessons"
    :fallback-tolerance="1"
    :force-fallback="true"
    :animation="180"
    :scroll-sensitivity="100"
    item-key="id"
    @update="onChangeLessonOrder"
  >
    <template #item="{ element, index }">
      <div
        class="border p-[15px] flex flex-row justify-between cursor-pointer group hover:border-black"
      >
        <div>{{ `${moduleOrder}.${index + 1}` }} {{ element.name }}</div>
        <div @click="gotoLesson(element.id)" class="hidden group-hover:block">Перейти к уроку</div>
      </div>
    </template>
  </draggable>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import draggable from 'vuedraggable'
import { Lesson } from '../../types/lessons'

interface LessonWithIndexes extends Lesson {
  newIndex: number
  oldIndex: number
}

export default defineComponent({
  components: { draggable },
  props: {
    lessons: {
      type: Array as PropType<Lesson[]>,
      required: true
    },
    moduleId: {
      type: Number,
      required: true
    },
    moduleOrder: {
      type: Number,
      required: true
    }
  },
  emits: ['changeLessonOrder'],
  methods: {
    onChangeLessonOrder(lesson: LessonWithIndexes) {
      const newLessonIndex = Number(lesson.newIndex)
      const oldLessonIndex = Number(lesson.oldIndex)

      const id = this.lessons[oldLessonIndex].id

      let newOrder
      if (newLessonIndex === 0) {
        newOrder = this.lessons[newLessonIndex].order - 0.5
      } else if (newLessonIndex === this.lessons.length - 1) {
        newOrder = this.lessons[newLessonIndex].order + 0.5
      } else if (oldLessonIndex > newLessonIndex) {
        newOrder = (this.lessons[newLessonIndex].order + this.lessons[newLessonIndex - 1].order) / 2
      } else {
        newOrder = (this.lessons[newLessonIndex].order + this.lessons[newLessonIndex + 1].order) / 2
      }
      this.$emit('changeLessonOrder', this.moduleId, id, newOrder)
    },
    gotoLesson(id: number) {
      this.$router.push({
        path: `/edit-lesson/${this.moduleId}/${id}`
      })
    }
  }
})
</script>

<style scoped></style>
