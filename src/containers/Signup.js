import Image from "next/image";
import BgImg from "../../public/image-1.jpg";
import React, { useState } from "react";
import { signupUser } from "@/apis/auth";
import { useRouter } from "next/router";
import Link from "next/link";

const SignupContainer = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signupUser({
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
          >
            <Image src={BgImg} alt="" />
          </div>
          <div
            // className="col-md-6 bg-white p-5"
            className="col"
          >
            <div className="card">
              <form onSubmit={handleSubmit}>
                <h2>Create a Account</h2>
                <div className="mb-3">
                  <label htmlFor="username">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                    onChange={onChange}
                    name="username"
                    value={credentials.username}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={onChange}
                    value={credentials.email}
                    name="email"
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
                    id="password"
                    placeholder="Password"
                    onChange={onChange}
                    name="password"
                    minLength={5}
                    required
                    autoComplete="auto"
                    value={credentials.password}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
                <br />
                <br />
                <Link href="/login">Already have an account ?</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupContainer;
