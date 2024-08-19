// src/FavoriteCard.js
import PropTypes from "prop-types";
import { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
// import { IoLocationSharp } from "react-icons/io5";

const FavoriteFoodCard = ({ favoriteRestaurant }) => {
  const { img, title, rating } = favoriteRestaurant;
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img className="w-full h-56" src={img} alt="Offer" />
        <button
          className={`absolute top-2 right-2 rounded-full p-1 ${isFavorited ? 'bg-red-400 text-white' : 'bg-white text-red-400'}`}
          onClick={handleFavoriteClick}
        >
          <FaHeart />
        </button>
      </div>
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2">{title}</div>
        {/* <span className="text-gray-700 text-sm flex items-center gap-1">
          <IoLocationSharp className="text-red text-2xl" />
          {location}
        </span> */}
      </div>
      <div className="px-6 py-2 flex items-center">
        <span className="inline-flex items-center px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-lg">
          <FaStar />
          {rating}
        </span>
      </div>
    </div>
  );
};

FavoriteFoodCard.propTypes = {
  favoriteRestaurant: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // location: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default FavoriteFoodCard;
