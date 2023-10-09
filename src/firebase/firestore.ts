import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYXNhlHADqTUwevgCqgxtlw55Z5hMJt1c",
  authDomain: "tmp-feedback-test.firebaseapp.com",
  projectId: "tmp-feedback-test",
  storageBucket: "tmp-feedback-test.appspot.com",
  messagingSenderId: "1017977222799",
  appId: "1:1017977222799:web:8661c107430d3cbfbae2fa",
  measurementId: "G-B6LWZVP90N",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestoreApp = getFirestore(firebaseApp);

export { firebaseApp, firestoreApp };
