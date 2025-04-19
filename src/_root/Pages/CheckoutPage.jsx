
// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { FaArrowLeft, FaCreditCard, FaMoneyBillWave, FaWallet, FaCheck, FaMapMarkerAlt } from "react-icons/fa"
// import { Link, useNavigate } from "react-router-dom"
// import { toast, ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

// const CheckoutPage = () => {
//   const [step, setStep] = useState(1)
//   const [isLoading, setIsLoading] = useState(true)
//   const [cartItems, setCartItems] = useState([])
//   const [deliveryOption, setDeliveryOption] = useState("delivery")
//   const [paymentMethod, setPaymentMethod] = useState("card")
//   const [addresses, setAddresses] = useState([])
//   const [selectedAddress, setSelectedAddress] = useState(null)
//   const [cardDetails, setCardDetails] = useState({
//     cardNumber: "",
//     cardName: "",
//     expiryDate: "",
//     cvv: "",
//   })
//   const [tip, setTip] = useState(50)
//   const navigate = useNavigate()

//   useEffect(() => {
//     // Load cart items from localStorage
//     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
//     setCartItems(storedCart)

//     // Sample addresses
//     const sampleAddresses = [
//       {
//         id: 1,
//         type: "Home",
//         address: "Soan heights2, street 25, Block B, Islamabad, Islamabad Capital Territory, Pakistan",
//         phone: "+923161887004",
//         isDefault: true,
//       },
//       {
//         id: 2,
//         type: "Work",
//         address: "Soan Garden, soan heights 2, Street 25, Block B, Islamabad, Islamabad Capital Territory, Pakistan",
//         phone: "+923161887004",
//         isDefault: false,
//       },
//     ]
//     setAddresses(sampleAddresses)
//     setSelectedAddress(sampleAddresses.find((addr) => addr.isDefault) || sampleAddresses[0])

//     setIsLoading(false)
//   }, [])

//   const handleCardDetailsChange = (e) => {
//     const { name, value } = e.target
//     setCardDetails({
//       ...cardDetails,
//       [name]: value,
//     })
//   }

//   const nextStep = () => {
//     if (step === 1 && !selectedAddress) {
//       toast.error("Please select a delivery address", {
//         position: "bottom-right",
//         autoClose: 2000,
//       })
//       return
//     }

//     if (step === 2 && paymentMethod === "card") {
//       // Validate card details
//       if (!cardDetails.cardNumber || !cardDetails.cardName || !cardDetails.expiryDate || !cardDetails.cvv) {
//         toast.error("Please fill in all card details", {
//           position: "bottom-right",
//           autoClose: 2000,
//         })
//         return
//       }
//     }

//     setStep(step + 1)
//   }

//   const prevStep = () => {
//     setStep(step - 1)
//   }

//   const placeOrder = () => {
//     // Simulate order placement
//     toast.success("Order placed successfully!", {
//       position: "bottom-right",
//       autoClose: 2000,
//     })

//     // Clear cart
//     localStorage.setItem("cart", JSON.stringify([]))

//     // Redirect to confirmation page after 2 seconds
//     setTimeout(() => {
//       navigate("/account")
//     }, 2000)
//   }

//   // Calculate totals
//   const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
//   const deliveryFee = deliveryOption === "delivery" ? 100 : 0
//   const tipAmount = tip || 0
//   const total = subtotal + deliveryFee + tipAmount

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
//       </div>
//     )
//   }

//   if (cartItems.length === 0) {
//     return (
//       <div className="bg-gray-50 min-h-screen py-12">
//         <div className="container mx-auto px-4 text-center">
//           <div className="bg-white rounded-xl shadow-md p-8 max-w-md mx-auto">
//             <div className="text-gray-400 text-6xl mb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-24 w-24 mx-auto"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                 />
//               </svg>
//             </div>
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
//             <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
//             <Link
//               to="/restaurants"
//               className="inline-block bg-red-500 text-white rounded-lg py-3 px-6 hover:bg-red-600 transition-colors"
//             >
//               Browse Restaurants
//             </Link>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen py-12">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center mb-8">
//           <Link to="/cart" className="mr-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//             >
//               <FaArrowLeft className="text-gray-600" />
//             </motion.button>
//           </Link>
//           <h1 className="text-2xl md:text-3xl font-bold">Checkout</h1>
//         </div>

//         {/* Progress Steps */}
//         <div className="mb-8">
//           <div className="flex items-center justify-between">
//             <div className="flex flex-col items-center">
//               <div
//                 className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                   step >= 1 ? "bg-red-500 text-white" : "bg-gray-200 text-gray-500"
//                 }`}
//               >
//                 1
//               </div>
//               <span className="text-sm mt-2">Delivery</span>
//             </div>
//             <div className={`flex-1 h-1 mx-2 ${step >= 2 ? "bg-red-500" : "bg-gray-200"}`}></div>
//             <div className="flex flex-col items-center">
//               <div
//                 className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                   step >= 2 ? "bg-red-500 text-white" : "bg-gray-200 text-gray-500"
//                 }`}
//               >
//                 2
//               </div>
//               <span className="text-sm mt-2">Payment</span>
//             </div>
//             <div className={`flex-1 h-1 mx-2 ${step >= 3 ? "bg-red-500" : "bg-gray-200"}`}></div>
//             <div className="flex flex-col items-center">
//               <div
//                 className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                   step >= 3 ? "bg-red-500 text-white" : "bg-gray-200 text-gray-500"
//                 }`}
//               >
//                 3
//               </div>
//               <span className="text-sm mt-2">Confirm</span>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left Column - Checkout Steps */}
//           <div className="lg:w-2/3">
//             <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
//               {/* Step 1: Delivery Address */}
//               {step === 1 && (
//                 <div className="p-6">
//                   <h2 className="text-xl font-semibold mb-6">Delivery Address</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                     {addresses.map((address) => (
//                       <motion.div
//                         whileHover={{ scale: 1.02 }}
//                         key={address.id}
//                         className={`border rounded-lg p-4 cursor-pointer ${
//                           selectedAddress?.id === address.id ? "border-red-500 bg-red-50" : "border-gray-200"
//                         }`}
//                         onClick={() => setSelectedAddress(address)}
//                       >
//                         <div className="flex justify-between">
//                           <h3 className="font-medium text-gray-800">{address.type}</h3>
//                           {selectedAddress?.id === address.id && (
//                             <span className="text-red-500">
//                               <FaCheck />
//                             </span>
//                           )}
//                         </div>
//                         <p className="text-gray-600 text-sm mt-2">{address.address}</p>
//                         <p className="text-gray-600 text-sm mt-1">{address.phone}</p>
//                       </motion.div>
//                     ))}
//                     <motion.div
//                       whileHover={{ scale: 1.02 }}
//                       className="border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50"
//                     >
//                       <FaMapMarkerAlt className="text-gray-400 text-2xl mb-2" />
//                       <p className="text-gray-600">Add New Address</p>
//                     </motion.div>
//                   </div>

//                   <div className="mt-8">
//                     <h3 className="font-medium text-gray-800 mb-4">Delivery Options</h3>
//                     <div className="flex flex-col sm:flex-row gap-4">
//                       <motion.button
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         onClick={() => setDeliveryOption("delivery")}
//                         className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-colors ${
//                           deliveryOption === "delivery"
//                             ? "border-red-500 bg-red-50"
//                             : "border-gray-200 hover:border-gray-300"
//                         }`}
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className={`h-5 w-5 ${deliveryOption === "delivery" ? "text-red-500" : "text-gray-500"}`}
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                           />
//                         </svg>
//                         <span className={deliveryOption === "delivery" ? "font-medium" : ""}>Delivery</span>
//                       </motion.button>
//                       <motion.button
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         onClick={() => setDeliveryOption("takeaway")}
//                         className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-colors ${
//                           deliveryOption === "takeaway"
//                             ? "border-red-500 bg-red-50"
//                             : "border-gray-200 hover:border-gray-300"
//                         }`}
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className={`h-5 w-5 ${deliveryOption === "takeaway" ? "text-red-500" : "text-gray-500"}`}
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                           />
//                         </svg>
//                         <span className={deliveryOption === "takeaway" ? "font-medium" : ""}>Takeaway</span>
//                       </motion.button>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Step 2: Payment Method */}
//               {step === 2 && (
//                 <div className="p-6">
//                   <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
//                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => setPaymentMethod("card")}
//                       className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 transition-colors ${
//                         paymentMethod === "card" ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-gray-300"
//                       }`}
//                     >
//                       <FaCreditCard className={paymentMethod === "card" ? "text-red-500" : "text-gray-500"} size={24} />
//                       <span className={paymentMethod === "card" ? "font-medium" : ""}>Credit Card</span>
//                     </motion.button>
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => setPaymentMethod("cash")}
//                       className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 transition-colors ${
//                         paymentMethod === "cash" ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-gray-300"
//                       }`}
//                     >
//                       <FaMoneyBillWave
//                         className={paymentMethod === "cash" ? "text-red-500" : "text-gray-500"}
//                         size={24}
//                       />
//                       <span className={paymentMethod === "cash" ? "font-medium" : ""}>Cash on Delivery</span>
//                     </motion.button>
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => setPaymentMethod("wallet")}
//                       className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 transition-colors ${
//                         paymentMethod === "wallet"
//                           ? "border-red-500 bg-red-50"
//                           : "border-gray-200 hover:border-gray-300"
//                       }`}
//                     >
//                       <FaWallet className={paymentMethod === "wallet" ? "text-red-500" : "text-gray-500"} size={24} />
//                       <span className={paymentMethod === "wallet" ? "font-medium" : ""}>Wallet</span>
//                     </motion.button>
//                   </div>

//                   {paymentMethod === "card" && (
//                     <div className="mt-6 border border-gray-200 rounded-lg p-6">
//                       <h3 className="font-medium text-gray-800 mb-4">Card Details</h3>
//                       <div className="space-y-4">
//                         <div>
//                           <label className="block text-gray-700 mb-2">Card Number</label>
//                           <input
//                             type="text"
//                             name="cardNumber"
//                             value={cardDetails.cardNumber}
//                             onChange={handleCardDetailsChange}
//                             placeholder="1234 5678 9012 3456"
//                             className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-gray-700 mb-2">Cardholder Name</label>
//                           <input
//                             type="text"
//                             name="cardName"
//                             value={cardDetails.cardName}
//                             onChange={handleCardDetailsChange}
//                             placeholder="John Doe"
//                             className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
//                           />
//                         </div>
//                         <div className="grid grid-cols-2 gap-4">
//                           <div>
//                             <label className="block text-gray-700 mb-2">Expiry Date</label>
//                             <input
//                               type="text"
//                               name="expiryDate"
//                               value={cardDetails.expiryDate}
//                               onChange={handleCardDetailsChange}
//                               placeholder="MM/YY"
//                               className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
//                             />
//                           </div>
//                           <div>
//                             <label className="block text-gray-700 mb-2">CVV</label>
//                             <input
//                               type="text"
//                               name="cvv"
//                               value={cardDetails.cvv}
//                               onChange={handleCardDetailsChange}
//                               placeholder="123"
//                               className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {/* Tip Section */}
//                   {deliveryOption === "delivery" && (
//                     <div className="mt-8">
//                       <h3 className="font-medium text-gray-800 mb-4">Tip your delivery partner</h3>
//                       <p className="text-sm text-gray-500 mb-4">100% of the tip goes to your delivery partner</p>
//                       <div className="flex flex-wrap gap-3">
//                         {[20, 50, 100].map((amount) => (
//                           <motion.button
//                             key={amount}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => setTip(amount)}
//                             className={`px-6 py-3 rounded-lg border transition-colors ${
//                               tip === amount
//                                 ? "border-red-500 bg-red-500 text-white"
//                                 : "border-gray-300 hover:border-gray-400"
//                             }`}
//                           >
//                             Rs. {amount}
//                           </motion.button>
//                         ))}
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() => setTip(0)}
//                           className={`px-6 py-3 rounded-lg border transition-colors ${
//                             tip === 0 ? "border-red-500 bg-red-500 text-white" : "border-gray-300 hover:border-gray-400"
//                           }`}
//                         >
//                           No Tip
//                         </motion.button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}

//               {/* Step 3: Confirm Order */}
//               {step === 3 && (
//                 <div className="p-6">
//                   <h2 className="text-xl font-semibold mb-6">Confirm Order</h2>
//                   <div className="space-y-6">
//                     <div className="border border-gray-200 rounded-lg p-4">
//                       <h3 className="font-medium text-gray-800 mb-3">Delivery Address</h3>
//                       <p className="text-gray-600">{selectedAddress?.type}</p>
//                       <p className="text-gray-600">{selectedAddress?.address}</p>
//                       <p className="text-gray-600">{selectedAddress?.phone}</p>
//                     </div>

//                     <div className="border border-gray-200 rounded-lg p-4">
//                       <h3 className="font-medium text-gray-800 mb-3">Payment Method</h3>
//                       <p className="text-gray-600">
//                         {paymentMethod === "card"
//                           ? "Credit Card"
//                           : paymentMethod === "cash"
//                             ? "Cash on Delivery"
//                             : "Wallet"}
//                       </p>
//                       {paymentMethod === "card" && (
//                         <p className="text-gray-600">Card ending with {cardDetails.cardNumber.slice(-4) || "****"}</p>
//                       )}
//                     </div>

//                     <div className="border border-gray-200 rounded-lg p-4">
//                       <h3 className="font-medium text-gray-800 mb-3">Order Items</h3>
//                       <div className="space-y-3">
//                         {cartItems.map((item, index) => (
//                           <div key={index} className="flex justify-between items-center">
//                             <div className="flex items-center">
//                               <div className="w-12 h-12 rounded-md overflow-hidden mr-3">
//                                 <img
//                                   src={item.image || "/placeholder.svg"}
//                                   alt={item.title}
//                                   className="w-full h-full object-cover"
//                                 />
//                               </div>
//                               <div>
//                                 <p className="font-medium text-gray-800">
//                                   {item.quantity} x {item.title}
//                                 </p>
//                                 {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}
//                               </div>
//                             </div>
//                             <p className="font-medium text-gray-800">Rs. {item.price * item.quantity}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex justify-between mt-6">
//               {step > 1 && (
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={prevStep}
//                   className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
//                 >
//                   Back
//                 </motion.button>
//               )}
//               {step < 3 ? (
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={nextStep}
//                   className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors ml-auto"
//                 >
//                   Continue
//                 </motion.button>
//               ) : (
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={placeOrder}
//                   className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors ml-auto"
//                 >
//                   Place Order
//                 </motion.button>
//               )}
//             </div>
//           </div>

//           {/* Right Column - Order Summary */}
//           <div className="lg:w-1/3">
//             <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
//               <div className="p-6 border-b border-gray-200">
//                 <h2 className="text-xl font-semibold">Order Summary</h2>
//               </div>
//               <div className="p-6">
//                 <div className="space-y-4">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Subtotal</span>
//                     <span className="font-medium">Rs. {subtotal}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Delivery Fee</span>
//                     <span className="font-medium">Rs. {deliveryFee}</span>
//                   </div>
//                   {deliveryOption === "delivery" && tip > 0 && (
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Tip</span>
//                       <span className="font-medium">Rs. {tipAmount}</span>
//                     </div>
//                   )}

//                   {/* Total */}
//                   <div className="pt-4 border-t border-gray-200">
//                     <div className="flex justify-between items-center">
//                       <span className="text-lg font-semibold">Total</span>
//                       <span className="text-xl font-bold text-red-500">Rs. {total}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   )
// }

// export default CheckoutPage


"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaArrowLeft, FaCreditCard, FaMoneyBillWave, FaWallet, FaCheck, FaPlus } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const CheckoutPage = () => {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [cartItems, setCartItems] = useState([])
  const [deliveryOption, setDeliveryOption] = useState("delivery")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [addresses, setAddresses] = useState([])
  const [selectedAddress, setSelectedAddress] = useState(null)
  const [showAddressForm, setShowAddressForm] = useState(false)
  const [newAddress, setNewAddress] = useState({
    type: "Home",
    name: "",
    phone: "",
    address: "",
    isDefault: false,
  })
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })
  const [tip, setTip] = useState(50)
  const navigate = useNavigate()

  useEffect(() => {
    // Load cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCartItems(storedCart)

    // Sample addresses
    const sampleAddresses = [
      {
        id: 1,
        type: "Home",
        name: "Aqib Ahmed",
        address: "Soan heights2, street 25, Block B, Islamabad, Islamabad Capital Territory, Pakistan",
        phone: "+923161887004",
        isDefault: true,
      },
      {
        id: 2,
        type: "Work",
        name: "Aqib Ahmed",
        address: "Soan Garden, soan heights 2, Street 25, Block B, Islamabad, Islamabad Capital Territory, Pakistan",
        phone: "+923161887004",
        isDefault: false,
      },
    ]
    setAddresses(sampleAddresses)
    setSelectedAddress(sampleAddresses.find((addr) => addr.isDefault) || sampleAddresses[0])

    setIsLoading(false)
  }, [])

  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target
    setCardDetails({
      ...cardDetails,
      [name]: value,
    })
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
    if (!newAddress.name || !newAddress.phone || !newAddress.address) {
      toast.error("Please fill in all required fields", {
        position: "bottom-right",
        autoClose: 2000,
      })
      return
    }

    // Create new address
    const newAddressObj = {
      id: Date.now(),
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

    // Add new address to list
    updatedAddresses.push(newAddressObj)
    setAddresses(updatedAddresses)

    // Select the new address
    setSelectedAddress(newAddressObj)

    // Reset form and hide it
    setNewAddress({
      type: "Home",
      name: "",
      phone: "",
      address: "",
      isDefault: false,
    })
    setShowAddressForm(false)

    toast.success("Address added successfully", {
      position: "bottom-right",
      autoClose: 2000,
    })
  }

  const nextStep = () => {
    if (step === 1 && !selectedAddress) {
      toast.error("Please select a delivery address", {
        position: "bottom-right",
        autoClose: 2000,
      })
      return
    }

    if (step === 2 && paymentMethod === "card") {
      // Validate card details
      if (!cardDetails.cardNumber || !cardDetails.cardName || !cardDetails.expiryDate || !cardDetails.cvv) {
        toast.error("Please fill in all card details", {
          position: "bottom-right",
          autoClose: 2000,
        })
        return
      }
    }

    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const placeOrder = () => {
    // Simulate order placement
    toast.success("Order placed successfully!", {
      position: "bottom-right",
      autoClose: 2000,
    })

    // Clear cart
    localStorage.setItem("cart", JSON.stringify([]))

    // Trigger storage event for navbar to update
    window.dispatchEvent(new Event("storage"))

    // Redirect to confirmation page after 2 seconds
    setTimeout(() => {
      navigate("/order/ORD-" + Date.now())
    }, 2000)
  }

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const deliveryFee = deliveryOption === "delivery" ? 100 : 0
  const tipAmount = tip || 0
  const total = subtotal + deliveryFee + tipAmount

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white rounded-xl shadow-md p-8 max-w-md mx-auto">
            <div className="text-gray-400 text-6xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link
              to="/restaurants"
              className="inline-block bg-red-500 text-white rounded-lg py-3 px-6 hover:bg-red-600 transition-colors"
            >
              Browse Restaurants
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link to="/cart" className="mr-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <FaArrowLeft className="text-gray-600" />
            </motion.button>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">Checkout</h1>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 1 ? "bg-red-500 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                1
              </div>
              <span className="text-sm mt-2">Delivery</span>
            </div>
            <div className={`flex-1 h-1 mx-2 ${step >= 2 ? "bg-red-500" : "bg-gray-200"}`}></div>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 2 ? "bg-red-500 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                2
              </div>
              <span className="text-sm mt-2">Payment</span>
            </div>
            <div className={`flex-1 h-1 mx-2 ${step >= 3 ? "bg-red-500" : "bg-gray-200"}`}></div>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 3 ? "bg-red-500 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                3
              </div>
              <span className="text-sm mt-2">Confirm</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Checkout Steps */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              {/* Step 1: Delivery Address */}
              {step === 1 && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Delivery Address</h2>

                  {/* Address List */}
                  {!showAddressForm && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {addresses.map((address) => (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          key={address.id}
                          className={`border rounded-lg p-4 cursor-pointer ${
                            selectedAddress?.id === address.id ? "border-red-500 bg-red-50" : "border-gray-200"
                          }`}
                          onClick={() => setSelectedAddress(address)}
                        >
                          <div className="flex justify-between">
                            <h3 className="font-medium text-gray-800">{address.type}</h3>
                            {selectedAddress?.id === address.id && (
                              <span className="text-red-500">
                                <FaCheck />
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mt-2">{address.name}</p>
                          <p className="text-gray-600 text-sm mt-1">{address.address}</p>
                          <p className="text-gray-600 text-sm mt-1">{address.phone}</p>
                          {address.isDefault && (
                            <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              Default
                            </span>
                          )}
                        </motion.div>
                      ))}

                      {/* Add New Address Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50"
                        onClick={() => setShowAddressForm(true)}
                      >
                        <FaPlus className="text-gray-400 text-2xl mb-2" />
                        <p className="text-gray-600">Add New Address</p>
                      </motion.div>
                    </div>
                  )}

                  {/* New Address Form */}
                  {showAddressForm && (
                    <div className="border rounded-lg p-6 mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-medium text-gray-800">Add New Address</h3>
                        <button onClick={() => setShowAddressForm(false)} className="text-gray-500 hover:text-gray-700">
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
                        <div className="flex gap-4">
                          <div className="flex-1">
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
                          <div className="flex-1">
                            <label className="block text-gray-700 mb-2">Full Name</label>
                            <input
                              type="text"
                              name="name"
                              value={newAddress.name}
                              onChange={handleNewAddressChange}
                              placeholder="John Doe"
                              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                          </div>
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
                            Save Address
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-8">
                    <h3 className="font-medium text-gray-800 mb-4">Delivery Options</h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setDeliveryOption("delivery")}
                        className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                          deliveryOption === "delivery"
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 ${deliveryOption === "delivery" ? "text-red-500" : "text-gray-500"}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className={deliveryOption === "delivery" ? "font-medium" : ""}>Delivery</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setDeliveryOption("takeaway")}
                        className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                          deliveryOption === "takeaway"
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 ${deliveryOption === "takeaway" ? "text-red-500" : "text-gray-500"}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span className={deliveryOption === "takeaway" ? "font-medium" : ""}>Takeaway</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Payment Method */}
              {step === 2 && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setPaymentMethod("card")}
                      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                        paymentMethod === "card" ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <FaCreditCard className={paymentMethod === "card" ? "text-red-500" : "text-gray-500"} size={24} />
                      <span className={paymentMethod === "card" ? "font-medium" : ""}>Credit Card</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setPaymentMethod("cash")}
                      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                        paymentMethod === "cash" ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <FaMoneyBillWave
                        className={paymentMethod === "cash" ? "text-red-500" : "text-gray-500"}
                        size={24}
                      />
                      <span className={paymentMethod === "cash" ? "font-medium" : ""}>Cash on Delivery</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setPaymentMethod("wallet")}
                      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                        paymentMethod === "wallet"
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <FaWallet className={paymentMethod === "wallet" ? "text-red-500" : "text-gray-500"} size={24} />
                      <span className={paymentMethod === "wallet" ? "font-medium" : ""}>Wallet</span>
                    </motion.button>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="mt-6 border border-gray-200 rounded-lg p-6">
                      <h3 className="font-medium text-gray-800 mb-4">Card Details</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-700 mb-2">Card Number</label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={cardDetails.cardNumber}
                            onChange={handleCardDetailsChange}
                            placeholder="1234 5678 9012 3456"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Cardholder Name</label>
                          <input
                            type="text"
                            name="cardName"
                            value={cardDetails.cardName}
                            onChange={handleCardDetailsChange}
                            placeholder="John Doe"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-700 mb-2">Expiry Date</label>
                            <input
                              type="text"
                              name="expiryDate"
                              value={cardDetails.expiryDate}
                              onChange={handleCardDetailsChange}
                              placeholder="MM/YY"
                              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 mb-2">CVV</label>
                            <input
                              type="text"
                              name="cvv"
                              value={cardDetails.cvv}
                              onChange={handleCardDetailsChange}
                              placeholder="123"
                              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tip Section */}
                  {deliveryOption === "delivery" && (
                    <div className="mt-8">
                      <h3 className="font-medium text-gray-800 mb-4">Tip your delivery partner</h3>
                      <p className="text-sm text-gray-500 mb-4">100% of the tip goes to your delivery partner</p>
                      <div className="flex flex-wrap gap-3">
                        {[20, 50, 100].map((amount) => (
                          <motion.button
                            key={amount}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setTip(amount)}
                            className={`px-6 py-3 rounded-lg border transition-colors ${
                              tip === amount
                                ? "border-red-500 bg-red-500 text-white"
                                : "border-gray-300 hover:border-gray-400"
                            }`}
                          >
                            Rs. {amount}
                          </motion.button>
                        ))}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setTip(0)}
                          className={`px-6 py-3 rounded-lg border transition-colors ${
                            tip === 0 ? "border-red-500 bg-red-500 text-white" : "border-gray-300 hover:border-gray-400"
                          }`}
                        >
                          No Tip
                        </motion.button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Confirm Order */}
              {step === 3 && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Confirm Order</h2>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium text-gray-800 mb-3">Delivery Address</h3>
                      <p className="text-gray-600">{selectedAddress?.name}</p>
                      <p className="text-gray-600">{selectedAddress?.type}</p>
                      <p className="text-gray-600">{selectedAddress?.address}</p>
                      <p className="text-gray-600">{selectedAddress?.phone}</p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium text-gray-800 mb-3">Payment Method</h3>
                      <p className="text-gray-600">
                        {paymentMethod === "card"
                          ? "Credit Card"
                          : paymentMethod === "cash"
                            ? "Cash on Delivery"
                            : "Wallet"}
                      </p>
                      {paymentMethod === "card" && (
                        <p className="text-gray-600">Card ending with {cardDetails.cardNumber.slice(-4) || "****"}</p>
                      )}
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium text-gray-800 mb-3">Order Items</h3>
                      <div className="space-y-3">
                        {cartItems.map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-12 h-12 rounded-md overflow-hidden mr-3">
                                <img
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-medium text-gray-800">
                                  {item.quantity} x {item.title}
                                </p>
                                {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}
                              </div>
                            </div>
                            <p className="font-medium text-gray-800">Rs. {item.price * item.quantity}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={prevStep}
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Back
                </motion.button>
              )}
              {step < 3 ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={nextStep}
                  className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors ml-auto"
                >
                  Continue
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={placeOrder}
                  className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors ml-auto"
                >
                  Place Order
                </motion.button>
              )}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Order Summary</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">Rs. {subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-medium">Rs. {deliveryFee}</span>
                  </div>
                  {deliveryOption === "delivery" && tip > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tip</span>
                      <span className="font-medium">Rs. {tipAmount}</span>
                    </div>
                  )}

                  {/* Total */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-xl font-bold text-red-500">Rs. {total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default CheckoutPage
