<template>
  <draggable
    :list="lessons"
    :fallback-tolerance="1"
    :force-fallback="true"
    :animation="180"
    :scroll-sensitivity="100"
    item-key="id"
    @update="onChangeLessonOrder"
  >
    <template #item="{ element: item }">
      <div class="border p-[15px]">
        {{ item.name }}
      </div>
    </template>
  </draggable>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import draggable from 'vuedraggable'
import { Lesson } from '../../types/lessons'

export default defineComponent({
  components: { draggable },
  props: {
    lessons: {
      type: Array as PropType<Lesson[]>,
      required: true
    }
  },
  methods: {
    onChangeLessonOrder() {
      return
    }
  }
})
</script>

<style scoped></style>
