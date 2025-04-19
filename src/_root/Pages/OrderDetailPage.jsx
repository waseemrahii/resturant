"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaArrowLeft, FaMapMarkerAlt, FaPhoneAlt, FaRegClock, FaCheck, FaTruck, FaUtensils } from "react-icons/fa"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const OrderDetailPage = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [order, setOrder] = useState(null)

  useEffect(() => {
    // Simulate loading order data
    setTimeout(() => {
      // Sample order data
      const sampleOrder = {
        id: id || "ORD-12345",
        date: "2023-05-15",
        status: "Delivered",
        total: 1299,
        items: [
          {
            id: "item1",
            name: "Chicken Biryani",
            quantity: 2,
            price: 299,
            image:
              "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            id: "item2",
            name: "Seekh Kebab",
            quantity: 1,
            price: 249,
            image:
              "https://images.unsplash.com/photo-1625398407796-82650a8c9dd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Vla2glMjBrZWJhYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
            id: "item3",
            name: "Naan",
            quantity: 4,
            price: 40,
            image:
              "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          },
        ],
        restaurant: {
          name: "Flavor Express",
          address: "F-7 Markaz, Islamabad",
          phone: "+92 300 1234567",
          image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        delivery: {
          address: "Soan heights2, street 25, Block B, Islamabad",
          time: "30-45 minutes",
          fee: 100,
          name: "Aqib Ahmed",
          phone: "+923161887004",
        },
        payment: {
          method: "Credit Card",
          cardLast4: "4567",
          subtotal: 1199,
          tip: 0,
          total: 1299,
        },
        timeline: [
          { status: "Order Placed", time: "12:30 PM", completed: true },
          { status: "Order Confirmed", time: "12:35 PM", completed: true },
          { status: "Preparing Food", time: "12:45 PM", completed: true },
          { status: "Out for Delivery", time: "1:15 PM", completed: true },
          { status: "Delivered", time: "1:45 PM", completed: true },
        ],
      }

      setOrder(sampleOrder)
      setIsLoading(false)
    }, 1000)
  }, [id])

  const reorderItems = () => {
    // Get existing cart
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")

    // Add order items to cart
    order.items.forEach((item) => {
      const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id)

      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        cart[existingItemIndex].quantity += item.quantity
      } else {
        // Add new item
        cart.push({
          id: item.id,
          title: item.name,
          price: item.price,
          image: item.image,
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
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white rounded-xl shadow-md p-8 max-w-md mx-auto">
            <div className="text-gray-400 text-6xl mb-4">
              <FaRegClock className="mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Order not found</h2>
            <p className="text-gray-600 mb-8">We couldn't find the order you're looking for.</p>
            <Link
              to="/account"
              className="inline-block bg-red-500 text-white rounded-lg py-3 px-6 hover:bg-red-600 transition-colors"
            >
              Go to My Account
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
          <Link to="/account" className="mr-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <FaArrowLeft className="text-gray-600" />
            </motion.button>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">Order Details</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Order Details */}
          <div className="lg:w-2/3">
            {/* Order Status */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Order #{order.id}</h2>
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

                {/* Order Timeline */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-4">Order Timeline</h3>
                  <div className="relative">
                    {/* Progress Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                    {/* Timeline Steps */}
                    <div className="space-y-6">
                      {order.timeline.map((step, index) => (
                        <div key={index} className="flex items-start">
                          <div
                            className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full ${
                              step.completed ? "bg-green-500" : "bg-gray-300"
                            } mr-4`}
                          >
                            {step.completed && <FaCheck className="text-white text-sm" />}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">{step.status}</h4>
                            <p className="text-sm text-gray-500">{step.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Restaurant Info */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-4">Restaurant</h3>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-lg overflow-hidden mr-4">
                      <img
                        src={order.restaurant.image || "/placeholder.svg"}
                        alt={order.restaurant.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{order.restaurant.name}</h4>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <FaMapMarkerAlt className="mr-1" />
                        {order.restaurant.address}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <FaPhoneAlt className="mr-1" />
                        {order.restaurant.phone}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-4">Delivery Information</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start mb-3">
                      <FaMapMarkerAlt className="text-red-500 mt-1 mr-2" />
                      <div>
                        <p className="font-medium text-gray-800">{order.delivery.name}</p>
                        <p className="text-gray-600">{order.delivery.address}</p>
                        <p className="text-gray-600">{order.delivery.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaRegClock className="text-gray-500 mr-2" />
                      <span className="text-gray-600">Estimated delivery time: {order.delivery.time}</span>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div>
                  <h3 className="font-medium text-gray-800 mb-4">Order Items</h3>
                  <div className="space-y-4">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                      >
                        <div className="w-16 h-16 rounded-lg overflow-hidden mr-4">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800">{item.name}</h4>
                          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                        </div>
                        <div className="font-medium text-gray-800">Rs. {item.price * item.quantity}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={reorderItems}
                className="flex-1 py-3 px-6 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center"
              >
                <FaUtensils className="mr-2" /> Reorder
              </motion.button>
              <Link to="/contact" className="flex-1">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <FaTruck className="mr-2" /> Track Delivery
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Payment Summary</h2>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-2">Payment Method</h3>
                  <div className="bg-gray-50 rounded-lg p-3 flex items-center">
                    <div className="bg-blue-500 text-white p-2 rounded-md mr-3">
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
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{order.payment.method}</p>
                      {order.payment.cardLast4 && (
                        <p className="text-sm text-gray-500">**** **** **** {order.payment.cardLast4}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">Rs. {order.payment.subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-medium">Rs. {order.delivery.fee}</span>
                  </div>
                  {order.payment.tip > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tip</span>
                      <span className="font-medium">Rs. {order.payment.tip}</span>
                    </div>
                  )}

                  {/* Total */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-xl font-bold text-red-500">Rs. {order.payment.total}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">Order placed on {order.date}</p>
                  <p className="text-sm text-gray-500">Thank you for your order!</p>
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

export default OrderDetailPage
