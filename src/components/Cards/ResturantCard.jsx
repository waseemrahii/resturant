// // src/Card.js
// import React from "react";
// import { FaStar } from "react-icons/fa6";
// import { MdLocationPin } from "react-icons/md";
// const ResturantCard = ({ image, subtitle, rating, location, status }) => {
//   const stars = Array.from({ length: 5 }, (_, index) => (
//     <svg
//       key={index}
//       xmlns="http://www.w3.org/2000/svg"
//       fill={index < rating ? "currentColor" : "none"}
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       className="w-4 h-4 text-[#FF3838]"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.908c.97 0 1.371 1.24.588 1.81l-3.978 2.888a1 1 0 00-.364 1.118l1.519 4.674c.3.921-.755 1.688-1.54 1.118l-3.978-2.888a1 1 0 00-1.175 0l-3.978 2.888c-.785.57-1.84-.197-1.54-1.118l1.519-4.674a1 1 0 00-.364-1.118L2.992 9.101c-.783-.57-.382-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.519-4.674z"
//       />
//     </svg>
//   ));
//   const statusClasses = status === "Open" ? "bg-green" : "bg-red";
//   return (
//     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg relative h-80 cursor-pointer">
//       <div className="relative">
//       <img className="w-full h-44 object-cover" src={image} alt={subtitle} />
//         <div
//           className={`absolute top-0 left-0 m-2  px-2 text-white font-semibold rounded ${statusClasses} `}
//           //   ${statusClasses}
//         >
//           {status}
//         </div>
//         <div className="absolute bottom-3 right-3 bg-[#28A745] rounded  text-white  flex items-center">
//           <span className="mx-1 flex  items-center ">
//             <FaStar /> {rating} (1)
//           </span>
//         </div>
//       </div>
//       <div className="px-4 py-4">
//         <div className="font-bold text-xl mb-2">{subtitle}</div>
//         <p className="text-gray-700 text-base flex justify-start items-center ">
//           <MdLocationPin className="text-[#FF3838] text-[1.5rem]" /> {location}
//         </p>
//         <div className="flex pt-3">{stars}</div>
//       </div>
//     </div>
//   );
// };

// export default ResturantCard;



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
              <span>{rating?.toFixed(1) || "0.0"}</span>
            </div>
            <span className="text-gray-500 text-sm">({reviews || 0} reviews)</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    rating: PropTypes.number,
    reviews: PropTypes.number,
  }).isRequired,
}

export default RestaurantCard
