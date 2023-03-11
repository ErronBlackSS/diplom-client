<template>
  <AuthDevidedScreen title="Регистрация">
    <template #left>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sed veniam corporis non
        libero nulla enim recusandae? Aut at similique ex id ipsam, odit optio quasi, adipisci,
        commodi repellat perspiciatis?
      </p>
    </template>
    <template #right>
      <SignupForm />
    </template>
    <template #bottom>
      <span className="text-gray"> Уже есть аккаунт? </span>
      <router-link to="/auth/sign-in">Авторизоваться</router-link>
    </template>
  </AuthDevidedScreen>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SignupForm, AuthDevidedScreen } from '@/modules/auth/.'

export default defineComponent({
  components: { SignupForm, AuthDevidedScreen }
})
</script>
