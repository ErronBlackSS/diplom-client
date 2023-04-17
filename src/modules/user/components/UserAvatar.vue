<template>
  <div
    class="ym-hide-content w-[28px] h-[28px] rounded-[6px] border-[1px] border-white bg-clip-padding bg-cover bg-[#6E777A] text-[#FFFFFF] text-[14px] leading-[16px] flex items-center justify-center"
  >
    {{ userEmailFirstLetter }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useUserStore } from '@/modules/user/store'
import { User } from '@/modules/user/types'

export default defineComponent({
  computed: {
    ...mapStores(useUserStore),
    user(): User | null {
      return this.userStore.user
    },
    userEmailFirstLetter() {
      return this.user?.email[0].toUpperCase() || '?'
    }
  }
})
</script>

<style scoped></style>
