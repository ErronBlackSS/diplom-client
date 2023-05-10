<template>
  <draggable
    :list="orderedLessons"
    :fallback-tolerance="1"
    :force-fallback="true"
    :animation="180"
    :scroll-sensitivity="100"
    item-key="id"
    @update="onChangeLessonOrder"
  >
    <template #item="{ element, index }">
      <div class="border p-[15px]">{{ `${moduleOrder}.${index + 1}` }} {{ element.name }}</div>
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
  computed: {
    orderedLessons() {
      console.log(this.lessons, 'recompute')
      const orderedLessons = this.lessons
      return orderedLessons.sort((a, b) => a.order - b.order)
    }
  },
  methods: {
    onChangeLessonOrder(lesson: LessonWithIndexes) {
      const newLessonIndex = Number(lesson.newIndex)
      const oldLessonIndex = Number(lesson.oldIndex)

      const id = this.orderedLessons[oldLessonIndex].id

      let newOrder
      if (newLessonIndex === 0) {
        newOrder = this.orderedLessons[newLessonIndex].order - 0.5
      } else if (newLessonIndex === this.orderedLessons.length - 1) {
        newOrder = this.orderedLessons[newLessonIndex].order + 0.5
      } else if (oldLessonIndex > newLessonIndex) {
        newOrder =
          (this.orderedLessons[newLessonIndex].order +
            this.orderedLessons[newLessonIndex - 1].order) /
          2
      } else {
        newOrder =
          (this.orderedLessons[newLessonIndex].order +
            this.orderedLessons[newLessonIndex + 1].order) /
          2
      }
      this.$emit('changeLessonOrder', this.moduleId, id, newOrder)
    }
  }
})
</script>

<style scoped></style>
