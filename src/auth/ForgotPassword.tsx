import React from 'react';
import FloatingIcons from '../reusables/FloatingIcons';
import { Envelope } from 'phosphor-react';
import { Link } from 'react-router-dom';

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-neutral-900 to-neutral-800 text-white overflow-hidden">
      {/* Floating icons background */}
      <FloatingIcons />

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Brand */}
        <Link to="/">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-(--primary)">
            TrybeSave
          </h1>
        </Link>

        <div className="w-full max-w-md bg-neutral-900 bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Forgot Password
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Enter your email below and we’ll send you a link to reset your
            password.
          </p>

          <form className="space-y-6">
            <div className="relative">
              <Envelope
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-(--primary) transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-(--primary) hover:bg-(--primary-light) transition-colors text-white font-semibold shadow-lg">
              Send Reset Link
            </button>
          </form>

          {/* Back to Sign In */}
          <div className="text-sm mt-4 text-gray-400 text-center">
            Remembered your password?{' '}
            <Link
              to="/auth"
              className="text-(--primary) hover:underline transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
