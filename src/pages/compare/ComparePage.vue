<template>
  Compare page

  <br />

  {{ p1DataObj.name }} - {{ getTotalSpecsScore(p1DataObj) }}

  <br />

  {{ p2DataObj.name }} - {{ getTotalSpecsScore(p2DataObj) }}

  <br />

  Winner is {{ winnerBud }}
</template>

<script setup>
import { onServerPrefetch, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const winnerBud = ref('')

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

if (getTotalSpecsScore(p1DataObj) > getTotalSpecsScore(p2DataObj)) {
  winnerBud.value = p1DataObj.name
} else {
  winnerBud.value = p2DataObj.name
}

// ✅ SSR-safe data fetching
onServerPrefetch(async () => {})
</script>
