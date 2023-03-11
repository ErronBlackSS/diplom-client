<template>
  <AuthDevidedScreen title="Авторизация">
    <template #left>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sed veniam corporis non
        libero nulla enim recusandae? Aut at similique ex id ipsam, odit optio quasi, adipisci,
        commodi repellat perspiciatis?
      </p>
    </template>
    <template #right>
      <SigninForm />
    </template>
    <template #bottom>
      <span className="text-gray"> Ещё нет аккаунта? </span>
      <router-link to="/auth/sign-up">Зарегистрироваться</router-link>
    </template>
  </AuthDevidedScreen>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SigninForm, AuthDevidedScreen } from '@/modules/auth/.'

export default defineComponent({
  components: { SigninForm, AuthDevidedScreen }
})
</script>
