<template>
  <AuthLayoutScreen title="Авторизация">
    <UIForm submit-text="Войти">
      <FormInput
        title="Почта"
        type="email"
        error-message="Некорректная почта"
        placeholder="Почта"
        input-name="email"
        v-model="email"
      />
      <FormInput
        title="Пароль"
        type="password"
        error-message="Некорректный пароль"
        placeholder="Пароль"
        input-name="email"
        v-model="password"
      />
      <template #link>
        <span className="text-gray"> Ещё нет аккаунта? </span>
        <router-link to="/auth/sign-up">Зарегистрироваться</router-link>
      </template>
    </UIForm>
  </AuthLayoutScreen>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormInput from '@/ui/FormInput.vue'
import UIForm from '@/ui/UIForm.vue'
import AuthLayoutScreen from './layouts/AuthLayoutScreen.vue'

export default defineComponent({
  components: { UIForm, FormInput, AuthLayoutScreen },
  data: () => ({
    email: '' as string,
    password: '' as string
  })
})
</script>
