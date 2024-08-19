import React from "react";
import { HiShoppingBag } from "react-icons/hi";

const SellerInfo = () => {
  return (
    <div className="flex justify-end mt-4">
      <div className="flex flex-col w-72  border rounded p-2 gap-4">
        <div className="flex p-2 ">
          <img src="https://via.placeholder.com/300" alt="" className="w-18 rounded-full p-2"/>
          <div className="flex flex-col justify-center">
          <h1 className="text-md text-red-600">Seller Name</h1>
          <span className="text-sm">Seller Info</span>
          </div>
          
        </div>
        {/* <h1 className="px-4">Seller Info</h1> */}
        <div className="flex justify-around">
          <div className="flex flex-col justify-center items-center w-20 h-14 bg-gray-200 rounded-lg">
            {4}
            <span>Reviews</span>
          </div>
          <div className="flex flex-col justify-center items-center w-20 h-14 bg-gray-200 rounded-lg">
            {2}
            <span>Rating</span>
          </div>
        </div>
        <button className="flex justify-center gap-2 items-center h-10 mx-10 rounded-md bg-red-500 text-md text-white ">
        <HiShoppingBag />
          <span>Visit Restaurant</span>
        </button>
      </div>
    </div>
  );
};

export default SellerInfo;