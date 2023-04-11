import React, { useState } from "react";
import loginImg from "../assets/loginImage.png";
import figmaImg from "../assets/figma.png";
import googleImg from "../assets/google.png";
import "./LoginPage.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email} Password: ${password}`);
    // Handling the form submission
  };
  return (
    <div className="flex justify-center align-middle">
      <div className="loginPage flex pt-[124px] justify-center align-middle mr-auto ml-auto">
        <img
          src={loginImg}
          className="loginPage__image flex justify-end max-w-[50%] p-[68px]"
          alt="logo"
        />
        <div className="loginPage__content flex flex-col items-start flex-[1] text-[color:var(--teflon)] pl-2 ">
          <h1 className="font-light text-4xl leading-[42px];">
            Great to have you here!
          </h1>
          <p className="text-[15px] leading-[18px] mt-3">
            You can access your workspace.
          </p>
          <div className="externalLogins w-[248px] mt-12 mb-10">
            <a href="#">
              <img src={figmaImg} alt="" />
            </a>
            <a href="#">
              <img src={googleImg} alt="" />
            </a>
          </div>
          <div className="loginPage_form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email"></label>
              <input
                type="email"
                placeholder="Work email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="password"></label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="loginPage__btn mb-1 mt-2.5 p-2.5 relative w-full text-lg text-center cursor-pointer bg-[color:#8cc2fb] text-white"
              >
                Login
              </button>
              <div className="text-center">
                <a className="loginPage__sso cursor-pointer" href="#">
                  Login with SSO
                </a>
              </div>
              <div className="mt-10 text-left text-[#419bf9] text-sm">
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    navigate("/forgot-password");
                  }}
                >
                  Forgot Password?
                </span>
                <h4>
                  <span className=" mt-1 text-[15px] text-[#554d56]">
                    No account yet?{" "}
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    Sign up.
                  </span>
                </h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
