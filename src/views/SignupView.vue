<template>
  <div>
    <p>Это вьюха регистрации</p>
    <SigninForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SigninForm from '../modules/auth/components/SigninForm.vue'

export default defineComponent({
  components: { SigninForm }
})
</script>
