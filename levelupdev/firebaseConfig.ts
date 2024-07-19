import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYSY33rk_TYXhOWUAthWO9bxuXQsJh0kQ",
  authDomain: "levelupdev-68b17.firebaseapp.com",
  projectId: "levelupdev-68b17",
  storageBucket: "levelupdev-68b17.appspot.com",
  messagingSenderId: "571468357244",
  appId: "1:571468357244:web:e254a9fa1e19eee9a273f9"
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FB_Config = {
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
  appId: firebaseConfig.appId
};

// Initialize Firebase
const app = initializeApp(FB_Config);

// Initialize Firebase services
const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);
// const analytics = getAnalytics(app);

// export { auth, db, storage, analytics };

export { auth }
