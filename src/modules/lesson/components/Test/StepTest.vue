<template>
  <div class="flex flex-col gap-[16px]">
    <div class="text-left font-roboto font-[500] text-[15px] leading-[21px] text-[#111012A6]">
      В вопросе один правильный ответ
    </div>
    <AnswersList @complete="completeTest" :answers="answers" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Test } from '../../types/steps'
import AnswersList from './AnswersList.vue'

export default defineComponent({
  components: { AnswersList },
  props: {
    test: {
      type: Object as PropType<Test>,
      required: true
    }
  },
  emits: ['complete'],
  computed: {
    answers() {
      return this.test.answers
    }
  },
  methods: {
    completeTest(answers: number[]) {
      this.$emit('complete', answers)
    }
  }
})
</script>

<style scoped></style>
