// import { useState, useCallback } from "react";

// import { PiList, PiSealPercentBold } from "react-icons/pi";
// import {
//   FaSearch,
//   FaShoppingCart,
//   FaCar,
//   FaChevronDown,
//   FaUserCircle,
// } from "react-icons/fa";
// import PropTypes from "prop-types"; // Import PropTypes
// import Dropdown from "./Child/Dropdown";
// import Sidebar from "./Child/Sidebar";
// import { GrLocation } from "react-icons/gr";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { CiGlobe } from "react-icons/ci";
// // import img from '../../assets/logo_web.png'
// import { Link } from "react-router-dom";

// const Navbar = ({ isLoggedIn, name, image }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("English");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isTakeAway, setIsTakeAway] = useState(false);

//   const handleDeliveryClick = () => {
//     setIsTakeAway(!isTakeAway);
//   };
//   const toggleDropdown = useCallback(() => {
//     setIsDropdownOpen((prev) => !prev);
//   }, []);

//   const handleLanguageChange = useCallback((language) => {
//     setSelectedLanguage(language);
//     setIsDropdownOpen(false); // Close dropdown after selection
//   }, []);

//   const toggleSidebar = useCallback(() => {
//     setIsSidebarOpen((prev) => !prev);
//   }, []);

//   const navItems = [
//     { name: "Search", icon: <FaSearch />, link: "/search" },
//     { name: "Offers", icon: <PiSealPercentBold />, link: "/offers" },
//     { name: "Sign in", icon: <FaUserCircle />, link: "/offers" },
//     { name: "Cart", icon: <FaShoppingCart />, link: "/checkout" },
//   ];

//   const languages = ["English", "Spanish", "French"];

//   return (
//     <>
//       <nav className="bg-white border-b p-2  md:px-32 flex justify-between items-center">
//         <div className="flex items-center space-x-6 w-full md:w-auto">
//           <Link to="/" className="flex items-center justify-center">
//             <img src="/E-Market-logo.png" alt="Foodie Logo" className="h-12" />
//           </Link>

//           <div className="relative hidden lg:flex">
//             <input
//               type="text"
//               className="border-2 border-primary-900 rounded-md p-2 pl-10 pr-8"
//               value="Location"
//               readOnly
//             />
//             <GrLocation className="text-primary-900 w-6 h-6 absolute left-2 top-2 " />
//             <IoMdArrowDropdown className="w-4 h-4 absolute right-2 top-2 text-gray-600" />
//           </div>
//         </div>

//         <div className="hidden md:flex items-center space-x-2 ">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.link}
//               className="text-gray-600 text-base hover:text-gray-800 flex items-center mx-4 cursor-pointer"
//             >
//               {item.name === "Sign in" && isLoggedIn ? "" : item.icon}
//               {item.name === "Sign in" && isLoggedIn ? (
//                 <div className="flex gap-2">
//                   <img
//                     src={image}
//                     alt="Client"
//                     className="h-8 w-8 bg-gray-100 rounded-full ml-1"
//                   />
//                   <span className="flex items-center">
//                     {" Hi "}
//                     {name} <Dropdown isLoggedIn={isLoggedIn} />
//                   </span>
//                 </div>
//               ) : (
//                 <span className="ml-1">
//                   {item.name}{" "}
//                   {item.name === "Sign in" ? (
//                     <Dropdown isLoggedIn={isLoggedIn} />
//                   ) : null}
//                 </span>
//               )}
//             </Link>
//           ))}
//           {/* <Dropdown /> */}
//           <button
//             className="bg-primary-900 text-white rounded-md p-1 px-2 flex items-center"
//             onClick={handleDeliveryClick}
//           >
//             <FaCar className="h-4 w-4 mr-1" />
//             {isTakeAway ? (
//               <>
//                 <Link to="/takeaway">
//                   <span>TakeAway</span>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link to="/delivery">
//                   <span>Delivery</span>
//                 </Link>
//               </>
//             )}
//           </button>
//           <div className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="text-gray-600 hover:text-gray-800 flex items-center"
//             >
//               <CiGlobe className="h-4 w-4 mr-1" />
//               {selectedLanguage}
//               <FaChevronDown className="h-2 w-2 ml-1" />
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-300 rounded-md shadow-lg z-10">
//                 {languages.map((language) => (
//                   <button
//                     key={language}
//                     onClick={() => handleLanguageChange(language)}
//                     className=" w-full p-1 text-gray-800 hover:bg-gray-100 text-left"
//                   >
//                     {language}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//           {/* <button
//             onClick={toggleSidebar}
//             className="text-gray-600 hover:text-gray-800"
//           >
//             <PiList className="w-8 h-8" />
//           </button> */}
//         </div>
//         <button
//           onClick={toggleSidebar}
//           className="text-gray-600 hover:text-gray-800"
//         >
//           <PiList className="w-8 h-8" />
//         </button>
//       </nav>

//       {isSidebarOpen && (
//         <Sidebar toggleSidebar={toggleSidebar} isLogIn={isLoggedIn} />
//       )}
//     </>
//   );
// };

// Navbar.propTypes = {
//   isLoggedIn: PropTypes.bool,
//   name: PropTypes.string,
//   image: PropTypes.string,
// };

// export default Navbar;




// import { useState, useCallback } from "react"

// import { PiList, PiSealPercentBold } from "react-icons/pi"
// import { FaSearch, FaShoppingCart, FaCar, FaChevronDown, FaUserCircle } from "react-icons/fa"
// import PropTypes from "prop-types" // Import PropTypes
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
//     { name: "Sign in", icon: <FaUserCircle />, link: "/login" },
//     { name: "Cart", icon: <FaShoppingCart />, link: "/checkout" },
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
//               className="border-2 border-red-500 rounded-lg p-2 pl-10 pr-8 focus:outline-none focus:ring-2 focus:ring-red-500"
//               placeholder="Enter your location"
//               readOnly
//             />
//             <GrLocation className="text-red-500 w-5 h-5 absolute left-3 top-3" />
//             <IoMdArrowDropdown className="w-5 h-5 absolute right-2 top-3 text-red-500" />
//           </div>
//         </div>

//         <div className="hidden md:flex items-center space-x-4">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.link}
//               className="text-gray-700 text-base hover:text-red-500 flex items-center mx-3 cursor-pointer transition-colors"
//             >
//               {item.name === "Sign in" && isLoggedIn ? "" : item.icon}
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
//             className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 px-4 flex items-center transition-colors"
//             onClick={handleDeliveryClick}
//           >
//             <FaCar className="h-4 w-4 mr-2" />
//             {isTakeAway ? (
//               <>
//                 <Link to="/takeaway">
//                   <span>TakeAway</span>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link to="/delivery">
//                   <span>Delivery</span>
//                 </Link>
//               </>
//             )}
//           </button>
//           <div className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="text-gray-700 hover:text-red-500 flex items-center transition-colors"
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
//           </div>
//         </div>
//         <button onClick={toggleSidebar} className="text-gray-700 hover:text-red-500 transition-colors">
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




"use client"

import { useState, useCallback } from "react"

import { PiList, PiSealPercentBold } from "react-icons/pi"
import { FaSearch, FaShoppingCart, FaCar, FaChevronDown, FaUserCircle } from "react-icons/fa"
import PropTypes from "prop-types" // Import PropTypes
import Dropdown from "./Child/Dropdown"
import Sidebar from "./Child/Sidebar"
import { GrLocation } from "react-icons/gr"
import { IoMdArrowDropdown } from "react-icons/io"
import { CiGlobe } from "react-icons/ci"
import { Link } from "react-router-dom"

const Navbar = ({ isLoggedIn, name, image }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("English")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isTakeAway, setIsTakeAway] = useState(false)

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
    { name: "Sign in", icon: <FaUserCircle />, link: "/login" },
    { name: "Cart", icon: <FaShoppingCart />, link: "/checkout" },
  ]

  const languages = ["English", "Urdu"]

  return (
    <>
      <nav className="bg-white shadow-md p-3 md:px-32 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-6 w-full md:w-auto">
          <Link to="/" className="flex items-center justify-center">
            <img src="/E-Market-logo.png" alt="Foodie Logo" className="h-12" />
          </Link>

          <div className="relative hidden lg:flex">
            <input
              type="text"
              className="border-2 border-red-500 rounded-lg p-2 pl-10 pr-8 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your location"
              readOnly
            />
            <GrLocation className="text-red-500 w-5 h-5 absolute left-3 top-3" />
            <IoMdArrowDropdown className="w-5 h-5 absolute right-2 top-3 text-red-500" />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="text-gray-700 text-base hover:text-red-500 flex items-center mx-3 cursor-pointer transition-colors"
            >
              {item.name === "Sign in" && isLoggedIn ? "" : item.icon}
              {item.name === "Sign in" && isLoggedIn ? (
                <div className="flex gap-2 items-center">
                  <img
                    src={image || "/placeholder.svg"}
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
            className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 px-4 flex items-center transition-colors"
            onClick={handleDeliveryClick}
          >
            <FaCar className="h-4 w-4 mr-2" />
            {isTakeAway ? (
              <>
                <Link to="/takeaway">
                  <span>TakeAway</span>
                </Link>
              </>
            ) : (
              <>
                <Link to="/delivery">
                  <span>Delivery</span>
                </Link>
              </>
            )}
          </button>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-700 hover:text-red-500 flex items-center transition-colors"
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
          </div>
        </div>
        <button onClick={toggleSidebar} className="text-gray-700 hover:text-red-500 transition-colors">
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
