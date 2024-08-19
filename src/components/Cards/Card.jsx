import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const Card = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`} state={{ restaurant }}>
      <div className="relative hover:shadow-lg cursor-pointer rounded-xl overflow-hidden h-96 shadow-sm p-2 w-full border border-gray-200">
        <div
          className={`absolute top-4 left-4 text-xs font-bold ${
            restaurant.isOpen ? "bg-[#7ffd26]" : "bg-[#fd267f]"
          } text-white p-1 rounded-md`}
        >
          {restaurant.isOpen ? "Open" : "Closed"}
        </div>
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-52 bg-primary-100 rounded-xl object-cover"
        />
        <div className="mt-4 space-y-4">
          <h3 className="text-xl font-bold text-md font-semibold">
            {restaurant.name}
          </h3>
          <p className="text-gray-600 flex items-center font-bold gap-2">
            <IoLocationOutline className="text-[#fda426] font-semibold text-[1.6rem]" />
            {restaurant.address}
          </p>
          <div className="absolute bottom-3 left-3 text-xs font-bold flex text-primary-600 items-center justify-center space-x-1 p-1 rounded-md bg-green w-16">
            <span>
              <FaStar />
            </span>
            <span>{restaurant.rating}</span>
            <span>({restaurant.reviews})</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
