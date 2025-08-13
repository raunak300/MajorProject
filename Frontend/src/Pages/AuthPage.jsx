import React, { useState } from "react";
import Nav from "../Components/Nav"; // adjust the path to where your Nav is

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-purple-900 to-black text-white">
      

      {/* Auth Card Section */}
      <div className="flex-grow flex items-center justify-center pt-24">
        <div className="bg-black/70 backdrop-blur-lg border border-purple-500 rounded-xl shadow-lg p-8 w-full max-w-md">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-6 text-purple-300">
            {isLogin ? "Welcome Back!" : "Join UNMUTE"}
          </h2>
          <p className="text-center text-gray-400 mb-8">
            {isLogin
              ? "Login to continue expressing yourself anonymously."
              : "Create an account to start your journey with us."}
          </p>

          {/* Form */}
          <form className="flex flex-col gap-4">
            
            <input
              type="text"
              placeholder="Vent ID"
              className="p-3 rounded-md bg-purple-800/30 border border-purple-500/50 focus:outline-none focus:border-purple-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded-md bg-purple-800/30 border border-purple-500/50 focus:outline-none focus:border-purple-400"
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-3 rounded-md bg-purple-800/30 border border-purple-500/50 focus:outline-none focus:border-purple-400"
              />
            )}
            <button className="bg-purple-600 hover:bg-purple-500 transition rounded-md p-3 font-semibold">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* Switch Auth Mode */}
          <div className="text-center mt-6 text-sm text-gray-400">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-purple-400 hover:underline"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-purple-400 hover:underline"
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
