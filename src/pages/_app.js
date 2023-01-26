import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { firebaseAuth } from "@/config/firebase";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        if (
          router.asPath.includes("/login") ||
          router.asPath.includes("/signup")
        ) {
          router.replace("/");
        }
      } else {
        setUser();
        router.replace("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar />
      <Component firebaseUser={user} {...pageProps} />
    </>
  );
}
