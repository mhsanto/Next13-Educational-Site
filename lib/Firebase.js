import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "educational-website-f6ac3.firebaseapp.com",
  projectId: "educational-website-f6ac3",
  storageBucket: "educational-website-f6ac3.appspot.com",
  messagingSenderId: "681231021707",
  appId: process.env.FIREBASE_APPID,
  measurementId: "G-V2HPE0CTHP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const GoogleProvider = new GoogleAuthProvider(app)