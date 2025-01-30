import React from "react";
import img from "../../../assets/team-3393037.jpg";
import ContactEmail from "./ContactEmail";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-black">
        {/* Background Image */}
        <img
          src={img}
          alt="Team working together"
          className="bg-cover w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-9xl font-bold bg-opacity-40 text-white p-4 rounded-2xl text-center">
            Contact Us
          </h2>
        </div>
      </div>

      {/* Contact Email Form */}
      <div className="mt-10 px-4 sm:px-6 md:px-10 lg:px-24">
        <ContactEmail />
      </div>
    </div>
  );
};

export default Contact;
