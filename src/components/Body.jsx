import React from "react";
import img from "../assets/Mine.png";
import OutboundIcon from "@mui/icons-material/Outbound";

const Background = ({ teamRef }) => {
  const scrollToTeam = () => {
    teamRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between font-sans text-gray-300 sm:px-24 sm:py-12 py-10 px-6 space-y-8 sm:space-y-0">
      {/* Text Section */}
      <div className="sm:text-4xl text-2xl flex flex-col sm:items-start items-center">
        <h1 className="text-center sm:text-left">
          <h2 className="sm:mb-4 mb-2">Next-Gen</h2>
          <span className="text-yellow-200 border px-4 border-yellow-200 rounded-lg">
            Creativity
          </span>{" "}
          Tech Solution
        </h1>
        <p className="text-sm sm:text-base sm:py-3 sm:mt-4 sm:leading-relaxed leading-relaxed py-6 sm:py-3 text-center sm:text-left">
          In the world of interactive marketing, we’re your <br />
          trusted partner! With tailored strategies and creative <br />
          approaches, we’ll ensure your brand stands out and <br />
          captures the attention it deserves.
        </p>
        <div className="flex space-x-4 sm:mt-6 mt-4">
          <button
            onClick={scrollToTeam}
            className="bg-gray-300 text-black text-sm sm:text-base px-6 py-2 rounded-3xl font-medium"
          >
            Get Started
          </button>
          <button
            onClick={scrollToTeam}
            className="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600"
          >
            <OutboundIcon />
          </button>
        </div>
      </div>

      {/* Image Section with Overlayed Text */}
      <div className="relative sm:w-1/3 w-full h-auto flex justify-center">
        <img
          src={img}
          alt="Decorative"
          className="w-full sm:w-auto sm:max-w-xs h-auto select-none pointer-events-none"
        />
        {/* Overlay Text */}
        <p className="absolute bg-[#261A33] text-white rounded-xl px-4 py-2 text-sm sm:text-base sm:border-transparent shadow-lg sm:shadow-slate-800 transform -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 text-center">
          Artistic and <br />
          Cutting-Edge
        </p>
      </div>
    </div>
  );
};

export default Background;
