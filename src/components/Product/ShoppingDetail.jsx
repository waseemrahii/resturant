// "use client"

// import { FaTruck, FaShieldAlt, FaUndo, FaInfoCircle } from "react-icons/fa"
// import { motion } from "framer-motion"
// import PropTypes from "prop-types"

// const ShoppingDetail = ({ product }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="bg-white rounded-xl shadow-md overflow-hidden"
//     >
//       <div className="p-6 border-b border-gray-200">
//         <h2 className="text-xl font-semibold flex items-center">
//           <FaInfoCircle className="mr-2 text-red-500" /> Delivery Information
//         </h2>
//       </div>

//       <div className="p-6 space-y-6">
//         {/* Delivery Time */}
//         <div className="flex items-start">
//           <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
//             <FaTruck className="text-red-500" />
//           </div>
//           <div className="ml-4">
//             <h3 className="font-medium text-gray-800">Delivery Time</h3>
//             <p className="text-gray-600 text-sm mt-1">
//               {product?.deliveryTime || "30-45 min"} • Free delivery on orders above Rs. 500
//             </p>
//           </div>
//         </div>

//         {/* Return Policy */}
//         <div className="flex items-start">
//           <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
//             <FaUndo className="text-blue-500" />
//           </div>
//           <div className="ml-4">
//             <h3 className="font-medium text-gray-800">Return Policy</h3>
//             <p className="text-gray-600 text-sm mt-1">
//               Easy returns within 30 minutes if the food quality doesn't meet expectations
//             </p>
//           </div>
//         </div>

//         {/* Quality Guarantee */}
//         <div className="flex items-start">
//           <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
//             <FaShieldAlt className="text-green-500" />
//           </div>
//           <div className="ml-4">
//             <h3 className="font-medium text-gray-800">Quality Guarantee</h3>
//             <p className="text-gray-600 text-sm mt-1">
//               We ensure that all our food items are prepared with the highest quality ingredients
//             </p>
//           </div>
//         </div>

//         {/* Delivery Areas */}
//         <div className="mt-6 pt-6 border-t border-gray-200">
//           <h3 className="font-medium text-gray-800 mb-2">Delivery Areas</h3>
//           <div className="grid grid-cols-2 gap-2">
//             {["Islamabad", "Rawalpindi", "Lahore", "Karachi"].map((area, index) => (
//               <div key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm text-center">
//                 {area}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// ShoppingDetail.propTypes = {
//   product: PropTypes.object,
// }

// export default ShoppingDetail

"use client"

import { FaShieldAlt, FaUndo, FaLock } from "react-icons/fa"
import { motion } from "framer-motion"
import PropTypes from "prop-types"

const ShoppingDetail = ({ product }) => {
  const items = [
    { text: "Safe Payment", icon: <FaLock />, color: "green" },
    { text: "7 Days Return Policy", icon: <FaUndo />, color: "blue" },
    { text: "100% Authentic Foods", icon: <FaShieldAlt />, color: "red" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="p-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-center mb-4 py-2 border-b border-gray-100 last:border-0">
            <span className="mr-3 text-xl" style={{ color: item.color }}>
              {item.icon}
            </span>
            <span className="text-gray-700 font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

ShoppingDetail.propTypes = {
  product: PropTypes.object,
}

export default ShoppingDetail
