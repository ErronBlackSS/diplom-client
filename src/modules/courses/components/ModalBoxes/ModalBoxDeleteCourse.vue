<template>
  <ModalBox title="Удалить курс" @close="close" @save="deleteCourse" ok="Удалить" cancel="Отмена">
    <div class="flex flex-col w-full">
      <div class="grow flex flex-col mt-[15px]">
        <p class="w-full text-[15px] leading-[18px] ml-[1px] mb-[5px] font-[400]">
          Вы действительно хотите удалить курс
          <span class="flex"
            >" <span class="max-w-10/12 truncate ym-hide-content"> {{ name }} </span>"?
          </span>
        </p>
      </div>
    </div>
  </ModalBox>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ModalBox from '@/components/ModalBox.vue'

export default defineComponent({
  components: { ModalBox },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  emits: ['close', 'delete'],
  methods: {
    close() {
      this.$emit('close')
    },
    deleteCourse() {
      this.$emit('delete')
    }
  }
})
</script>
