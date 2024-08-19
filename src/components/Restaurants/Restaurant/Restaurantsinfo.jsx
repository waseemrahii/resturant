import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { CiHeart, CiStar } from "react-icons/ci";
import PropTypes from "prop-types";

const RestaurantInfo = ({ name, address, reviews, rating, time, onClose }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-2 pt-5">
        <h1>{name}</h1>
        <div className="flex items-center gap-1">
          <IoLocationOutline className="text-red font-semibold text-[1.5rem]" />
          <h1>{address}</h1>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <CiStar
              key={i}
              className={`text-red font-semibold text-[1.5rem] ${
                i < rating ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
          <p>({reviews} Reviews)</p>
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-center pt-5">
          <button className="text-red border border-red p-2 rounded">
            <CiHeart />
          </button>
          <button className="text-red border border-red p-2 rounded">
            <IoLocationOutline />
          </button>
          <button className="text-red border border-red px-2 py-1 rounded">
            Contact
          </button>
        </div>
        <div>
          <h1>
            <span className="text-red-500">Time: </span>
            <span>{time}</span>
          </h1>
        </div>
        <div className="flex justify-end items-center pt-5">
          <button
            className="text-white bg-primary-600 border border-primary-900 px-2 py-1 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

RestaurantInfo.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  reviews: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RestaurantInfo;
