<template>
  <div
    class="flex flex-col justify-between border border-main-gray p-[15px] rounded-[6px] h-[210px] hover:shadow-md"
    @click="gotoPromo"
  >
    <div class="flex flex-row">
      <div class="flex flex-col flex-1">
        <p class="text-[20px]">{{ course.name }}</p>
        <p class="text-[14px]">Модулей - {{ course.modulesCount }}</p>
        <p class="text-[14px]">Уроков - {{ course.lessonsCount }}</p>
      </div>
      <div>
        <img class="cursor-pointer w-[120px] h-[120px]" :src="image" />
      </div>
    </div>
    <UIButton>Подробнее</UIButton>
  </div>
</template>

<script lang="ts">
import UIButton from '@/ui/UIButton.vue'
import { defineComponent, PropType } from 'vue'
import { CatalogCourse } from '../types'

export default defineComponent({
  components: { UIButton },
  data: () => ({}),
  props: {
    course: {
      type: Object as PropType<CatalogCourse>,
      required: true
    }
  },
  computed: {
    image() {
      if (this.course.imagePath) {
        return `${this.course.imagePath}`
      }
      return 'xui'
    }
  },
  methods: {
    gotoPromo() {
      this.$router.push(`catalog/${this.course.id}/promo`)
    }
  }
})
</script>

<style scoped></style>
