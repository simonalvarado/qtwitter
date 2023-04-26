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
            <q-avatar size="48px">
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

    <q-list dark>
      <q-item>
        <q-item-section top avatar>
          <q-avatar size="48px">
              <img
                src="https://pbs.twimg.com/profile_images/1415466062770999296/YVthEL37_400x400.jpg"
              />
            </q-avatar>
        </q-item-section>

        <q-item-section>
          <div class="q-pb-xs row">
            <div class="col-xs-shrink col-sm-shrink">
              <q-item-label class="text-weight-bold text-subtitle1 qweet-username" lines="1">Simon no</q-item-label>
            </div>
            <div class="col-xs-shrink col-sm-shrink q-pl-sm">
              <q-item-label class="text-body1 text-grey text-weight-light qweet-username" lines="1">@simonalvarado</q-item-label>
            </div>
            <div class="col-sm-shrink">
              <q-item-label class="q-pl-sm q-pr-sm text-body1 text-grey text-weight-light" lines="1">·</q-item-label>
            </div>
            <div class="col-sm-shrink">
              <q-item-label class="text-body1 text-grey text-weight-light" lines="1">1h</q-item-label>
            </div>
          </div>
          <q-item-label>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt aperiam nam id, magnam quasi ducimus ea neque provident nulla unde cumque explicabo, iusto odio doloremque enim suscipit consectetur iste?
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
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
@media screen and (max-width: 600px) {
  .qweet-username{
    max-width: 100px;
  }
}
.qweet-username{
    max-width: 340px;
  }
  

.input-placeholder-text::placeholder {
  color: #fff;
}
.new-qweet-input .q-field__native {
  font-size: 20px;
  line-height: 24px;
}
</style>
