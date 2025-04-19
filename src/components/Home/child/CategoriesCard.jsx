// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";

// const CategoriesCard = ({ image, name, categoryId, restaurantId }) => {
//   useEffect(() => {
//     console.log({ image, name, categoryId, restaurantId });
//   }, [image, name, categoryId, restaurantId]);

//   return (
//     <Link to={`/category/${categoryId}`} state={{ image, name }}>
//       <div>
//         <div className="hover:shadow-lg border border-gray-400 rounded-2xl p-3 cursor-pointer mt-10 h-32 lg:h-32 md:h-28 sm:h-24">
//           <img
//             src={image}
//             alt="category"
//             className="w-full h-full rounded-2xl object-cover"
//           />
//         </div>
//         <h1 className="text-center font-semibold text-gray-600 mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
//           {name}
//         </h1>
//       </div>
//     </Link>
//   );
// };

// // Define PropTypes
// CategoriesCard.propTypes = {
//   image: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   categoryId: PropTypes.string.isRequired,
//   restaurantId: PropTypes.string.isRequired,
// };

// export default CategoriesCard;


"use client"

import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const CategoriesCard = ({ image, name, categoryId, restaurantId }) => {
  useEffect(() => {
    console.log({ image, name, categoryId, restaurantId })
  }, [image, name, categoryId, restaurantId])

  return (
    <Link to={`/category/${categoryId}`} state={{ image, name }}>
      <div className="transform transition-all duration-300 hover:scale-105">
        <div className="hover:shadow-xl border-0 rounded-xl overflow-hidden cursor-pointer mt-6 h-32 lg:h-32 md:h-28 sm:h-24 relative group">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.onerror = null
              e.target.src =
                "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-lg">View</span>
          </div>
        </div>
        <h1 className="text-center font-bold text-gray-800 mt-3 text-sm sm:text-base md:text-lg">{name}</h1>
      </div>
    </Link>
  )
}

// Define PropTypes
CategoriesCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  restaurantId: PropTypes.string.isRequired,
}

export default CategoriesCard
