<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn class="text-secondary" dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold text-secondary">
          Inicio
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer dark show-if-above v-model="leftDrawerOpen" side="left" bordered :width="275">
      <q-icon class="q-pa-md" name="fas fa-dove" size="lg" color="secondary" />
      
      <q-list>
        <q-item to="/" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="secondary" name="home" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-secondary text-weight-bold">Home</q-item-section>
        </q-item>

        <q-item to="/about" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="secondary" name="help" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-secondary text-weight-bold">About</q-item-section>
        </q-item>        

      </q-list>

    </q-drawer>

    <q-drawer dark show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container class="bg-primary">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>