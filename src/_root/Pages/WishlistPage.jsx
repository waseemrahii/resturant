"use client"

import { useState, useEffect } from "react"
import { FaHeart, FaShoppingCart, FaTrash, FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load wishlist from localStorage
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    setWishlistItems(storedWishlist)
    setIsLoading(false)
  }, [])

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== id)
    setWishlistItems(updatedWishlist)
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
    toast.info("Item removed from wishlist", {
      position: "bottom-right",
      autoClose: 2000,
    })
  }

  const addToCart = (item) => {
    // Get existing cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")

    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id)

    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      cart[existingItemIndex].quantity += 1
    } else {
      // Add new item
      cart.push({
        ...item,
        quantity: 1,
      })
    }

    // Save updated cart
    localStorage.setItem("cart", JSON.stringify(cart))

    toast.success("Added to cart successfully!", {
      position: "bottom-right",
      autoClose: 2000,
    })
  }

  if (isLoading) {
    return (
      <div className="w-[80%] mx-auto py-16 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    )
  }

  return (
    <div className="w-[90%] md:w-[80%] mx-auto py-8">
      <div className="flex items-center mb-8">
        <Link to="/" className="mr-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <FaArrowLeft className="text-gray-600" />
          </motion.button>
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold flex items-center">
          <FaHeart className="text-red-500 mr-3" /> My Wishlist
        </h1>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6">
              <FaHeart className="text-4xl text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added anything to your wishlist yet.</p>
            <Link to="/restaurants">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Browse Restaurants
              </motion.button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
         <Link to={`/product-detail`} key={item.id}>'>
         <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  <FaTrash className="text-red-500" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-red-500 font-bold mb-4">Rs. {item.price}</p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => addToCart(item)}
                  className="w-full py-2 bg-red-500 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-red-600 transition-colors"
                >
                  <FaShoppingCart /> Add to Cart
                </motion.button>
              </div>
            </motion.div>
          </Link>
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  )
}

export default WishlistPage
