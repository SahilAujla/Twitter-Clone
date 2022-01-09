// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB00cl0kUZzF0HU77kcj-IKG_lfELriKQI",
  authDomain: "twitter-clone-fcaa0.firebaseapp.com",
  projectId: "twitter-clone-fcaa0",
  storageBucket: "twitter-clone-fcaa0.appspot.com",
  messagingSenderId: "363322811895",
  appId: "1:363322811895:web:a468a1fb7df5e6774d7af2",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
