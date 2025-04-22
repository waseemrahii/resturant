

// import { useState, useEffect, useCallback } from "react"
// import { PiList, PiSealPercentBold } from "react-icons/pi"
// import { FaSearch, FaShoppingCart, FaCar, FaChevronDown, FaUserCircle, FaHeart } from "react-icons/fa"
// import PropTypes from "prop-types"
// import Dropdown from "./Child/Dropdown"
// import Sidebar from "./Child/Sidebar"
// import { GrLocation } from "react-icons/gr"
// import { IoMdArrowDropdown } from "react-icons/io"
// import { CiGlobe } from "react-icons/ci"
// import { Link } from "react-router-dom"

// const Navbar = ({ isLoggedIn, name, image }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false)
//   const [selectedLanguage, setSelectedLanguage] = useState("English")
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//   const [isTakeAway, setIsTakeAway] = useState(false)
//   const [cartCount, setCartCount] = useState(0)
//   const [wishlistCount, setWishlistCount] = useState(0)

//   // Update cart and wishlist counts from localStorage
//   useEffect(() => {
//     const updateCounts = () => {
//       const cart = JSON.parse(localStorage.getItem("cart") || "[]")
//       const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
//       setCartCount(cart.length)
//       setWishlistCount(wishlist.length)
//     }

//     // Initial update
//     updateCounts()

//     // Set up event listener for storage changes
//     window.addEventListener("storage", updateCounts)

//     // Check for changes every 2 seconds (for same-tab updates)
//     const interval = setInterval(updateCounts, 2000)

//     return () => {
//       window.removeEventListener("storage", updateCounts)
//       clearInterval(interval)
//     }
//   }, [])

//   const handleDeliveryClick = () => {
//     setIsTakeAway(!isTakeAway)
//   }

//   const toggleDropdown = useCallback(() => {
//     setIsDropdownOpen((prev) => !prev)
//   }, [])

//   const handleLanguageChange = useCallback((language) => {
//     setSelectedLanguage(language)
//     setIsDropdownOpen(false) // Close dropdown after selection
//   }, [])

//   const toggleSidebar = useCallback(() => {
//     setIsSidebarOpen((prev) => !prev)
//   }, [])

//   const navItems = [
//     { name: "Search", icon: <FaSearch />, link: "/search" },
//     { name: "Offers", icon: <PiSealPercentBold />, link: "/offers" },
//     { name: "Wishlist", icon: <FaHeart />, link: "/wishlist", count: wishlistCount },
//     // { name: "Sign in", icon: <FaUserCircle />, link: "/login" },
//     { name: "Cart", icon: <FaShoppingCart />, link: "/cart", count: cartCount },
//   ]

//   const languages = ["English", "Urdu"]

//   return (
//     <>
//       <nav className="bg-white shadow-md p-3 md:px-32 flex justify-between items-center sticky top-0 z-50">
//         <div className="flex items-center space-x-6 w-full md:w-auto">
//           <Link to="/" className="flex items-center justify-center">
//             <img src="/E-Market-logo.png" alt="Foodie Logo" className="h-12" />
//           </Link>

//           <div className="relative hidden lg:flex">
//             <input
//               type="text"
//               className="border-2 border-primary-500 rounded-lg p-2 pl-10 pr-8 focus:outline-none focus:ring-2 focus:ring-primary-500"
//               placeholder="Enter your location"
//               readOnly
//             />
//             <GrLocation className="text-primary-500 w-5 h-5 absolute left-3 top-3" />
//             <IoMdArrowDropdown className="w-5 h-5 absolute right-2 top-3 text-primary-500" />
//           </div>
//         </div>

//         <div className="hidden md:flex items-center space-x-4">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.link}
//               className="text-gray-700 text-base hover:text-primary-500 flex items-center mx-3 cursor-pointer transition-colors relative"
//             >
//               {item.name === "Sign in" && isLoggedIn ? "" : item.icon}
//               {item.count > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {item.count}
//                 </span>
//               )}
//               {item.name === "Sign in" && isLoggedIn ? (
//                 <div className="flex gap-2 items-center">
//                   <img
//                     src={image || "/placeholder.svg"}
//                     alt="Client"
//                     className="h-8 w-8 bg-gray-100 rounded-full ml-1"
//                   />
//                   <span className="flex items-center">
//                     {" Hi "}
//                     {name} <Dropdown isLoggedIn={isLoggedIn} />
//                   </span>
//                 </div>
//               ) : (
//                 <span className="ml-1 font-medium">
//                   {item.name} {item.name === "Sign in" ? <Dropdown isLoggedIn={isLoggedIn} /> : null}
//                 </span>
//               )}
//             </Link>
//           ))}
//           <button
//             className="bg-primary-500 hover:bg-primary-600 text-white rounded-lg p-2 px-4 flex items-center transition-colors"
//             onClick={handleDeliveryClick}
//           >
//             <FaCar className="h-4 w-4 mr-2" />
//             {isTakeAway ? (
//               <>
//                 <Link to="/account">
//                   <span>My Account</span>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link to="/account">
//                   <span>My Account</span>
//                 </Link>
//               </>
//             )}
//           </button>
//           {/* <div className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="text-gray-700 hover:text-primary-500 flex items-center transition-colors"
//             >
//               <CiGlobe className="h-5 w-5 mr-1" />
//               {selectedLanguage}
//               <FaChevronDown className="h-3 w-3 ml-1" />
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
//                 {languages.map((language) => (
//                   <button
//                     key={language}
//                     onClick={() => handleLanguageChange(language)}
//                     className="w-full p-2 text-gray-800 hover:bg-gray-100 text-left transition-colors"
//                   >
//                     {language}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div> */}
//         </div>
//         <button onClick={toggleSidebar} className="text-gray-700 hover:text-primary-500 transition-colors">
//           <PiList className="w-8 h-8" />
//         </button>
//       </nav>

//       {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} isLogIn={isLoggedIn} />}
//     </>
//   )
// }

// Navbar.propTypes = {
//   isLoggedIn: PropTypes.bool,
//   name: PropTypes.string,
//   image: PropTypes.string,
// }

// export default Navbar


import { useState, useEffect, useCallback } from "react"
import { PiList, PiSealPercentBold } from "react-icons/pi"
import { FaSearch, FaShoppingCart, FaCar, FaHeart } from "react-icons/fa"
import PropTypes from "prop-types"
import Dropdown from "./Child/Dropdown"
import Sidebar from "./Child/Sidebar"
import { GrLocation } from "react-icons/gr"
import { IoMdArrowDropdown } from "react-icons/io"
import { Link } from "react-router-dom"

 const Navbar = ({ isLoggedIn, name, image }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("English")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isTakeAway, setIsTakeAway] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)

  // Update cart and wishlist counts from localStorage
  useEffect(() => {
    const updateCounts = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]")
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
      setCartCount(cart.length)
      setWishlistCount(wishlist.length)
    }

    // Initial update
    updateCounts()

    // Set up event listener for storage changes
    window.addEventListener("storage", updateCounts)

    // Check for changes every 2 seconds (for same-tab updates)
    const interval = setInterval(updateCounts, 2000)

    return () => {
      window.removeEventListener("storage", updateCounts)
      clearInterval(interval)
    }
  }, [])

  const handleDeliveryClick = () => {
    setIsTakeAway(!isTakeAway)
  }

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev)
  }, [])

  const handleLanguageChange = useCallback((language) => {
    setSelectedLanguage(language)
    setIsDropdownOpen(false) // Close dropdown after selection
  }, [])

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev)
  }, [])

  const navItems = [
    { name: "Search", icon: <FaSearch />, link: "/search" },
    { name: "Offers", icon: <PiSealPercentBold />, link: "/offers" },
    { name: "Wishlist", icon: <FaHeart />, link: "/wishlist", count: wishlistCount },
    // { name: "Sign in", icon: <FaUserCircle />, link: "/login" },
    { name: "Cart", icon: <FaShoppingCart />, link: "/cart", count: cartCount },
  ]

  const languages = ["English", "Urdu"]

  return (
    <>
      <nav className="bg-white shadow-md p-3 md:px-32 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-6 w-full md:w-auto">
          <Link to="/" className="flex items-center justify-center">
            <img src="/logoemart.png" alt="6amMart Logo" className="h-12" />
          </Link>
{/* 
          <div className="relative hidden lg:flex">
            <input
              type="text"
              className="border-2 border-primary-500 rounded-lg p-2 pl-10 pr-8 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter your location"
              readOnly
            />
            <GrLocation className="text-primary-500 w-5 h-5 absolute left-3 top-3" />
            <IoMdArrowDropdown className="w-5 h-5 absolute right-2 top-3 text-primary-500" />
          </div> */}
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="text-gray-700 text-base hover:text-primary-600 flex items-center mx-3 cursor-pointer transition-colors relative"
            >
              {item.name === "Sign in" && isLoggedIn ? "" : item.icon}
              {item.count > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {item.count}
                </span>
              )}
              {item.name === "Sign in" && isLoggedIn ? (
                <div className="flex gap-2 items-center">
                  <img
                    src={image || "/logoemart.png"}
                    alt="Client"
                    className="h-8 w-8 bg-gray-100 rounded-full ml-1"
                  />
                  <span className="flex items-center">
                    {" Hi "}
                    {name} <Dropdown isLoggedIn={isLoggedIn} />
                  </span>
                </div>
              ) : (
                <span className="ml-1 font-medium">
                  {item.name} {item.name === "Sign in" ? <Dropdown isLoggedIn={isLoggedIn} /> : null}
                </span>
              )}
            </Link>
          ))}
          <button
            className="bg-primary-500 hover:bg-primary-600 text-white rounded-lg p-2 px-4 flex items-center transition-colors"
            onClick={handleDeliveryClick}
          >
            <FaCar className="h-4 w-4 mr-2" />
            {isTakeAway ? (
              <>
                <Link to="/account">
                  <span>My Account</span>
                </Link>
              </>
            ) : (
              <>
                <Link to="/account">
                  <span>My Account</span>
                </Link>
              </>
            )}
          </button>
          {/* <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-700 hover:text-primary-500 flex items-center transition-colors"
            >
              <CiGlobe className="h-5 w-5 mr-1" />
              {selectedLanguage}
              <FaChevronDown className="h-3 w-3 ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                {languages.map((language) => (
                  <button
                    key={language}
                    onClick={() => handleLanguageChange(language)}
                    className="w-full p-2 text-gray-800 hover:bg-gray-100 text-left transition-colors"
                  >
                    {language}
                  </button>
                ))}
              </div>
            )}
          </div> */}
        </div>
        <button onClick={toggleSidebar} className="text-gray-700 hover:text-primary-500 transition-colors">
          <PiList className="w-8 h-8" />
        </button>
      </nav>

      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} isLogIn={isLoggedIn} />}
    </>
  )
}

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool,
  name: PropTypes.string,
  image: PropTypes.string,
}

export default Navbar
