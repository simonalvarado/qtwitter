<template>
  <q-page>
    <div class="q-py-lg q-px-md">
      <q-input
        dark
        bottom-slots
        v-model="newQweetContent"
        placeholder="¿Qué está pasando?"
        counter
        maxlength="280"
        :dense="dense"
      >
        <template v-slot:before>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
          </q-avatar>
        </template>

        <template v-slot:after>
          <q-btn round dense flat icon="send" />
        </template>
      </q-input>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageHome",
  data() {
    return {
      newQweetContent: ''
    }
  }
};
</script>
