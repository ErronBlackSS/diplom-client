<template>
  <div class="flex flex-col gap-[5px]">
    <div
      v-for="{ id, name, isRight } in answers"
      :key="id"
      class="bg-white border border-[#e0e0e0] rounded-[8px] min-h-[51px] grow flex items-center justify-between p-[14px]"
      :class="{ 'border-[#00e500]': selectedAnswers.includes(id) || (isPassed && isRight) }"
      @click="selectAnswer(id)"
    >
      <div class="flex flex-row gap-[5px]">
        <div>
          {{ name }}
        </div>
      </div>
    </div>
    <button
      class="mt-[30px] flex font-[500] justify-center items-center mx-auto bg-[#85DEAB] py-[12px] px-[40px] rounded-[6px] text-[#111012] text-[13px] hover:opacity-[0.8]"
      :class="{
        'bg-[#E7E2E1] hover:bg-[#C5C5C5] cursor-not-allowed': !selectedAnswers.length
      }"
      :disabled="!selectedAnswers.length || isPassed"
      @click="clickComplete"
    >
      Сохранить ответ
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TestAnswer } from '../../types/steps'

export default defineComponent({
  data: () => ({
    selectedAnswers: [] as number[]
  }),
  props: {
    answers: {
      type: Array as PropType<TestAnswer[]>,
      required: true
    },
    isPassed: {
      type: Boolean,
      default: false
    }
  },
  emits: ['complete'],
  methods: {
    selectAnswer(id: number) {
      if (!this.isPassed) {
        if (this.selectedAnswers.includes(id)) {
          this.selectedAnswers = this.selectedAnswers.filter((answerId) => answerId !== id)
          return
        }
        this.selectedAnswers.push(id)
      }
    },
    clickComplete() {
      if (this.selectedAnswers.length === 0) return
      this.$emit('complete', this.selectedAnswers)
    }
  }
})
</script>
