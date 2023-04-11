import React, { useState } from "react";
import forgotPass from "../assets/forgotPwdImage.png";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset for Email: ${email}`);
    // Handle form submission
  };

  return (
    <div className="flex justify-center align-middle mr-8">
      <div className="forgotPage flex pt-[124px] justify-center align-middle mr-auto ml-auto">
        <img
          className=" forgotPage__image flex justify-end max-w-[50%] flex-[1] pr-[68px]"
          src={forgotPass}
          alt="logo"
        />
        <div className="forgotPage__content flex flex-col items-start flex-[1] text-[color:var(--teflon)] pl-1">
          <h1 className="font-light text-4xl leading-[42px]">
            Forgot your password?
          </h1>

          <div className="forgotPage__form">
            <form onSubmit={handleSubmit}>
              <p className=" mt-4 text-[15px] leading-[18px] align-middle">
                No worries, we'll send you an email with instructions to reset
                your password.
              </p>
              <label htmlFor="email"></label>
              <input
                type="email"
                placeholder="Work email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="mb-1 mt-2.5 p-2.5 relative w-full text-lg text-center cursor-pointer bg-[color:#419bf9] text-white"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
