<template>
  <IconTest v-if="stepType === 'TEST'" />
  <IconText v-else-if="stepType === 'TEXT'" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { StepType } from '@/modules/editLesson/types/lessons-with-steps'
import IconTest from '../Icons/IconTest.vue'
import IconText from '../Icons/IconText.vue'

export default defineComponent({
  components: { IconTest, IconText },
  props: {
    stepType: {
      type: String as PropType<StepType>,
      required: true
    }
  }
})
</script>

<style scoped></style>
