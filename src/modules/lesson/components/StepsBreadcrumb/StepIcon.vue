<template>
  <IconTest v-if="stepType === StepType.TEST" />
  <IconText v-else-if="stepType === StepType.TEXT" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { StepType } from '@/modules/lesson/types/steps'
import IconTest from '../Icons/IconTest.vue'
import IconText from '../Icons/IconText.vue'

export default defineComponent({
  components: { IconTest, IconText },
  props: {
    stepType: {
      type: String as PropType<StepType>,
      required: true
    }
  },
  computed: {
    StepType() {
      return StepType
    }
  }
})
</script>

<style scoped></style>
