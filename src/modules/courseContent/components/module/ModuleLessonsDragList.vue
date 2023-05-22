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
        class="border p-[15px] flex flex-row justify-between items-center cursor-pointer group hover:border-black"
      >
        <div class="grow">{{ `${moduleOrder}.${index + 1}` }} {{ element.name }}</div>
        <div class="flex flex-row justify-center items-center gap-[15px]">
          <div
            class="bg-main-grey rounded-[6px] px-[10px] py-[7px] border hover:border-main-blue"
            @click="gotoLesson(element.id)"
          >
            Перейти к уроку
          </div>
          <div @click="deleteLesson(element.id)" class="hover:bg-main-grey rounded-[6px] p-[5px]">
            <DeleteIcon />
          </div>
        </div>
      </div>
    </template>
  </draggable>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import draggable from 'vuedraggable'
import { Lesson } from '../../types/lessons'
import DeleteIcon from '@/components/Icons/DeleteIcon.vue'

interface LessonWithIndexes extends Lesson {
  newIndex: number
  oldIndex: number
}

export default defineComponent({
  components: { draggable, DeleteIcon },
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
  emits: ['changeLessonOrder', 'deleteLesson'],
  computed: {
    courseId(): number {
      return Number(this.$route.params.courseId)
    }
  },
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
        path: `/edit-lesson/${this.courseId}/${id}`
      })
    },
    deleteLesson(lessonId: number) {
      this.$emit('deleteLesson', this.moduleId, lessonId)
    }
  }
})
</script>

<style scoped></style>
