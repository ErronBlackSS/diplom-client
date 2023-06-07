<template>
  <div class="border border-main-gray p-[10px]">
    <p>{{ course.name }}</p>
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
  }
})
</script>

<style scoped></style>
