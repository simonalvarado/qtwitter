<template>
  <q-layout class="bg-primary" view="lHr lpR fFf">
    <!-- header con el inicio y el menu de hamburguesa -->
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          class="text-secondary lt-sm"
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-weight-bold gt-sm text-secondary">
          <span>{{$route.name}}</span>
        </q-toolbar-title>

        <q-icon
          class="q-pa-md header-icon lt-md"
          name="fas fa-dove"
          size="sm"
          color="secondary"
        />
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
      class="q-pl-md q-pr-md drawer-left"
    >
      <q-icon class="q-pa-md" name="fas fa-dove" size="lg" color="secondary" />

      <q-list>
        <q-item to="/" clickable v-ripple exact active-class="active">
          <q-item-section avatar>
            <q-icon
              class="active-container"
              color="secondary"
              name="home"
              size="md"
            />
          </q-item-section>

          <q-item-section class="text-h6 active-container text-secondary"
            >Inicio</q-item-section
          >
        </q-item>

        <q-item to="/about" active-class="active" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon
              class="active-container"
              color="secondary"
              name="help"
              size="md"
            />
          </q-item-section>

          <q-item-section class="text-h6 active-container text-secondary"
            >About</q-item-section
          >
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Drawer de la derecha -->
    <q-drawer
      class="drawer-right"
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

      <q-list padding dark class="rounded-borders bg-accent q-ma-md">
        <q-item class="q-pa-md" clickable>
          <q-item-section>
            <q-item-label overline class="text-grey">
              Premier League
            </q-item-label>
            <q-item-label class="text-weight-bold"
              >Manchester City vs Tottenham Hotspur</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label class="text-grey" caption>Ayer</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md" clickable>
          <q-item-section>
            <q-item-label overline class="text-grey">
              Tendencias en Argentina
            </q-item-label>
            <q-item-label class="text-weight-bold">Flow</q-item-label>
            <q-item-label caption class="text-grey"
              >57,3 mil Tweets</q-item-label
            >
          </q-item-section>

          <q-item-section side top> </q-item-section>
        </q-item>

        <q-item class="q-pa-md" clickable>
          <q-item-section>
            <q-item-label overline class="text-grey"> Tendencias </q-item-label>
            <q-item-label class="text-weight-bold">ChatGPT</q-item-label>
            <q-item-label caption class="text-grey"
              >64,6 mil Tweets</q-item-label
            >
          </q-item-section>

          <q-item-section side top> </q-item-section>
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

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)

.q-header
  border-bottom: 1px solid rgba(255, 255, 255, 0.28)

.drawer-right
  border-left: 1px solid rgba(255, 255, 255, 0.28)

.drawer-left
  border-right: 1px solid rgba(255, 255, 255, 0.28)

.active
  .active-container
    font-weight: bold
</style>