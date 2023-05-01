<template>
  <div class="flex flex-col gap-[20px]">
    <ViewTitle title="Программа курса" />
    <div class="flex-none">
      <UIButton @click="gotoEdit"> Редактировать содержание </UIButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewTitle from '@/components/ViewTitle.vue'
import UIButton from '@/ui/UIButton.vue'

export default defineComponent({
  components: { ViewTitle, UIButton },
  methods: {
    gotoEdit() {
      this.$router.push({ name: 'course-edit' })
    }
  }
})
</script>

<style scoped></style>
