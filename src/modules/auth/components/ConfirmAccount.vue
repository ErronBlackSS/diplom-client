<template>
  <div class="flex justify-center mt-[15px]">
    <UIButton class="rounded-[6px] border-black" @click="activate"
      >Активировать учетную запись</UIButton
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import UIButton from '@/ui/UIButton.vue'
import { useAuthStore } from '../store'

export default defineComponent({
  props: {
    token: {
      type: String,
      required: true
    }
  },
  components: { UIButton },
  computed: {
    ...mapStores(useAuthStore)
  },
  methods: {
    activate() {
      this.authStore.register(this.token)
    }
  }
})
</script>

<style scoped></style>
