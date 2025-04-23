

// // import { useState, useEffect, useCallback } from "react"
// // import { PiList, PiSealPercentBold } from "react-icons/pi"
// // import { FaSearch, FaShoppingCart, FaCar, FaHeart } from "react-icons/fa"
// // import PropTypes from "prop-types"
// // import Dropdown from "./Child/Dropdown"
// // import Sidebar from "./Child/Sidebar"
// // import { GrLocation } from "react-icons/gr"
// // import { IoMdArrowDropdown } from "react-icons/io"
// // import { Link } from "react-router-dom"

// //  const Navbar = ({ isLoggedIn, name, image }) => {
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false)
// //   const [selectedLanguage, setSelectedLanguage] = useState("English")
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
// //   const [isTakeAway, setIsTakeAway] = useState(false)
// //   const [cartCount, setCartCount] = useState(0)
// //   const [wishlistCount, setWishlistCount] = useState(0)
// //   const [showMobileSearch, setShowMobileSearch] = useState(false)


// //   // Update cart and wishlist counts from localStorage
// //   useEffect(() => {
// //     const updateCounts = () => {
// //       const cart = JSON.parse(localStorage.getItem("cart") || "[]")
// //       const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
// //       setCartCount(cart.length)
// //       setWishlistCount(wishlist.length)
// //     }

// //     // Initial update
// //     updateCounts()

// //     // Set up event listener for storage changes
// //     window.addEventListener("storage", updateCounts)

// //     // Check for changes every 2 seconds (for same-tab updates)
// //     const interval = setInterval(updateCounts, 2000)

// //     return () => {
// //       window.removeEventListener("storage", updateCounts)
// //       clearInterval(interval)
// //     }
// //   }, [])

// //   const handleDeliveryClick = () => {
// //     setIsTakeAway(!isTakeAway)
// //   }

// //   const toggleDropdown = useCallback(() => {
// //     setIsDropdownOpen((prev) => !prev)
// //   }, [])

// //   const toggleMobileSearch = useCallback(() => {
// //     setShowMobileSearch((prev) => !prev)
// //   }, [])

// //   const handleLanguageChange = useCallback((language) => {
// //     setSelectedLanguage(language)
// //     setIsDropdownOpen(false) // Close dropdown after selection
// //   }, [])

// //   const toggleSidebar = useCallback(() => {
// //     setIsSidebarOpen((prev) => !prev)
// //   }, [])

// //   const navItems = [
// //     { name: "Search", icon: <FaSearch />, link: "/search" },
// //     { name: "Offers", icon: <PiSealPercentBold />, link: "/offers" },
// //     { name: "Wishlist", icon: <FaHeart />, link: "/wishlist", count: wishlistCount },
// //     // { name: "Sign in", icon: <FaUserCircle />, link: "/login" },
// //     { name: "Cart", icon: <FaShoppingCart />, link: "/cart", count: cartCount },
// //   ]

// //   const languages = ["English", "Urdu"]

// //   return (
// //     <>
// //       <nav className="bg-white shadow-md p-3 md:px-32 flex justify-between items-center sticky top-0 z-50">
// //         <div className="flex items-center space-x-6 w-full md:w-auto">
// //           <Link to="/" className="flex items-center justify-center">
// //             <img src="/logoemart.png" alt="6amMart Logo" className="h-12" />
// //           </Link>
// // {/* 
// //           <div className="relative hidden lg:flex">
// //             <input
// //               type="text"
// //               className="border-2 border-primary-500 rounded-lg p-2 pl-10 pr-8 focus:outline-none focus:ring-2 focus:ring-primary-500"
// //               placeholder="Enter your location"
// //               readOnly
// //             />
// //             <GrLocation className="text-primary-500 w-5 h-5 absolute left-3 top-3" />
// //             <IoMdArrowDropdown className="w-5 h-5 absolute right-2 top-3 text-primary-500" />
// //           </div> */}
// //         </div>

// //         <div className="hidden md:flex items-center gap-8">
// //           {navItems.map((item) => (
// //             <Link
// //               key={item.name}
// //               to={item.link}
// //               className="text-gray-700 text-base hover:text-primary-600 flex items-center mx-3 cursor-pointer transition-colors relative"
// //             >
// //               {item.name === "Sign in" && isLoggedIn ? "" : item.icon}
// //               {item.count > 0 && (
// //                 <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
// //                   {item.count}
// //                 </span>
// //               )}
// //               {item.name === "Sign in" && isLoggedIn ? (
// //                 <div className="flex gap-2 items-center">
// //                   <img
// //                     src={image || "/logoemart.png"}
// //                     alt="Client"
// //                     className="h-8 w-8 bg-gray-100 rounded-full ml-1"
// //                   />
// //                   <span className="flex items-center">
// //                     {" Hi "}
// //                     {name} <Dropdown isLoggedIn={isLoggedIn} />
// //                   </span>
// //                 </div>
// //               ) : (
// //                 <span className="ml-1 font-medium">
// //                   {item.name} {item.name === "Sign in" ? <Dropdown isLoggedIn={isLoggedIn} /> : null}
// //                 </span>
// //               )}
// //             </Link>
// //           ))}
// //           <button
// //             className="bg-primary-500 hover:bg-primary-600 text-white rounded-lg p-2 px-4 flex items-center transition-colors"
// //             onClick={handleDeliveryClick}
// //           >
// //             <FaCar className="h-4 w-4 mr-2" />
// //             {isTakeAway ? (
// //               <>
// //                 <Link to="/account">
// //                   <span>My Account</span>
// //                 </Link>
// //               </>
// //             ) : (
// //               <>
// //                 <Link to="/account">
// //                   <span>My Account</span>
// //                 </Link>
// //               </>
// //             )}
// //           </button>
// //           {/* <div className="relative">
// //             <button
// //               onClick={toggleDropdown}
// //               className="text-gray-700 hover:text-primary-500 flex items-center transition-colors"
// //             >
// //               <CiGlobe className="h-5 w-5 mr-1" />
// //               {selectedLanguage}
// //               <FaChevronDown className="h-3 w-3 ml-1" />
// //             </button>
// //             {isDropdownOpen && (
// //               <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
// //                 {languages.map((language) => (
// //                   <button
// //                     key={language}
// //                     onClick={() => handleLanguageChange(language)}
// //                     className="w-full p-2 text-gray-800 hover:bg-gray-100 text-left transition-colors"
// //                   >
// //                     {language}
// //                   </button>
// //                 ))}
// //               </div>
// //             )}
// //           </div> */}
// //         </div>
// //              {/* Mobile Navigation */}
// //              <div className="flex md:hidden items-center space-x-3">
// //           {navItems.slice(0, 3).map((item) => (
// //             <Link
// //               key={item.name}
// //               to={item.link}
// //               className="text-gray-700 hover:text-green-500 relative"
// //               onClick={item.onClick}
// //             >
// //               <span className="text-xl">{item.icon}</span>
// //               {item.count > 0 && (
// //                 <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
// //                   {item.count}
// //                 </span>
// //               )}
// //             </Link>
// //           ))}
// //           <button onClick={toggleSidebar} className="text-gray-700 hover:text-green-500 transition-colors">
// //             <PiList className="w-7 h-7" />
// //           </button>
// //         </div>
 

// //       {/* Mobile Search Bar */}
// //       {showMobileSearch && (
// //         <div className="md:hidden p-3 bg-white shadow-md">
// //           <form  className="flex items-center">
// //             <input
// //               type="text"
// //               className="border-2 border-green-500 rounded-lg p-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
// //               placeholder="Search..."
// //               // value={searchQuery}
// //               // onChange={(e) => setSearchQuery(e.target.value)}
// //             />
// //             <button type="submit" className="absolute right-5  text-green-500 hover:text-green-700">
// //               <FaSearch />
// //             </button>
// //           </form>
// //         </div>
// //       )}
// //         <button onClick={toggleSidebar} className="text-gray-700 hidden md:flex hover:text-primary-500 transition-colors">
// //           <PiList className="w-8 h-8" />
// //         </button>
// //       </nav>

   

// //       {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} isLogIn={isLoggedIn} />}

// //     </>
// //   )
// // }

// // Navbar.propTypes = {
// //   isLoggedIn: PropTypes.bool,
// //   name: PropTypes.string,
// //   image: PropTypes.string,
// // }

// // export default Navbar




// import { useState, useEffect, useCallback } from "react"
// import { PiList, PiSealPercentBold } from "react-icons/pi"
// import { FaSearch, FaShoppingCart, FaCar, FaHeart, FaUserCircle } from "react-icons/fa"
// import Sidebar from "./Child/Sidebar"
// import { Link } from "react-router-dom"

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false)
//   const [selectedLanguage, setSelectedLanguage] = useState("English")
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//   const [isTakeAway, setIsTakeAway] = useState(false)
//   const [cartCount, setCartCount] = useState(0)
//   const [wishlistCount, setWishlistCount] = useState(0)
//   const [showMobileSearch, setShowMobileSearch] = useState(false)
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [userData, setUserData] = useState(null)

//   // Check if user is logged in
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"))
//     if (user) {
//       setIsLoggedIn(true)
//       setUserData(user)
//     } else {
//       setIsLoggedIn(false)
//       setUserData(null)
//     }
//   }, [])

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

//   const handleLogout = () => {
//     localStorage.removeItem("user")
//     setIsLoggedIn(false)
//     setUserData(null)
//     window.location.href = "/"
//   }

//   const handleDeliveryClick = () => {
//     setIsTakeAway(!isTakeAway)
//   }

//   const toggleDropdown = useCallback(() => {
//     setIsDropdownOpen((prev) => !prev)
//   }, [])

//   const toggleMobileSearch = useCallback(() => {
//     setShowMobileSearch((prev) => !prev)
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
//     { name: "Cart", icon: <FaShoppingCart />, link: "/cart", count: cartCount },
//   ]

//   return (
//     <>
//       <nav className="bg-white shadow-md p-3 md:px-32 flex justify-between items-center sticky top-0 z-50">
//         <div className="flex items-center space-x-6 w-full md:w-auto">
//           <Link to="/" className="flex items-center justify-center">
//             <img src="/logoemart.png" alt="6amMart Logo" className="h-12" />
//           </Link>
//         </div>

//         <div className="hidden md:flex items-center gap-8">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.link}
//               className="text-gray-700 text-base hover:text-green-600 flex items-center mx-3 cursor-pointer transition-colors relative"
//             >
//               {item.icon}
//               {item.count > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {item.count}
//                 </span>
//               )}
//               <span className="ml-1 font-medium">{item.name}</span>
//             </Link>
//           ))}

//           {isLoggedIn ? (
//             <div className="relative group">
//               <Link
//                 to="/account"
//                 className="bg-green-500 hover:bg-green-600 text-white rounded-lg p-2 px-4 flex items-center transition-colors"
//               >
//                 <FaCar className="h-4 w-4 mr-2" />
//                 <span>My Account</span>
//               </Link>
//               <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 hidden group-hover:block">
//                 <Link
//                   to="/account"
//                   className="block w-full p-3 text-gray-800 hover:bg-gray-100 text-left transition-colors border-b"
//                 >
//                   <div className="flex items-center">
//                     <img
//                       src={userData?.profileImage || "/placeholder.svg?height=40&width=40"}
//                       alt="Profile"
//                       className="h-8 w-8 rounded-full mr-2"
//                     />
//                     <div>
//                       <p className="font-medium">{userData?.name || "User"}</p>
//                       <p className="text-xs text-gray-500">{userData?.email || ""}</p>
//                     </div>
//                   </div>
//                 </Link>
//                 <Link
//                   to="/account/orders"
//                   className="block w-full p-2 text-gray-800 hover:bg-gray-100 text-left transition-colors"
//                 >
//                   My Orders
//                 </Link>
//                 <Link
//                   to="/account"
//                   className="block w-full p-2 text-gray-800 hover:bg-gray-100 text-left transition-colors"
//                 >
//                    Profile setting
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="block w-full p-2 text-red-600 hover:bg-gray-100 text-left transition-colors border-t"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <Link
//               to="/login"
//               className="bg-green-500 hover:bg-green-600 text-white rounded-lg p-2 px-4 flex items-center transition-colors"
//             >
//               <FaUserCircle className="h-4 w-4 mr-2" />
//               <span>Login</span>
//             </Link>
//           )}

//          <button onClick={toggleSidebar} className="text-gray-700 hidden md:flex hover:text-primary-500 transition-colors">
//            <PiList className="w-8 h-8" />
//         </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div className="flex md:hidden items-center space-x-3">
//           {navItems.slice(0, 3).map((item) => (
//             <Link key={item.name} to={item.link} className="text-gray-700 hover:text-green-500 relative">
//               <span className="text-xl">{item.icon}</span>
//               {item.count > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//                   {item.count}
//                 </span>
//               )}
//             </Link>
//           ))}

//           {isLoggedIn ? (
//             <Link to="/account" className="text-gray-700 hover:text-green-500">
//               <img
//                 src={userData?.profileImage || "/placeholder.svg?height=24&width=24"}
//                 alt="Profile"
//                 className="h-6 w-6 rounded-full"
//               />
//             </Link>
//           ) : (
//             <Link to="/login" className="text-gray-700 hover:text-green-500">
//               <FaUserCircle className="h-6 w-6" />
//             </Link>
//           )}

//           <button onClick={toggleSidebar} className="text-gray-700 hover:text-green-500 transition-colors">
//             <PiList className="w-7 h-7" />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Search Bar */}
//       {showMobileSearch && (
//         <div className="md:hidden p-3 bg-white shadow-md">
//           <form className="flex items-center">
//             <input
//               type="text"
//               className="border-2 border-green-500 rounded-lg p-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
//               placeholder="Search..."
//             />
//             <button type="submit" className="absolute right-5 text-green-500 hover:text-green-700">
//               <FaSearch />
//             </button>
//           </form>
//         </div>
//       )}

//       {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
//     </>
//   )
// }

// export default Navbar


////////// okkkkkk

// import { useState, useEffect, useCallback } from "react"
// import { PiList, PiSealPercentBold } from "react-icons/pi"
// import { FaSearch, FaShoppingCart, FaCar, FaHeart, FaUserCircle } from "react-icons/fa"
// import Sidebar from "./Child/Sidebar"
// import { Link } from "react-router-dom"
// import { FaUser } from "react-icons/fa6"

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false)
//   const [selectedLanguage, setSelectedLanguage] = useState("English")
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//   const [isTakeAway, setIsTakeAway] = useState(false)
//   const [cartCount, setCartCount] = useState(0)
//   const [wishlistCount, setWishlistCount] = useState(0)
//   const [showMobileSearch, setShowMobileSearch] = useState(false)
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [userData, setUserData] = useState(null)

//   // Check if user is logged in - this will run on component mount and when storage changes
//   const checkLoginStatus = useCallback(() => {
//     const storedUser = localStorage.getItem("user")
//     if (storedUser) {
//       const user = JSON.parse(storedUser)
//       setIsLoggedIn(true)
//       setUserData(user)
//     } else {
//       setIsLoggedIn(false)
//       setUserData(null)
//     }
//   }, [])

//   useEffect(() => {
//     // Initial check
//     checkLoginStatus()

//     // Listen for storage events (including our custom one)
//     window.addEventListener("storage", checkLoginStatus)

//     return () => {
//       window.removeEventListener("storage", checkLoginStatus)
//     }
//   }, [checkLoginStatus])

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

//   const handleLogout = () => {
//     localStorage.removeItem("user")
//     setIsLoggedIn(false)
//     setUserData(null)
//     window.location.href = "/"
//   }

//   const handleDeliveryClick = () => {
//     setIsTakeAway(!isTakeAway)
//   }

//   const toggleDropdown = useCallback(() => {
//     setIsDropdownOpen((prev) => !prev)
//   }, [])

//   const toggleMobileSearch = useCallback(() => {
//     setShowMobileSearch((prev) => !prev)
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
//     { name: "Cart", icon: <FaShoppingCart />, link: "/cart", count: cartCount },
//   ]

//   return (
//     <>
//       <nav className="bg-white shadow-md p-3 md:px-32 flex justify-between items-center sticky top-0 z-50">
//         <div className="flex items-center space-x-6 w-full md:w-auto">
//           <Link to="/" className="flex items-center justify-center">
//             <img src="/logoemart.png" alt="6amMart Logo" className="h-12" />
//           </Link>

//           <button onClick={toggleSidebar} className="text-gray-700 ml-4 hover:text-green-500 transition-colors">
//             <PiList className="w-7 h-7" />
//           </button>
//         </div>

//         <div className="hidden md:flex items-center gap-8">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.link}
//               className="text-gray-700 text-base hover:text-green-600 flex items-center mx-3 cursor-pointer transition-colors relative"
//             >
//               {item.icon}
//               {item.count > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {item.count}
//                 </span>
//               )}
//               <span className="ml-1 font-medium">{item.name}</span>
//             </Link>
//           ))}

//           {isLoggedIn ? (
//             <div className="relative group">
//               <Link
//                 to="/account"
//                 className="bg-green-500 hover:bg-green-600 text-white rounded-lg p-2 px-4 flex items-center transition-colors"
//               >
//                 <FaCar className="h-4 w-4 mr-2" />
//                 <span>My Account</span>
//               </Link>
//               <div className="absolute right-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 hidden group-hover:block">
//                 <Link
//                   to="/account"
//                   className="block w-full p-3 text-gray-800 hover:bg-gray-100 text-left transition-colors border-b"
//                 >
//                   <div className="flex items-center">
//                     {/* <img
//                       src={userData?.profileImage || "/placeholder.svg?height=40&width=40"}
//                       alt="Profile"
//                       className="h-8 w-8 rounded-full mr-2"
//                     /> */}
//                     <FaUser className="h-8 w-8 rounded-full mr-2" />
//                     <div>
//                       <p className="font-medium">{userData?.name || "User"}</p>
//                       <p className="text-xs text-gray-500">{userData?.email || ""}</p>
//                     </div>
//                   </div>
//                 </Link>
//                 <Link
//                   to="/account"
//                   className="block w-full p-2 text-gray-800 hover:bg-gray-100 text-left transition-colors"
//                 >
//                   My Orders
//                 </Link>
//                 {/* <Link
//                   to="/account/addresses"
//                   className="block w-full p-2 text-gray-800 hover:bg-gray-100 text-left transition-colors"
//                 >
//                   My Addresses
//                 </Link> */}
//                 <button
//                   onClick={handleLogout}
//                   className="block w-full p-2 text-red-600 hover:bg-gray-100 text-left transition-colors border-t"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <Link
//               to="/login"
//               className="bg-green-500 hover:bg-green-600 text-white rounded-lg p-2 px-4 flex items-center transition-colors"
//             >
//               <FaUserCircle className="h-4 w-4 mr-2" />
//               <span>Login</span>
//             </Link>
//           )}
//         </div>

//         {/* Mobile Navigation */}
//         <div className="flex md:hidden items-center space-x-3">
//           {navItems.slice(0, 3).map((item) => (
//             <Link key={item.name} to={item.link} className="text-gray-700 hover:text-green-500 relative">
//               <span className="text-xl">{item.icon}</span>
//               {item.count > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//                   {item.count}
//                 </span>
//               )}
//             </Link>
//           ))}

//           {isLoggedIn ? (
//             <Link to="/account" className="text-gray-700 hover:text-green-500">
//               <img
//                 src={userData?.profileImage || "/placeholder.svg?height=24&width=24"}
//                 alt="Profile"
//                 className="h-6 w-6 rounded-full"
//               />
//             </Link>
//           ) : (
//             <Link to="/login" className="text-gray-700 hover:text-green-500">
//               <FaUserCircle className="h-6 w-6" />
//             </Link>
//           )}

//           <button onClick={toggleSidebar} className="text-gray-700 hover:text-green-500 transition-colors">
//             <PiList className="w-7 h-7" />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Search Bar */}
//       {showMobileSearch && (
//         <div className="md:hidden p-3 bg-white shadow-md">
//           <form className="flex items-center">
//             <input
//               type="text"
//               className="border-2 border-green-500 rounded-lg p-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
//               placeholder="Search..."
//             />
//             <button type="submit" className="absolute right-5 text-green-500 hover:text-green-700">
//               <FaSearch />
//             </button>
//           </form>
//         </div>
//       )}

//       {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
//     </>
//   )
// }

// export default Navbar



"use client"

import { useState, useEffect, useCallback } from "react"
import { PiList, PiSealPercentBold } from "react-icons/pi"
import { FaSearch, FaShoppingCart, FaCar, FaHeart, FaUserCircle, FaUser } from "react-icons/fa"
import Sidebar from "./Child/Sidebar"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("English")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isTakeAway, setIsTakeAway] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)

  // Check if user is logged in - this will run on component mount and when storage changes
  const checkLoginStatus = useCallback(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      setIsLoggedIn(true)
      setUserData(user)
    } else {
      setIsLoggedIn(false)
      setUserData(null)
    }
  }, [])

  useEffect(() => {
    // Initial check
    checkLoginStatus()

    // Listen for storage events (including our custom one)
    window.addEventListener("storage", checkLoginStatus)

    return () => {
      window.removeEventListener("storage", checkLoginStatus)
    }
  }, [checkLoginStatus])

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

  const handleLogout = () => {
    localStorage.removeItem("user")
    setIsLoggedIn(false)
    setUserData(null)
    window.location.href = "/"
  }

  const handleDeliveryClick = () => {
    setIsTakeAway(!isTakeAway)
  }

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev)
  }, [])

  const toggleMobileSearch = useCallback(() => {
    setShowMobileSearch((prev) => !prev)
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
    { name: "Cart", icon: <FaShoppingCart />, link: "/cart", count: cartCount },
  ]

  return (
    <>
      <nav className="bg-white shadow-md p-3 md:px-32 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-6 w-full md:w-auto">
          <Link to="/" className="flex items-center justify-center">
            <img src="/logoemart.png" alt="6amMart Logo" className="h-12" />
          </Link>

         
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="text-gray-700 text-base hover:text-green-600 flex items-center mx-3 cursor-pointer transition-colors relative"
            >
              {item.icon}
              {item.count > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {item.count}
                </span>
              )}
              <span className="ml-1 font-medium">{item.name}</span>
            </Link>
          ))}

          {isLoggedIn ? (
            <div className="relative group">
              <Link
                to="/account"
                className="bg-green-500 hover:bg-green-600 text-white rounded-lg p-2 px-4 flex items-center transition-colors"
              >
                <FaCar className="h-4 w-4 mr-2" />
                <span>My Account</span>
              </Link>
              <div className="absolute right-0  w-60 bg-white border border-gray-200 rounded-md shadow-lg z-10 hidden group-hover:block">
                <Link
                  to="/account"
                  className="block w-full p-3 text-gray-800 hover:bg-gray-100 text-left transition-colors border-b"
                >
                  <div className="flex items-center">
                    {/* <img
                      src={userData?.profileImage || "/placeholder.svg?height=40&width=40"}
                      alt="Profile"
                      className="h-8 w-8 rounded-full mr-2"
                    /> */}

                    <FaUser className="h-8 w-8 rounded-full mr-2" />
                    <div>
                      <p className="font-medium">{userData?.name || "User"}</p>
                      <p className="text-xs text-gray-500">{userData?.email || ""}</p>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/account"
                  className="block w-full p-2 text-gray-800 hover:bg-gray-100 text-left transition-colors"
                >
                  Profile setting
                </Link>
                {/* <Link
                  to="/account/addresses"
                  className="block w-full p-2 text-gray-800 hover:bg-gray-100 text-left transition-colors"
                >
                  My Addresses
                </Link> */}
               
                <Link
                  to="/about"
                  className="block w-full p-2 text-gray-800 hover:bg-gray-100 text-left transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="block w-full p-2 text-gray-800 hover:bg-gray-100 text-left transition-colors"
                >
                  Contact
                </Link>
                <Link
                  to="/privacy"
                  className="block w-full p-2 text-gray-800 hover:bg-gray-100 text-left transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-and-conditions"
                  className="block w-full p-2 text-gray-800 hover:bg-gray-100 text-left transition-colors"
                >
                  Terms & Conditions
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full p-2 text-red-600 hover:bg-gray-100 text-left transition-colors border-t"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-green-500 hover:bg-green-600 text-white rounded-lg p-2 px-4 flex items-center transition-colors"
            >
              <FaUserCircle className="h-4 w-4 mr-2" />
              <span>Login</span>
            </Link>
          )}

<button onClick={toggleSidebar} className="text-gray-700 ml-4 hover:text-green-500 transition-colors">
            <PiList className="w-7 h-7" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-3">
          {navItems.slice(0, 3).map((item) => (
            <Link key={item.name} to={item.link} className="text-gray-700 hover:text-green-500 relative">
              <span className="text-xl">{item.icon}</span>
              {item.count > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {item.count}
                </span>
              )}
            </Link>
          ))}

          {isLoggedIn ? (
            <Link to="/account" className="text-gray-700 hover:text-green-500">
              {/* <img
                src={userData?.profileImage || "/placeholder.svg?height=24&width=24"}
                alt="Profile"
                className="h-6 w-6 rounded-full"
              /> */}
              <FaUser className="h-6 w-6 rounded-full mr-2" />
            </Link>
          ) : (
            <Link to="/login" className="text-gray-700 hover:text-green-500">
              <FaUserCircle className="h-6 w-6" />
            </Link>
          )}

          <button onClick={toggleSidebar} className="text-gray-700 hover:text-green-500 transition-colors">
            <PiList className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* Mobile Search Bar */}
      {showMobileSearch && (
        <div className="md:hidden p-3 bg-white shadow-md">
          <form className="flex items-center">
            <input
              type="text"
              className="border-2 border-green-500 rounded-lg p-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
              placeholder="Search..."
            />
            <button type="submit" className="absolute right-5 text-green-500 hover:text-green-700">
              <FaSearch />
            </button>
          </form>
        </div>
      )}

      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
    </>
  )
}

export default Navbar




