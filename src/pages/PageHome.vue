<template>
  <q-page>
    <div class="q-py-md q-px-md row items-end q-col-gutter-md">
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
    <q-separator dark />
    <q-list separator dark>
      <q-item v-for="qweet in qweets" :key="qweet.id">
        <q-item-section class="q-pt-sm" top avatar>
          <q-avatar size="48px">
            <img
              src="https://pbs.twimg.com/profile_images/1415466062770999296/YVthEL37_400x400.jpg"
            />
          </q-avatar>
        </q-item-section>

        <q-item-section class="q-pt-sm">
          <div class="q-pb-xs row">
            <div class="col-xs-shrink col-sm-shrink">
              <q-item-label
                class="text-weight-bold text-subtitle1 qweet-username q-fs-15"
                lines="1"
                >{{ qweet.username }}</q-item-label
              >
            </div>
            <div class="col-xs-shrink col-sm-shrink q-pl-sm">
              <q-item-label
                class="text-body1 text-grey text-weight-light qweet-username q-fs-15"
                lines="1"
                >{{ qweet.handle }}</q-item-label
              >
            </div>
            <div class="col-sm-shrink">
              <q-item-label
                class="q-pl-sm q-pr-sm text-body1 text-grey text-weight-light q-fs-15"
                lines="1"
                >·</q-item-label
              >
            </div>
            <div class="col-sm-shrink">
              <q-item-label
                class="text-body1 text-grey text-weight-light q-fs-15"
                lines="1"
                >{{ qweet.date | relativeDate }}</q-item-label
              >
            </div>
          </div>
          <q-item-label class="q-fs-15 q-pb-sm">
            {{ qweet.content }}
          </q-item-label>
          <div class="row justify-between qweet-icons">
            <q-btn color="grey" icon="far fa-comment" size="sm" flat round />
            <q-btn color="grey" icon="fas fa-retweet" size="sm" flat round />
            <q-btn color="grey" icon="fas fa-heart" size="sm" flat round />
            <q-btn color="grey" icon="fas fa-trash" size="sm" flat round />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { formatDistance } from "date-fns";

export default {
  name: "PageHome",
  data() {
    return {
      newQweetContent: "",
      qweets: [
        {
          id: 1,
          username: "Simon no",
          handle: "@simonalvarado",
          content: "Tweet 1",
          date: "1683262977796",
        },
        {
          id: 2,
          username: "Alednac",
          handle: "@onsaric",
          content: "Tweet 2",
          date: "1683262994528",
        },
      ],
    };
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date());
    },
  },
};
const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1));
</script>
<style>
@media screen and (max-width: 600px) {
  .qweet-username {
    max-width: 100px;
  }
}
.qweet-username {
  max-width: 340px;
}

.input-placeholder-text::placeholder {
  color: #fff;
}
.new-qweet-input .q-field__native {
  font-size: 20px;
  line-height: 24px;
}

.q-fs-15 {
  font-size: 15px;
}

.qweet-icons {
  margin-left: -5px;
}
</style>
