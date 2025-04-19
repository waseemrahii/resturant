// import React from 'react'
// import CartComponent from './CartComponent'

// const Cart = () => {
//   return (
//     <div>
//      <CartComponent/> 
//     </div>
//   )
// }

// export default Cart


import { useState } from "react"
import { FaShoppingCart, FaTrashAlt, FaMinus, FaPlus, FaTruck, FaCreditCard, FaMoneyBillWave } from "react-icons/fa"
import { IoFastFoodOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Chicken Karahi",
      price: 800,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      name: "Biryani Special",
      price: 350,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
  ])
  const [deliveryOption, setDeliveryOption] = useState("delivery")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [tip, setTip] = useState(50)
  const [note, setNote] = useState("")
  const [couponCode, setCouponCode] = useState("")
  const [step, setStep] = useState(1)

  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change)
          return { ...item, quantity: newQuantity }
        }
        return item
      }),
    )
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const deliveryFee = deliveryOption === "delivery" ? 100 : 0
  const tipAmount = tip || 0
  const total = subtotal + deliveryFee + tipAmount

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  if (cartItems.length === 0) {
    return (
      <div className="container-custom py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <FaShoppingCart className="text-4xl text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link
            to="/restaurants"
            className="px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-secondary transition-colors"
          >
            Browse Restaurants
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold flex items-center">
                <FaShoppingCart className="mr-2 text-accent-primary" /> Cart Items
              </h2>
            </div>

            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={item.id} className="p-6 flex flex-col sm:flex-row items-center">
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 mb-4 sm:mb-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="sm:ml-6 flex-grow">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-accent-primary font-semibold">Rs. {item.price}</p>
                  </div>
                  <div className="flex items-center mt-4 sm:mt-0">
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <FaMinus className="text-gray-600" />
                      </button>
                      <span className="w-10 text-center border-x border-gray-300 py-1">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <FaPlus className="text-gray-600" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-4 text-red-500 hover:text-red-700 transition-colors"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Options */}
          {step >= 1 && (
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Delivery Options</h2>
              </div>
              <div className="p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setDeliveryOption("delivery")}
                    className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                      deliveryOption === "delivery"
                        ? "border-accent-primary bg-accent-primary bg-opacity-10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <FaTruck
                      className={deliveryOption === "delivery" ? "text-accent-primary" : "text-gray-500"}
                      size={20}
                    />
                    <span className={deliveryOption === "delivery" ? "font-medium" : ""}>Delivery</span>
                  </button>
                  <button
                    onClick={() => setDeliveryOption("takeaway")}
                    className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                      deliveryOption === "takeaway"
                        ? "border-accent-primary bg-accent-primary bg-opacity-10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <IoFastFoodOutline
                      className={deliveryOption === "takeaway" ? "text-accent-primary" : "text-gray-500"}
                      size={20}
                    />
                    <span className={deliveryOption === "takeaway" ? "font-medium" : ""}>Takeaway</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Payment Method */}
          {step >= 2 && (
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Payment Method</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                      paymentMethod === "card"
                        ? "border-accent-primary bg-accent-primary bg-opacity-10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <FaCreditCard
                      className={paymentMethod === "card" ? "text-accent-primary" : "text-gray-500"}
                      size={24}
                    />
                    <span className={paymentMethod === "card" ? "font-medium" : ""}>Credit Card</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod("cash")}
                    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                      paymentMethod === "cash"
                        ? "border-accent-primary bg-accent-primary bg-opacity-10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <FaMoneyBillWave
                      className={paymentMethod === "cash" ? "text-accent-primary" : "text-gray-500"}
                      size={24}
                    />
                    <span className={paymentMethod === "cash" ? "font-medium" : ""}>Cash on Delivery</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod("wallet")}
                    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                      paymentMethod === "wallet"
                        ? "border-accent-primary bg-accent-primary bg-opacity-10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <FaMoneyBillWave
                      className={paymentMethod === "wallet" ? "text-accent-primary" : "text-gray-500"}
                      size={24}
                    />
                    <span className={paymentMethod === "wallet" ? "font-medium" : ""}>Wallet</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Additional Notes */}
          {step >= 3 && (
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Additional Notes</h2>
              </div>
              <div className="p-6">
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent"
                  rows={4}
                  placeholder="Add any special instructions or delivery notes..."
                ></textarea>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-secondary transition-colors ml-auto"
              >
                Continue
              </button>
            ) : (
              <button className="px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-secondary transition-colors ml-auto">
                Place Order
              </button>
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

                {/* Tip Section */}
                {deliveryOption === "delivery" && (
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="font-medium mb-2">Tip your delivery partner</h3>
                    <p className="text-sm text-gray-500 mb-3">100% of the tip goes to your delivery partner</p>
                    <div className="flex flex-wrap gap-2">
                      {[20, 50, 100].map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setTip(amount)}
                          className={`px-4 py-2 rounded-lg border transition-colors ${
                            tip === amount
                              ? "border-accent-primary bg-accent-primary text-white"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                        >
                          Rs. {amount}
                        </button>
                      ))}
                      <button
                        onClick={() => setTip(0)}
                        className={`px-4 py-2 rounded-lg border transition-colors ${
                          tip === 0
                            ? "border-accent-primary bg-accent-primary text-white"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        No Tip
                      </button>
                    </div>
                  </div>
                )}

                {/* Coupon Code */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-medium mb-2">Apply Coupon</h3>
                  <div className="flex">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent"
                      placeholder="Enter coupon code"
                    />
                    <button className="px-4 py-2 bg-accent-primary text-white rounded-r-lg hover:bg-accent-secondary transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Total */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-xl font-bold text-accent-primary">Rs. {total}</span>
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

export default Cart
