import React, { useState } from "react";
import backgroundImage from "../assests/constants/images/background.jpg";
import loginImage from "../assests/constants/images/login.png";
import TextBox from "../components/TextBox";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div
      className="bg-cover h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="w-1/2 hidden md:block h-screen ml-8">
          <img
            src={loginImage}
            alt="Login"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-opacity-80">
          <form className="w-full max-w-md p-8 bg-white rounded shadow-md">
            <h2 className="text-2xl font-serif text-center font-bold mb-8 text-yellow-400">
              Login to your account
            </h2>
            <div className="mb-4 w-full">
              <TextBox
                placeholder="Enter your email"
                label="Email"
                type="text"
                Icon={EnvelopeIcon}
                value={email}
                setValue={setEmail}
              />
            </div>
            <div className="mb-6 w-full">
              <TextBox
                placeholder="Enter your password"
                label="Password"
                type="password"
                Icon={LockClosedIcon}
                value={password}
                setValue={setPassword}
              />
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 rounded mr-2"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <label className="text-gray-700">Remember me</label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            <p className="text-gray-700 mt-4 text-center">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-600">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
