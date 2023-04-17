<template>
  <UIForm submit-text="Войти" @submit="singin" :error-message="errorText">
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
  </UIForm>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormInput from '@/ui/FormInput.vue'
import UIForm from '@/ui/UIForm.vue'
import { useAuthStore } from '../store'
import { mapStores } from 'pinia'
import { useUserStore } from '@/modules/user/store'

export default defineComponent({
  components: { FormInput, UIForm },
  data: () => ({
    email: '' as string,
    password: '' as string,
    errorText: '' as string
  }),
  computed: {
    ...mapStores(useAuthStore, useUserStore)
  },
  methods: {
    async singin() {
      try {
        await this.authStore.login(this.email.toLowerCase(), this.password)
        this.userStore.getUserData()
        this.$router.replace('/catalog')
      } catch (error) {
        if (typeof error === 'string') this.errorText = error
      }
    }
  }
})
</script>

<style scoped></style>
