<template>
  <UIForm submit-text="Создать аккаунт">
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
      <span className="text-gray"> Уже есть аккаунт? </span>
      <router-link to="/auth/sign-in">Авторизоваться</router-link>
    </template>
  </UIForm>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormInput from '@/ui/FormInput.vue'
import UIForm from '@/ui/UIForm.vue'

export default defineComponent({
  components: { FormInput, UIForm },
  data: () => ({
    email: '' as string,
    password: '' as string
  })
})
</script>

<style scoped></style>
