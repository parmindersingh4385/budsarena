import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    items: [],
    loading: true,
  }),

  actions: {
    async fetchProducts() {
      try {
        const res = await fetch('https://mocki.io/v1/0385ec32-2a79-4963-8df6-e152e71bb6b4')
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
