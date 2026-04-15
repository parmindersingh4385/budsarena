<template>
  Compare page

  <br />

  {{ p1DataObj.name }} - {{ getTotalSpecsScore(p1DataObj) }}

  <br />

  {{ p2DataObj.name }} - {{ getTotalSpecsScore(p2DataObj) }}
</template>

<script setup>
import { onServerPrefetch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const slug = route.params.slug

// split products
const [p1Slug, p2Slug] = slug.split('-vs-')

console.log(p1Slug)

console.log(p2Slug)

const p1DataObj = {
  id: 1,
  name: 'Realme buds air 7',
  slug: 'realme-buds-air-7',
  specifications: {
    sound_quality: 9,
    anc: 8,
    battery: 9,
    latency: 8,
  },
}

const p2DataObj = {
  id: 2,
  name: 'Realme buds air 8',
  slug: 'realme-buds-air-8',
  specifications: {
    sound_quality: 8,
    anc: 7,
    battery: 8,
    latency: 7,
  },
}

function getTotalSpecsScore(product) {
  return Object.values(product.specifications).reduce((total, val) => total + val, 0)
}

// ✅ SSR-safe data fetching
onServerPrefetch(async () => {})
</script>
