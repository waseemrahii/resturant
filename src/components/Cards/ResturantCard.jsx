// src/Card.js
import React from "react";
import { FaStar } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
const ResturantCard = ({ image, subtitle, rating, location, status }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      fill={index < rating ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-4 h-4 text-[#FF3838]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.908c.97 0 1.371 1.24.588 1.81l-3.978 2.888a1 1 0 00-.364 1.118l1.519 4.674c.3.921-.755 1.688-1.54 1.118l-3.978-2.888a1 1 0 00-1.175 0l-3.978 2.888c-.785.57-1.84-.197-1.54-1.118l1.519-4.674a1 1 0 00-.364-1.118L2.992 9.101c-.783-.57-.382-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.519-4.674z"
      />
    </svg>
  ));
  const statusClasses = status === "Open" ? "bg-green" : "bg-red";
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg relative h-80 cursor-pointer">
      <div className="relative">
      <img className="w-full h-44 object-cover" src={image} alt={subtitle} />
        <div
          className={`absolute top-0 left-0 m-2  px-2 text-white font-semibold rounded ${statusClasses} `}
          //   ${statusClasses}
        >
          {status}
        </div>
        <div className="absolute bottom-3 right-3 bg-[#28A745] rounded  text-white  flex items-center">
          <span className="mx-1 flex  items-center ">
            <FaStar /> {rating} (1)
          </span>
        </div>
      </div>
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2">{subtitle}</div>
        <p className="text-gray-700 text-base flex justify-start items-center ">
          <MdLocationPin className="text-[#FF3838] text-[1.5rem]" /> {location}
        </p>
        <div className="flex pt-3">{stars}</div>
      </div>
    </div>
  );
};

export default ResturantCard;
