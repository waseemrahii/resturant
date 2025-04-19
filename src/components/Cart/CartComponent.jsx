// import { Radio, RadioGroup, FormControlLabel, TextField } from "@mui/material";
// import { useState } from "react";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdOutlineArrowDropDown, MdPayments } from "react-icons/md";
// import { PiNotePencilBold } from "react-icons/pi";
// import CartSummary from "./Child/CartSummery";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
// } from "@mui/material";
// import BankSelector from "./BankSelector";
// import { FaGlobe } from "react-icons/fa";

// const steps = [
//   {
//     label: "Delivery Address",
//     description: `You have a saved address in this location.`,
//     icon: (
//       <FaLocationDot className="w-8 h-8 bg-primary-900 p-2 rounded-full text-white" />
//     ),
//   },
//   {
//     label: "Net Banking",
//     description: (
//       <RadioGroup name="payment-method">
//         <FormControlLabel
//           value="cod"
//           control={<Radio />}
//           label="Cash on Delivery"
//         />
//         <FormControlLabel
//           value="razorpay"
//           control={<Radio />}
//           label="RazorPay"
//         />
//         <FormControlLabel value="stripe" control={<Radio />} label="Stripe" />
//         <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
//         <FormControlLabel value="payfast" control={<Radio />} label="PayFast" />
//         <FormControlLabel
//           value="paystack"
//           control={<Radio />}
//           label="PayStack"
//         />
//         <FormControlLabel
//           value="flutterwave"
//           control={<Radio />}
//           label="FlutterWave"
//         />
//         <FormControlLabel
//           value="mercadopago"
//           control={<Radio />}
//           label="MercadoPago"
//         />
//         <FormControlLabel
//           value="wallet"
//           control={<Radio />}
//           label="Wallet (You have)"
//         />
//       </RadioGroup>
//     ),
//     icon: (
//       <MdPayments className="w-8 h-8 bg-primary-900 p-2 rounded-full text-white" />
//     ),
//   },
//   {
//    icon: (
//       <PiNotePencilBold className="w-8 h-8 bg-primary-900 p-2 rounded-full text-white" />
//     ),
//   },
// ];

// const CartComponent = () => {
//   const [tip, setTip] = useState(10);

//   const summaryItems = [
//     { label: "Sub Total", value: "$0" },
//     { label: "Delivery Charge", value: "$0" },
//   ];

//   const total = 0;

//   return (
//     <>
//       <div className="flex flex-col lg:flex-row w-full gap-2 p-4">
//         <div className="flex flex-col w-full lg:w-[70%]">
//           {steps.map((step, index) => (
//             <div key={index} className="flex gap-2 mb-4">
//               <div className="items-center">{step.icon}</div>
//               <div className="w-full shadow-md p-2 rounded-lg">
//                 {index === 1 ? (
//                   <>
//                     <Accordion>
//                       <AccordionSummary
//                         expandIcon={<MdOutlineArrowDropDown />}
//                         aria-controls="panel1a-content"
//                         id="panel1a-header"
//                       >
//                         <Typography className="flex justify-center items-center gap-2 font-semibold text-xs">
//                           <FaGlobe />
//                           {step.label}
//                         </Typography>
//                       </AccordionSummary>
//                       <AccordionDetails>
//                         <BankSelector />
//                       </AccordionDetails>
//                     </Accordion>
//                     {step.description}
//                   </>
//                 ) : (
//                   <>
//                     <div className="font-semibold text-sm">{step.label}</div>
//                     <div className="mt-2">
//                       {index === 0 && (
//                         <div className="m-8 p-4 bg-gray-200 rounded-lg">
//                           <h1 className="text-xl font-bold">Address</h1>
//                           <p className="w-2/3 p-2">
//                             Soan Garden, soan heights 2, Street 25, Block B
//                             Islamabad, Islamabad Capital Territory, Pakistan
//                           </p>
//                         </div>
//                       )}
//                     </div>
//                   </>
//                 )}

//                 {index === 2 ? (
//                   <>
//                     <div className="font-semibold text-sm">Add Note</div>
//                     <div className="mt-2">
//                       <TextField
//                         label="Add Note"
//                         multiline
//                         rows={4}
//                         variant="outlined"
//                         fullWidth
//                       />
//                     </div>
//                   </>
//                 ) : null}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="w-full lg:w-[30%]">
//           <CartSummary
//             summaryItems={summaryItems}
//             tip={tip}
//             setTip={setTip}
//             total={total}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartComponent;


"use client"

import { useState, useEffect } from "react"
import { FaTrash, FaMinus, FaPlus, FaArrowLeft, FaShoppingBag } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const CartComponent = () => {
  const [cartItems, setCartItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Load cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCartItems(storedCart)
    setIsLoading(false)
  }, [])

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return

    const updatedCart = cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))

    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))

    // Trigger storage event for navbar to update
    window.dispatchEvent(new Event("storage"))
  }

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))

    toast.info("Item removed from cart", {
      position: "bottom-right",
      autoClose: 2000,
    })

    // Trigger storage event for navbar to update
    window.dispatchEvent(new Event("storage"))
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.setItem("cart", JSON.stringify([]))

    toast.info("Cart cleared", {
      position: "bottom-right",
      autoClose: 2000,
    })

    // Trigger storage event for navbar to update
    window.dispatchEvent(new Event("storage"))
  }

  const proceedToCheckout = () => {
    navigate("/checkout")
  }

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const deliveryFee = 100 // Fixed delivery fee
  const total = subtotal + deliveryFee

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
              <FaShoppingBag className="mx-auto" />
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
          <Link to="/" className="mr-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <FaArrowLeft className="text-gray-600" />
            </motion.button>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">Your Cart</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Cart Items ({cartItems.length})</h2>
                  <button onClick={clearCart} className="text-red-500 hover:text-red-700 text-sm font-medium">
                    Clear Cart
                  </button>
                </div>

                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row items-center sm:items-start border-b border-gray-200 pb-4"
                    >
                      <div className="w-24 h-24 rounded-lg overflow-hidden mb-4 sm:mb-0 sm:mr-4">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 text-center sm:text-left">{item.title}</h3>
                        {item.size && (
                          <p className="text-sm text-gray-500 text-center sm:text-left">Size: {item.size}</p>
                        )}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2">
                          <div className="flex items-center justify-center sm:justify-start mb-3 sm:mb-0">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                              <FaMinus className="text-gray-600 text-xs" />
                            </button>
                            <span className="mx-3">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                              <FaPlus className="text-gray-600 text-xs" />
                            </button>
                          </div>
                          <div className="flex items-center justify-between w-full sm:w-auto">
                            <span className="font-medium text-gray-800">Rs. {item.price * item.quantity}</span>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 ml-4"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/" className="inline-block text-red-500 hover:text-red-700 mb-6">
              <span className="flex items-center">
                <FaArrowLeft className="mr-2" /> Continue Shopping
              </span>
            </Link>
          </div>

          {/* Order Summary */}
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

                  {/* Total */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-xl font-bold text-red-500">Rs. {total}</span>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={proceedToCheckout}
                  className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors mt-6 font-medium"
                >
                  Proceed to Checkout
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default CartComponent
