import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const authPage = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [stepIndex, setStepIndex] = useState(1);
  const [role, setRole] = useState("");
  const [businessSize, setBusinessSize] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleSwitchSignIn = (event) => {
    setIsRegister(false);
  };

  return isRegister ? (
    //register component
    <div
      className={`flex ${
        isRegister ? "flex-row" : "flex-row-reverse"
      } h-screen w-screen bg-white`}
    >
      <div className="w-1/2 h-full bg-auth-bg px-5 py-3">
        <h1>{isRegister ? "Register" : "Sign In"}</h1>
        <div></div>
        <form onSubmit={handleSubmit} className="flex-col w-full ">
          <div>
            <input
              placeholder="email"
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div>
            <input
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-auth-btn rounded-lg text-center  mx-10"
          >
            Get Started
          </button>
        </form>
        <div>OR</div>
        <div className="flex items-center justify-center">
          <button className="bg-white px-5 mx-3 ">
            Google
            <FcGoogle className="inline-block" />
          </button>
          <button className="bg-white px-5 mx-3">
            Facebook
            <BsFacebook className="inline-block" />
          </button>
        </div>
        <div>
          <p>Do you have an account?</p>
          <a onClick={handleSwitchSignIn}>SignIn</a>
        </div>
      </div>
      <div
        className="h-screen w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url('/Assets/imgAuth${stepIndex}.png')` }}
      >
        <h1>Fresh Products</h1>
        <p>lorem epsum</p>
      </div>
    </div>
  ) : (
    //SignIn component
    <div>SignInPage</div>
  );
};

export default authPage;
