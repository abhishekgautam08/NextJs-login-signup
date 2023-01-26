import { getCurrentUser, logoutUser } from "@/apis/auth";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  // const router = useRouter();
  const logout = async () => {
    logoutUser();
    // router.replace("/login");
  };

  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            href="#"
            style={{ color: "white", fontSize: 35 }}
          >
            Navbar
          </Link>

          {getCurrentUser() && (
            <button className="btn btn-info btn-lg" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
