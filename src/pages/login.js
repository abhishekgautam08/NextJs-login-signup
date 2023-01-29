import React, { useEffect } from "react";
import LoginContainer from "@/containers/Login";
import { useRouter } from "next/router";
import { getCurrentUser } from "@/apis/auth";

function Login() {
  const router = useRouter();
  const currentUser = getCurrentUser();

  useEffect(() => {
    if (currentUser) {
      router.replace("/");
    }
  }, [currentUser]);

  return currentUser ? <>Redirecting...</> : <LoginContainer />;
}

export default Login;
