// import PropTypes from "prop-types"; // Import PropTypes
// import { FaHome, FaGift, FaAddressBook, FaHeart } from "react-icons/fa";
// import { FiUser, FiLogOut, FiShoppingCart, FiCreditCard } from "react-icons/fi";
// import { IoList, IoRestaurant } from "react-icons/io5";
// import { Link } from "react-router-dom";
// const menuItems = [
//   { icon: <FaHome />, label: "Home page", to: "/" },
//   { icon: <FiUser />, label: "Contact Us", to: "/contact-us" },
//   { icon: <IoList />, label: "All Restaurants", to: "/restaurants" },
//   {
//     icon: <IoList />,
//     label: "Dine in Restaurants",
//     to: "/dine-in",
//   },
//   { icon: <FiUser />, label: "Login", to: "/login" },
//   { icon: <FiUser />, label: "Register", to: "/register" },
// ];
// const loggedInItems = [
//   { icon: <FaHome />, label: "Home page", to: "/" },
//   { icon: <FiShoppingCart />, label: "My Orders", to: "/my-orders" },
//   { icon: <FiCreditCard />, label: "My Transactions", to: "/transactions" },
//   { icon: <FaGift />, label: "Buy Gift Card", to: "/buy-gift-card" },
//   { icon: <FaGift />, label: "My Gift Cards", to: "/my-gift-cards" },
//   {
//     icon: <FaHeart />,
//     label: "Favorite Restaurant",
//     to: "/favorite-restaurant",
//   },
//   { icon: <FaHeart />, label: "Favorite Foods", to: "/favorite-foods" },
//   { icon: <FaAddressBook />, label: "Address Book", to: "/address-book" },
//   { icon: <IoList />, label: "All Restaurants", to: "/restaurants" },
//   {
//     icon: <IoRestaurant />,
//     label: "Dine in Restaurants",
//     to: "/dine-in",
//   },
//   {
//     icon: <IoRestaurant />,
//     label: "My Dine In Requests",
//     to: "/my-dine-in-requests",
//   },
//   { icon: <FiUser />, label: "Profile", to: "/profile" },
//   { icon: <FiUser />, label: "Contact Us", to: "/contact-us" },
//   { icon: <FiLogOut />, label: "Logout", to: "/logout" },
// ];

// const Sidebar = ({ toggleSidebar, isLogIn }) => {
//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 z-40 "
//       onClick={toggleSidebar}
//     >
//       <div
//         className="fixed left-0 top-0 w-62 bg-white h-full w-80 shadow-lg z-50 overflow-y-auto scrollbar-hide"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div>
//           <div className="flex justify-between items-center h-16 font-bold p-4 bg-primary-900">
//             <h2 className="text-3xl text-white">E Market</h2>
//           </div>
//           <ul className="">
//             {isLogIn
//               ? loggedInItems.map((item, index) => (
//                   // JSX for logged in items
//                   <Link
//                     to={item.to}
//                     key={index}
//                     className="border-b items-center h-12 gap-2 px-2 flex  hover:bg-primary-500"
//                   >
//                     {item.icon}
//                     <button className="text-gray-700 hover:text-gray-900 text-sm">
//                       {item.label}
//                     </button>
//                   </Link>
//                 ))
//               : menuItems.map((item, index) => (
//                   // JSX for menu items
//                   <Link
//                     to={item.to}
//                     key={index}
//                     className="border-b items-center h-12 px-2 flex  hover:bg-primary-500"
//                   >
//                     {item.icon}
//                     <button className="text-gray-700 hover:text-gray-900 text-sm">
//                       {item.label}
//                     </button>
//                   </Link>
//                 ))}
//           </ul>
//           <p className="mt-4 pl-24 text-black font-semibold border-b p-8">
//             V:6.0
//           </p>
//         </div>
//         <div className="border-t mt-28"></div>
//         <div className="flex mt-5">
//           <Link to="/contact-us" className="group ml-8">
//             <img
//               src="https://icones.pro/wp-content/uploads/2021/02/icone-de-la-maison-orange.png"
//               className="h-5 w-6 group-hover:opacity-0 transition-opacity duration-300"
//               alt="Home Icon"
//             />
//             <h3 className="text-orange-600 text-sm">Home</h3>
//           </Link>

//           <Link to="/" className="group ml-20">
//             <img
//               src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-mono/128/Telephone-Receiver-icon.png"
//               className="h-5 w-6 group-hover:opacity-0 transition-opacity duration-300"
//               alt="Help Icon"
//             />
//             <h3 className="text-sm text-gray-500">Help</h3>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// Sidebar.propTypes = {
//   toggleSidebar: PropTypes.func.isRequired, // toggleSidebar is a function and is required
//   isLogIn: PropTypes.bool.isRequired, // isLoggedIn is a boolean and is required
// };
// export default Sidebar;



"use client"

import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { IoClose } from "react-icons/io5"
import {
  FaHome,
  FaGift,
  FaAddressBook,
  FaHeart,
  FaUser,
  FaSignOutAlt,
  FaShoppingCart,
  FaCreditCard,
  FaList,
  FaUtensils,
  FaSearch,
  FaPercent,
  FaPhoneAlt,
  FaQuestionCircle,
  FaShieldAlt,
  FaInfoCircle,
} from "react-icons/fa"
import logo from "../../../../public/logo-e.png"

const menuItems = [
  { icon: <FaHome className="text-accent-primary" />, label: "Home", to: "/" },
  { icon: <FaSearch className="text-accent-primary" />, label: "Search", to: "/search" },
  { icon: <FaUtensils className="text-accent-primary" />, label: "All Restaurants", to: "/restaurants" },
  { icon: <FaPercent className="text-accent-primary" />, label: "Offers & Deals", to: "/offers" },
  { icon: <FaUser className="text-accent-primary" />, label: "Login", to: "/login" },
  { icon: <FaUser className="text-accent-primary" />, label: "Register", to: "/register" },
  { icon: <FaPhoneAlt className="text-accent-primary" />, label: "Contact Us", to: "/contact-us" },
  { icon: <FaShieldAlt className="text-accent-primary" />, label: "Privacy Policy", to: "/privacy" },
  { icon: <FaInfoCircle className="text-accent-primary" />, label: "About Us", to: "/about" },
]

const loggedInItems = [
  { icon: <FaHome className="text-accent-primary" />, label: "Home", to: "/" },
  { icon: <FaShoppingCart className="text-accent-primary" />, label: "My Orders", to: "/my-orders" },
  { icon: <FaCreditCard className="text-accent-primary" />, label: "My Transactions", to: "/transactions" },
  { icon: <FaGift className="text-accent-primary" />, label: "Buy Gift Card", to: "/buy-gift-card" },
  { icon: <FaGift className="text-accent-primary" />, label: "My Gift Cards", to: "/my-gift-cards" },
  { icon: <FaHeart className="text-accent-primary" />, label: "Favorite Restaurants", to: "/favorite-restaurant" },
  { icon: <FaHeart className="text-accent-primary" />, label: "Favorite Foods", to: "/favorite-foods" },
  { icon: <FaAddressBook className="text-accent-primary" />, label: "Address Book", to: "/address-book" },
  { icon: <FaList className="text-accent-primary" />, label: "All Restaurants", to: "/restaurants" },
  { icon: <FaUtensils className="text-accent-primary" />, label: "Dine in Restaurants", to: "/dine-in" },
  { icon: <FaUtensils className="text-accent-primary" />, label: "My Dine In Requests", to: "/my-dine-in-requests" },
  { icon: <FaUser className="text-accent-primary" />, label: "Profile", to: "/profile" },
  { icon: <FaPhoneAlt className="text-accent-primary" />, label: "Contact Us", to: "/contact-us" },
  { icon: <FaSignOutAlt className="text-accent-primary" />, label: "Logout", to: "/logout" },
]

const Sidebar = ({ toggleSidebar, isLogIn }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    return () => setIsVisible(false)
  }, [])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm" onClick={toggleSidebar}>
      <div
        className={`fixed left-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl overflow-y-auto z-50 transform ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-accent-primary to-accent-secondary p-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo || "/placeholder.svg"} alt="Foodie" className="h-10 mr-2" />
            <h2 className="text-2xl font-bold text-white">Foodie</h2>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-white hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* User Profile (if logged in) */}
        {isLogIn && (
          <div className="p-4 border-b border-gray-200 flex items-center">
            <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden mr-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Aqib Ahmed</h3>
              <p className="text-gray-500 text-sm">aqibahmed886@gmail.com</p>
            </div>
          </div>
        )}

        {/* Menu Items */}
        <nav className="py-2">
          <ul className="divide-y divide-gray-100">
            {(isLogIn ? loggedInItems : menuItems).map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="flex items-center py-3 px-6 hover:bg-gray-50 transition-colors duration-200"
                  onClick={toggleSidebar}
                >
                  <span className="mr-4 text-xl">{item.icon}</span>
                  <span className="text-gray-700">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* App Version */}
        <div className="mt-auto p-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">App Version</p>
            <p className="text-gray-700 font-medium">v6.0</p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-gray-100 p-4 flex justify-around">
          <Link to="/" className="flex flex-col items-center" onClick={toggleSidebar}>
            <FaHome className="text-accent-primary text-xl mb-1" />
            <span className="text-xs text-gray-600">Home</span>
          </Link>
          <Link to="/contact-us" className="flex flex-col items-center" onClick={toggleSidebar}>
            <FaPhoneAlt className="text-accent-primary text-xl mb-1" />
            <span className="text-xs text-gray-600">Contact</span>
          </Link>
          <Link to="/help" className="flex flex-col items-center" onClick={toggleSidebar}>
            <FaQuestionCircle className="text-accent-primary text-xl mb-1" />
            <span className="text-xs text-gray-600">Help</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isLogIn: PropTypes.bool.isRequired,
}

export default Sidebar
