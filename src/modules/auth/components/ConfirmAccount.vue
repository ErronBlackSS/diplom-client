<template>
  <UIButton @click="activate">Активировать учетную запись</UIButton>
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
      this.authStore.confirmEmail(this.token)
    }
  }
})
</script>

<style scoped></style>
