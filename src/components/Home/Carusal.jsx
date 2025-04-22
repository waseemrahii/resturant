
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaArrowLeft, FaArrowRight, FaSearch, FaMapMarkerAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

const Carusal = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef(null)

  const items = [
    {
      src: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Pakistani Cuisine",
      title: "Authentic Pakistani Flavors",
      subtitle: "Discover the rich taste of traditional dishes",
      cta: "Explore Menu",
      link: "/restaurants",
      color: "from-red-600/80 to-orange-500/80",
    },
    {
      src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      alt: "Biryani Special",
      title: "Biryani Festival",
      subtitle: "Enjoy the king of rice dishes from top restaurants",
      cta: "Order Now",
      link: "/category/Biryani",
      color: "from-yellow-600/80 to-amber-500/80",
    },
    {
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      alt: "BBQ Delights",
      title: "BBQ Extravaganza",
      subtitle: "Sizzling hot BBQ from Pakistan's finest",
      cta: "Find BBQ",
      link: "/category/BBQ",
      color: "from-purple-600/80 to-indigo-500/80",
    },
  ]

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [items.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

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
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide()
    }
  }

  return (
    <div
      ref={carouselRef}
      className="relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel slides */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={items[currentIndex].src || "/placeholder.svg"}
            alt={items[currentIndex].alt}
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${items[currentIndex].color} opacity-80`}></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 drop-shadow-lg max-w-4xl"
            >
              {items[currentIndex].title}
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-8 drop-shadow-md max-w-2xl"
            >
              {items[currentIndex].subtitle}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link to={items[currentIndex].link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#FF6637] font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform text-sm sm:text-base"
                >
                  {items[currentIndex].cta}
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Search bar */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl px-4 z-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className={`relative flex items-center bg-white rounded-full shadow-xl transition-all duration-300 ${
            isSearchFocused ? "ring-2 ring-[#FF6637]" : ""
          }`}
        >
          <div className="absolute left-4 text-gray-400">
            <FaSearch />
          </div>

          <input
            type="text"
            placeholder="Search for food, restaurants, or cuisines..."
            className="w-full py-3 sm:py-4 pl-10 sm:pl-12 pr-4 rounded-full focus:outline-none text-sm sm:text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />

          <div className="hidden md:flex items-center border-l border-gray-300 pl-4 pr-6">
            <FaMapMarkerAlt className="text-[#FF6637] mr-2" />
            <span className="text-gray-700">Islamabad</span>
          </div>
        </motion.div>
      </div>

      {/* Navigation arrows - hide on mobile, show on swipe */}
      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/50 transition-all duration-300 z-20"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/50 transition-all duration-300 z-20"
          >
            <FaArrowRight />
          </button>
        </>
      )}

      {/* Indicators */}
      <div className="absolute bottom-16 sm:bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-6 sm:w-8" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Carusal
