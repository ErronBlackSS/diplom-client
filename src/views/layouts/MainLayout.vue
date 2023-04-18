<template>
  <section class="flex flex-col justify-center overflow-y-auto">
    <MainHeader @logout="logout" :is-authenticated="isAuth" />
    <main class="flex flex-1 flex-col">
      <slot />
    </main>
    <MainFooter />
  </section>
  <ModalBoxAuth @close="close" v-if="authTypeView && !isAuth" :view="authTypeView" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainFooter from '@/components/MainFooter.vue'
import MainHeader from '@/components/MainHeader.vue'
import ModalBoxAuth from '@/modules/auth/components/ModalBoxAuth.vue'
import { isAuthenticated } from '@/modules/auth/utils/auth.helpers'
import { useUserStore } from '@/modules/user/store/.'
import { mapStores } from 'pinia'
import { useAuthStore } from '@/modules/auth/store'

type ViewType = 'login' | 'registration'

export default defineComponent({
  components: { MainFooter, MainHeader, ModalBoxAuth },
  computed: {
    ...mapStores(useUserStore, useAuthStore),
    authTypeView(): ViewType | undefined {
      const query = this.$route.query.auth as string
      if (['login', 'registration'].includes(query)) {
        return query as ViewType
      }
      return undefined
    },
    isAuth() {
      return !!this.userStore.user || isAuthenticated()
    }
  },
  mounted() {
    if (this.isAuth) {
      this.userStore.getUserData()
    }
  },
  methods: {
    close() {
      this.$router.push({ query: {} })
    },
    logout() {
      this.authStore.signOut().then(() => this.$router.push('/catalog'))
    }
  }
})
</script>
