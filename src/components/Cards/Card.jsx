

import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { IoLocationOutline } from "react-icons/io5"
import { FaStar } from "react-icons/fa"

const Card = ({ restaurant }) => {
  const linkPath = restaurant?.id ? `/restaurant/${restaurant.id}` : '/product-detail';

  return (
    // <Link to={`/restaurant/${restaurant.id}`} state={{ restaurant }}>
    // set condition that if restaurant id is not available then go to product-detail  like link = if restaurant.id is not available then go to product-detail
    // both metion like if id avaiableb then /restaurant/${restaurant.id} else /product-detail

    <Link to={linkPath} state={{ restaurant }}>

 
   

      <div className="relative hover:shadow-xl cursor-pointer rounded-xl overflow-hidden h-96 shadow-md p-0 w-full border-0 transition-all duration-300 transform hover:scale-105 bg-white">
        <div
          className={`absolute top-4 left-4 z-10 text-xs font-bold ${
            restaurant.isOpen ? "bg-green-500" : "bg-red-500"
          } text-white py-1 px-3 rounded-full`}
        >
          {restaurant.isOpen ? "Open" : "Closed"}
        </div>
        <div className="h-52 overflow-hidden">
          <img
            src={restaurant.image || "/placeholder.svg"}
            alt={restaurant.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-5 space-y-4">
          <h3 className="text-xl font-bold text-gray-800">{restaurant.name}</h3>
          <p className="text-gray-600 flex items-center font-medium gap-2">
            <IoLocationOutline className="text-red-500 text-xl" />
            {restaurant.address}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-green-500 text-white px-2 py-1 rounded-md">
              <FaStar className="mr-1" />
              <span>{restaurant.rating.toFixed(1)}</span>
            </div>
            <span className="text-gray-500">({restaurant.reviews} reviews)</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

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
}

export default Card
