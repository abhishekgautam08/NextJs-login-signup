import React, { useState } from "react";
import Image from "next/image";
import BgImg from "../../public/image-1.jpg";
import { getCurrentUser, loginUser } from "@/apis/auth";
import { useRouter } from "next/router";
import Link from "next/link";

const LoginContainer = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = loginUser({
      email: credentials.email,
      password: credentials.password,
    });

    if (user) {
      router.replace("/");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container">
        <div className="row m-5 no-gutters shadow-lg">
          <div
            // className="col-md-6 d-none d-md-block"
            className="col d-none d-sm-block"
            // style={{ backgroundColor: "red" }}
          >
            <Image
              src={BgImg}
              alt=""
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            // className="col-md-6 bg-white p-5"
            className="col"
          >
            <div className="card">
              <form onSubmit={handleSubmit}>
                <h2> Login Your Account</h2>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={credentials.email}
                    onChange={onChange}
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={credentials.password}
                    onChange={onChange}
                    name="password"
                    id="password"
                    autoComplete="auto"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <br />
                <br />
                <Link href="/signup">Create a account</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginContainer;
