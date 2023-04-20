<template>
  <q-page>
    <div class="q-py-lg q-px-md">
      <q-input
        dark
        bottom-slots
        v-model="newQweetContent"
        placeholder="¿Qué está pasando?"
        counter
        autogrow
        input-class="input-placeholder-text"
        maxlength="280"
        :dense="dense"
      >
        <template v-slot:before>
          <q-avatar>
            <img
              src="https://pbs.twimg.com/profile_images/1415466062770999296/YVthEL37_400x400.jpg"
            />
          </q-avatar>
        </template>

        <template v-slot:after>
          <q-btn
            unelevated
            rounded
            no-caps
            :disable="!newQweetContent"
            color="blue"
            label="Twittear"
          />
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
      newQweetContent: "",
    };
  },
};
</script>
<style>
.input-placeholder-text::placeholder {
  color: #fff;
}
</style>
