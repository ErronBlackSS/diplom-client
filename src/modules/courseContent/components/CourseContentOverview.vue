<template>
  <ViewWrapper class="flex flex-col gap-[20px]">
    <ViewTitle title="Программа курса" />
    <UIButton class="w-fit" @click="gotoEdit"> Редактировать содержание </UIButton>
    <div v-for="(_module, index) in modules" :key="_module.id">
      <ModuleOverview :module="_module" :order="index + 1" />
    </div>
  </ViewWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewTitle from '@/components/ViewTitle.vue'
import UIButton from '@/ui/UIButton.vue'
import ViewWrapper from '@/components/ViewWrapper.vue'
import ModuleOverview from './module/ModuleOverview.vue'
import { mapStores } from 'pinia'
import { useCourseContentStore } from '../store'

export default defineComponent({
  components: { ViewTitle, UIButton, ViewWrapper, ModuleOverview },
  methods: {
    gotoEdit() {
      this.$router.push({ name: 'course-edit' })
    }
  },
  computed: {
    ...mapStores(useCourseContentStore),
    modules() {
      return this.courseContentStore.modules
    }
  }
})
</script>

<style scoped></style>
