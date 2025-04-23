// import PropTypes from "prop-types"
// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { IoClose } from "react-icons/io5"
// import {
//   FaHome,
//   FaGift,
//   FaAddressBook,
//   FaHeart,
//   FaUser,
//   FaSignOutAlt,
//   FaShoppingCart,
//   FaCreditCard,
//   FaList,
//   FaUtensils,
//   FaSearch,
//   FaPercent,
//   FaPhoneAlt,
//   FaQuestionCircle,
//   FaShieldAlt,
//   FaInfoCircle,
// } from "react-icons/fa"
// // import logo from "../../../../public/logo-e.png"

// const menuItems = [
//   { icon: <FaHome className="text-accent-primary" />, label: "Home", to: "/" },
//   { icon: <FaSearch className="text-accent-primary" />, label: "Search", to: "/search" },
//   { icon: <FaUtensils className="text-accent-primary" />, label: "All Restaurants", to: "/restaurants" },
//   { icon: <FaPercent className="text-accent-primary" />, label: "Offers & Deals", to: "/offers" },
//   { icon: <FaUser className="text-accent-primary" />, label: "Login", to: "/login" },
//   { icon: <FaUser className="text-accent-primary" />, label: "Register", to: "/signup" },
//   { icon: <FaPhoneAlt className="text-accent-primary" />, label: "Contact Us", to: "/contact-us" },
//   { icon: <FaShieldAlt className="text-accent-primary" />, label: "Privacy Policy", to: "/privacy" },
//   { icon: <FaInfoCircle className="text-accent-primary" />, label: "About Us", to: "/about" },
// ]

// const loggedInItems = [
//   { icon: <FaHome className="text-accent-primary" />, label: "Home", to: "/" },
//   { icon: <FaShoppingCart className="text-accent-primary" />, label: "My Orders", to: "/my-orders" },
//   { icon: <FaCreditCard className="text-accent-primary" />, label: "My Transactions", to: "/transactions" },
//   { icon: <FaGift className="text-accent-primary" />, label: "Buy Gift Card", to: "/buy-gift-card" },
//   { icon: <FaGift className="text-accent-primary" />, label: "My Gift Cards", to: "/my-gift-cards" },
//   { icon: <FaHeart className="text-accent-primary" />, label: "Favorite Restaurants", to: "/favorite-restaurant" },
//   { icon: <FaHeart className="text-accent-primary" />, label: "Favorite Foods", to: "/favorite-foods" },
//   { icon: <FaAddressBook className="text-accent-primary" />, label: "Address Book", to: "/address-book" },
//   { icon: <FaList className="text-accent-primary" />, label: "All Restaurants", to: "/restaurants" },
//   { icon: <FaUtensils className="text-accent-primary" />, label: "Dine in Restaurants", to: "/dine-in" },
//   { icon: <FaUtensils className="text-accent-primary" />, label: "My Dine In Requests", to: "/my-dine-in-requests" },
//   { icon: <FaUser className="text-accent-primary" />, label: "Profile", to: "/profile" },
//   { icon: <FaPhoneAlt className="text-accent-primary" />, label: "Contact Us", to: "/contact-us" },
//   { icon: <FaSignOutAlt className="text-accent-primary" />, label: "Logout", to: "/logout" },
// ]

// const Sidebar = ({ toggleSidebar, isLogIn }) => {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//     return () => setIsVisible(false)
//   }, [])

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm" onClick={toggleSidebar}>
//       <div
//         className={`fixed left-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl overflow-y-auto z-50 transform ${
//           isVisible ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out`}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Header */}
//         <div className="bg-gradient-to-r from-accent-primary to-accent-secondary p-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <img src="/logoemart.png" alt="6amart" className="h-10 mr-2" />
//             {/* <h2 className="text-2xl font-bold ">6amart</h2> */}
//           </div>
//           <button
//             onClick={toggleSidebar}
//             className="text-white hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
//           >
//             <IoClose size={24} />
//           </button>
//         </div>

//         {/* User Profile (if logged in) */}
//         {isLogIn && (
//           <div className="p-4 border-b border-gray-200 flex items-center">
//             <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden mr-3">
//               <img
//                 src="https://randomuser.me/api/portraits/men/32.jpg"
//                 alt="User"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div>
//               <h3 className="font-bold text-gray-800">Faisal Khan</h3>
//               <p className="text-gray-500 text-sm">faisalkh01122@gmail.com</p>
//             </div>
//           </div>
//         )}

//         {/* Menu Items */}
//         <nav className="py-2">
//           <ul className="divide-y divide-gray-100">
//             {(isLogIn ? loggedInItems : menuItems).map((item, index) => (
//               <li key={index}>
//                 <Link
//                   to={item.to}
//                   className="flex items-center py-3 px-6 hover:bg-gray-50 transition-colors duration-200"
//                   onClick={toggleSidebar}
//                 >
//                   <span className="mr-4 text-xl">{item.icon}</span>
//                   <span className="text-gray-700">{item.label}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* App Version */}
//         <div className="mt-auto p-6 border-t border-gray-200">
//           <div className="flex justify-between items-center">
//             <p className="text-gray-500 text-sm">App Version</p>
//             <p className="text-gray-700 font-medium">v6.0</p>
//           </div>
//         </div>

//         {/* Bottom Navigation */}
//         <div className="bg-gray-100 p-4 flex justify-around">
//           <Link to="/" className="flex flex-col items-center" onClick={toggleSidebar}>
//             <FaHome className="text-accent-primary text-xl mb-1" />
//             <span className="text-xs text-gray-600">Home</span>
//           </Link>
//           <Link to="/contact-us" className="flex flex-col items-center" onClick={toggleSidebar}>
//             <FaPhoneAlt className="text-accent-primary text-xl mb-1" />
//             <span className="text-xs text-gray-600">Contact</span>
//           </Link>
//           <Link to="/help" className="flex flex-col items-center" onClick={toggleSidebar}>
//             <FaQuestionCircle className="text-accent-primary text-xl mb-1" />
//             <span className="text-xs text-gray-600">Help</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// Sidebar.propTypes = {
//   toggleSidebar: PropTypes.func.isRequired,
//   isLogIn: PropTypes.bool.isRequired,
// }

// export default Sidebar





import {
  FaTimes,
  FaHome,
  FaUtensils,
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaGift,
  FaInfoCircle,
  FaPhone,
  FaSignOutAlt,
  FaSignInAlt,
} from "react-icons/fa"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Sidebar = ({ toggleSidebar, isLoggedIn, onLogout }) => {
  const menuItems = [
    { name: "Home", icon: <FaHome />, link: "/" },
    { name: "Restaurants", icon: <FaUtensils />, link: "/restaurants" },
    { name: "Cart", icon: <FaShoppingCart />, link: "/cart" },
    { name: "Wishlist", icon: <FaHeart />, link: "/wishlist" },
    // { name: "Gift Cards", icon: <FaGift />, link: "/buy-gift-card" },
    { name: "About Us", icon: <FaInfoCircle />, link: "/about" },
    { name: "Contact Us", icon: <FaPhone />, link: "/contact" },
  ]

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={toggleSidebar}></div>
        <div className="fixed inset-y-0 left-0 max-w-full flex">
          <div className="relative w-screen max-w-md">
            <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
              <div className="px-4 sm:px-6 flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900">Menu</h2>
                <button
                  onClick={toggleSidebar}
                  className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <span className="sr-only">Close panel</span>
                  <FaTimes className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 relative flex-1 px-4 sm:px-6">
                <div className="absolute inset-0 px-4 sm:px-6">
                  <div className="h-full border-t border-gray-200" aria-hidden="true">
                    <ul className="py-6 space-y-4">
                      {menuItems.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.link}
                            className="flex items-center px-3 py-2 text-base font-medium rounded-md text-gray-700 hover:text-green-500 hover:bg-gray-100"
                            onClick={toggleSidebar}
                          >
                            <span className="mr-3 text-gray-500">{item.icon}</span>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-gray-200 pt-6">
                      {isLoggedIn ? (
                        <>
                          <Link
                            to="/account"
                            className="flex items-center px-3 py-2 text-base font-medium rounded-md text-gray-700 hover:text-green-500 hover:bg-gray-100"
                            onClick={toggleSidebar}
                          >
                            <span className="mr-3 text-gray-500">
                              <FaUser />
                            </span>
                            My Account
                          </Link>
                          <button
                            onClick={() => {
                              onLogout()
                              toggleSidebar()
                            }}
                            className="flex items-center px-3 py-2 text-base font-medium rounded-md text-red-600 hover:text-red-700 hover:bg-gray-100 w-full text-left mt-2"
                          >
                            <span className="mr-3 text-red-500">
                              <FaSignOutAlt />
                            </span>
                            Logout
                          </button>
                        </>
                      ) : (
                        <Link
                          to="/login"
                          className="flex items-center px-3 py-2 text-base font-medium rounded-md text-gray-700 hover:text-green-500 hover:bg-gray-100"
                          onClick={toggleSidebar}
                        >
                          <span className="mr-3 text-gray-500">
                            <FaSignInAlt />
                          </span>
                          Login / Register
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
}

export default Sidebar
