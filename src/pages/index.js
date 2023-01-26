import { getCurrentUser } from "@/apis/auth";
import Link from "next/link";

export default function Home() {
  const currentUser = getCurrentUser();

  return (
    <div className="Home">
      {currentUser ? (
        `Welcome ${currentUser.email}`
      ) : (
        <div className="">
          <Link href="/login">Please sign in to Continue</Link>
        </div>
      )}
    </div>
  );
}
