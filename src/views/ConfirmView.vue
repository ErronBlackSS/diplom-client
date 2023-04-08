<template>
  <AuthLayoutScreen title="Авторизация">
    <ConfirmAccount :token="token" />
  </AuthLayoutScreen>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthLayoutScreen from './layouts/AuthLayoutScreen.vue'
import { isUUID } from '@/helpers/functions'
import { ConfirmAccount } from '@/modules/auth/.'

export default defineComponent({
  components: { AuthLayoutScreen, ConfirmAccount },
  data: () => ({}),
  computed: {
    token() {
      return this.$route.query['token'] as string
    }
  },
  mounted() {
    if (!this.token || !isUUID(this.token)) {
      this.navigateToMain()
    }
  },
  methods: {
    navigateToMain() {
      this.$router.push('/main')
    }
  }
})
</script>

<style scoped></style>
