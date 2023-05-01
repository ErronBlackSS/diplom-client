<template>
  <div class="border rounded-[6px] cursor-pointer">
    <router-link :to="courseDetailLink">
      <div class="p-[20px] flex flex-col">
        {{ name }}
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    courseDetailLink() {
      return `/course/${this.id}/overview`
    }
  }
})
</script>

<style scoped></style>
