<template>
  <ViewWrapper class="mx-auto w-[1100px]">
    <MainLoader v-if="isLoading" />
    <div class="flex flex-col">
      <p class="text-[48px] text-center text-main-blue">{{ coursePromo.name }}</p>
      <ContentViewer :content="coursePromo.promo || ''" />
      <UIButton :disabled="!user" @click="bookOnCourse">Записаться</UIButton>
    </div>
  </ViewWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import ViewWrapper from '@/components/ViewWrapper.vue'
import MainLoader from '@/components/MainLoader.vue'
import { useCatalogStore } from '@/modules/catalog/store'
import ContentViewer from '@/components/ContentEditor/ContentViewer.vue'
import UIButton from '@/ui/UIButton.vue'
import { useUserStore } from '@/modules/user/store'

export default defineComponent({
  components: { ViewWrapper, MainLoader, ContentViewer, UIButton },
  data: () => ({
    isLoading: true
  }),
  computed: {
    ...mapStores(useCatalogStore, useUserStore),
    courseId() {
      return Number(this.$route.params.courseId)
    },
    coursePromo() {
      return this.catalogStore.coursePromo
    },
    user() {
      return this.userStore.user
    }
  },
  async mounted() {
    await this.loadCoursePromo(this.courseId)
  },
  methods: {
    async loadCoursePromo(courseId: number) {
      try {
        await this.catalogStore.getCoursePromo(courseId)
      } finally {
        this.isLoading = false
      }
    },
    async bookOnCourse() {
      try {
        const courseId = this.courseId
        if (!courseId) return

        await this.catalogStore.bookOnCourse(courseId)
      } finally {
        console.log('kek')
      }
    }
  }
})
</script>

<style scoped></style>
