<template>
  <ViewWrapper class="flex flex-col gap-[20px]">
    <div class="text-[18px] text-red-500" v-if="!checkListDone">
      Для публикации курса необходимо поправить ошибки
    </div>
    <div class="text-[18px] text-green-500" v-else>Курс готов к публикации!</div>
    <CourseCheckList :check-list="checkList" :done="checkListDone" />
    <div class="text-[18px] text-green-500" v-if="publicationSuccess">
      Курс успешно опубликован!
    </div>
    <UIButton @click="publishCourse" :disabled="!checkListDone">Опубликовать</UIButton>
  </ViewWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewWrapper from '@/components/ViewWrapper.vue'
import CourseCheckList from './checklist/CourseCheckList.vue'
import { mapStores } from 'pinia'
import { useCourseContentStore } from '../store'
import UIButton from '@/ui/UIButton.vue'
import { useCoursesStore } from '@/modules/courses/store'

export default defineComponent({
  components: { ViewWrapper, CourseCheckList, UIButton },
  data: () => ({
    publicationSuccess: false
  }),
  computed: {
    ...mapStores(useCourseContentStore, useCoursesStore),
    checkList() {
      return this.courseContentStore.checkList
    },
    checkListDone() {
      return this.courseContentStore.checkListDone
    },
    courseId() {
      return Number(this.$route.params.courseId)
    }
  },
  methods: {
    async publishCourse() {
      try {
        await this.coursesStore.publishCourse(this.courseId)
      } finally {
        this.publicationSuccess = true
      }
    }
  }
})
</script>

<style scoped></style>
