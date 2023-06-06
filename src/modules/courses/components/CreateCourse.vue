<template>
  <ViewWrapper class="flex flex-col gap-[10px]">
    <p v-if="showCreateFirstCourse">У вас еще нет ни одного курса, создайте первый!</p>
    <div class="flex flex-col justify-center gap-[5px]">
      <label for="create-course">Название курса <span class="text-red-500">*</span></label>
      <input
        id="create-course"
        v-model="courseName"
        class="bg-[#f4f5f7]/50 rounded-[6px] pr-[10px] focus:ring-0 border border-black/12 focus:border-[#007BE5] px-[14px] py-[11px] text-[14px] leading-[16px] text-[#4c4c4d] focus:outline-none"
      />
      <span v-if="errorText" class="text-red-500 text-[12px]"> {{ errorText }}</span>
    </div>
    <div>
      <button
        class="px-[20px] py-[15px] outline-none border border-[#F1F1F1] rounded-[6px]"
        @click="createCourse"
      >
        Cоздать курс
      </button>
    </div>
  </ViewWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useCoursesStore } from '@/modules/courses/store'
import ViewWrapper from '@/components/ViewWrapper.vue'

export default defineComponent({
  components: { ViewWrapper },
  data: () => ({
    courseName: '',
    errorText: ''
  }),
  props: {
    showCreateFirstCourse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapStores(useCoursesStore)
  },
  methods: {
    async createCourse() {
      if (this.courseName.length < 3) {
        this.errorText = 'Название курса должно содержать минимум 3 символа'
        return
      }
      this.errorText = ''
      await this.coursesStore
        .createCourse(this.courseName)
        .finally(() => this.$router.push({ name: 'teach-courses' }))
    }
  }
})
</script>

<style scoped></style>
