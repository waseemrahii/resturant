// import { Link } from "react-router-dom"

// const BecomeASeller = () => {
//   return (
//     <div className="bg-white rounded-lg shadow-sm p-6 my-8 flex flex-col md:flex-row items-center justify-between">
//       <div className="flex items-center mb-4 md:mb-0">
//         <img
//           src="/seller.2044003e.svg"
//           alt="Become a Seller"
//           className="w-24 h-24 md:w-32 md:h-32 object-contain mr-6"
//         />
//         <div>
//           <h3 className="text-2xl font-bold text-gray-700 mb-2">Become a Seller</h3>
//           <p className="text-gray-500">Register as seller & open shop in 6amMart to start your business</p>
//         </div>
//       </div>
//       <Link
//         to="/vendor-registration"
//         className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
//       >
//         Register
//       </Link>
//     </div>
//   )
// }

// export default BecomeASeller



import { Link } from "react-router-dom"
import { ArrowRight, Store, BarChart3, DollarSign, ShieldCheck } from "lucide-react"

const BecomeASeller = () => {
  return (
    <div className="my-16 overflow-hidden rounded-2xl shadow-lg">
      <div className="relative bg-gradient-to-r from-[#28A745] to-[#20c997]">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left content */}
            <div className="flex-1">
              <div className="bg-white/20 inline-block px-4 py-2 rounded-full text-white font-medium mb-4">
                Join 6amMart Today
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Grow Your Business with 6amMart</h2>
              <p className="text-white/90 text-lg mb-8 max-w-xl">
                Join thousands of successful vendors and reach millions of customers. Start selling your products online
                with just a few simple steps.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Store className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white">Create your store</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white">Track your sales</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white">Boost your revenue</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white">Secure payments</span>
                </div>
              </div>

              <Link
                to="/vendor-registration"
                className="inline-flex items-center gap-2 bg-white text-[#28A745] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Register as a Seller
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-300/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-300/30 rounded-full blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl">
                  <img
                    src="/seller.2044003e.svg"
                    alt="Become a Seller"
                    className="w-80 h-80 object-cover z-10 relative rounded-xl"
                  />
                  <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-3 transform rotate-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium text-gray-800">Sales Increased</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900">+45%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">5000+</div>
              <div className="text-sm text-gray-600">Active Vendors</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">1M+</div>
              <div className="text-sm text-gray-600">Daily Orders</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Cities</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">4.8/5</div>
              <div className="text-sm text-gray-600">Vendor Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BecomeASeller
