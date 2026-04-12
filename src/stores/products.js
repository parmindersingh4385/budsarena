import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    items: [],
    loading: true,
  }),

  actions: {
    async fetchProducts() {
      try {
        const res = await fetch('https://mocki.io/v1/fcdbb180-5fce-45b9-aeeb-7a02b21c18ff')
        const data = await res.json()

        this.items = Array.isArray(data) ? data : []
      } catch (err) {
        console.error('Store Fetch Error:', err)
        this.items = []
      } finally {
        this.loading = false
      }
    },
  },
})
