<template>
    <q-page class="relative-position">
      <q-scroll-area class="absolute fullscreen">
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
            @click="newQweet"
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

      <q-list 
        separator 
        dark
      >
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item 
            v-for="qweet in qweets"
            :key="qweet.id"
          >
            <q-item-section class="q-pt-sm" top avatar>
              <q-avatar size="48px">
                <img
                  :src="qweet.avatar"
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
                    >@{{ qweet.handle }}</q-item-label
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
                    >{{ formatTime(qweet.date) }}</q-item-label
                  >
                </div>
              </div>
              <q-item-label class="q-fs-15 q-pb-sm content-wrap">
                {{ qweet.content }}
              </q-item-label>
              <div class="row justify-between qweet-icons">
                <q-btn color="grey" icon="far fa-comment" size="sm" flat round />
                <q-btn color="grey" icon="fas fa-retweet" size="sm" flat round />
                <q-btn color="grey" icon="fas fa-heart" size="sm" flat round />
                <q-btn
                  color="grey"
                  icon="fas fa-trash"
                  size="sm"
                  flat
                  round
                  @click="deleteQweet(qweet)"
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
      </q-scroll-area>
    </q-page>
</template>

<script>
import db from '../boot/firebase'
import { collection, query, onSnapshot, orderBy, addDoc, doc, deleteDoc } from 'firebase/firestore'

export default {
  name: "PageHome",
  data() {
    return {
      newQweetContent: '',
      qweets: [
      ],
      dense: false,
    };
  },
  mounted() {
    //local state changes for when there is an update in cloud data, in this way all change are live
    const q = query(collection(db, "qweets"), orderBy("date"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let qweetChange = change.doc.data();
        qweetChange.id = change.doc.id;
        if (change.type === "added") {
            console.log("New qweet: ", change.doc.data());
            this.qweets.unshift(qweetChange)
        }
        if (change.type === "modified") {
            console.log("Modified qweet: ", change.doc.data());
        }
        if (change.type === "removed") {
            console.log("Removed qweet: ", change.doc.data());
            let index = this.qweets.findIndex(qweet => qweet.id === qweetChange.id)
            this.qweets.splice(index, 1)
        }
      });
    });
  },
  methods: {
    formatTime(timestamp) {
      const now = Date.now();
      const diff = now - timestamp;
      const minute = 1000 * 60;
      const hour = minute * 60;
      const day = hour * 24;
      if (diff < minute) {
        return "Ahora";
      } else if (diff < hour) {
        return `${Math.floor(diff / minute)}min`;
      } else if (diff < day) {
        return `${Math.floor(diff / hour)}h`;
      } else {
        return `${Math.floor(diff / day)}d`;
      }
    },
    newQweet() {
    const docRef = addDoc(collection(db, "qweets"), {
        username: "Simon no",
        handle: "simonalvarado",
        content: this.newQweetContent,
        date: Date.now(),
        avatar: "https://pbs.twimg.com/profile_images/1415466062770999296/YVthEL37_400x400.jpg",
      });
      console.log("Document written with ID: ", docRef.id);
      this.newQweetContent = "";
    },
    deleteQweet(qweet) {
      deleteDoc(doc(db, "qweets", qweet.id));
    },
  },
};
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

.content-wrap {
  word-wrap: break-word;
  flex-wrap: wrap;
}

.qweet-icons {
  margin-left: -5px;
}
</style>
