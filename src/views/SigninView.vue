<template>
  <AuthLayoutScreen title="Авторизация">
    <SigninForm />
  </AuthLayoutScreen>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthLayoutScreen from './layouts/AuthLayoutScreen.vue'
import { SigninForm } from '@/modules/auth/.'

export default defineComponent({
  components: { AuthLayoutScreen, SigninForm }
})
</script>
