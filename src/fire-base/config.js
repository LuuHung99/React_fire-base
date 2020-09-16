// Firebase App (the core Firebase SDK) is always required and must be listed first
import *as firebase from "firebase/app";

// Tạo tham chiếu lưu trữ từ storage
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQCVmkQ-21ePtbqIbKSBnvV4El6lWnDMg",
  authDomain: "react-firebase-8a07d.firebaseapp.com",
  databaseURL: "https://react-firebase-8a07d.firebaseio.com",
  projectId: "react-firebase-8a07d",
  storageBucket: "react-firebase-8a07d.appspot.com",
  messagingSenderId: "491818710838",
  appId: "1:491818710838:web:ed62eb7fed8815f828a597",
  measurementId: "G-WE01V0B1ML"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
