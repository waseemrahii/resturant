// import React from "react";
// import { HiShoppingBag } from "react-icons/hi";

// const SellerInfo = () => {
//   return (
//     <div className="flex justify-end mt-4">
//       <div className="flex flex-col w-72  border rounded p-2 gap-4">
//         <div className="flex p-2 ">
//           <img src="https://via.placeholder.com/300" alt="" className="w-18 rounded-full p-2"/>
//           <div className="flex flex-col justify-center">
//           <h1 className="text-md text-red-600">Seller Name</h1>
//           <span className="text-sm">Seller Info</span>
//           </div>
          
//         </div>
//         {/* <h1 className="px-4">Seller Info</h1> */}
//         <div className="flex justify-around">
//           <div className="flex flex-col justify-center items-center w-20 h-14 bg-gray-200 rounded-lg">
//             {4}
//             <span>Reviews</span>
//           </div>
//           <div className="flex flex-col justify-center items-center w-20 h-14 bg-gray-200 rounded-lg">
//             {2}
//             <span>Rating</span>
//           </div>
//         </div>
//         <button className="flex justify-center gap-2 items-center h-10 mx-10 rounded-md bg-red-500 text-md text-white ">
//         <HiShoppingBag />
//           <span>Visit Restaurant</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SellerInfo;


"use client"

import { HiShoppingBag } from "react-icons/hi"
import { FaStar, FaStore, FaMapMarkerAlt, FaPhone } from "react-icons/fa"
import { motion } from "framer-motion"

const SellerInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold flex items-center">
          <FaStore className="mr-2 text-red-500" /> Restaurant Information
        </h2>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-500">Flavor Express</h3>
            <p className="text-gray-600 text-sm">Authentic Pakistani Cuisine</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-lg font-bold text-gray-800">4.8</div>
            <div className="flex justify-center text-yellow-400 my-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < 4 ? "text-yellow-400" : "text-gray-300"} />
              ))}
            </div>
            <div className="text-sm text-gray-500">Rating</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-lg font-bold text-gray-800">250+</div>
            <div className="text-sm text-gray-500">Reviews</div>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-red-500 mr-3" />
            <span className="text-gray-600 text-sm">F-7 Markaz, Islamabad</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-red-500 mr-3" />
            <span className="text-gray-600 text-sm">+92 300 1234567</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          <HiShoppingBag />
          <span>Visit Restaurant</span>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default SellerInfo
