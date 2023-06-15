<template>
  <ViewWrapper class="flex flex-col gap-[20px]">
    <div class="flex flex-col justify-center gap-[15px]">
      <img @click="changeCourseImage" class="cursor-pointer w-[200px] h-[200px]" :src="image" />
      <div class="flex flex-col gap-[5px]">
        <label for="course-name">Название курса <span class="text-red-500">*</span></label>
        <CustomInput id="course-name" @input="renameCourse" v-model="name" />
      </div>
      <div class="flex flex-col gap-[5px]">
        <label for="course-name">Описание курса <span class="text-red-500">*</span></label>
        <ContentEditor v-model="promo" @save="saveCoursePromo" />
      </div>
    </div>
    <input type="file" class="hidden" accept="image/*" ref="imageInput" @change="saveCourseImage" />
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
import { errorNotify, saveNotify } from '@/helpers/notifications'

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
    },
    image() {
      if (this.currentCourse.imagePath) {
        return `${this.currentCourse.imagePath}`
      }
      return 'xui'
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
    }, 1500),
    changeCourseImage() {
      const input = this.$refs.imageInput as HTMLInputElement
      input.click()
    },
    async saveCourseImage(e: Event) {
      const target = e.target as HTMLInputElement
      if (target.files) {
        if (
          !target.files[0].type.includes('image/jpeg') &&
          !target.files[0].type.includes('image/png')
        ) {
          errorNotify('Не удалось изменить картинку курса. Неверный формат файла')
          return
        }
        const formData = new FormData()
        formData.append('file', target.files[0])
        await this.coursesStore.changeCourseImage(this.courseId, formData)
      }
    }
  }
})
</script>

<style scoped></style>
