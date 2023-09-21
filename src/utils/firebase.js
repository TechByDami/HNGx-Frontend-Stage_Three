import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAkErDlwn_RoiS5EX-yC2Fayy1deKXQeRk",
  authDomain: "hngx-image-gallery.firebaseapp.com",
  projectId: "hngx-image-gallery",
  storageBucket: "hngx-image-gallery.appspot.com",
  messagingSenderId: "788602760930",
  appId: "1:788602760930:web:da51c401852a231fe6b8bb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)