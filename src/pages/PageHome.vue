<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          dark
          bottom-slots
          v-model="newQweetContent"
          class="new-qweet-input"
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
        </q-input>
      </div>
      <div class="col-shrink">
        <q-btn
          unelevated
          rounded
          no-caps
          :disable="!newQweetContent"
          class="q-mb-lg"
          color="blue"
          label="Twittear"
        />
      </div>
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
.new-qweet-input .q-field__native {
  font-size: 20px;
  line-height: 24px;
}
</style>
