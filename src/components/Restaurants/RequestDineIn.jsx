import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaGift } from "react-icons/fa6";

const RequestDineIn = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <div className="h-screen">
      <div className="border border-gray-300 shadow-sm bg-white rounded-xl px-4 py-5 flex flex-col sm:flex-row items-center gap-2">
        <button
          className={`rounded py-2 px-4 flex items-center gap-2 text-md w-full sm:w-auto ${
            activeButton === "completed"
              ? "bg-gray-300 text-gray-600"
              : "bg-white text-gray-500 hover:bg-gray-200"
          }`}
          onClick={() => handleButtonClick("completed")}
        >
          <FaGift
            className={`rounded-full p-1 shadow-md text-[1.5rem] ${
              activeButton === "completed"
                ? "bg-green-700 text-white"
                : "bg-red-600 text-white"
            }`}
          />
          Upcoming
        </button>
        <button
          className={`rounded py-2 px-4 flex items-center gap-2 text-md w-full sm:w-auto ${
            activeButton === "onProgress"
              ? "bg-gray-300 text-gray-600"
              : "bg-white text-gray-500 hover:bg-gray-200"
          }`}
          onClick={() => handleButtonClick("onProgress")}
        >
          <AiOutlineClockCircle
            className={`rounded-full p-1 shadow-md text-[1.5rem] ${
              activeButton === "onProgress"
                ? "bg-orange-500 text-white"
                : "text-orange-500 bg-white"
            }`}
          />
          History
        </button>
      </div>
    </div>
  );
};

export default RequestDineIn;
