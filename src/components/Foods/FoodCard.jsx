// // // // src/FoodCard.js
// // // import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// // // // import { FaStar } from 'react-icons/fa';

// // // const FoodCard = ({ img, name, price, originalPrice, rating,reviews, isVeg,  }) => {
// // //   return (
// // //     <>
// // //     <Link to="/product-detail">
// // //     <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-xl ">
// // //       <div className="relative">
// // //         <img className="w-full h-62 object-cover" src={img} alt={name} />
// // //         <span className={`absolute top-2 left-2 px-2 py-1 text-white text-xs font-bold rounded ${isVeg ? 'bg-green-600' : 'bg-red-600'}`}>
// // //           {isVeg ? 'veg' : 'non-veg'}
// // //         </span>
// // //       </div>
// // //       <div className="p-4">
// // //         <h3 className="text-lg font-semibold">{name}</h3>
// // //         <div className="flex w-16 bg-primary-900 items-center mt-2 mb-4 px-1 text-yellow-100 font-bold rounded">
// // //           <span className=' text-xs'>★</span>
// // //           <span className="flex items-center  text-xs p-1">
// // //           {rating}
// // //           </span>
// // //           <span className="items-center text-sm ">(2{reviews})</span>
// // //         </div>
// // //         <div className="flex items-center justify-end gap-2">
// // //           <span className="text-lg font-semibold text-gray-900">€{price} </span>
// // //           {originalPrice && (
// // //             <span className="text-gray-500 line-through text-sm">€{originalPrice}</span>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //     </Link>
// // //     </>
// // //   );
// // // };

// // // FoodCard.propTypes = {
// // //   img: PropTypes.string.isRequired,
// // //   name: PropTypes.string.isRequired,
// // //   price: PropTypes.number.isRequired,
// // //   originalPrice: PropTypes.number,
// // //   rating: PropTypes.number.isRequired,
// // //   reviews: PropTypes.number,
// // //   isVeg: PropTypes.bool.isRequired,

// // // };

// // // export default FoodCard;



// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { FaStar, FaHeart, FaRegHeart, FaShoppingCart, FaCheck } from "react-icons/fa"
// import { motion } from "framer-motion"
// import PropTypes from "prop-types"
// import { toast, ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

// const FoodCard = ({ img, name, price, originalPrice, rating, reviews, isVeg }) => {
//   const [isFavorite, setIsFavorite] = useState(false)
//   const [isAddedToCart, setIsAddedToCart] = useState(false)

//   // Check if product is in wishlist on component mount
//   useEffect(() => {
//     const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
//     const isInList = wishlist.some((item) => item.title === name)
//     setIsFavorite(isInList)
//   }, [name])

//   const toggleFavorite = (e) => {
//     e.preventDefault()
//     e.stopPropagation()

//     // Get existing wishlist from localStorage
//     const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")

//     if (!isFavorite) {
//       // Add to wishlist
//       const newItem = {
//         id: Date.now(),
//         title: name,
//         price,
//         image: img,
//         quantity: 1,
//       }
//       wishlist.push(newItem)
//       toast.success("Added to wishlist", {
//         position: "bottom-right",
//         autoClose: 2000,
//       })
//     } else {
//       // Remove from wishlist (filter by title for simplicity)
//       const updatedWishlist = wishlist.filter((item) => item.title !== name)
//       localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
//       toast.info("Removed from wishlist", {
//         position: "bottom-right",
//         autoClose: 2000,
//       })
//     }

//     // Save updated wishlist
//     localStorage.setItem("wishlist", JSON.stringify(wishlist))
//     setIsFavorite(!isFavorite)
//   }

//   const addToCart = (e) => {
//     e.preventDefault()
//     e.stopPropagation()

//     // Get existing cart from localStorage
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]")

//     // Check if item already exists in cart
//     const existingItemIndex = cart.findIndex((item) => item.title === name)

//     if (existingItemIndex >= 0) {
//       // Update quantity if item exists
//       cart[existingItemIndex].quantity += 1
//     } else {
//       // Add new item
//       const newItem = {
//         id: Date.now(),
//         title: name,
//         price,
//         image: img,
//         quantity: 1,
//       }
//       cart.push(newItem)
//     }

//     // Save updated cart
//     localStorage.setItem("cart", JSON.stringify(cart))

//     setIsAddedToCart(true)
//     toast.success("Added to cart successfully!", {
//       position: "bottom-right",
//       autoClose: 2000,
//     })

//     // Reset the button after 2 seconds
//     setTimeout(() => {
//       setIsAddedToCart(false)
//     }, 2000)
//   }

//   return (
//     <Link to="/product-detail">
//       <motion.div
//         whileHover={{ y: -5 }}
//         className="border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white h-full relative group"
//       >
//         <div className="relative overflow-hidden">
//           <img
//             className="w-full h-62 object-cover transition-transform duration-500 group-hover:scale-110"
//             src={img || "/placeholder.svg"}
//             alt={name}
//             onError={(e) => {
//               e.target.onerror = null
//               e.target.src =
//                 "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
//             }}
//           />

//           <span
//             className={`absolute top-3 left-3 px-2 py-1 text-white text-xs font-bold rounded-full ${
//               isVeg ? "bg-green-600" : "bg-red-600"
//             }`}
//           >
//             {isVeg ? "veg" : "non-veg"}
//           </span>

//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             onClick={toggleFavorite}
//             className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:bg-gray-100 z-10"
//           >
//             {isFavorite ? (
//               <FaHeart className="text-red-500 text-lg" />
//             ) : (
//               <FaRegHeart className="text-gray-400 text-lg hover:text-red-500" />
//             )}
//           </motion.button>

//           <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={addToCart}
//               className={`px-4 py-2 rounded-lg transition-all duration-300 ${
//                 isAddedToCart ? "bg-green-500 text-white" : "bg-red-500 text-white"
//               } shadow-lg transform translate-y-2 group-hover:translate-y-0`}
//             >
//               {isAddedToCart ? (
//                 <span className="flex items-center gap-1">
//                   <FaCheck /> Added
//                 </span>
//               ) : (
//                 <span className="flex items-center gap-1">
//                   <FaShoppingCart /> Add to Cart
//                 </span>
//               )}
//             </motion.button>
//           </div>
//         </div>

//         <div className="p-4">
//           <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-red-500 transition-colors">
//             {name}
//           </h3>
//           <div className="flex items-center mb-3">
//             <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded-md text-xs">
//               <FaStar className="mr-1" />
//               <span>{rating}</span>
//             </div>
//             <span className="text-gray-500 text-xs ml-2">({reviews} reviews)</span>
//           </div>
//           <div className="flex items-center justify-between">
//             <div>
//               <span className="text-lg font-semibold text-gray-900">Rs. {price} </span>
//               {originalPrice && <span className="text-gray-500 line-through text-sm ml-1">Rs. {originalPrice}</span>}
//             </div>
//             <span className="text-xs text-green-600 font-medium">
//               {originalPrice ? `${Math.round(((originalPrice - price) / originalPrice) * 100)}% off` : ""}
//             </span>
//           </div>
//         </div>
//       </motion.div>
//       <ToastContainer />
//     </Link>
//   )
// }

// FoodCard.propTypes = {
//   img: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   originalPrice: PropTypes.number,
//   rating: PropTypes.number.isRequired,
//   reviews: PropTypes.number,
//   isVeg: PropTypes.bool.isRequired,
// }

// export default FoodCard




import { useState, useEffect } from "react"
import { FaStar, FaHeart, FaRegHeart, FaShoppingCart, FaCheck } from "react-icons/fa"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import { toast, ToastContainer } from "react-toastify"
import { Link } from 'react-router-dom';

import "react-toastify/dist/ReactToastify.css"

const FoodCard = ({ img, name, price, originalPrice, rating, reviews, isVeg, id }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  // Check if product is in wishlist on component mount
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    const isInList = wishlist.some((item) => item.title === name)
    setIsFavorite(isInList)
  }, [name])

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

  const addToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()

    // Get existing cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")

    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex((item) => item.title === name)

    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      cart[existingItemIndex].quantity += 1
    } else {
      // Add new item
      const newItem = {
        id: id || Date.now(),
        title: name,
        price,
        image: img,
        quantity: 1,
      }
      cart.push(newItem)
    }

    // Save updated cart
    localStorage.setItem("cart", JSON.stringify(cart))

    setIsAddedToCart(true)
    toast.success("Added to cart successfully!", {
      position: "bottom-right",
      autoClose: 2000,
    })

    // Reset the button after 2 seconds
    setTimeout(() => {
      setIsAddedToCart(false)
    }, 2000)
  }

  return (
    <Link to="/product-detail">

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

        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={addToCart}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              isAddedToCart ? "bg-green-500 text-white" : "bg-red-500 text-white"
            } shadow-lg transform translate-y-2 group-hover:translate-y-0`}
          >
            {isAddedToCart ? (
              <span className="flex items-center gap-1">
                <FaCheck /> Added
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <FaShoppingCart /> Add to Cart
              </span>
            )}
          </motion.button>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-red-500 transition-colors">{name}</h3>
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

FoodCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number,
  isVeg: PropTypes.bool.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default FoodCard
