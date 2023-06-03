<template>
  <ModalBox title="Переименовать курс" @close="close" ok="Сохранить" @save="save">
    <div class="flex flex-col w-full">
      <p class="w-full text-[15px] ml-[1px] mb-[12px] leading-[18px] text-[#4c4c4d] font-[700]">
        Введите новое название
      </p>
    </div>
    <div class="flex flex-row">
      <input
        v-model="name"
        type="text"
        class="bg-[#f4f5f7]/50 rounded-[6px] focus:ring-0 border border-black/12 focus:border-[#007BE5] w-full px-[14px] py-[11px] text-[14px] leading-[16px] text-[#4c4c4d] focus:outline-none"
        @keyup.esc="close"
        @keyup.enter="save"
      />
    </div>
  </ModalBox>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ModalBox from '@/components/ModalBox.vue'

export default defineComponent({
  components: { ModalBox },
  data: () => ({
    name: ''
  }),
  props: {
    currentName: {
      type: String,
      required: true
    }
  },
  emits: ['close', 'save'],
  mounted() {
    this.name = this.currentName
  },
  methods: {
    close() {
      this.$emit('close')
    },
    save() {
      if (this.name) this.$emit('save', this.name)
    }
  }
})
</script>
