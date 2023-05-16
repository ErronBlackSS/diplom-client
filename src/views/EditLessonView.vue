<template>
  <div class="flex flex-row">
    <AsideMenu>
      <AsideMenuItem :to="`overview`">Содержание</AsideMenuItem>
    </AsideMenu>
    <div class="grow px-[60px]">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsideMenu from '@/components/AsideMenu/AsideMenu.vue'
import AsideMenuItem from '@/components/AsideMenu/AsideMenuItem.vue'
import { mapStores } from 'pinia'
import { useEditLessonStore } from '@/modules/editLesson/store'

export default defineComponent({
  components: { AsideMenu, AsideMenuItem },
  computed: {
    ...mapStores(useEditLessonStore),
    moduleId() {
      return Number(this.$route.params.moduleId)
    }
  },
  async mounted() {
    if (!this.moduleId) return
    await this.loadLessonsWithSteps(this.moduleId)
  },
  methods: {
    async loadLessonsWithSteps(moduleId: number) {
      await this.editLessonStore.getEditLessonContent(moduleId)
    }
  }
})
</script>

<style scoped></style>
