import React, { useState, useEffect } from "react";
import backgroundImage from "../assests/constants/images/background.jpg";
import loginImage from "../assests/constants/images/login.png";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if there are saved credentials in local storage
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRemember(true);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`https://self-assistant-ai-web-app-backend.vercel.app/user/login`, {
        email,
        password,
      });

      localStorage.setItem("email", email);
      // Save password in local storage if remember me is checked
      if (remember) {
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("password");
      }

      navigate("/chat");
    } catch (error) {
      if (error?.response?.data?.code === 13003 || error?.response?.data?.code === 13004) {
        alert(error?.response?.data?.message);
      } else {
        alert(error?.response?.data?.message);
      }
    }
  };

  return (
    <div
      className="flex justify-center items-center bg-cover h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex justify-center items-center w-4/5 h-4/5 m-4 p-4 bg-white rounded-xl">
        <div className="flex justify-center items-center w-3/5 mr-10 border-r-2 border-gray-300">
          <img src={loginImage} alt="Login" />
        </div>
        <div className="w-2/5">
          <form className="mr-10 ml-4" onSubmit={handleLogin}>
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
              required={true}
            />

            <TextBox
              placeholder="Enter your password"
              label="Password"
              type="password"
              Icon={LockClosedIcon}
              value={password}
              setValue={setPassword}
              required={true}
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
