<template>
  <q-layout view="lHr lpR fFf">
    <!-- header con el inicio y el menu de hamburguesa -->
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          class="text-secondary"
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-weight-bold text-secondary">
          Inicio
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Drawer de la izquierda -->
    <q-drawer
      dark
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="275"
    >
      <q-icon class="q-pa-md" name="fas fa-dove" size="lg" color="secondary" />

      <q-list>
        <q-item to="/" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="secondary" name="home" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-secondary text-weight-bold"
            >Inicio</q-item-section
          >
        </q-item>

        <q-item to="/about" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="secondary" name="help" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-secondary text-weight-bold"
            >About</q-item-section
          >
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Drawer de la derecha -->
    <q-drawer
      dark
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
      bordered
    >
      <q-input
        placeholder="Buscar en Twitter"
        class="q-ma-md"
        dark
        bg-color="accent"
        outlined
        rounded
        dense
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list dense padding dark class="rounded-borders bg-accent">
        <q-item v-ripple>
          <q-item-section>Single line item</q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section>
            <q-item-label overline>OVERLINE</q-item-label>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-primary">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>