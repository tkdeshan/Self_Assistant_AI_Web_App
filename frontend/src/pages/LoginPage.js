import React, { useState } from "react";
import backgroundImage from "../assests/constants/images/background.jpg";
import loginImage from "../assests/constants/images/login.png";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div
      className="flex justify-center items-center bg-cover h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex justify-center items-center w-4/5 h-4/5 m-4 p-4 bg-white rounded-xl">
        <div className="flex justify-center items-center w-3/5 mr-10 border-r-2 border-gray-300">
          <img src={loginImage} alt="Login" />
        </div>
        <div className="w-2/5">
          <form className="mr-10 ml-4">
            <p className="font-sans text-gray-400 text-xl text-center font-semibold tracking-widest mb-5">
              LOGIN TO YOUR ACCOUNT!
            </p>

            <TextBox
              placeholder="Enter your email"
              label="Email"
              type="text"
              Icon={EnvelopeIcon}
              value={email}
              setValue={setEmail}
            />

            <TextBox
              placeholder="Enter your email"
              label="Email"
              type="password"
              Icon={LockClosedIcon}
              value={password}
              setValue={setPassword}
            />

            <div className="flex items-center mb-5">
              <input
                type="checkbox"
                id="checkbox"
                className="h-4 w-4 rounded mr-2 accent-[#0402a8]"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <label htmlFor="checkbox" className="text-gray-400">
                Remember me
              </label>
            </div>

            <Button name="Sign In" />

            <p className="text-gray-400 mt-4 text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-indigo-700">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
