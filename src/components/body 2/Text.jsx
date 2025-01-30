import React from "react";

const Text = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:mt-56 mt-7 justify-between font-sans px-6 sm:px-24 py-6 text-[#261A33] space-y-6 sm:space-y-6 sm:-mb-40 -mb-48">
      {/* Heading Section */}
      <div className="text-2xl sm:text-4xl font-bold text-center sm:text-left">
        Delivering Exceptional Solutions <br />
        Through Innovative Thinking
      </div>

      {/* Description Section */}
      <div className="text-sm sm:text-base font-normal sm:px-12 text-center sm:text-left leading-relaxed">
        We are a passionate team of digital marketers <br />
        focused on elevating businesses online. With deep industry <br />
        expertise and an eye on the latest trends, we harness innovative <br />
        technology to achieve remarkable results.
      </div>
    </div>
  );
};

export default Text;
