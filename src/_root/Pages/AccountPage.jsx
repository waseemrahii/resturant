// "use client"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { FaUser, FaShoppingBag, FaHeart, FaAddressCard, FaCreditCard, FaSignOutAlt, FaBell } from "react-icons/fa"
// import { Link } from "react-router-dom"
// import { toast, ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

// const AccountPage = () => {
//   const [activeTab, setActiveTab] = useState("profile")
//   const [isLoading, setIsLoading] = useState(true)
//   const [userData, setUserData] = useState({
//     firstName: "Aqib",
//     lastName: "Ahmed",
//     email: "aqibahmed886@gmail.com",
//     phone: "+923161887004",
//     image: null,
//   })
//   const [orders, setOrders] = useState([])
//   const [wishlist, setWishlist] = useState([])

//   useEffect(() => {
//     // Simulate loading data
//     setTimeout(() => {
//       // Load orders
//       const sampleOrders = [
//         {
//           id: "ORD-12345",
//           date: "2023-05-15",
//           status: "Delivered",
//           total: 1299,
//           items: [
//             { name: "Chicken Biryani", quantity: 2, price: 299 },
//             { name: "Seekh Kebab", quantity: 1, price: 249 },
//             { name: "Naan", quantity: 4, price: 40 },
//           ],
//           restaurant: "Flavor Express",
//         },
//         {
//           id: "ORD-12346",
//           date: "2023-05-10",
//           status: "Delivered",
//           total: 849,
//           items: [
//             { name: "Butter Chicken", quantity: 1, price: 349 },
//             { name: "Garlic Naan", quantity: 2, price: 50 },
//             { name: "Gulab Jamun", quantity: 2, price: 100 },
//           ],
//           restaurant: "Curry House",
//         },
//         {
//           id: "ORD-12347",
//           date: "2023-05-05",
//           status: "Cancelled",
//           total: 599,
//           items: [
//             { name: "Paneer Tikka", quantity: 1, price: 299 },
//             { name: "Veg Pulao", quantity: 1, price: 199 },
//             { name: "Raita", quantity: 1, price: 99 },
//           ],
//           restaurant: "Veggie Delight",
//         },
//       ]
//       setOrders(sampleOrders)

//       // Load wishlist from localStorage
//       const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
//       setWishlist(storedWishlist)

//       setIsLoading(false)
//     }, 1000)
//   }, [])

//   const handleFormChange = (e) => {
//     const { name, value, files } = e.target
//     setUserData((prevData) => ({
//       ...prevData,
//       [name]: files ? files[0] : value,
//     }))
//   }

//   const handleFormSubmit = (e) => {
//     e.preventDefault()
//     toast.success("Profile updated successfully!", {
//       position: "bottom-right",
//       autoClose: 2000,
//     })
//   }

//   const removeFromWishlist = (id) => {
//     const updatedWishlist = wishlist.filter((item) => item.id !== id)
//     setWishlist(updatedWishlist)
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
//     toast.info("Removed from wishlist", {
//       position: "bottom-right",
//       autoClose: 2000,
//     })
//   }

//   const addToCart = (item) => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]")
//     const existingItem = cart.find((cartItem) => cartItem.id === item.id)

//     if (existingItem) {
//       existingItem.quantity += 1
//     } else {
//       cart.push({ ...item, quantity: 1 })
//     }

//     localStorage.setItem("cart", JSON.stringify(cart))
//     toast.success("Added to cart", {
//       position: "bottom-right",
//       autoClose: 2000,
//     })
//   }

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
//       </div>
//     )
//   }

//   const tabs = [
//     { id: "profile", label: "Profile", icon: <FaUser /> },
//     { id: "orders", label: "My Orders", icon: <FaShoppingBag /> },
//     { id: "wishlist", label: "Wishlist", icon: <FaHeart /> },
//     { id: "addresses", label: "Addresses", icon: <FaAddressCard /> },
//     { id: "payments", label: "Payment Methods", icon: <FaCreditCard /> },
//     { id: "notifications", label: "Notifications", icon: <FaBell /> },
//   ]

//   return (
//     <div className="bg-gray-50 min-h-screen py-12">
//       <div className="container mx-auto px-4">
//         <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">My Account</h1>

//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar */}
//           <div className="lg:w-1/4">
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               <div className="p-6 bg-red-500 text-white">
//                 <div className="flex items-center">
//                   <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-red-500 font-bold text-xl">
//                     {userData.firstName.charAt(0)}
//                     {userData.lastName.charAt(0)}
//                   </div>
//                   <div className="ml-4">
//                     <h2 className="text-xl font-semibold">
//                       {userData.firstName} {userData.lastName}
//                     </h2>
//                     <p className="text-red-100">{userData.email}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-4">
//                 <div className="space-y-1">
//                   {tabs.map((tab) => (
//                     <motion.button
//                       key={tab.id}
//                       whileHover={{ x: 5 }}
//                       onClick={() => setActiveTab(tab.id)}
//                       className={`w-full flex items-center p-3 rounded-lg transition-colors ${
//                         activeTab === tab.id ? "bg-red-50 text-red-500 font-medium" : "text-gray-700 hover:bg-gray-100"
//                       }`}
//                     >
//                       <span className="mr-3">{tab.icon}</span>
//                       {tab.label}
//                     </motion.button>
//                   ))}

//                   <motion.button
//                     whileHover={{ x: 5 }}
//                     className="w-full flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors mt-4"
//                   >
//                     <span className="mr-3 text-red-500">
//                       <FaSignOutAlt />
//                     </span>
//                     Logout
//                   </motion.button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:w-3/4">
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               {/* Profile Tab */}
//               {activeTab === "profile" && (
//                 <div className="p-6">
//                   <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
//                   <form onSubmit={handleFormSubmit}>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                       <div>
//                         <label className="block text-gray-700 mb-2">First Name</label>
//                         <input
//                           type="text"
//                           name="firstName"
//                           value={userData.firstName}
//                           onChange={handleFormChange}
//                           className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 mb-2">Last Name</label>
//                         <input
//                           type="text"
//                           name="lastName"
//                           value={userData.lastName}
//                           onChange={handleFormChange}
//                           className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
//                         />
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <label className="block text-gray-700 mb-2">Email</label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={userData.email}
//                         onChange={handleFormChange}
//                         className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
//                       />
//                     </div>

//                     <div className="mb-6">
//                       <label className="block text-gray-700 mb-2">Phone</label>
//                       <input
//                         type="text"
//                         name="phone"
//                         value={userData.phone}
//                         onChange={handleFormChange}
//                         className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
//                       />
//                     </div>

//                     <div className="mb-6">
//                       <label className="block text-gray-700 mb-2">Profile Image</label>
//                       <input
//                         type="file"
//                         name="image"
//                         onChange={handleFormChange}
//                         className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
//                       />
//                     </div>

//                     <div className="flex justify-end">
//                       <motion.button
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         type="submit"
//                         className="bg-red-500 text-white rounded-lg py-3 px-6 hover:bg-red-600 transition-colors"
//                       >
//                         Save Changes
//                       </motion.button>
//                     </div>
//                   </form>
//                 </div>
//               )}

//               {/* Orders Tab */}
//               {activeTab === "orders" && (
//                 <div className="p-6">
//                   <h2 className="text-xl font-semibold mb-6">My Orders</h2>
//                   {orders.length === 0 ? (
//                     <div className="text-center py-8">
//                       <div className="text-gray-400 text-6xl mb-4">
//                         <FaShoppingBag className="mx-auto" />
//                       </div>
//                       <h3 className="text-xl font-medium text-gray-700 mb-2">No orders yet</h3>
//                       <p className="text-gray-500 mb-6">You haven't placed any orders yet.</p>
//                       <Link
//                         to="/restaurants"
//                         className="inline-block bg-red-500 text-white rounded-lg py-3 px-6 hover:bg-red-600 transition-colors"
//                       >
//                         Browse Restaurants
//                       </Link>
//                     </div>
//                   ) : (
//                     <div className="space-y-6">
//                       {orders.map((order) => (
//                         <motion.div
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           key={order.id}
//                           className="border border-gray-200 rounded-lg overflow-hidden"
//                         >
//                           <div className="bg-gray-50 p-4 flex flex-wrap justify-between items-center border-b border-gray-200">
//                             <div>
//                               <span className="text-gray-500 text-sm">Order ID: </span>
//                               <span className="font-medium">{order.id}</span>
//                             </div>
//                             <div>
//                               <span className="text-gray-500 text-sm">Date: </span>
//                               <span className="font-medium">{order.date}</span>
//                             </div>
//                             <div>
//                               <span
//                                 className={`px-3 py-1 rounded-full text-sm font-medium ${
//                                   order.status === "Delivered"
//                                     ? "bg-green-100 text-green-800"
//                                     : order.status === "Processing"
//                                       ? "bg-blue-100 text-blue-800"
//                                       : "bg-red-100 text-red-800"
//                                 }`}
//                               >
//                                 {order.status}
//                               </span>
//                             </div>
//                           </div>

//                           <div className="p-4">
//                             <div className="mb-4">
//                               <span className="text-gray-500 text-sm">Restaurant: </span>
//                               <span className="font-medium">{order.restaurant}</span>
//                             </div>

//                             <div className="space-y-2 mb-4">
//                               {order.items.map((item, index) => (
//                                 <div key={index} className="flex justify-between">
//                                   <div>
//                                     {item.quantity} x {item.name}
//                                   </div>
//                                   <div className="font-medium">Rs. {item.price * item.quantity}</div>
//                                 </div>
//                               ))}
//                             </div>

//                             <div className="flex justify-between pt-4 border-t border-gray-200">
//                               <span className="font-bold">Total</span>
//                               <span className="font-bold text-red-500">Rs. {order.total}</span>
//                             </div>
//                           </div>

//                           <div className="bg-gray-50 p-4 flex justify-end space-x-3 border-t border-gray-200">
//                             <motion.button
//                               whileHover={{ scale: 1.02 }}
//                               whileTap={{ scale: 0.98 }}
//                               className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
//                             >
//                               View Details
//                             </motion.button>
//                             <motion.button
//                               whileHover={{ scale: 1.02 }}
//                               whileTap={{ scale: 0.98 }}
//                               className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
//                             >
//                               Reorder
//                             </motion.button>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               )}

//               {/* Wishlist Tab */}
//               {activeTab === "wishlist" && (
//                 <div className="p-6">
//                   <h2 className="text-xl font-semibold mb-6">My Wishlist</h2>
//                   {wishlist.length === 0 ? (
//                     <div className="text-center py-8">
//                       <div className="text-gray-400 text-6xl mb-4">
//                         <FaHeart className="mx-auto" />
//                       </div>
//                       <h3 className="text-xl font-medium text-gray-700 mb-2">Your wishlist is empty</h3>
//                       <p className="text-gray-500 mb-6">Add items to your wishlist to save them for later.</p>
//                       <Link
//                         to="/restaurants"
//                         className="inline-block bg-red-500 text-white rounded-lg py-3 px-6 hover:bg-red-600 transition-colors"
//                       >
//                         Browse Restaurants
//                       </Link>
//                     </div>
//                   ) : (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                       {wishlist.map((item) => (
//                         <motion.div
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           key={item.id}
//                           className="border border-gray-200 rounded-lg overflow-hidden"
//                         >
//                           <div className="h-48 overflow-hidden">
//                             <img
//                               src={item.image || "/placeholder.svg"}
//                               alt={item.title}
//                               className="w-full h-full object-cover"
//                             />
//                           </div>
//                           <div className="p-4">
//                             <h3 className="font-medium text-gray-800 mb-2">{item.title}</h3>
//                             <div className="flex justify-between items-center mb-4">
//                               <span className="text-red-500 font-bold">Rs. {item.price}</span>
//                             </div>
//                             <div className="flex space-x-2">
//                               <motion.button
//                                 whileHover={{ scale: 1.02 }}
//                                 whileTap={{ scale: 0.98 }}
//                                 onClick={() => addToCart(item)}
//                                 className="flex-1 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-center"
//                               >
//                                 Add to Cart
//                               </motion.button>
//                               <motion.button
//                                 whileHover={{ scale: 1.02 }}
//                                 whileTap={{ scale: 0.98 }}
//                                 onClick={() => removeFromWishlist(item.id)}
//                                 className="py-2 px-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
//                               >
//                                 Remove
//                               </motion.button>
//                             </div>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               )}

//               {/* Addresses Tab */}
//               {activeTab === "addresses" && (
//                 <div className="p-6">
//                   <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-xl font-semibold">My Addresses</h2>
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center"
//                     >
//                       <span className="mr-1">+</span> Add New Address
//                     </motion.button>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="border border-gray-200 rounded-lg p-4 relative">
//                       <div className="absolute top-4 right-4 flex space-x-2">
//                         <button className="text-gray-500 hover:text-gray-700">Edit</button>
//                         <button className="text-red-500 hover:text-red-700">Delete</button>
//                       </div>
//                       <h3 className="font-medium text-gray-800 mb-1">Home</h3>
//                       <p className="text-gray-600 mb-2">
//                         Soan heights2, street 25, Block B, Islamabad, Islamabad Capital Territory, Pakistan
//                       </p>
//                       <p className="text-gray-600 mb-4">Phone: +923161887004</p>
//                       <div className="flex items-center">
//                         <input type="checkbox" id="default1" className="mr-2" checked readOnly />
//                         <label htmlFor="default1" className="text-sm text-gray-700">
//                           Set as default address
//                         </label>
//                       </div>
//                     </div>

//                     <div className="border border-gray-200 rounded-lg p-4 relative">
//                       <div className="absolute top-4 right-4 flex space-x-2">
//                         <button className="text-gray-500 hover:text-gray-700">Edit</button>
//                         <button className="text-red-500 hover:text-red-700">Delete</button>
//                       </div>
//                       <h3 className="font-medium text-gray-800 mb-1">Work</h3>
//                       <p className="text-gray-600 mb-2">
//                         Soan Garden, soan heights 2, Street 25, Block B, Islamabad, Islamabad Capital Territory,
//                         Pakistan
//                       </p>
//                       <p className="text-gray-600 mb-4">Phone: +923161887004</p>
//                       <div className="flex items-center">
//                         <input type="checkbox" id="default2" className="mr-2" />
//                         <label htmlFor="default2" className="text-sm text-gray-700">
//                           Set as default address
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Payment Methods Tab */}
//               {activeTab === "payments" && (
//                 <div className="p-6">
//                   <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-xl font-semibold">Payment Methods</h2>
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center"
//                     >
//                       <span className="mr-1">+</span> Add New Card
//                     </motion.button>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 text-white relative">
//                       <div className="absolute top-4 right-4 flex space-x-2">
//                         <button className="text-white hover:text-gray-200">Edit</button>
//                         <button className="text-white hover:text-gray-200">Delete</button>
//                       </div>
//                       <div className="mb-6">
//                         <div className="text-sm opacity-80 mb-1">Card Number</div>
//                         <div className="font-medium">**** **** **** 4567</div>
//                       </div>
//                       <div className="flex justify-between">
//                         <div>
//                           <div className="text-sm opacity-80 mb-1">Card Holder</div>
//                           <div className="font-medium">Aqib Ahmed</div>
//                         </div>
//                         <div>
//                           <div className="text-sm opacity-80 mb-1">Expires</div>
//                           <div className="font-medium">09/25</div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-6 text-white relative">
//                       <div className="absolute top-4 right-4 flex space-x-2">
//                         <button className="text-white hover:text-gray-200">Edit</button>
//                         <button className="text-white hover:text-gray-200">Delete</button>
//                       </div>
//                       <div className="mb-6">
//                         <div className="text-sm opacity-80 mb-1">Card Number</div>
//                         <div className="font-medium">**** **** **** 8901</div>
//                       </div>
//                       <div className="flex justify-between">
//                         <div>
//                           <div className="text-sm opacity-80 mb-1">Card Holder</div>
//                           <div className="font-medium">Aqib Ahmed</div>
//                         </div>
//                         <div>
//                           <div className="text-sm opacity-80 mb-1">Expires</div>
//                           <div className="font-medium">12/24</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Notifications Tab */}
//               {activeTab === "notifications" && (
//                 <div className="p-6">
//                   <h2 className="text-xl font-semibold mb-6">Notification Settings</h2>
//                   <div className="space-y-6">
//                     <div className="flex justify-between items-center pb-4 border-b border-gray-200">
//                       <div>
//                         <h3 className="font-medium text-gray-800 mb-1">Order Updates</h3>
//                         <p className="text-gray-600 text-sm">Receive updates about your order status</p>
//                       </div>
//                       <label className="relative inline-flex items-center cursor-pointer">
//                         <input type="checkbox" className="sr-only peer" checked />
//                         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
//                       </label>
//                     </div>

//                     <div className="flex justify-between items-center pb-4 border-b border-gray-200">
//                       <div>
//                         <h3 className="font-medium text-gray-800 mb-1">Promotions & Offers</h3>
//                         <p className="text-gray-600 text-sm">Receive updates about promotions and special offers</p>
//                       </div>
//                       <label className="relative inline-flex items-center cursor-pointer">
//                         <input type="checkbox" className="sr-only peer" checked />
//                         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
//                       </label>
//                     </div>

//                     <div className="flex justify-between items-center pb-4 border-b border-gray-200">
//                       <div>
//                         <h3 className="font-medium text-gray-800 mb-1">Email Notifications</h3>
//                         <p className="text-gray-600 text-sm">Receive order confirmations and updates via email</p>
//                       </div>
//                       <label className="relative inline-flex items-center cursor-pointer">
//                         <input type="checkbox" className="sr-only peer" checked />
//                         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
//                       </label>
//                     </div>

//                     <div className="flex justify-between items-center">
//                       <div>
//                         <h3 className="font-medium text-gray-800 mb-1">SMS Notifications</h3>
//                         <p className="text-gray-600 text-sm">Receive order confirmations and updates via SMS</p>
//                       </div>
//                       <label className="relative inline-flex items-center cursor-pointer">
//                         <input type="checkbox" className="sr-only peer" />
//                         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   )
// }

// export default AccountPage



"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  FaUser,
  FaShoppingBag,
  FaHeart,
  FaAddressCard,
  FaCreditCard,
  FaSignOutAlt,
  FaBell,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("profile")
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState({
    firstName: "khan",
    lastName: "Ahmed",
    email: "khanahmed886@gmail.com",
    phone: "+923161887004",
    image: null,
  })
  const [orders, setOrders] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [addresses, setAddresses] = useState([])
  const [showAddressForm, setShowAddressForm] = useState(false)
  const [newAddress, setNewAddress] = useState({
    type: "Home",
    address: "",
    phone: "",
    isDefault: false,
  })
  const [editingAddress, setEditingAddress] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      // Load orders
      const sampleOrders = [
        {
          id: "ORD-12345",
          date: "2023-05-15",
          status: "Delivered",
          total: 1299,
          items: [
            { name: "Chicken Biryani", quantity: 2, price: 299 },
            { name: "Seekh Kebab", quantity: 1, price: 249 },
            { name: "Naan", quantity: 4, price: 40 },
          ],
          restaurant: "Flavor Express",
        },
        {
          id: "ORD-12346",
          date: "2023-05-10",
          status: "Delivered",
          total: 849,
          items: [
            { name: "Butter Chicken", quantity: 1, price: 349 },
            { name: "Garlic Naan", quantity: 2, price: 50 },
            { name: "Gulab Jamun", quantity: 2, price: 100 },
          ],
          restaurant: "Curry House",
        },
        {
          id: "ORD-12347",
          date: "2023-05-05",
          status: "Cancelled",
          total: 599,
          items: [
            { name: "Paneer Tikka", quantity: 1, price: 299 },
            { name: "Veg Pulao", quantity: 1, price: 199 },
            { name: "Raita", quantity: 1, price: 99 },
          ],
          restaurant: "Veggie Delight",
        },
      ]
      setOrders(sampleOrders)

      // Load wishlist from localStorage
      const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
      setWishlist(storedWishlist)

      // Load addresses
      const sampleAddresses = [
        {
          id: 1,
          type: "Home",
          address: "Soan heights2, street 25, Block B, Islamabad, Islamabad Capital Territory, Pakistan",
          phone: "+923161887004",
          isDefault: true,
        },
        {
          id: 2,
          type: "Work",
          address: "Soan Garden, soan heights 2, Street 25, Block B, Islamabad, Islamabad Capital Territory, Pakistan",
          phone: "+923161887004",
          isDefault: false,
        },
      ]
      setAddresses(sampleAddresses)

      setIsLoading(false)
    }, 1000)
  }, [])

  const handleFormChange = (e) => {
    const { name, value, files } = e.target
    setUserData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    toast.success("Profile updated successfully!", {
      position: "bottom-right",
      autoClose: 2000,
    })
  }

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id)
    setWishlist(updatedWishlist)
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
    toast.info("Removed from wishlist", {
      position: "bottom-right",
      autoClose: 2000,
    })

    // Trigger storage event for navbar to update
    window.dispatchEvent(new Event("storage"))
  }

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ ...item, quantity: 1 })
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    toast.success("Added to cart", {
      position: "bottom-right",
      autoClose: 2000,
    })

    // Trigger storage event for navbar to update
    window.dispatchEvent(new Event("storage"))
  }

  const handleNewAddressChange = (e) => {
    const { name, value, type, checked } = e.target
    setNewAddress({
      ...newAddress,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const addNewAddress = () => {
    // Validate form
    if (!newAddress.address || !newAddress.phone) {
      toast.error("Please fill in all required fields", {
        position: "bottom-right",
        autoClose: 2000,
      })
      return
    }

    // Create new address
    const newAddressObj = {
      id: editingAddress ? editingAddress.id : Date.now(),
      ...newAddress,
    }

    // If set as default, update other addresses
    let updatedAddresses = [...addresses]
    if (newAddress.isDefault) {
      updatedAddresses = updatedAddresses.map((addr) => ({
        ...addr,
        isDefault: false,
      }))
    }

    if (editingAddress) {
      // Update existing address
      updatedAddresses = updatedAddresses.map((addr) => (addr.id === editingAddress.id ? newAddressObj : addr))
    } else {
      // Add new address
      updatedAddresses.push(newAddressObj)
    }

    setAddresses(updatedAddresses)

    // Reset form and hide it
    setNewAddress({
      type: "Home",
      address: "",
      phone: "",
      isDefault: false,
    })
    setShowAddressForm(false)
    setEditingAddress(null)

    toast.success(editingAddress ? "Address updated successfully" : "Address added successfully", {
      position: "bottom-right",
      autoClose: 2000,
    })
  }

  const editAddress = (address) => {
    setEditingAddress(address)
    setNewAddress({
      type: address.type,
      address: address.address,
      phone: address.phone,
      isDefault: address.isDefault,
    })
    setShowAddressForm(true)
  }

  const deleteAddress = (id) => {
    const updatedAddresses = addresses.filter((addr) => addr.id !== id)
    setAddresses(updatedAddresses)

    toast.info("Address removed", {
      position: "bottom-right",
      autoClose: 2000,
    })
  }

  const viewOrderDetails = (orderId) => {
    navigate(`/order/${orderId}`)
  }

  const reorderItems = (order) => {
    // Get existing cart
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")

    // Add order items to cart
    order.items.forEach((item) => {
      const existingItemIndex = cart.findIndex((cartItem) => cartItem.name === item.name)

      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        cart[existingItemIndex].quantity += item.quantity
      } else {
        // Add new item
        cart.push({
          id: Date.now() + Math.random().toString(36).substring(2, 9),
          title: item.name,
          price: item.price,
          image:
            "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          quantity: item.quantity,
        })
      }
    })

    // Save updated cart
    localStorage.setItem("cart", JSON.stringify(cart))

    // Show success message
    toast.success("Items added to cart!", {
      position: "bottom-right",
      autoClose: 2000,
    })

    // Trigger storage event for navbar to update
    window.dispatchEvent(new Event("storage"))

    // Navigate to cart
    navigate("/cart")
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
      </div>
    )
  }

  const tabs = [
    { id: "profile", label: "Profile", icon: <FaUser /> },
    { id: "orders", label: "My Orders", icon: <FaShoppingBag /> },
    { id: "wishlist", label: "Wishlist", icon: <FaHeart /> },
    { id: "addresses", label: "Addresses", icon: <FaAddressCard /> },
    { id: "payments", label: "Payment Methods", icon: <FaCreditCard /> },
    { id: "notifications", label: "Notifications", icon: <FaBell /> },
  ]

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">My Account</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 bg-red-500 text-white">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-red-500 font-bold text-xl">
                    {userData.firstName.charAt(0)}
                    {userData.lastName.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold">
                      {userData.firstName} {userData.lastName}
                    </h2>
                    <p className="text-red-100">{userData.email}</p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="space-y-1">
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      whileHover={{ x: 5 }}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                        activeTab === tab.id ? "bg-red-50 text-red-500 font-medium" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span className="mr-3">{tab.icon}</span>
                      {tab.label}
                    </motion.button>
                  ))}

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="w-full flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors mt-4"
                  >
                    <span className="mr-3 text-red-500">
                      <FaSignOutAlt />
                    </span>
                    Logout
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
                  <form onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={userData.firstName}
                          onChange={handleFormChange}
                          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={userData.lastName}
                          onChange={handleFormChange}
                          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleFormChange}
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        value={userData.phone}
                        onChange={handleFormChange}
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2">Profile Image</label>
                      <input
                        type="file"
                        name="image"
                        onChange={handleFormChange}
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>

                    <div className="flex justify-end">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="bg-red-500 text-white rounded-lg py-3 px-6 hover:bg-red-600 transition-colors"
                      >
                        Save Changes
                      </motion.button>
                    </div>
                  </form>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === "orders" && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">My Orders</h2>
                  {orders.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="text-gray-400 text-6xl mb-4">
                        <FaShoppingBag className="mx-auto" />
                      </div>
                      <h3 className="text-xl font-medium text-gray-700 mb-2">No orders yet</h3>
                      <p className="text-gray-500 mb-6">You haven't placed any orders yet.</p>
                      <Link
                        to="/restaurants"
                        className="inline-block bg-red-500 text-white rounded-lg py-3 px-6 hover:bg-red-600 transition-colors"
                      >
                        Browse Restaurants
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {orders.map((order) => (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          key={order.id}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                          <div className="bg-gray-50 p-4 flex flex-wrap justify-between items-center border-b border-gray-200">
                            <div>
                              <span className="text-gray-500 text-sm">Order ID: </span>
                              <span className="font-medium">{order.id}</span>
                            </div>
                            <div>
                              <span className="text-gray-500 text-sm">Date: </span>
                              <span className="font-medium">{order.date}</span>
                            </div>
                            <div>
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  order.status === "Delivered"
                                    ? "bg-green-100 text-green-800"
                                    : order.status === "Processing"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-red-100 text-red-800"
                                }`}
                              >
                                {order.status}
                              </span>
                            </div>
                          </div>

                          <div className="p-4">
                            <div className="mb-4">
                              <span className="text-gray-500 text-sm">Restaurant: </span>
                              <span className="font-medium">{order.restaurant}</span>
                            </div>

                            <div className="space-y-2 mb-4">
                              {order.items.map((item, index) => (
                                <div key={index} className="flex justify-between">
                                  <div>
                                    {item.quantity} x {item.name}
                                  </div>
                                  <div className="font-medium">Rs. {item.price * item.quantity}</div>
                                </div>
                              ))}
                            </div>

                            <div className="flex justify-between pt-4 border-t border-gray-200">
                              <span className="font-bold">Total</span>
                              <span className="font-bold text-red-500">Rs. {order.total}</span>
                            </div>
                          </div>

                          <div className="bg-gray-50 p-4 flex justify-end space-x-3 border-t border-gray-200">
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => viewOrderDetails(order.id)}
                              className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                            >
                              View Details
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => reorderItems(order)}
                              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                            >
                              Reorder
                            </motion.button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Wishlist Tab */}
              {activeTab === "wishlist" && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">My Wishlist</h2>
                  {wishlist.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="text-gray-400 text-6xl mb-4">
                        <FaHeart className="mx-auto" />
                      </div>
                      <h3 className="text-xl font-medium text-gray-700 mb-2">Your wishlist is empty</h3>
                      <p className="text-gray-500 mb-6">Add items to your wishlist to save them for later.</p>
                      <Link
                        to="/restaurants"
                        className="inline-block bg-red-500 text-white rounded-lg py-3 px-6 hover:bg-red-600 transition-colors"
                      >
                        Browse Restaurants
                      </Link>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {wishlist.map((item) => (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          key={item.id}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                          <div className="h-48 overflow-hidden">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium text-gray-800 mb-2">{item.title}</h3>
                            <div className="flex justify-between items-center mb-4">
                              <span className="text-red-500 font-bold">Rs. {item.price}</span>
                            </div>
                            <div className="flex space-x-2">
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => addToCart(item)}
                                className="flex-1 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-center"
                              >
                                Add to Cart
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => removeFromWishlist(item.id)}
                                className="py-2 px-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                              >
                                Remove
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Addresses Tab */}
              {activeTab === "addresses" && (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">My Addresses</h2>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setNewAddress({
                          type: "Home",
                          address: "",
                          phone: "",
                          isDefault: false,
                        })
                        setEditingAddress(null)
                        setShowAddressForm(true)
                      }}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center"
                    >
                      <FaPlus className="mr-1" /> Add New Address
                    </motion.button>
                  </div>

                  {showAddressForm ? (
                    <div className="border rounded-lg p-6 mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-medium text-gray-800">
                          {editingAddress ? "Edit Address" : "Add New Address"}
                        </h3>
                        <button
                          onClick={() => {
                            setShowAddressForm(false)
                            setEditingAddress(null)
                          }}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-700 mb-2">Address Type</label>
                          <select
                            name="type"
                            value={newAddress.type}
                            onChange={handleNewAddressChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                          >
                            <option value="Home">Home</option>
                            <option value="Work">Work</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-gray-700 mb-2">Phone Number</label>
                          <input
                            type="text"
                            name="phone"
                            value={newAddress.phone}
                            onChange={handleNewAddressChange}
                            placeholder="+92 300 1234567"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 mb-2">Complete Address</label>
                          <textarea
                            name="address"
                            value={newAddress.address}
                            onChange={handleNewAddressChange}
                            placeholder="Street, Area, City, Country"
                            rows="3"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                          ></textarea>
                        </div>

                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="isDefault"
                            name="isDefault"
                            checked={newAddress.isDefault}
                            onChange={handleNewAddressChange}
                            className="mr-2"
                          />
                          <label htmlFor="isDefault" className="text-sm text-gray-700">
                            Set as default address
                          </label>
                        </div>

                        <div className="flex justify-end">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={addNewAddress}
                            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                          >
                            {editingAddress ? "Update Address" : "Save Address"}
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {addresses.map((address) => (
                        <div key={address.id} className="border border-gray-200 rounded-lg p-4 relative">
                          <div className="absolute top-4 right-4 flex space-x-2">
                            <button onClick={() => editAddress(address)} className="text-gray-500 hover:text-gray-700">
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => deleteAddress(address.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <FaTrash />
                            </button>
                          </div>
                          <h3 className="font-medium text-gray-800 mb-1">{address.type}</h3>
                          <p className="text-gray-600 mb-2">{address.address}</p>
                          <p className="text-gray-600 mb-4">Phone: {address.phone}</p>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id={`default-${address.id}`}
                              className="mr-2"
                              checked={address.isDefault}
                              readOnly
                            />
                            <label htmlFor={`default-${address.id}`} className="text-sm text-gray-700">
                              {address.isDefault ? "Default address" : "Set as default address"}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Payment Methods Tab */}
              {activeTab === "payments" && (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Payment Methods</h2>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center"
                    >
                      <span className="mr-1">+</span> Add New Card
                    </motion.button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 text-white relative">
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <button className="text-white hover:text-gray-200">Edit</button>
                        <button className="text-white hover:text-gray-200">Delete</button>
                      </div>
                      <div className="mb-6">
                        <div className="text-sm opacity-80 mb-1">Card Number</div>
                        <div className="font-medium">**** **** **** 4567</div>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <div className="text-sm opacity-80 mb-1">Card Holder</div>
                          <div className="font-medium">khan Ahmed</div>
                        </div>
                        <div>
                          <div className="text-sm opacity-80 mb-1">Expires</div>
                          <div className="font-medium">09/25</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-6 text-white relative">
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <button className="text-white hover:text-gray-200">Edit</button>
                        <button className="text-white hover:text-gray-200">Delete</button>
                      </div>
                      <div className="mb-6">
                        <div className="text-sm opacity-80 mb-1">Card Number</div>
                        <div className="font-medium">**** **** **** 8901</div>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <div className="text-sm opacity-80 mb-1">Card Holder</div>
                          <div className="font-medium">khan Ahmed</div>
                        </div>
                        <div>
                          <div className="text-sm opacity-80 mb-1">Expires</div>
                          <div className="font-medium">12/24</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === "notifications" && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Notification Settings</h2>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">Order Updates</h3>
                        <p className="text-gray-600 text-sm">Receive updates about your order status</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                      </label>
                    </div>

                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">Promotions & Offers</h3>
                        <p className="text-gray-600 text-sm">Receive updates about promotions and special offers</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                      </label>
                    </div>

                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">Email Notifications</h3>
                        <p className="text-gray-600 text-sm">Receive order confirmations and updates via email</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                      </label>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">SMS Notifications</h3>
                        <p className="text-gray-600 text-sm">Receive order confirmations and updates via SMS</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default AccountPage
