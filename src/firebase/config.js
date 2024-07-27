// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAo3ADwvCoj1fD2Lu_qlZOLhJhTGcD-xPc",
//   authDomain: "cashinout-18d06.firebaseapp.com",
//   projectId: "cashinout-18d06",
//   storageBucket: "cashinout-18d06.appspot.com",
//   messagingSenderId: "356235455181",
//   appId: "1:356235455181:web:ac6491b29a5d9dab801784",
//   measurementId: "G-M70VGGZZNV"
// };

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_APP_API_KEY,
//     authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_APP_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_APP_MESSAGING,
//     appId: import.meta.env.VITE_APP_APP_ID,
//   };  

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING,
  appId: import.meta.env.VITE_APP_APP_ID,
};

// Initialize Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
// create new user
export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
// create new user
export const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
// Logout user
export const logout = () => {
  return signOut(auth);
};
// getUserDetails
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      setCurrentUser(user)
    );
    return unsubscribe;
  }, []);
  return currentUser;
};