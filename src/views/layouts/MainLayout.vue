<template>
  <section class="flex flex-col h-screen justify-center overflow-y-auto">
    <MainHeader />
    <main class="flex-1 h-fit">
      <slot />
    </main>
    <MainFooter />
  </section>
  <ModalBoxAuth @close="close" v-if="authTypeView" :view="authTypeView" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainFooter from '@/components/MainFooter.vue'
import MainHeader from '@/components/MainHeader.vue'
import ModalBoxAuth from '@/modules/auth/components/ModalBoxAuth.vue'

type ViewType = 'login' | 'registration'

export default defineComponent({
  components: { MainFooter, MainHeader, ModalBoxAuth },
  computed: {
    authTypeView(): ViewType | undefined {
      const query = this.$route.query.auth as string
      if (['login', 'registration'].includes(query)) {
        return query as ViewType
      }
      return undefined
    }
  },
  methods: {
    close() {
      this.$router.push({ query: {} })
    }
  }
})
</script>
