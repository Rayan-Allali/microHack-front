import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { RxCheckCircled } from "react-icons/rx";

const register = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState("Are you a  ?");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleContinue = () =>
    setStepIndex(stepIndex < 2 ? stepIndex + 1 : stepIndex);

  return (
    <div className="flex h-screen w-full ">
      <div
        className="flex h-screen w-1/2 flex-col justify-end bg-cover bg-center p-10"
        style={{ backgroundImage: `url('/Assets/imgAuth${stepIndex}.png')` }}
      >
        <h1 className="text-5xl text-white">Fresh Products</h1>
        <p className="text-xl text-white opacity-50">
          lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem
          epsum lorem epsum lorem epsum lorem epsum
        </p>
      </div>

      <div className="flex h-screen w-1/2 flex-col items-center justify-between gap-5  bg-auth-bg px-10 py-10">
        <div className="flex w-full flex-col items-start justify-center">
          <h1 className="my-3 text-4xl font-bold  ">Register</h1>
          <div className="h-1 w-16 rounded bg-auth-btn" />
        </div>

        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-8 ">
          {stepIndex == 1 ? (
            <div className="flex w-full flex-col gap-8 ">
              <input
                className="h-14 rounded  px-5"
                placeholder="Username"
                type="text"
                id="username"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />
              <input
                className="h-14 rounded  px-5"
                placeholder="Email"
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                className="h-14 rounded  px-5"
                placeholder="Password"
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          ) : stepIndex == 2 ? (
            <div className="relative">
              <button
                className="block w-full rounded-md border border-gray-500 py-2 px-4 font-bold text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                onClick={toggleDropdown}
              >
                {role}
              </button>
              {isOpen && (
                <div className="absolute top-12 left-0 z-50 w-full rounded-md bg-white py-2 shadow-md">
                  <a
                    onClick={() => {
                      setIsOpen(false);
                      setRole("Farmer");
                    }}
                    className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Farmer
                  </a>
                  <a
                    onClick={() => {
                      setIsOpen(false);
                      setRole("Holeseler");
                    }}
                    className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Holeseler
                  </a>
                </div>
              )}
            </div>
          ) : (
            <></>
          )}

          <button
            onClick={stepIndex <= 3 ? handleContinue : handleSubmit}
            className="rounded-lg bg-auth-btn px-10 py-2 text-center text-xl text-white "
          >
            {stepIndex == 3 ? "Get Started" : "Continue"}
          </button>
        </form>
        {stepIndex == 1 && (
          <>
            <div className="flex items-center gap-2">
              <div className="h-1 w-10 bg-black" />
              <p>OR</p>
              <div className="h-1 w-10 bg-black" />
            </div>

            <div className="flex w-full justify-center gap-4">
              <button className="flex h-14 w-1/2 items-center justify-between rounded bg-white px-10 ">
                <FcGoogle size={30} /> Sign-In with Google
              </button>
              <button className="flex h-14 w-1/2 items-center justify-between rounded bg-white px-8 ">
                <BsFacebook size={30} color="#4267B2" /> Sign-In with Facebook
              </button>
            </div>
          </>
        )}

        <div className="flex gap-3">
          <p>Do you have an account Already?</p>
          <a className="font-bold text-auth-btn">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default register;
