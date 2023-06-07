<template>
  <ViewWrapper class="flex flex-col gap-[20px]">
    <div class="flex flex-col justify-center gap-[15px]">
      <div class="flex flex-col gap-[5px]">
        <label for="course-name">Название курса <span class="text-red-500">*</span></label>
        <CustomInput
          id="course-name"
          @input="renameCourse"
          v-model="name"
          class="bg-[#f4f5f7]/50 rounded-[6px] pr-[10px] focus:ring-0 border border-black/12 focus:border-[#007BE5] px-[14px] py-[11px] text-[14px] leading-[16px] text-[#4c4c4d] focus:outline-none"
        />
      </div>
      <div class="flex flex-col gap-[5px]">
        <label for="course-name">Описание курса <span class="text-red-500">*</span></label>
        <ContentEditor v-model="promo" @save="saveCoursePromo" />
      </div>
    </div>
  </ViewWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewWrapper from '@/components/ViewWrapper.vue'
import { mapStores } from 'pinia'
import { useCoursesStore } from '@/modules/courses/store'
import { useCourseContentStore } from '../store'
import CustomInput from '@/ui/CustomInput.vue'
import ContentEditor from '@/components/ContentEditor/ContentEditor.vue'
import { debounce } from '@/helpers/functions'
import { saveNotify } from '@/helpers/notifications'

export default defineComponent({
  components: { ViewWrapper, CustomInput, ContentEditor },
  data: () => ({
    name: '',
    promo: ''
  }),
  computed: {
    ...mapStores(useCoursesStore, useCourseContentStore),
    courseId() {
      return Number(this.$route.params.courseId)
    },
    currentCourse() {
      return this.courseContentStore.course
    },
    courseName() {
      return this.currentCourse.name
    },
    coursePromo() {
      return this.currentCourse.promo || ''
    }
  },
  mounted() {
    this.name = this.courseName
    this.promo = this.coursePromo
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    renameCourse: debounce(function (this: any) {
      if (this.name) {
        this.coursesStore.renameCourse(this.courseId, this.name)
        saveNotify('Название курса сохранено')
      }
    }, 1500),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    saveCoursePromo: debounce(function (this: any) {
      this.coursesStore.changePromoText(this.courseId, this.promo)
      saveNotify('Описание курса сохранено')
    }, 1500)
  }
})
</script>

<style scoped></style>
