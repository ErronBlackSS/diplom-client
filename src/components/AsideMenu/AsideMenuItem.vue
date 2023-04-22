<template>
  <router-link :class="selectedClass" :to="to">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    selectedClass() {
      return this.selected && 'text-[#008080]'
    }
  }
})
</script>

<style scoped></style>
