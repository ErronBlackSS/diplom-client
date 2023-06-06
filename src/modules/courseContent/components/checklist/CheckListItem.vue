<template>
  <div class="flex flex-row justify-start gap-[10px] p-[10px] items-center">
    <div class="w-[24px] h-[24px] flex justify-center items-center">
      <CheckMarkIcon v-if="condition" />
      <CrossIcon v-else />
    </div>
    <p><slot /></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CheckMarkIcon from '@/components/Icons/CheckMarkIcon.vue'
import CrossIcon from '@/components/Icons/CrossIcon.vue'

export default defineComponent({
  components: { CheckMarkIcon, CrossIcon },
  props: {
    condition: {
      type: Boolean,
      required: true
    }
  }
})
</script>

<style scoped></style>
