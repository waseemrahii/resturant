// src/RestaurantCard.js
import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";

const RestaurantCard = ({ restaurant }) => {
  const { status, imageUrl, name, location, rating, reviews } = restaurant;
  return (
    <div className="relative max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
        <span
          className={`absolute top-2 left-2 text-white text-sm font-bold px-2 py-1 rounded-full ${
            status === "Open" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {status}
        </span>
        <span className="absolute bottom-2 right-2 text-green-600 text-xs font-bold px-2 py-1 rounded-full bg-green-100">
          ★{rating} ({reviews}+)
        </span>
      </div>
      <div className="flex flex-col p-4 gap-2">
        <div className="font-bold text-sm mt-2">{name}</div>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span className="text-primary-900 text-lg">
            <FaLocationDot />
          </span>
          {location}
        </div>
        <div className="flex mt-2">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={
                index < rating
                  ? "text-red-500 text-xl"
                  : "text-gray-400 text-xl"
              }
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    status: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
  }).isRequired,
};

export default RestaurantCard;
