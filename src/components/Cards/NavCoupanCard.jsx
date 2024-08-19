import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa6";
const NavCoupanCard = ({
  expireDate,
  code,
  discount,
  description,
  location,
}) => {
  return (
    <div className="container hover:shadow-md cursor-pointer rounded-xl overflow-hidden shadow-sm p-4 w-full my-4 border border-gray-200">
      <div className="relative flex flex-wrap items-center">
        <img
          className="w-16 h-16 rounded-full object-cover mr-4 mb-4 md:mb-0"
          src="https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7" // Replace with the actual path to your image
          alt="Logo"
        />
        <div className="flex-grow">
          <p className="text-black-600 text-md font-semibold mb-2">
            Expires At: {expireDate}
          </p>
          <div className="flex flex-wrap items-center justify-between">
            <div className="bg-[#FCF8F3] text-black px-2 py-1 border-2 border-dashed border-gray-300 rounded text-sm flex items-center mb-4 md:mb-0">
              {code}
              <button className="ml-2">
                <FaRegCopy className="text-red font-semibold" />
              </button>
            </div>
            <div className="text-xl font-bold">{discount}</div>
          </div>
          <p className="text-sm font-semibold mt-2">{description}</p>
          <p className="text-gray-600 flex items-center mt-2">
            <IoLocationOutline className="text-red-500 mr-1" />
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavCoupanCard;
