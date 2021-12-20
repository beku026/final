import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
 apiKey: "AIzaSyARxdpWGuebrmzq8_LBnUl7KvBTavqM-2E",
  authDomain: "project-wot-50745.firebaseapp.com",
  projectId: "project-wot-50745",
  storageBucket: "project-wot-50745.appspot.com",
  messagingSenderId: "668331022457",
  appId: "1:668331022457:web:361fa50d89dd07a8aedca8"
};

const fire = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(fire)
export default fire;