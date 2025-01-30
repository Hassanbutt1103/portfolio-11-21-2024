import React from "react";
import bg from "../../assets/bg-4.png";
import Email from "./Email";
import Icon from "./Icons";

const Footer = () => {
  return (
    <div className="relative bg-cover bg-center">
      {/* Background Image */}
      <img
        src={bg}
        alt="Footer Background"
        className="w-full h-[570px] sm:h-96 object-cover select-none pointer-events-none"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col lg:flex-row justify-between items-start lg:items-center font-sans text-gray-300 px-8 lg:px-24 py-12 lg:py-6">
        {/* Left Section: Community Update */}
        <div className="mb-8 lg:mb-0">
          <h1 className="text-2xl font-semibold mb-4">Community Update</h1>
          <p className="text-gray-400 mb-6">
            A delightful peace has filled my soul <br />
            completely. I find myself inclined toward drawing.
          </p>
          <Email />
        </div>

        {/* Right Section: Follow Us */}
        <div>
          <h1 className="text-2xl font-semibold mb-4">Follow Us</h1>
          <p className="text-gray-400 mb-6">
            A profound tranquility has enveloped my entire <br />
            being.
          </p>
          <div className="mt-3">
            <Icon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
