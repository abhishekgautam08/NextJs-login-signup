import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDO-8tptN_YgsaH22l0FkFVZFcGjJWbBIc",
  authDomain: "next-firebase-task-1.firebaseapp.com",
  projectId: "next-firebase-task-1",
  storageBucket: "next-firebase-task-1.appspot.com",
  messagingSenderId: "371412710799",
  appId: "1:371412710799:web:00f5b45c2084e17f6147fa",
  measurementId: "G-PPEBXM6RL3",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const firebaseAuth = getAuth();

export { firebaseAuth };
