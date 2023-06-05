<template>
  <div class="flex w-full justify-between">
    <UIButton @click="$emit('prev')">Предыдущий</UIButton>
    <UIButton @click="$emit('next')">Следующий</UIButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UIButton from '@/ui/UIButton.vue'

export default defineComponent({
  components: { UIButton },
  emits: ['next', 'prev']
})
</script>

<style scoped></style>
