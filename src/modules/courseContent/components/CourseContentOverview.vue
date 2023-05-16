<template>
  <ViewWrapper>
    <ViewTitle class="mt-[30px]" title="Программа курса" />
    <div class="flex-none">
      <UIButton @click="gotoEdit"> Редактировать содержание </UIButton>
    </div>
  </ViewWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewTitle from '@/components/ViewTitle.vue'
import UIButton from '@/ui/UIButton.vue'
import ViewWrapper from '@/components/ViewWrapper.vue'

export default defineComponent({
  components: { ViewTitle, UIButton, ViewWrapper },
  methods: {
    gotoEdit() {
      this.$router.push({ name: 'course-edit' })
    }
  }
})
</script>

<style scoped></style>
