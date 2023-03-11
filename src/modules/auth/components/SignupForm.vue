<template>
  <div class="flex flex-col gap-[15px] w-full">
    <input type="email" class="py-2 px-4 rounded-md border border-[#000] outline-none" />
    <input type="password" class="py-2 px-4 rounded-md border border-[#000] outline-none" />
    <UIButton> Зарегистрироваться </UIButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UIButton from '@/ui/UIButton.vue'

export default defineComponent({
  components: { UIButton }
})
</script>
