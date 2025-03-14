import React from "react";
import img from "../../../assets/team-3393037.jpg";
import ContactEmail from "./ContactEmail";
import Header from "../../Header";
import Footer from "../../Footer/Footer";

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <Header />

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

      {/* Contact Email Form Section */}
      
        <ContactEmail />
      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
