<template>
  <router-link class="truncate" :class="{ 'text-main-blue font-[500]': isSelected }" :to="to">
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
    selectPattern: {
      type: String,
      default: ''
    }
  },
  computed: {
    isSelected(): boolean {
      return !!this.$route?.path?.includes(this.to)
    }
  }
})
</script>

<style scoped></style>
