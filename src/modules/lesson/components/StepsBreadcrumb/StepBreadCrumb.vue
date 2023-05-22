<template>
  <div class="flex flex-row justify-start items-center gap-[5px]">
    <StepCrumb
      v-for="step in steps"
      @click="gotoStep(step.id)"
      :key="step.id"
      :type="step.type"
      :active="step.id === currentStepId"
    />
    <div
      class="w-[50px] h-[50px] flex justify-center items-center hover:bg-main-grey rounded-[6px] cursor-pointer"
      @click="createStep"
    >
      <IconAdd />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Step } from '@/modules/lesson/types/modules-with-lessons'
import StepCrumb from './StepCrumb.vue'
import IconAdd from '@/components/Icons/IconAdd.vue'

export default defineComponent({
  components: { IconAdd, StepCrumb },
  props: {
    steps: {
      type: Array as PropType<Step[]>,
      required: true
    }
  },
  emits: ['createStep'],
  computed: {
    currentStepId() {
      return Number(this.$route.params.stepId)
    }
  },
  methods: {
    createStep() {
      this.$emit('createStep')
    },
    gotoStep(stepId: number) {
      this.$router.push({ params: { stepId: stepId } })
    }
  }
})
</script>

<style scoped></style>
