
import { useState } from "react"
import { FaHeart, FaRegHeart, FaMapMarkerAlt, FaStar, FaPhone } from "react-icons/fa"
import PropTypes from "prop-types"
import ImageGallery from "../Gallery/ImageGallery"

const RestaurantDetail = ({ restaurant }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [startImageIndex, setStartImageIndex] = useState(0)

  const { name, address, rating, reviews, openingHours, status, images = [] } = restaurant

  // Default images if none provided
  const defaultImages = [
    "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  ]

  const galleryImages = images.length > 0 ? images : defaultImages

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const openGallery = (index = 0) => {
    setStartImageIndex(index)
    setGalleryOpen(true)
  }

  return (
    <div className="mb-8">
      {/* Gallery Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-6">
        {/* Main large image */}
        <div
          className="md:col-span-2 h-80 md:h-96 relative rounded-lg overflow-hidden cursor-pointer"
          onClick={() => openGallery(0)}
        >
          <img
            src={galleryImages[0] || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 gap-2 h-80 md:h-96">
          {galleryImages.slice(1, 3).map((img, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openGallery(index + 1)}
            >
              <img
                src={img || "/placeholder.svg"}
                alt={`${name} thumbnail ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
          <div className="relative rounded-lg overflow-hidden cursor-pointer" onClick={() => openGallery(3)}>
            <img
              src={galleryImages[3] || galleryImages[0]}
              alt={`${name} thumbnail 3`}
              className="w-full h-full object-cover brightness-75 transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
              See Gallery
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <FaMapMarkerAlt className="text-red-500" />
            <span>{address}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"} />
              ))}
            </div>
            <span className="text-gray-600">({reviews} Reviews)</span>
          </div>
        </div>

        <div className="mt-4 md:mt-0">
          <div className="flex gap-3 mb-3">
            <button
              onClick={toggleFavorite}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
            >
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
              <FaMapMarkerAlt />
            </button>
            <button className="flex items-center justify-center px-4 h-10 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
              <FaPhone className="mr-2" /> Contact
            </button>
          </div>
          <div className="text-right">
            <span className="text-red-500 font-medium">Time: </span>
            <span>{openingHours}</span>
          </div>
          <div className="mt-2 text-right">
            <span className={`px-3 py-1 rounded-full text-white ${status === "Open" ? "bg-primary-500" : "bg-red-500"}`}>
              {status}
            </span>
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      <ImageGallery
        images={galleryImages}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        startIndex={startImageIndex}
      />
    </div>
  )
}

RestaurantDetail.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    openingHours: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    images: PropTypes.array,
  }).isRequired,
}

export default RestaurantDetail
