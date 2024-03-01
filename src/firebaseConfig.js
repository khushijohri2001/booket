
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyA9vBdF1xaGfB2u8nL4F-k9aY9ihvtAqZw",
  authDomain: "booklet-c1aa8.firebaseapp.com",
  projectId: "booklet-c1aa8",
  storageBucket: "booklet-c1aa8.appspot.com",
  messagingSenderId: "873972178420",
  appId: "1:873972178420:web:3017abd2401ca446ffada1",
  measurementId: "G-TBT16XES8E"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);