
import { useState, useEffect } from "react"
import {
  FaShoppingCart,
  FaTrashAlt,
  FaMinus,
  FaPlus,
  FaTruck,
  FaCreditCard,
  FaMoneyBillWave,
  FaArrowLeft,
  FaHeart,
} from "react-icons/fa"
import { IoFastFoodOutline } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Cart = () => {
  const [cartItems, setCartItems] = useState([])
  const [deliveryOption, setDeliveryOption] = useState("delivery")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [tip, setTip] = useState(50)
  const [note, setNote] = useState("")
  const [couponCode, setCouponCode] = useState("")
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Load cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCartItems(storedCart)
    setIsLoading(false)
  }, [])

  const updateQuantity = (id, change) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change)
        return { ...item, quantity: newQuantity }
      }
      return item
    })

    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    toast.info("Item removed from cart", {
      position: "bottom-right",
      autoClose: 2000,
    })
  }

  const moveToWishlist = (item) => {
    // Remove from cart
    removeItem(item.id)

    // Add to wishlist
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")

    // Check if item already exists in wishlist
    const existingItem = wishlist.find((wishlistItem) => wishlistItem.id === item.id)

    if (!existingItem) {
      wishlist.push({
        ...item,
        quantity: 1,
      })
      localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }

    toast.success("Moved to wishlist", {
      position: "bottom-right",
      autoClose: 2000,
    })
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

  const applyCoupon = () => {
    if (couponCode.trim() === "") {
      toast.error("Please enter a coupon code", {
        position: "bottom-right",
        autoClose: 2000,
      })
      return
    }

    // Simulate coupon validation
    toast.info("Coupon code applied", {
      position: "bottom-right",
      autoClose: 2000,
    })
  }

  const placeOrder = () => {
    // Simulate order placement
    toast.success("Order placed successfully!", {
      position: "bottom-right",
      autoClose: 2000,
    })

    // Clear cart
    localStorage.setItem("cart", JSON.stringify([]))

    // Redirect to home after 2 seconds
    setTimeout(() => {
      navigate("/")
    }, 2000)
  }

  if (isLoading) {
    return (
      <div className="w-[80%] mx-auto py-16 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    )
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
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/restaurants">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Browse Restaurants
              </motion.button>
            </Link>
            <Link to="/wishlist">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
              >
                <FaHeart /> View Wishlist
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-[90%] md:w-[80%] mx-auto py-8">
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
        <h1 className="text-2xl md:text-3xl font-bold flex items-center">
          <FaShoppingCart className="text-red-500 mr-3" /> Your Cart
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold flex items-center">
                <FaShoppingCart className="mr-2 text-red-500" /> Cart Items
              </h2>
            </div>

            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-center">
                  
                  <div className="w-full sm:w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 mb-4 sm:mb-0">
                  

                   <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                   
                  </div>
                  <div className="sm:ml-6 flex-grow">
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-red-500 font-semibold">Rs. {item.price}</p>
                    {item.size && <p className="text-gray-500 text-sm">Size: {item.size}</p>}
                  </div>
                  <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-0 w-full sm:w-auto">
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-3 sm:mb-0 sm:mr-4">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <FaMinus className="text-gray-600" />
                      </motion.button>
                      <span className="w-10 text-center border-x border-gray-300 py-1">{item.quantity}</span>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <FaPlus className="text-gray-600" />
                      </motion.button>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => moveToWishlist(item)}
                        className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                        title="Move to Wishlist"
                      >
                        <FaHeart />
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                        title="Remove Item"
                      >
                        <FaTrashAlt />
                      </motion.button>
                    </div>
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
                    <FaTruck className={deliveryOption === "delivery" ? "text-red-500" : "text-gray-500"} size={20} />
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
                    <IoFastFoodOutline
                      className={deliveryOption === "takeaway" ? "text-red-500" : "text-gray-500"}
                      size={20}
                    />
                    <span className={deliveryOption === "takeaway" ? "font-medium" : ""}>Takeaway</span>
                  </motion.button>
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
                      paymentMethod === "wallet" ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <FaMoneyBillWave
                      className={paymentMethod === "wallet" ? "text-red-500" : "text-gray-500"}
                      size={24}
                    />
                    <span className={paymentMethod === "wallet" ? "font-medium" : ""}>Wallet</span>
                  </motion.button>
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  rows={4}
                  placeholder="Add any special instructions or delivery notes..."
                ></textarea>
              </div>
            </div>
          )}

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

                {/* Tip Section */}
                {deliveryOption === "delivery" && (
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="font-medium mb-2">Tip your delivery partner</h3>
                    <p className="text-sm text-gray-500 mb-3">100% of the tip goes to your delivery partner</p>
                    <div className="flex flex-wrap gap-2">
                      {[20, 50, 100].map((amount) => (
                        <motion.button
                          key={amount}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setTip(amount)}
                          className={`px-4 py-2 rounded-lg border transition-colors ${
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
                        className={`px-4 py-2 rounded-lg border transition-colors ${
                          tip === 0 ? "border-red-500 bg-red-500 text-white" : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        No Tip
                      </motion.button>
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
                      className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter coupon code"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={applyCoupon}
                      className="px-4 py-2 bg-red-500 text-white rounded-r-lg hover:bg-red-600 transition-colors"
                    >
                      Apply
                    </motion.button>
                  </div>
                </div>

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
      <ToastContainer />
    </div>
  )
}

export default Cart

