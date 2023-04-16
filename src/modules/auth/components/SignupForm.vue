<template>
  <UIForm @submit="singup" submit-text="Создать аккаунт" :error-message="errorText">
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
    <div v-if="complete">
      <p class="text-green-500">Вам на почту отправлено письмо с подтверждением</p>
    </div>
  </UIForm>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormInput from '@/ui/FormInput.vue'
import UIForm from '@/ui/UIForm.vue'
import { useAuthStore } from '../store'
import { mapStores } from 'pinia'

export default defineComponent({
  components: { FormInput, UIForm },
  data: () => ({
    email: '' as string,
    password: '' as string,
    errorText: '' as string,
    complete: false
  }),
  computed: {
    ...mapStores(useAuthStore)
  },
  methods: {
    async singup() {
      try {
        await this.authStore.singup(this.email, this.password)
        this.complete = true
      } catch (error) {
        if (typeof error === 'string') this.errorText = error
      }
    }
  }
})
</script>

<style scoped></style>
