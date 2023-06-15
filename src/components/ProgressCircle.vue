<template>
  <el-progress
    :width="width"
    type="circle"
    :percentage="percentage"
    :stroke-width="3"
    status="success"
    text-inside=""
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    width: {
      type: Number,
      default: 28
    },
    percentage: {
      type: Number,
      required: true
    }
  }
})
</script>

<style scoped></style>
