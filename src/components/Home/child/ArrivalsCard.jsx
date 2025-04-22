// import PropTypes from "prop-types"
// import { FaStar } from "react-icons/fa"

// const ArrivalsCard = ({ img, name, price, originalPrice, rating, isVeg, id }) => {
//   return (
//     <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white h-full relative group">
//       <div className="relative overflow-hidden">
//         <img
//           className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
//           src={img || "/placeholder.svg"}
//           alt={name}
//           onError={(e) => {
//             e.target.onerror = null
//             e.target.src =
//               "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
//           }}
//         />

//         <span
//           className={`absolute top-3 left-3 px-2 py-1 text-white text-xs font-bold rounded-full ${
//             isVeg ? "bg-green-600" : "bg-red-600"
//           }`}
//         >
//           {isVeg ? "veg" : "non-veg"}
//         </span>

//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
//           <div className="flex items-center bg-white bg-opacity-90 rounded-full px-2 py-1 w-fit">
//             <FaStar className="text-yellow-500 mr-1" />
//             <span className="text-sm font-bold">{rating}</span>
//           </div>
//         </div>
//       </div>

//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-red-500 transition-colors">{name}</h3>
//         <div className="flex items-center justify-between">
//           <div>
//             <span className="text-lg font-semibold text-gray-900">Rs. {price} </span>
//             {originalPrice && <span className="text-gray-500 line-through text-sm ml-1">Rs. {originalPrice}</span>}
//           </div>
//           <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm transition-colors">
//             Order Now
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// ArrivalsCard.propTypes = {
//   img: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   originalPrice: PropTypes.number,
//   rating: PropTypes.number.isRequired,
//   isVeg: PropTypes.bool.isRequired,
//   id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// }

// export default ArrivalsCard



"use client"

import { useState } from "react"
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ArrivalsCard = ({ id, img, name, price, originalPrice, rating, reviews, isVeg }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()

    // Get existing wishlist from localStorage
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")

    if (!isFavorite) {
      // Add to wishlist
      const newItem = {
        id: id || Date.now(),
        title: name,
        price,
        image: img,
        quantity: 1,
      }
      wishlist.push(newItem)
      toast.success("Added to wishlist", {
        position: "bottom-right",
        autoClose: 2000,
      })
    } else {
      // Remove from wishlist (filter by title for simplicity)
      const updatedWishlist = wishlist.filter((item) => item.title !== name)
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
      toast.info("Removed from wishlist", {
        position: "bottom-right",
        autoClose: 2000,
      })
    }

    // Save updated wishlist
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
    setIsFavorite(!isFavorite)
  }

  return (
    <Link to={`/product-detail`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white h-full relative group"
        style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}
      >
        <div className="relative" style={{ height: "220px", overflow: "hidden" }}>
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={img || "/placeholder.svg"}
            alt={name}
            style={{ objectPosition: "center" }}
            onError={(e) => {
              e.target.onerror = null
              e.target.src =
                "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }}
          />

          <span
            className={`absolute top-3 left-3 px-2 py-1 text-white text-xs font-bold rounded-full ${
              isVeg ? "bg-green-600" : "bg-red-500"
            }`}
          >
            {isVeg ? "veg" : "non-veg"}
          </span>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleFavorite}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:bg-gray-100 z-10"
          >
            {isFavorite ? (
              <FaHeart className="text-red-500 text-lg" />
            ) : (
              <FaRegHeart className="text-gray-400 text-lg hover:text-red-500" />
            )}
          </motion.button>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-red-500 transition-colors">
            {name}
          </h3>
          <div className="flex items-center mb-3">
            <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded-md text-xs">
              <FaStar className="mr-1" />
              <span>{rating}</span>
            </div>
            <span className="text-gray-500 text-xs ml-2">({reviews} reviews)</span>
          </div>
          <div className="flex items-center justify-between mt-auto">
            <div>
              <span className="text-lg font-semibold text-gray-900">Rs. {price} </span>
              {originalPrice && <span className="text-gray-500 line-through text-sm ml-1">Rs. {originalPrice}</span>}
            </div>
            <span className="text-xs text-green-600 font-medium">
              {originalPrice ? `${Math.round(((originalPrice - price) / originalPrice) * 100)}% off` : ""}
            </span>
          </div>
        </div>
        <ToastContainer />
      </motion.div>
    </Link>
  )
}

ArrivalsCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number,
  isVeg: PropTypes.bool.isRequired,
}

export default ArrivalsCard
