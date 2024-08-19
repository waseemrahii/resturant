import React, { useState } from "react";

import { SiTicktick } from "react-icons/si";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
const Order = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <div className="w-[80%] mx-auto py-5">
      <div className="border border-gray-300 shadow-sm bg-white rounded-xl px-4 py-5 flex flex-col sm:flex-row items-center gap-2">
        <button
          className={`rounded py-2 px-4 flex items-center gap-2 text-md w-full sm:w-auto ${
            activeButton === "completed"
              ? "bg-gray-300 text-gray-600"
              : "bg-white text-gray-500 hover:bg-gray-200"
          }`}
          onClick={() => handleButtonClick("completed")}
        >
          <SiTicktick
            className={`rounded-full p-1 shadow-md text-[1.5rem] ${
              activeButton === "onProgress"
                ? "bg-white text-green-900"
                : "text-white bg-green-900"
            }`}
          />
          Completed
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
                ? "bg-orange-900 text-white"
                : "text-orange-500 bg-white"
            }`}
          />
          On Progress
        </button>
        <button
          className={`rounded py-2 px-4 flex items-center gap-2 text-md w-full sm:w-auto ${
            activeButton === "cancel"
              ? "bg-gray-300 text-gray-600"
              : "bg-white text-gray-500 hover:bg-gray-200"
          }`}
          onClick={() => handleButtonClick("cancel")}
        >
          <GiCancel
            className={`rounded-full p-1 shadow-md text-[1.5rem] ${
              activeButton === "onProgress"
                ? "bg-white text-red-800"
                : "text-white bg-red-800"
            }`}
          />
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Order;
