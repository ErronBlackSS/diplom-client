<template>
  <MainLoader v-if="isLoading" />
  <div v-else>{{ step.content }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useStepsStore } from '../store/step-content'
import MainLoader from '@/components/MainLoader.vue'

export default defineComponent({
  data: () => ({
    isLoading: true
  }),
  watch: {
    stepId: {
      immediate: true,
      handler: async function (newStepId) {
        if (newStepId) {
          await this.loadStepContent(newStepId)
        }
      }
    }
  },
  computed: {
    ...mapStores(useStepsStore),
    lessonId() {
      return Number(this.$route.params.lessonId)
    },
    stepId() {
      return Number(this.$route.params.stepId)
    },
    step() {
      return this.stepContentStore.step
    },
    type() {
      return this.stepContentStore.type
    },
    test() {
      return this.stepContentStore.test
    }
  },
  methods: {
    async loadStepContent(stepId: number) {
      try {
        this.stepContentStore.getStep(this.lessonId, stepId)
      } finally {
        this.isLoading = false
      }
    }
  },
  components: { MainLoader }
})
</script>

<style scoped></style>
