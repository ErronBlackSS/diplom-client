<template>
  <AuthLayoutScreen title="Регистрация">
    <SignupForm />
  </AuthLayoutScreen>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthLayoutScreen from './layouts/AuthLayoutScreen.vue'
import SignupForm from '@/modules/auth/components/SignupForm.vue'

export default defineComponent({
  components: { AuthLayoutScreen, SignupForm }
})
</script>
