<template>
  <!-- <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> BudsArena App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout> -->

  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Bottom Tabs -->
    <q-footer elevated class="bg-white text-dark">
      <q-tabs
        v-model="selectedTab"
        dense
        align="justify"
        indicator-color="transparent"
        active-color="primary"
      >
        <q-route-tab name="home" icon="home" label="Home" to="/" />

        <q-route-tab name="explore" icon="search" label="Explore" to="/explore" />

        <q-route-tab
          name="compare"
          icon="compare_arrows"
          label="Compare"
          to="/compare"
          class="compare-tab"
        />

        <q-route-tab name="recent" icon="saved" label="Recent" to="/recent" />

        <q-route-tab name="profile" icon="person" label="Profile" to="/profile" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup></script>
