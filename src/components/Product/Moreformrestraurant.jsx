// "use client"

// import { FaStar } from "react-icons/fa"
// import { motion } from "framer-motion"
// import { Link } from "react-router-dom"

// const Moreformrestraurant = () => {
//   // Sample data for more dishes
//   const moreDishes = [
//     {
//       id: "dish-1",
//       title: "Chicken Karahi",
//       price: 399,
//       rating: 4.7,
//       image:
//         "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     },
//     {
//       id: "dish-2",
//       title: "Mutton Pulao",
//       price: 449,
//       rating: 4.6,
//       image:
//         "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     },
//     {
//       id: "dish-3",
//       title: "Seekh Kebab",
//       price: 299,
//       rating: 4.5,
//       image:
//         "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1371&q=80",
//     },
//   ]

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="bg-white rounded-xl shadow-md overflow-hidden"
//     >
//       <div className="p-6 border-b border-gray-200">
//         <h2 className="text-xl font-semibold">More From This Restaurant</h2>
//       </div>

//       <div className="p-4">
//         <div className="space-y-4">
//           {moreDishes.map((dish) => (
//             <Link to={`/product-detail/${dish.id}`} key={dish.id}>
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
//               >
//                 <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
//                   <img src={dish.image || "/placeholder.svg"} alt={dish.title} className="w-full h-full object-cover" />
//                 </div>
//                 <div className="ml-3 flex-grow">
//                   <h3 className="font-medium text-gray-800">{dish.title}</h3>
//                   <div className="flex items-center justify-between mt-1">
//                     <span className="text-red-500 font-semibold">Rs. {dish.price}</span>
//                     <div className="flex items-center text-sm">
//                       <FaStar className="text-yellow-400 mr-1" />
//                       <span className="text-gray-600">{dish.rating}</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </Link>
//           ))}
//         </div>

//         <motion.button
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.97 }}
//           className="w-full mt-4 py-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-50 transition-colors text-center"
//         >
//           View All Menu Items
//         </motion.button>
//       </div>
//     </motion.div>
//   )
// }

// export default Moreformrestraurant



"use client"

import { FaStar } from "react-icons/fa"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Moreformrestraurant = () => {
  const items = [
    {
      id: 1,
      name: "Chicken Karahi",
      price: 399,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      name: "Mutton Pulao",
      price: 449,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    {
      id: 3,
      name: "Seekh Kebab",
      price: 299,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1371&q=80",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold">More From This Restaurant</h2>
      </div>

      <div className="p-4">
        <div className="space-y-4">
          {items.map((item) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              key={item.id}
              className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{item.name}</h3>
                <p className="text-red-500 font-semibold">Rs. {item.price}</p>
              </div>
              <div className="flex items-center text-yellow-400 text-sm">
                <FaStar />
                <span className="ml-1 text-gray-600">{item.rating}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <Link to="/restaurant/flavor-express">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 py-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-50 transition-colors"
          >
            View All Menu Items
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default Moreformrestraurant
