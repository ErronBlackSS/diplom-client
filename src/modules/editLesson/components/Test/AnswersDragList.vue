<template>
  <draggable
    :list="answers"
    :fallback-tolerance="1"
    :force-fallback="true"
    :animation="180"
    :scroll-sensitivity="100"
    item-key="id"
    @update="onChangeAnswerOrder"
  >
    <template #item="{ element }">
      <div class="flex">
        <div
          class="bg-white border border-[#e0e0e0] rounded-[8px] min-h-[51px] grow flex items-center justify-between p-[14px]"
          :class="{
            '!bg-[#f1f9f4] !border-[#c6e8d1]': element.isRight
          }"
        >
          <div class="flex flex-row gap-[5px]">
            <div
              class="h-[20px] w-[20px] shrink-0 mr-[12px] flex items-center justify-center rounded-[20px]"
              :class="element.isRight ? 'bg-[#85DEA8]' : 'border border-[#cccccc] bg-white'"
              @click="setRightAnswer(element.id, element.isRight)"
            >
              <svg
                v-if="element.isRight"
                width="13"
                height="9"
                viewBox="0 0 13 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.02655 8.66537C4.79903 8.66537 4.57153 8.56513 4.34401 8.4649L0.590007 5.95904C0.134976 5.65834 0.021222 4.95669 0.362495 4.55576C0.703768 4.15482 1.50006 4.05458 1.9551 4.35528L4.9128 6.25974L10.7144 0.64661C11.1695 0.245672 11.852 0.245674 12.307 0.546377C12.7621 0.947315 12.7621 1.54872 12.4208 1.94966L5.93661 8.16419C5.7091 8.56513 5.36782 8.66537 5.02655 8.66537Z"
                  fill="#111012"
                />
              </svg>
            </div>
            <div
              :ref="element.id + 'input'"
              spellcheck="false"
              class="text-[14px] leading-[25px] focus:outline-none break-words cursor-editing grow focus:font-[500]"
              :class="{
                'text-[#111012CC] font-[400]': !element.isRight,
                'text-[#111012] font-[500]': element.isRight
              }"
              @keydown.enter.prevent
              @focusout="changeAnswerText($event, element.id)"
              style="word-break: break-word"
              contenteditable="true"
              v-text="element.name"
            />
          </div>
          <div
            class="flex self-end items-center cursor-pointer hover:transition hover:opacity-[0.8] ml-[20px]"
            @click="deleteAnswer(element.id)"
          >
            <DeleteIcon />
          </div>
        </div>
      </div>
    </template>
  </draggable>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import draggable from 'vuedraggable'
import { Lesson } from '@/modules/courseContent/types/lessons'
import DeleteIcon from '@/components/Icons/DeleteIcon.vue'
import { TestAnswer } from '../../types/lessons-with-steps'

interface StepWithIndexes extends Lesson {
  newIndex: number
  oldIndex: number
}

export default defineComponent({
  components: { draggable, DeleteIcon },
  props: {
    answers: {
      type: Array as PropType<TestAnswer[]>,
      required: true
    }
  },
  emits: [
    'changeAnswerOrder',
    'setIsRight',
    'changeAnswerOrder',
    'deleteAnswer',
    'changeAnswerText'
  ],
  methods: {
    onChangeAnswerOrder(lesson: StepWithIndexes) {
      const newAnsweIndex = Number(lesson.newIndex)
      const oldAnswerIndex = Number(lesson.oldIndex)

      const id = this.answers[oldAnswerIndex].id

      let newOrder: number
      if (newAnsweIndex === 0) {
        newOrder = this.answers[newAnsweIndex].order - 0.5
      } else if (newAnsweIndex === this.answers.length - 1) {
        newOrder = this.answers[newAnsweIndex].order + 0.5
      } else if (oldAnswerIndex > newAnsweIndex) {
        newOrder = (this.answers[newAnsweIndex].order + this.answers[newAnsweIndex - 1].order) / 2
      } else {
        newOrder = (this.answers[newAnsweIndex].order + this.answers[newAnsweIndex + 1].order) / 2
      }
      this.$emit('changeAnswerOrder', id, newOrder)
    },
    deleteAnswer(id: number) {
      this.$emit('deleteAnswer', id)
    },
    setRightAnswer(id: number, option: boolean) {
      this.$emit('setIsRight', id, !option)
    },
    changeAnswerText(event: FocusEvent, answerId: number) {
      const target = event.target as HTMLDivElement
      this.$emit('changeAnswerText', answerId, target.innerText)
    }
  }
})
</script>

<style scoped></style>
