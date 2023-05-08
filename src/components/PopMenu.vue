<template>
  <el-popover
    :placement="placement"
    :disabled="disabled"
    :width="width"
    :trigger="trigger"
    :popper-style="customStyle"
    @before-leave="startClose"
    @after-leave="endClose"
    ref="popoverRef"
  >
    <div class="flex flex-col" @click="close">
      <slot name="menu" />
    </div>
    <template #reference v-if="$slots.default">
      <slot />
    </template>
  </el-popover>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElPopover } from 'element-plus'

export default defineComponent({
  props: {
    placement: {
      type: String,
      default: 'bottom'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: String || Number,
      default: ''
    },
    trigger: {
      type: String,
      default: 'click'
    }
  },
  data: () => ({
    customStyle: ''
  }),
  methods: {
    onKeyDown(e: KeyboardEvent): boolean {
      if (e.code === 'Escape') {
        this.close()
        return true
      }
      return false
    },
    close() {
      const popover = this.$refs.popoverRef as InstanceType<typeof ElPopover>
      if (popover) {
        popover.hide()
      }
    },
    startClose() {
      this.customStyle = 'visibility: hidden;'
    },
    endClose() {
      this.customStyle = ''
    }
  }
})
</script>

<style scoped></style>
