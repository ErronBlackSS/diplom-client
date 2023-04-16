<template>
  <ModalBox title="Авторизация" @close="close">
    <div class="flex flex-row gap-[20px] text-[20px] mb-[15px]">
      <p :class="!isRegister && 'text-[#A9A9A9]'" @click="switchToRegister">Регистрация</p>
      <p :class="!isAuth && 'text-[#A9A9A9]'" @click="switchToAuth">Логин</p>
    </div>
    <SigninForm v-if="isAuth" />
    <SignupForm v-if="isRegister" />
  </ModalBox>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ModalBox from '@/components/ModalBox.vue'
import SigninForm from './SigninForm.vue'
import SignupForm from './SignupForm.vue'

enum Title {
  'login' = 'Логин',
  'registration' = 'Регистрация'
}

export default defineComponent({
  components: { ModalBox, SigninForm, SignupForm },
  emits: ['close'],
  props: {
    view: {
      type: String as PropType<'login' | 'registration'>,
      required: true
    }
  },
  computed: {
    isAuth() {
      return this.view === 'login'
    },
    isRegister() {
      return this.view === 'registration'
    },
    title() {
      return Title[this.view]
    }
  },
  methods: {
    close() {
      return this.$emit('close')
    },
    switchToAuth() {
      this.$router.push({ query: { auth: 'login' } })
    },
    switchToRegister() {
      this.$router.push({ query: { auth: 'registration' } })
    }
  }
})
</script>

<style scoped></style>
