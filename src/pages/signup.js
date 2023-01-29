import React from "react";
import SignupContainer from "@/containers/Signup";
import { useRouter } from "next/router";
import { getCurrentUser } from "@/apis/auth";

function Signup() {
  const router = useRouter();
  const currentUser = getCurrentUser();

  useEffect(() => {
    if (currentUser) {
      router.replace("/");
    }
  }, [currentUser]);

  return currentUser ? <>Redirecting...</> : <SignupContainer />;
}

export default Signup;
