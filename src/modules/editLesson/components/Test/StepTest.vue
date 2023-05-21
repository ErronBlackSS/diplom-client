<template>
  <div class="flex flex-col gap-[16px]">
    <div class="text-left font-roboto font-[500] text-[15px] leading-[21px] text-[#111012A6]">
      В вопросе будут представлены следующие ответы
    </div>
    <AnswersDragList
      :answers="answers"
      @set-is-right="setRightAnswer"
      @change-answer-order="changeAnswerOrder"
    />
    <CustomInput @enter="createAnswer" v-model="newAnswerText" placeholder="Новый ответ" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Test } from '../../types/lessons-with-steps'
import AnswersDragList from './AnswersDragList.vue'
import CustomInput from '@/ui/CustomInput.vue'

export default defineComponent({
  data: () => ({
    newAnswerText: ''
  }),
  components: { AnswersDragList, CustomInput },
  props: {
    test: {
      type: Object as PropType<Test>,
      required: true
    }
  },
  emits: ['addAnswer', 'setRightAnswer', 'changeAnswerOrder'],
  computed: {
    answers() {
      return this.test.answers
    }
  },
  methods: {
    createAnswer() {
      this.$emit('addAnswer', this.test.id, this.newAnswerText)
      this.newAnswerText = ''
    },
    setRightAnswer(answerId: number, option: boolean) {
      this.$emit('setRightAnswer', answerId, option)
    },
    changeAnswerOrder(answerId: number, order: number) {
      this.$emit('changeAnswerOrder', answerId, order)
    }
  }
})
</script>

<style scoped></style>
