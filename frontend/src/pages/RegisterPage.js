import React, { useState } from "react";
import backgroundImage from "../assests/constants/images/background.jpg";
import loginImage from "../assests/constants/images/reg.jpg";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import { UserIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        `https://self-assistant-ai-web-app-backend.vercel.app/user/register`,
        {
          name,
          email,
          password,
        }
      );

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      alert(response?.data?.message);
    } catch (error) {
      if (error?.response?.data?.code === 13001) {
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
          <form className="mr-10 ml-4" onSubmit={handleSubmit}>
            <p className="font-sans text-gray-400 text-xl text-center font-semibold tracking-widest mb-5">
              REGISTER!
            </p>

            <TextBox
              placeholder="Enter your name"
              label="Name"
              type="text"
              Icon={UserIcon}
              value={name}
              setValue={setName}
              required={true}
            />

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

            <TextBox
              placeholder="Re enter your password"
              label="Confirm Password"
              type="password"
              Icon={LockClosedIcon}
              value={confirmPassword}
              setValue={setConfirmPassword}
              required={true}
            />

            <Button name="Sign Up" />

            <p className="text-gray-400 mt-4 text-center">
              Do have an account?{" "}
              <Link to="/login" className="text-indigo-700">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
