
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import PropTypes from "prop-types"

const ImageGallery = ({ images, isOpen, onClose, startIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex)

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return

      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        prevImage()
      } else if (e.key === "ArrowRight") {
        nextImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    // Prevent scrolling when gallery is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, currentIndex])

  // Reset to start index when gallery opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(startIndex)
    }
  }, [isOpen, startIndex])

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
        onClick={onClose}
      >
        <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
          {/* Close button */}
          <button
            className="absolute top-4 right-4 z-50 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
            onClick={onClose}
          >
            <FaTimes size={24} />
          </button>

          {/* Navigation buttons */}
          <button
            className="absolute left-4 z-40 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-all"
            onClick={prevImage}
          >
            <FaChevronLeft size={24} />
          </button>

          <button
            className="absolute right-4 z-40 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-all"
            onClick={nextImage}
          >
            <FaChevronRight size={24} />
          </button>

          {/* Image container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="w-[90%] h-[80%] flex items-center justify-center"
          >
            <img
              src={images[currentIndex]?.url || images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  startIndex: PropTypes.number,
}

export default ImageGallery
