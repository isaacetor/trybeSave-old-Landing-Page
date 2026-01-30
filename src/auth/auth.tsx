import React, { useState } from 'react';
import FloatingIcons from '../reusables/FloatingIcons';
import { Envelope, Lock, User, GoogleLogo, FacebookLogo } from 'phosphor-react';
import { Link } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div
      title="Auth"
      className="relative min-h-screen bg-linear-to-br from-neutral-900 to-neutral-800 text-white overflow-hidden">
      {/* Floating icons in the background */}
      <FloatingIcons />

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Brand Name */}
        <Link to="/">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-(--primary)">
            TrybeSave
          </h1>
        </Link>

        <div className="relative w-full max-w-md bg-neutral-900 bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12">
          {/* Tabs */}
          <div className="flex mb-8 pb-4 justify-center gap-6 border-b border-gray-700">
            <button
              onClick={() => setIsSignUp(false)}
              className={`pb-2 font-semibold ${
                !isSignUp
                  ? 'border-b-2 border-(--primary) text-(--primary)'
                  : 'text-gray-300'
              } transition-colors`}>
              Sign In
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`pb-2 font-semibold ${
                isSignUp
                  ? 'border-b-2 border-(--primary) text-(--primary)'
                  : 'text-gray-300'
              } transition-colors`}>
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {isSignUp && (
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-(--primary) transition"
                />
              </div>
            )}

            <div className="relative">
              <Envelope
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-(--primary) transition"
              />
            </div>

            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-(--primary) transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-(--primary) hover:bg-(--primary-light) transition-colors text-white font-semibold shadow-lg">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          {/* Extra links */}
          {!isSignUp && (
            <div className="text-sm mt-4 text-gray-400 text-center">
              <Link
                to="forget-password"
                className="hover:text-(--primary) transition-colors">
                Forgot Password?
              </Link>
            </div>
          )}

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="px-3 text-gray-400">or continue with</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Social buttons in a row */}
          <div className="flex justify-center gap-4">
            <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-(--primary) hover:bg-(--primary-light) transition-colors text-white font-semibold">
              <GoogleLogo
                size={20}
                weight="bold"
              />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-(--primary) hover:bg-(--primary-light) transition-colors text-white font-semibold">
              <FacebookLogo
                size={20}
                weight="bold"
              />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
