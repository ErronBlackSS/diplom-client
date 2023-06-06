<template>
  <ViewWrapper class="flex flex-col gap-[20px]">
    <div class="text-[18px] text-red-500" v-if="!checkListDone">
      Для публикации курса необходимо поправить некоторые ошибки
    </div>
    <div class="text-[18px] text-green-500" v-else>Курс готов к публикации!</div>
    <CourseCheckList :check-list="checkList" />
  </ViewWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewWrapper from '@/components/ViewWrapper.vue'
import CourseCheckList from './checklist/CourseCheckList.vue'
import { mapStores } from 'pinia'
import { useCourseContentStore } from '../store'

export default defineComponent({
  components: { ViewWrapper, CourseCheckList },
  computed: {
    ...mapStores(useCourseContentStore),
    checkList() {
      return this.courseContentStore.checkList
    },
    checkListDone() {
      return this.courseContentStore.checkListDone
    }
  }
})
</script>

<style scoped></style>
