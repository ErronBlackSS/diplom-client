<template>
  <div class="flex flex-col gap-[16px]">
    <div class="text-left font-roboto font-[500] text-[15px] leading-[21px] text-[#111012A6]">
      В вопросе будут представлены следующие ответы
    </div>
    <ShouldBeCorrectAnswerPanel v-if="!haveCorrectAnswer" />
    <AnswersDragList
      :answers="answers"
      @set-is-right="setRightAnswer"
      @change-answer-order="changeAnswerOrder"
      @delete-answer="deleteAnswer"
      @change-answer-text="changeAnswerText"
    />
    <CustomInput @enter="createAnswer" v-model="newAnswerText" placeholder="Новый ответ" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Test } from '../../types/modules-with-lessons'
import AnswersDragList from './AnswersDragList.vue'
import CustomInput from '@/ui/CustomInput.vue'
import ShouldBeCorrectAnswerPanel from './ShouldBeCorrectAnswerPanel.vue'

export default defineComponent({
  data: () => ({
    newAnswerText: ''
  }),
  components: { AnswersDragList, CustomInput, ShouldBeCorrectAnswerPanel },
  props: {
    test: {
      type: Object as PropType<Test>,
      required: true
    }
  },
  emits: ['addAnswer', 'setRightAnswer', 'changeAnswerOrder', 'deleteAnswer', 'changeAnswerText'],
  computed: {
    answers() {
      return this.test.answers
    },
    haveCorrectAnswer() {
      return this.answers.filter((answer) => answer.isRight).length > 0
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
    },
    deleteAnswer(answerId: number) {
      this.$emit('deleteAnswer', answerId)
    },
    changeAnswerText(answerId: number, name: string) {
      this.$emit('changeAnswerText', answerId, name)
    }
  }
})
</script>

<style scoped></style>
