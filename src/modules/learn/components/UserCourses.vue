<template>
  <MainLoader v-if="isLoading" />
  <ViewWrapper v-else class="flex flex-col gap-[20px]">
    <ViewTitle title="Мое обучение" />
    <div v-if="userCourses.length === 0">
      <p>Вы еще не записаны ни на один курс(</p>
      <a href="/" class="text-main-blue cursor-pointer font-[600]">Перейти в каталог</a>
    </div>
    <div v-else>
      <div class="flex flex-col w-[50vw] gap-[10px]">
        <div v-for="course in userCourses" :key="course.id">
          <UserCourseCard :course="course" />
        </div>
      </div>
    </div>
  </ViewWrapper>
</template>

<script lang="ts">
import MainLoader from '@/components/MainLoader.vue'
import ViewTitle from '@/components/ViewTitle.vue'
import ViewWrapper from '@/components/ViewWrapper.vue'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'
import { useLearnStore } from '../store'
import UserCourseCard from './UserCourseCard.vue'

export default defineComponent({
  components: {
    ViewTitle,
    MainLoader,
    ViewWrapper,
    UserCourseCard
  },
  data: () => ({
    isLoading: true
  }),
  computed: {
    ...mapStores(useLearnStore),
    userCourses() {
      return this.learnStore.userCourses
    }
  },
  async mounted() {
    try {
      await this.learnStore.getUserCourses()
    } finally {
      this.isLoading = false
    }
  }
})
</script>

<style scoped></style>
