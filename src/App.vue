<template>
  <AuthLayout v-if="layout === 'AuthLayout'">
    <router-view></router-view>
  </AuthLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthLayout from './views/layouts/AuthLayout.vue'

export default defineComponent({
  components: { AuthLayout },
  computed: {
    layout() {
      return this.$route.meta?.layout
    }
  }
})
</script>
