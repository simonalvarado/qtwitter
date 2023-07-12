import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj4fJmFbfmZxzkvzAI5xaQqL_EopgQ2us",
  authDomain: "qwitter-42834.firebaseapp.com",
  projectId: "qwitter-42834",
  storageBucket: "qwitter-42834.appspot.com",
  messagingSenderId: "547159129740",
  appId: "1:547159129740:web:56f382a371e2f49257c5a9"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db