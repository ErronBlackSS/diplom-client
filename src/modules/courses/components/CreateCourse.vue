<template>
  <div class="flex flex-col gap-[20px]">
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
      <UIButton @click="createCourse"> Cоздать курс </UIButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UIButton from '@/ui/UIButton.vue'
import { mapStores } from 'pinia'
import { useCoursesStore } from '@/modules/courses/store'

export default defineComponent({
  data: () => ({
    courseName: '',
    errorText: ''
  }),
  components: { UIButton },
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
      await this.coursesStore.createCourse(this.courseName)
    }
  }
})
</script>

<style scoped></style>
