import { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaGift } from "react-icons/fa";

const MyGift = () => {

  const [activeButton, setActiveButton] = useState("completed");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <div className="container py-5">
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
          Claim GiftCard
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
          GiftCard History
        </button>
      </div>

      {activeButton === "completed" && (
        <div className=" px-4 py-8">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-lg p-8">
            <h2 className="text-xl font-semibold mb-6 text-center">
              Claim GiftCard
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="giftCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gift Code
                </label>
                <input
                  type="text"
                  id="giftCode"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="giftPin"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gift Pin
                </label>
                <input
                  type="password"
                  id="giftPin"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-900 hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-900"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {activeButton === "onProgress" && (
        <div className="histry px-4 py-8">
          <h1 className="text-center font-semibold">No History Found</h1>
          <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-2 md:gap-0">
            <button className="text-red-700 border border-red-700 px-3 py-1 rounded w-full md:w-auto">
              Previous
            </button>
            <button className="text-red-700 border border-red-700 px-3 py-1 rounded w-full md:w-auto">
              Next
            </button>
          </div>
        </div>
      )}
    </div>

  );
};

export default MyGift;
