<template>
  <div class="flex flex-col gap-[20px]">
    <ViewTitle title="Редактирование курса" />
    <div class="flex-none">
      <UIButton> Создать модуль </UIButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewTitle from '@/components/ViewTitle.vue'
import UIButton from '@/ui/UIButton.vue'

export default defineComponent({
  components: { ViewTitle, UIButton }
})
</script>

<style scoped></style>
