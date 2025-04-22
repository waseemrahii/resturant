import PropTypes from "prop-types"
import { FaLocationDot } from "react-icons/fa6"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

const RestaurantCard = ({ restaurant }) => {
  const { status, imageUrl, name, location, rating, reviews } = restaurant

  return (
    <Link to={`/restaurant/${restaurant.id}`} className="block">
      <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white h-full">
        <div className="relative">
          <img
            className="w-full h-56 object-cover"
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            onError={(e) => {
              e.target.onerror = null
              e.target.src =
                "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }}
          />
          <span
            className={`absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full ${
              status === "Open" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {status}
          </span>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        <div className="p-5">
          <div className="font-bold text-xl mb-2 text-gray-800">{name}</div>
          <div className="flex items-center gap-2 text-gray-600 mb-3">
            <FaLocationDot className="text-red-500" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded-md">
              <FaStar className="mr-1 text-yellow-300" />
              <span>{rating.toFixed(1)}</span>
            </div>
            <span className="text-gray-500 text-sm">({reviews} reviews)</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
  }).isRequired,
}

export default RestaurantCard
