import { getCurrentUser } from "@/apis/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const currentUser = getCurrentUser();
    const router = useRouter();

    useEffect(() => {
      if (!currentUser) {
        router.replace("/login");
      }
    }, [currentUser]);

    return currentUser ? (
      <Component currentUser={currentUser} {...props} />
    ) : (
      <>Redirecting...</>
    );
  };
}
