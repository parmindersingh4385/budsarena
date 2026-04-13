<template>
  <q-page padding>
    HOME- {{ title }}

    <!-- ✅ Same on server & client -->
    <div v-if="store.loading">Loading...</div>

    <div v-else>
      <div v-for="p in store.items" :key="p.slug">{{ p.name }} - ₹{{ p.price }}</div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onServerPrefetch } from 'vue'
import { useProductStore } from 'src/stores/products'

const title = ref('Compare Best Earbuds 🔥')

// ✅ Use Pinia store
const store = useProductStore()

// ✅ SSR-safe data fetching
onServerPrefetch(async () => {
  if (!store.items.length) {
    await store.fetchProducts()
  }
})

/* onMounted(async () => {
  if (!store.items.length) {
    await store.fetchProducts()
  }
}) */
</script>
