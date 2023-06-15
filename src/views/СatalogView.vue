<template>
  <ViewWrapper class="mx-auto w-[1100px]">
    <MainLoader v-if="isLoading" />
    <CatalogList v-else :catalog-courses="catalog" />
  </ViewWrapper>
</template>

<script lang="ts">
import ViewWrapper from '@/components/ViewWrapper.vue'
import { useCatalogStore } from '@/modules/catalog/store'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'
import MainLoader from '@/components/MainLoader.vue'
import CatalogList from '@/modules/catalog/components/CatalogList.vue'

export default defineComponent({
  components: { ViewWrapper, MainLoader, CatalogList },
  data: () => ({
    isLoading: true
  }),
  computed: {
    ...mapStores(useCatalogStore),
    catalog() {
      return this.catalogStore.catalog
    }
  },
  async mounted() {
    await this.loadCatalog()
  },
  methods: {
    async loadCatalog() {
      try {
        await this.catalogStore.getCatalog()
      } finally {
        this.isLoading = false
      }
    }
  }
})
</script>

<style scoped></style>
