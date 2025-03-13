import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-5xl font-bold sm:text-9xl text-[#502c73]">Sorry!</h1>
      <h2 className="text-3xl sm:text-5xl font-semibold mt-4 text-gray-800">
      Page on working
      </h2>
      <p className="text-lg sm:text-xl text-gray-500 mt-2">
        The page you're looking for doesn't exist.
      </p>
      
      <Link to="/" className="mt-6 px-6 py-3 bg-[#502c73] text-white text-lg font-medium rounded-lg shadow-md hover:bg-[#a68ac6] transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
