
import { useState, useRef, useEffect } from "react"
import Stories from "stories-react"
import { Modal, Box } from "@mui/material"
import PropTypes from "prop-types"
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const RestaurantStories = ({ restaurants }) => {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const storiesContainerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const handleOpen = (index) => {
    setCurrentIndex(index) // Set the index of the clicked restaurant
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  // Handle touch events for mobile swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      scrollRight()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      scrollLeft()
    }
  }

  // Scroll the stories container
  const scrollLeft = () => {
    if (storiesContainerRef.current) {
      const newPosition = Math.max(0, scrollPosition - 200)
      storiesContainerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      })
      setScrollPosition(newPosition)
    }
  }

  const scrollRight = () => {
    if (storiesContainerRef.current) {
      const newPosition = Math.min(
        storiesContainerRef.current.scrollWidth - storiesContainerRef.current.clientWidth,
        scrollPosition + 200,
      )
      storiesContainerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      })
      setScrollPosition(newPosition)
    }
  }

  // More stories data
  const moreStories = [
    ...restaurants,
    {
      id: 5,
      title: "Chinese Cuisine",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      },
      stories: [
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          duration: 5000,
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          duration: 5000,
        },
      ],
    },
    {
      id: 6,
      title: "Pizza Specials",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
      },
      stories: [
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          duration: 5000,
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
          duration: 5000,
        },
      ],
    },
    {
      id: 7,
      title: "Dessert Delights",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      },
      stories: [
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
          duration: 5000,
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80",
          duration: 5000,
        },
      ],
    },
  ]

  return (
    <div className="py-10 bg-gradient-to-r from-gray-900 to-gray-800 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
            Featured Stories
          </span>
        </h2>

        {/* Mobile navigation arrows */}
        {isMobile && (
          <>
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full"
            >
              <FaChevronRight />
            </button>
          </>
        )}

        <div
          ref={storiesContainerRef}
          className="flex flex-nowrap overflow-x-auto gap-4 pb-4 scrollbar-hide justify-start md:justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ scrollBehavior: "smooth" }}
        >
          {moreStories.map((restaurant, index) => (
            <motion.button
              key={restaurant.id}
              onClick={() => handleOpen(index)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative focus:outline-none group flex-shrink-0 transform transition-all duration-300"
            >
              <div className="w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 overflow-hidden rounded-xl shadow-lg">
                {restaurant.media.type === "video" ? (
                  <div className="relative w-full h-full">
                    <video className="w-full h-full object-cover brightness-75" muted>
                      <source src={restaurant.media.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/30 p-2 rounded-full backdrop-blur-sm">
                        <FaPlay className="text-white" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={restaurant.media.url || "/placeholder.svg"}
                    alt={`Story Thumbnail ${index}`}
                    className="w-full h-full object-cover brightness-75"
                  />
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                  <h3 className="font-bold text-xs sm:text-sm">{restaurant.title}</h3>
                  <div className="mt-1 flex">
                    <div className="h-1 flex-grow rounded-full bg-white/30 overflow-hidden">
                      <div className="h-full w-1/3 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-t-xl"></div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="stories-modal"
        aria-describedby="view restaurant stories"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(5px)",
        }}
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
              onClick={handleClose}
            >
              <Box
                sx={{
                  width: { xs: "95%", sm: 400 },
                  height: { xs: "80%", sm: 600 },
                  maxWidth: "100%",
                  maxHeight: "100%",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  position: "relative",
                }}
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >
                {moreStories[currentIndex] && (
                  <>
                    <button
                      onClick={handleClose}
                      className="absolute top-4 right-4 z-50 bg-black/30 text-white w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/50 transition-colors"
                    >
                      <FaTimes />
                    </button>
                    <Stories
                      stories={moreStories[currentIndex].stories.map((story) => ({
                        ...story,
                        duration: story.duration || 5000, // Default duration if not specified
                      }))}
                      onAllStoriesEnd={handleClose} // Closes the modal when all stories end
                      storyStyles={{
                        objectFit: "cover",
                        borderRadius: "16px",
                      }}
                    />
                  </>
                )}
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </div>
  )
}

RestaurantStories.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      media: PropTypes.shape({
        type: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired,
      stories: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          duration: PropTypes.number, // Added duration prop type
        }),
      ).isRequired,
    }),
  ).isRequired,
}

export default RestaurantStories
