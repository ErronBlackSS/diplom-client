<template>
  <div class="flex flex-row justify-start items-center">
    <div
      class="w-[50px] h-[50px] rounded-[6px] bg-[#555] flex justify-center items-center"
      v-for="step in steps"
      :key="step.id"
    >
      <StepIcon :step-type="step.type" />
    </div>
    <IconAdd />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Step } from '@/modules/editLesson/types/lessons-with-steps'
import IconAdd from '@/components/Icons/IconAdd.vue'
import StepIcon from './StepIcon.vue'

export default defineComponent({
  components: { IconAdd, StepIcon },
  props: {
    steps: {
      type: Array as PropType<Step[]>,
      required: true
    }
  },
  computed: {
    currentStepId() {
      return Number(this.$route.params.stepId)
    }
  }
})
</script>

<style scoped></style>
