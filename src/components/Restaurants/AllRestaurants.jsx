// import React from "react";
// import PropTypes from "prop-types";
// import { IoHomeOutline } from "react-icons/io5";
// import { allrestaurants } from "../../utils/Utils";
// import RestaurantCard from "../Search/RestaurantCard";

// const AllRestaurants = ({ title }) => {
//   // const allrestaurants=[];
//   return (
//     <div>
//       <h1 className="text-4xl border-b p-4">{title} Restaurant</h1>
//       <div className="py-4">
//         <button className="btn flex items-center gap-2">
//           <IoHomeOutline /> All Restaurant ({allrestaurants.length})
//         </button>
//         <div className="">
//           {allrestaurants.length === 0 ? (
//             <p className="w-full h-screen mx-auto text-center mt-4 text-xl font-bold">
//               No Result Found
//             </p>
//           ) : (
//             <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {allrestaurants.map((restaurant, index) => (
//                 <RestaurantCard key={index} restaurant={restaurant} />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// AllRestaurants.propTypes = {
//   title: PropTypes.string.isRequired,
// };

// export default AllRestaurants;



// import PropTypes from "prop-types"
// import { IoHomeOutline } from "react-icons/io5"
// import { allrestaurants } from "../../utils/Utils"
// import RestaurantCard from "../Search/RestaurantCard"

// const AllRestaurants = ({ title }) => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl md:text-4xl font-bold mb-8 border-b border-gray-200 pb-4 text-gray-800">
//         {title} Restaurants
//       </h1>
//       <div className="py-4">
//         <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-300">
//           <IoHomeOutline className="text-lg" />
//           All Restaurants ({allrestaurants.length})
//         </button>
//         <div className="mt-8">
//           {allrestaurants.length === 0 ? (
//             <div className="flex flex-col items-center justify-center h-64">
//               <img src="/placeholder.svg?height=100&width=100" alt="No results" className="mb-4 opacity-50" />
//               <p className="text-xl font-bold text-gray-500">No restaurants found</p>
//               <p className="text-gray-400">Try adjusting your search criteria</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {allrestaurants.map((restaurant, index) => (
//                 <RestaurantCard key={index} restaurant={restaurant} />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// AllRestaurants.propTypes = {
//   title: PropTypes.string.isRequired,
// }

// export default AllRestaurants



import PropTypes from "prop-types"
import { FaLocationDot } from "react-icons/fa6"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

const RestaurantCard = ({ restaurant }) => {
  const { id, status, imageUrl, name, location, rating, reviews } = restaurant

  return (
    <Link to={`/restaurant/${id}`} className="block">
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
