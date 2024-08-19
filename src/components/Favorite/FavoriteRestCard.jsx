// src/FavoriteRestCard.js
import PropTypes from "prop-types";
import { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const FavoriteRestCard = ({ favoriteRestaurant }) => {
  const { img, title, location, rating } = favoriteRestaurant;
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="relative">
      <img className="w-full h-44 object-cover" src={img} alt='Fevorate' />
        <button className="absolute top-2 right-2 bg-white text-red-300 rounded-full p-1">
          <FaHeart />
        </button>
      </div>
      <div className="px-6 py-2">
        <div className="font-bold text-lg mb-2">{title}</div>
        <span className="text-gray-700 text-sm flex items-center gap-1">
          <IoLocationSharp className="text-red-500 text-2xl" />
          {location}
        </span>
      </div>
      <div className="px-6 py-2 flex items-center">
        <span className="inline-flex items-center px-3 py-1 bg-green-300 text-white text-sm font-medium rounded-lg">
          <FaStar />
          {rating}
        </span>
      </div>
    </div>
  );
};

FavoriteRestCard.propTypes = {
  favoriteRestaurant: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default FavoriteRestCard;
