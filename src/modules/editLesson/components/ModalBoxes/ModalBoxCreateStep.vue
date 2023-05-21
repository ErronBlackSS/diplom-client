<template>
  <ModalBox title="Тип шага" @close="close">
    <div class="flex flex-row justify-center items-center gap-[30px]">
      <div
        class="w-[400px] p-[10px] cursor-pointer flex flex-row justify-between items-center gap-[20px] rounded-[6px] hover:bg-main-grey"
        @click="create(StepType.TEXT)"
      >
        <IconText class="flex-none" :view-square="64" />
        <div class="flex flex-col gap-[2px]">
          <p class="text-[18px]">Текст</p>
          <DeviderHorizonalLine />
          <p class="text-[10px]">Создайте текстовый урок в удобном редакторе</p>
        </div>
      </div>
      <div
        class="w-[400px] p-[10px] cursor-pointer flex flex-row justify-between items-center gap-[20px] rounded-[6px] hover:bg-main-grey"
        @click="create(StepType.TEST)"
      >
        <IconTest class="flex-none" :view-square="64" />
        <div class="flex flex-col gap-[2px]">
          <p class="text-[18px]">Тест</p>
          <DeviderHorizonalLine />
          <p class="text-[10px]">Создайте вопрос с вариантами ответа</p>
        </div>
      </div>
    </div>
  </ModalBox>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ModalBox from '@/components/ModalBox.vue'
import IconTest from '../Icons/IconTest.vue'
import IconText from '../Icons/IconText.vue'
import DeviderHorizonalLine from '@/ui/DeviderHorizonalLine.vue'
import { StepType } from '../../types/lessons-with-steps'

export default defineComponent({
  components: { ModalBox, IconTest, IconText, DeviderHorizonalLine },
  emits: ['close', 'create'],
  computed: {
    StepType() {
      return StepType
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    create(type: StepType) {
      this.$emit('create', type)
    }
  }
})
</script>
