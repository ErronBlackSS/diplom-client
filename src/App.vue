<template>
  <AuthLayout v-if="layout === 'AuthLayout'">
    <router-view></router-view>
  </AuthLayout>
  <MainLayout v-if="layout === 'MainLayout'">
    <router-view></router-view>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthLayout from './views/layouts/AuthLayout.vue'
import MainLayout from './views/layouts/MainLayout.vue'

export default defineComponent({
  components: { AuthLayout, MainLayout },
  computed: {
    layout() {
      return this.$route.meta?.layout
    }
  }
})
</script>
