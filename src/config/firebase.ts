import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDinWFYppTfTbqorhQnJ95Wn2eBCELYOas",
  authDomain: "scamskibidi.firebaseapp.com",
  projectId: "scamskibidi",
  storageBucket: "scamskibidi.firebasestorage.app",
  messagingSenderId: "722508386345",
  appId: "1:722508386345:web:a6b625e513529a4b84cc38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app; 