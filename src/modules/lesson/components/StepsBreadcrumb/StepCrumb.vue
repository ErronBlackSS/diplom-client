<template>
  <div
    class="w-[50px] h-[50px] rounded-[6px] border border-main-gray flex justify-center items-center hover:bg-main-grey cursor-pointer"
    :class="{ '!border-main-blue': active, 'bg-[#00e500]': completed }"
    @click="$emit('click')"
  >
    <StepIcon :step-type="type" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { StepType } from '../../types/steps'
import StepIcon from './StepIcon.vue'

export default defineComponent({
  components: { StepIcon },
  props: {
    type: {
      type: String as PropType<StepType>,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click']
})
</script>

<style scoped></style>
