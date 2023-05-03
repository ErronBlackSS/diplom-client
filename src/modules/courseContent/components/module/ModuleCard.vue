<template>
  <div class="flex flex-col border p-[30px]">
    <div class="flex flex-row">
      <p>{{ order }}</p>
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    order: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped></style>
