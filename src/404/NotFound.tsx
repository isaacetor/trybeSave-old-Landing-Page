import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HouseSimple, ArrowCircleLeft } from 'phosphor-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-neutral-900 to-neutral-950 text-white px-6 text-center">
      {/* Big 404 */}
      <h1 className="text-[8rem] font-extrabold mb-6 sm:text-[10rem]">404</h1>

      {/* Error message */}
      <p className="text-xl sm:text-2xl mb-4 text-neutral-300">
        Oops! The page you are looking for does not exist.
      </p>

      <p className="text-base sm:text-lg mb-8 text-neutral-400 max-w-md">
        It might have been removed, had its name changed, or is temporarily
        unavailable.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-light) text-white rounded-lg text-sm font-medium transition-colors">
          <HouseSimple
            size={20}
            weight="bold"
          />
          Go Home
        </Link>

        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors">
          <ArrowCircleLeft
            size={20}
            weight="bold"
          />
          Go Back
        </button>
      </div>

      {/* Decorative background circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/4 w-75 h-75 bg-emerald-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] right-1/3 w-100 h-100 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>
    </div>
  );
};

export default NotFound;
