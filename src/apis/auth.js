import { firebaseAuth } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const loginUser = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.log({ error });
  }
};

export const signupUser = async ({ email, password }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    const user = userCredential.user;
    return user;
  } catch (error) {
    console.log({ error });
  }
};

export const logoutUser = () => {
  return signOut(firebaseAuth);
};

export const getCurrentUser = () => {
  return firebaseAuth.currentUser;
};
