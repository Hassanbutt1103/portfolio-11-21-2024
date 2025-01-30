import React, { forwardRef } from "react";
import OutboundIcon from "@mui/icons-material/Outbound";
import Accordion from "./Accordian";
import { NavLink } from "react-router-dom";

const TeamSection = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col lg:flex-row items-stretch text-gray-800 justify-between font-sans px-8 lg:px-24 py-16 lg:py-32 h-auto lg:h-[600px] mt-24 rounded-2xl bg-[#f4e9ff]"
    >
      {/* Left Section */}
      <div className="flex flex-col justify-between lg:h-full w-full lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-3xl lg:text-4xl font-sans font-semibold leading-tight">
          Frequently Asked <br />
          Inquiries
        </h1>
        <p className="py-6 text-gray-600">
          Dedicated to our clients' success, we offer comprehensive <br />
          educational resources and expert guidance to address their <br />
          most pressing questions.
        </p>
        <div className="flex items-center gap-4">
          <NavLink
            to="/Contact"
            className="bg-gray-300 hover:bg-gray-400 transition text-black text-[16px] px-8 py-2 rounded-3xl"
          >
            Contact Support
          </NavLink>
          <NavLink to="/Contact" className="text-black hover:text-gray-600">
            <OutboundIcon fontSize="large" />
          </NavLink>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2">
        <Accordion />
      </div>
    </div>
  );
});

export default TeamSection;
