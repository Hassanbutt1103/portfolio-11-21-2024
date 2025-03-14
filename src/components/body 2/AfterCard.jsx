import React from "react";

const AfterCard = () => {
  const metrics = [
    { label: "Customer Loyalty", percentage: 90, height: "h-60" },
    { label: "Budget Expansion", percentage: 50, height: "h-40" },
    { label: "Profitability Ratio", percentage: 80, height: "h-56" },
    { label: "Service Requirement", percentage: 80, height: "h-56" },
    { label: "Agency Progress", percentage: 16, height: "h-14" }, 
  ];

  return (
    <div className="font-sans px-6 sm:px-24 mt-20 w-full ">
      {/* Bar Section */}
      <div className="flex justify-between items-end space-x-1 sm:space-x-4 w-full">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center w-full">
            {/* Percentage Display */}
            <p className="font-bold text-2xl sm:text-4xl text-gray-800">
              {metric.percentage}%
            </p>
            {/* Bar */}
            <div
              className={`w-8 sm:w-16 bg-[#261A33] ${metric.height} mx-auto`}
            ></div>
            {/* Label */}
            <p className="text-sm sm:text-base mt-2 text-gray-600">
              {metric.label}
            </p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-1 sm:h-1 bg-gray-300 mt-8"></div>
    </div>
  );
};

export default AfterCard;
