
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaTag, FaPercent, FaUtensils, FaMotorcycle } from "react-icons/fa"
import CouponsList from "./CouponsList"
import { couponsdata } from "../../utils/Utils"

const Offers = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [filteredCoupons, setFilteredCoupons] = useState(couponsdata)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false)
    }, 800)
  }, [])

  useEffect(() => {
    if (activeTab === "all") {
      setFilteredCoupons(couponsdata)
    } else {
      setFilteredCoupons(couponsdata.filter((coupon) => coupon.type === activeTab))
    }
  }, [activeTab])

  const tabs = [
    { id: "all", label: "All Offers", icon: <FaTag /> },
    { id: "discount", label: "Discounts", icon: <FaPercent /> },
    { id: "restaurant", label: "Restaurant Deals", icon: <FaUtensils /> },
    { id: "delivery", label: "Free Delivery", icon: <FaMotorcycle /> },
  ]

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Special Offers & Deals</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover amazing discounts and special offers from your favorite restaurants. Save big on your next order!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-full transition-colors ${
                activeTab === tab.id
                  ? "bg-primary-500 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Featured Offers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCoupons.slice(0, 3).map((coupon, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-r from-primary-500 to-primary-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-3xl font-bold mb-2">{coupon.discount}% OFF</h3>
                      <p className="text-lg">{coupon.title}</p>
                    </div>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-8 bg-white"
                    style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
                  ></div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-8 bg-white"
                    style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0, 0 100%)" }}
                  ></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{coupon.title}</h3>
                  <p className="text-gray-600 mb-4">{coupon.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Valid until: {coupon.validTill}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      Use Code
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Offers */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">All Available Offers</h2>
          <CouponsList coupansdata={filteredCoupons} />
        </div>
      </div>
    </div>
  )
}

export default Offers
