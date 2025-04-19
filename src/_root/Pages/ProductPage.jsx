// // import { useEffect, useState } from "react"
// // import { Helmet } from "react-helmet"
// // import ProductView from "../../components/Product/ProductView"
// // import ShoppingDetail from "../../components/Product/ShoppingDetail"
// // import SellerInfo from "../../components/Product/SellerInfo"
// // import Moreformrestraurant from "../../components/Product/Moreformrestraurant"
// // import { motion } from "framer-motion"
// // import { FaArrowLeft, FaStar, FaHeart, FaRegStar } from "react-icons/fa"
// // import { useNavigate, useParams } from "react-router-dom"
// // import { toast, ToastContainer } from "react-toastify"

// // const ProductPage = () => {
// //   const navigate = useNavigate()
// //   const { id } = useParams() // Get product ID from URL
// //   const [isLoading, setIsLoading] = useState(true)
// //   const [activeTab, setActiveTab] = useState("description")
// //   const [product, setProduct] = useState(null)

// //   // Sample products data - in a real app, this would come from an API or context
// //   const products = [
// //     {
// //       id: "prod-123",
// //       title: "Spicy Chicken Biryani",
// //       description:
// //         "Authentic Pakistani Biryani made with premium basmati rice, tender chicken pieces, and a blend of traditional spices. Served with raita and salad. Our chef's special recipe that has been perfected over generations.",
// //       subtitle: "Flavor Express",
// //       price: 299,
// //       originalPrice: 399,
// //       startreview: 4.8,
// //       review: 124,
// //       status: "Unlimited",
// //       isVeg: false,
// //       category: "Main Course",
// //       tags: ["Spicy", "Popular", "Bestseller"],
// //       deliveryTime: "30-45 min",
// //       ingredients: ["Basmati Rice", "Chicken", "Spices", "Ghee", "Saffron"],
// //       nutritionalInfo: {
// //         calories: "650 kcal",
// //         protein: "35g",
// //         carbs: "80g",
// //         fat: "22g",
// //       },
// //       allergens: ["Dairy", "Nuts"],
// //       images: [
// //         "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //         "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //         "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //       ],
// //     },
// //     {
// //       id: "prod-124",
// //       title: "Butter Chicken",
// //       description:
// //         "Creamy and rich butter chicken made with tender chicken pieces in a tomato-based gravy with butter and cream. A North Indian classic that's loved worldwide.",
// //       subtitle: "Curry House",
// //       price: 349,
// //       originalPrice: 449,
// //       startreview: 4.9,
// //       review: 156,
// //       status: "Unlimited",
// //       isVeg: false,
// //       category: "Main Course",
// //       tags: ["Creamy", "Popular", "Bestseller"],
// //       deliveryTime: "25-40 min",
// //       ingredients: ["Chicken", "Tomato", "Butter", "Cream", "Spices"],
// //       nutritionalInfo: {
// //         calories: "580 kcal",
// //         protein: "32g",
// //         carbs: "15g",
// //         fat: "42g",
// //       },
// //       allergens: ["Dairy"],
// //       images: [
// //         "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //         "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1484&q=80",
// //         "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1371&q=80",
// //       ],
// //     },
// //     {
// //       id: "prod-125",
// //       title: "Paneer Tikka Masala",
// //       description:
// //         "Chunks of paneer marinated in spices and grilled to perfection, then simmered in a rich tomato-based gravy. A vegetarian delight that's full of flavor.",
// //       subtitle: "Veggie Delight",
// //       price: 279,
// //       originalPrice: 349,
// //       startreview: 4.7,
// //       review: 98,
// //       status: "Unlimited",
// //       isVeg: true,
// //       category: "Main Course",
// //       tags: ["Vegetarian", "Spicy", "Popular"],
// //       deliveryTime: "20-35 min",
// //       ingredients: ["Paneer", "Tomato", "Bell Peppers", "Onions", "Spices"],
// //       nutritionalInfo: {
// //         calories: "450 kcal",
// //         protein: "22g",
// //         carbs: "25g",
// //         fat: "30g",
// //       },
// //       allergens: ["Dairy"],
// //       images: [
// //         "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1371&q=80",
// //         "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1484&q=80",
// //         "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //       ],
// //     },
// //   ]

// //   // Sample reviews
// //   const reviews = [
// //     {
// //       id: 1,
// //       name: "John Doe",
// //       avatar: "JD",
// //       rating: 5,
// //       date: "2 weeks ago",
// //       comment:
// //         "Absolutely delicious! The spices were perfectly balanced and the portion size was generous. Will definitely order again.",
// //     },
// //     {
// //       id: 2,
// //       name: "Sarah Kim",
// //       avatar: "SK",
// //       rating: 4,
// //       date: "1 month ago",
// //       comment: "Great food, but delivery took longer than expected. Would order again though!",
// //     },
// //     {
// //       id: 3,
// //       name: "Michael Johnson",
// //       avatar: "MJ",
// //       rating: 5,
// //       date: "3 weeks ago",
// //       comment: "Best biryani I've had in a long time. The meat was tender and the rice was perfectly cooked.",
// //     },
// //   ]

// //   // Load product data based on ID
// //   useEffect(() => {
// //     setIsLoading(true)

// //     // Simulate API call
// //     setTimeout(() => {
// //       // If ID is provided, find the product
// //       if (id) {
// //         const foundProduct = products.find((p) => p.id === id) || products[0]
// //         setProduct(foundProduct)
// //       } else {
// //         // Default to first product if no ID
// //         setProduct(products[0])
// //       }
// //       setIsLoading(false)
// //     }, 800)
// //   }, [id])

// //   if (isLoading || !product) {
// //     return (
// //       <div className="flex items-center justify-center min-h-screen">
// //         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <>
// //       <Helmet>
// //         <title>{product.title} | Foodi</title>
// //         <meta name="description" content={product.description} />
// //       </Helmet>

// //       <div className="bg-gray-50 min-h-screen pb-12">
// //         {/* Back button */}
// //         <div className="container mx-auto px-4 py-4">
// //           <motion.button
// //             whileHover={{ x: -5 }}
// //             whileTap={{ scale: 0.95 }}
// //             onClick={() => navigate(-1)}
// //             className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
// //           >
// //             <FaArrowLeft /> Back
// //           </motion.button>
// //         </div>

// //         {/* Product main section */}
// //         <div className="container mx-auto px-4">
// //           <ProductView
// //             title={product.title}
// //             description={product.description}
// //             subtitle={product.subtitle}
// //             price={product.price}
// //             originalPrice={product.originalPrice}
// //             startreview={product.startreview}
// //             review={product.review}
// //             status={product.status}
// //             isVeg={product.isVeg}
// //             productId={product.id}
// //             images={product.images}
// //           />

// //           {/* Product details section */}
// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
// //             <div className="lg:col-span-2 space-y-6">
// //               {/* Tabs */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.1 }}
// //                 className="bg-white rounded-xl shadow-sm overflow-hidden"
// //               >
// //                 <div className="flex border-b">
// //                   {["description", "reviews", "nutrition"].map((tab) => (
// //                     <button
// //                       key={tab}
// //                       onClick={() => setActiveTab(tab)}
// //                       className={`flex-1 py-4 px-4 text-center font-medium transition-colors ${
// //                         activeTab === tab
// //                           ? "text-red-500 border-b-2 border-red-500"
// //                           : "text-gray-500 hover:text-gray-700"
// //                       }`}
// //                     >
// //                       {tab.charAt(0).toUpperCase() + tab.slice(1)}
// //                     </button>
// //                   ))}
// //                 </div>

// //                 <div className="p-6">
// //                   {activeTab === "description" && (
// //                     <div className="space-y-4">
// //                       <p className="text-gray-600 leading-relaxed">{product.description}</p>

// //                       <div className="mt-6">
// //                         <h3 className="font-semibold text-gray-800 mb-2">Ingredients</h3>
// //                         <div className="flex flex-wrap gap-2">
// //                           {product.ingredients.map((ingredient, index) => (
// //                             <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
// //                               {ingredient}
// //                             </span>
// //                           ))}
// //                         </div>
// //                       </div>

// //                       <div className="mt-6">
// //                         <h3 className="font-semibold text-gray-800 mb-2">Tags</h3>
// //                         <div className="flex flex-wrap gap-2">
// //                           {product.tags.map((tag, index) => (
// //                             <span key={index} className="bg-red-50 text-red-500 px-3 py-1 rounded-full text-sm">
// //                               {tag}
// //                             </span>
// //                           ))}
// //                         </div>
// //                       </div>

// //                       <div className="mt-6">
// //                         <h3 className="font-semibold text-gray-800 mb-2">Allergens</h3>
// //                         <div className="flex flex-wrap gap-2">
// //                           {product.allergens.map((allergen, index) => (
// //                             <span key={index} className="bg-orange-50 text-orange-500 px-3 py-1 rounded-full text-sm">
// //                               {allergen}
// //                             </span>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   )}

// //                   {activeTab === "reviews" && (
// //                     <div className="space-y-6">
// //                       <div className="flex items-center justify-between">
// //                         <div className="flex items-center gap-2">
// //                           <div className="text-3xl font-bold text-gray-800">{product.startreview}</div>
// //                           <div className="flex flex-col">
// //                             <div className="flex text-yellow-400">
// //                               {[...Array(5)].map((_, i) => (
// //                                 <span key={i}>{i < Math.floor(product.startreview) ? <FaStar /> : <FaRegStar />}</span>
// //                               ))}
// //                             </div>
// //                             <div className="text-sm text-gray-500">{product.review} reviews</div>
// //                           </div>
// //                         </div>
// //                         <motion.button
// //                           whileHover={{ scale: 1.05 }}
// //                           whileTap={{ scale: 0.95 }}
// //                           className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm"
// //                         >
// //                           Write a Review
// //                         </motion.button>
// //                       </div>

// //                       <div className="space-y-4 mt-6">
// //                         {reviews.map((review) => (
// //                           <motion.div
// //                             initial={{ opacity: 0, y: 20 }}
// //                             animate={{ opacity: 1, y: 0 }}
// //                             key={review.id}
// //                             className="border-b pb-4 last:border-0"
// //                           >
// //                             <div className="flex items-start gap-3 mb-2">
// //                               <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold flex-shrink-0">
// //                                 {review.avatar}
// //                               </div>
// //                               <div className="flex-1">
// //                                 <div className="flex justify-between items-center">
// //                                   <h4 className="font-medium text-gray-800">{review.name}</h4>
// //                                   <span className="text-sm text-gray-500">{review.date}</span>
// //                                 </div>
// //                                 <div className="flex items-center text-yellow-400 text-sm my-1">
// //                                   {[...Array(5)].map((_, i) => (
// //                                     <span key={i}>{i < review.rating ? <FaStar /> : <FaRegStar />}</span>
// //                                   ))}
// //                                 </div>
// //                                 <p className="text-gray-600 mt-2">{review.comment}</p>
// //                               </div>
// //                             </div>
// //                           </motion.div>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   )}

// //                   {activeTab === "nutrition" && (
// //                     <div className="space-y-4">
// //                       <h3 className="font-semibold text-gray-800 mb-4">Nutritional Information</h3>
// //                       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                         {Object.entries(product.nutritionalInfo).map(([key, value]) => (
// //                           <div key={key} className="bg-gray-50 p-4 rounded-lg text-center">
// //                             <div className="text-lg font-bold text-gray-800">{value}</div>
// //                             <div className="text-sm text-gray-500 capitalize">{key}</div>
// //                           </div>
// //                         ))}
// //                       </div>
// //                       <p className="text-sm text-gray-500 mt-4">
// //                         * Nutritional information is approximate and may vary based on preparation method and serving
// //                         size.
// //                       </p>
// //                     </div>
// //                   )}
// //                 </div>
// //               </motion.div>

// //               {/* Related products */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.4 }}
// //                 className="bg-white p-6 rounded-xl shadow-sm"
// //               >
// //                 <h2 className="text-xl font-bold mb-4 text-gray-800">You May Also Like</h2>
// //                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
// //                   {products
// //                     .filter((p) => p.id !== product.id)
// //                     .slice(0, 3)
// //                     .map((item) => (
// //                       <motion.div
// //                         whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
// //                         key={item.id}
// //                         className="rounded-lg overflow-hidden shadow-sm transition-all duration-300 cursor-pointer"
// //                         onClick={() => {
// //                           navigate(`/product-detail/${item.id}`)
// //                         }}
// //                       >
// //                         <div className="relative">
// //                           <img
// //                             src={item.images[0] || "/placeholder.svg"}
// //                             alt={item.title}
// //                             className="w-full h-32 object-cover"
// //                           />
// //                           <div className="absolute top-2 right-2">
// //                             <button
// //                               className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center"
// //                               onClick={(e) => {
// //                                 e.stopPropagation()
// //                                 const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
// //                                 const isInWishlist = wishlist.some((w) => w.id === item.id)

// //                                 if (!isInWishlist) {
// //                                   wishlist.push({
// //                                     id: item.id,
// //                                     title: item.title,
// //                                     price: item.price,
// //                                     image: item.images[0],
// //                                     quantity: 1,
// //                                   })
// //                                   localStorage.setItem("wishlist", JSON.stringify(wishlist))
// //                                   toast.success("Added to wishlist", {
// //                                     position: "bottom-right",
// //                                     autoClose: 2000,
// //                                   })
// //                                 } else {
// //                                   const updatedWishlist = wishlist.filter((w) => w.id !== item.id)
// //                                   localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
// //                                   toast.info("Removed from wishlist", {
// //                                     position: "bottom-right",
// //                                     autoClose: 2000,
// //                                   })
// //                                 }
// //                               }}
// //                             >
// //                               <FaHeart
// //                                 className={`${
// //                                   JSON.parse(localStorage.getItem("wishlist") || "[]").some((w) => w.id === item.id)
// //                                     ? "text-red-500"
// //                                     : "text-gray-300 hover:text-red-500"
// //                                 } transition-colors`}
// //                               />
// //                             </button>
// //                           </div>
// //                         </div>
// //                         <div className="p-3">
// //                           <h3 className="font-medium text-sm">{item.title}</h3>
// //                           <div className="flex items-center justify-between mt-1">
// //                             <p className="text-red-500 font-semibold text-sm">Rs. {item.price}</p>
// //                             <div className="flex items-center text-xs text-yellow-400">
// //                               <FaStar />
// //                               <span className="ml-1 text-gray-600">{item.startreview}</span>
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </motion.div>
// //                     ))}
// //                 </div>
// //               </motion.div>
// //             </div>

// //             {/* Sidebar */}
// //             <div className="space-y-6">
// //               <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
// //                 <ShoppingDetail product={product} />
// //               </motion.div>

// //               <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
// //                 <SellerInfo />
// //               </motion.div>

// //               <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
// //                 <Moreformrestraurant />
// //               </motion.div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <ToastContainer />
// //     </>
// //   )
// // }

// // export default ProductPage



// "use client"

// import { useEffect, useState } from "react"
// import { Helmet } from "react-helmet"
// import ProductView from "../../components/Product/ProductView"
// import ShoppingDetail from "../../components/Product/ShoppingDetail"
// import SellerInfo from "../../components/Product/SellerInfo"
// import Moreformrestraurant from "../../components/Product/Moreformrestraurant"
// import { motion } from "framer-motion"
// import { FaArrowLeft, FaStar, FaHeart, FaRegStar } from "react-icons/fa"
// import { useNavigate, useParams } from "react-router-dom"
// import { toast, ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

// const ProductPage = () => {
//   const navigate = useNavigate()
//   const { id } = useParams() // Get product ID from URL
//   const [isLoading, setIsLoading] = useState(true)
//   const [activeTab, setActiveTab] = useState("description")
//   const [product, setProduct] = useState(null)

//   // Sample products data - in a real app, this would come from an API or context
//   const products = [
//     {
//       id: "prod-123",
//       title: "Spicy Chicken Biryani",
//       description:
//         "Authentic Pakistani Biryani made with premium basmati rice, tender chicken pieces, and a blend of traditional spices. Served with raita and salad. Our chef's special recipe that has been perfected over generations.",
//       subtitle: "Flavor Express",
//       price: 299,
//       originalPrice: 399,
//       startreview: 4.8,
//       review: 124,
//       status: "Unlimited",
//       isVeg: false,
//       category: "Main Course",
//       tags: ["Spicy", "Popular", "Bestseller"],
//       deliveryTime: "30-45 min",
//       ingredients: ["Basmati Rice", "Chicken", "Spices", "Ghee", "Saffron"],
//       nutritionalInfo: {
//         calories: "650 kcal",
//         protein: "35g",
//         carbs: "80g",
//         fat: "22g",
//       },
//       allergens: ["Dairy", "Nuts"],
//       images: [
//         "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//       ],
//     },
//     {
//       id: "prod-124",
//       title: "Butter Chicken",
//       description:
//         "Creamy and rich butter chicken made with tender chicken pieces in a tomato-based gravy with butter and cream. A North Indian classic that's loved worldwide.",
//       subtitle: "Curry House",
//       price: 349,
//       originalPrice: 449,
//       startreview: 4.9,
//       review: 156,
//       status: "Unlimited",
//       isVeg: false,
//       category: "Main Course",
//       tags: ["Creamy", "Popular", "Bestseller"],
//       deliveryTime: "25-40 min",
//       ingredients: ["Chicken", "Tomato", "Butter", "Cream", "Spices"],
//       nutritionalInfo: {
//         calories: "580 kcal",
//         protein: "32g",
//         carbs: "15g",
//         fat: "42g",
//       },
//       allergens: ["Dairy"],
//       images: [
//         "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1484&q=80",
//         "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1371&q=80",
//       ],
//     },
//     {
//       id: "prod-125",
//       title: "Paneer Tikka Masala",
//       description:
//         "Chunks of paneer marinated in spices and grilled to perfection, then simmered in a rich tomato-based gravy. A vegetarian delight that's full of flavor.",
//       subtitle: "Veggie Delight",
//       price: 279,
//       originalPrice: 349,
//       startreview: 4.7,
//       review: 98,
//       status: "Unlimited",
//       isVeg: true,
//       category: "Main Course",
//       tags: ["Vegetarian", "Spicy", "Popular"],
//       deliveryTime: "20-35 min",
//       ingredients: ["Paneer", "Tomato", "Bell Peppers", "Onions", "Spices"],
//       nutritionalInfo: {
//         calories: "450 kcal",
//         protein: "22g",
//         carbs: "25g",
//         fat: "30g",
//       },
//       allergens: ["Dairy"],
//       images: [
//         "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1371&q=80",
//         "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1484&q=80",
//         "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       ],
//     },
//   ]

//   // Sample reviews
//   const reviews = [
//     {
//       id: 1,
//       name: "John Doe",
//       avatar: "JD",
//       rating: 5,
//       date: "2 weeks ago",
//       comment:
//         "Absolutely delicious! The spices were perfectly balanced and the portion size was generous. Will definitely order again.",
//     },
//     {
//       id: 2,
//       name: "Sarah Kim",
//       avatar: "SK",
//       rating: 4,
//       date: "1 month ago",
//       comment: "Great food, but delivery took longer than expected. Would order again though!",
//     },
//     {
//       id: 3,
//       name: "Michael Johnson",
//       avatar: "MJ",
//       rating: 5,
//       date: "3 weeks ago",
//       comment: "Best biryani I've had in a long time. The meat was tender and the rice was perfectly cooked.",
//     },
//   ]

//   // Load product data based on ID
//   useEffect(() => {
//     setIsLoading(true)

//     // Simulate API call
//     setTimeout(() => {
//       // If ID is provided, find the product
//       if (id) {
//         const foundProduct = products.find((p) => p.id === id) || products[0]
//         setProduct(foundProduct)
//       } else {
//         // Default to first product if no ID
//         setProduct(products[0])
//       }
//       setIsLoading(false)
//     }, 800)
//   }, [id])

//   if (isLoading || !product) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
//       </div>
//     )
//   }

//   return (
//     <>
//       <Helmet>
//         <title>{product.title} | Foodi</title>
//         <meta name="description" content={product.description} />
//       </Helmet>

//       <div className="bg-gray-50 min-h-screen pb-12">
//         {/* Back button */}
//         <div className="container mx-auto px-4 py-4">
//           <motion.button
//             whileHover={{ x: -5 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => navigate(-1)}
//             className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
//           >
//             <FaArrowLeft /> Back
//           </motion.button>
//         </div>

//         {/* Product main section */}
//         <div className="container mx-auto px-4">
//           <ProductView
//             title={product.title}
//             description={product.description}
//             subtitle={product.subtitle}
//             price={product.price}
//             originalPrice={product.originalPrice}
//             startreview={product.startreview}
//             review={product.review}
//             status={product.status}
//             isVeg={product.isVeg}
//             productId={product.id}
//             images={product.images}
//           />

//           {/* Product details section */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
//             <div className="lg:col-span-2 space-y-6">
//               {/* Tabs */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//                 className="bg-white rounded-xl shadow-sm overflow-hidden"
//               >
//                 <div className="flex border-b">
//                   {["description", "reviews", "nutrition"].map((tab) => (
//                     <button
//                       key={tab}
//                       onClick={() => setActiveTab(tab)}
//                       className={`flex-1 py-4 px-4 text-center font-medium transition-colors ${
//                         activeTab === tab
//                           ? "text-red-500 border-b-2 border-red-500"
//                           : "text-gray-500 hover:text-gray-700"
//                       }`}
//                     >
//                       {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                     </button>
//                   ))}
//                 </div>

//                 <div className="p-6">
//                   {activeTab === "description" && (
//                     <div className="space-y-4">
//                       <p className="text-gray-600 leading-relaxed">{product.description}</p>

//                       <div className="mt-6">
//                         <h3 className="font-semibold text-gray-800 mb-2">Ingredients</h3>
//                         <div className="flex flex-wrap gap-2">
//                           {product.ingredients.map((ingredient, index) => (
//                             <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
//                               {ingredient}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="mt-6">
//                         <h3 className="font-semibold text-gray-800 mb-2">Tags</h3>
//                         <div className="flex flex-wrap gap-2">
//                           {product.tags.map((tag, index) => (
//                             <span key={index} className="bg-red-50 text-red-500 px-3 py-1 rounded-full text-sm">
//                               {tag}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="mt-6">
//                         <h3 className="font-semibold text-gray-800 mb-2">Allergens</h3>
//                         <div className="flex flex-wrap gap-2">
//                           {product.allergens.map((allergen, index) => (
//                             <span key={index} className="bg-orange-50 text-orange-500 px-3 py-1 rounded-full text-sm">
//                               {allergen}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {activeTab === "reviews" && (
//                     <div className="space-y-6">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                           <div className="text-3xl font-bold text-gray-800">{product.startreview}</div>
//                           <div className="flex flex-col">
//                             <div className="flex text-yellow-400">
//                               {[...Array(5)].map((_, i) => (
//                                 <span key={i}>{i < Math.floor(product.startreview) ? <FaStar /> : <FaRegStar />}</span>
//                               ))}
//                             </div>
//                             <div className="text-sm text-gray-500">{product.review} reviews</div>
//                           </div>
//                         </div>
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm"
//                         >
//                           Write a Review
//                         </motion.button>
//                       </div>

//                       <div className="space-y-4 mt-6">
//                         {reviews.map((review) => (
//                           <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             key={review.id}
//                             className="border-b pb-4 last:border-0"
//                           >
//                             <div className="flex items-start gap-3 mb-2">
//                               <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold flex-shrink-0">
//                                 {review.avatar}
//                               </div>
//                               <div className="flex-1">
//                                 <div className="flex justify-between items-center">
//                                   <h4 className="font-medium text-gray-800">{review.name}</h4>
//                                   <span className="text-sm text-gray-500">{review.date}</span>
//                                 </div>
//                                 <div className="flex items-center text-yellow-400 text-sm my-1">
//                                   {[...Array(5)].map((_, i) => (
//                                     <span key={i}>{i < review.rating ? <FaStar /> : <FaRegStar />}</span>
//                                   ))}
//                                 </div>
//                                 <p className="text-gray-600 mt-2">{review.comment}</p>
//                               </div>
//                             </div>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {activeTab === "nutrition" && (
//                     <div className="space-y-4">
//                       <h3 className="font-semibold text-gray-800 mb-4">Nutritional Information</h3>
//                       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                         {Object.entries(product.nutritionalInfo).map(([key, value]) => (
//                           <div key={key} className="bg-gray-50 p-4 rounded-lg text-center">
//                             <div className="text-lg font-bold text-gray-800">{value}</div>
//                             <div className="text-sm text-gray-500 capitalize">{key}</div>
//                           </div>
//                         ))}
//                       </div>
//                       <p className="text-sm text-gray-500 mt-4">
//                         * Nutritional information is approximate and may vary based on preparation method and serving
//                         size.
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </motion.div>

//               {/* Related products */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="bg-white p-6 rounded-xl shadow-sm"
//               >
//                 <h2 className="text-xl font-bold mb-4 text-gray-800">You May Also Like</h2>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                   {products
//                     .filter((p) => p.id !== product.id)
//                     .slice(0, 3)
//                     .map((item) => (
//                       <motion.div
//                         whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
//                         key={item.id}
//                         className="rounded-lg overflow-hidden shadow-sm transition-all duration-300 cursor-pointer"
//                         onClick={() => {
//                           navigate(`/product-detail/${item.id}`)
//                         }}
//                       >
//                         <div className="relative">
//                           <img
//                             src={item.images[0] || "/placeholder.svg"}
//                             alt={item.title}
//                             className="w-full h-32 object-cover"
//                           />
//                           <div className="absolute top-2 right-2">
//                             <button
//                               className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center"
//                               onClick={(e) => {
//                                 e.stopPropagation()
//                                 const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
//                                 const isInWishlist = wishlist.some((w) => w.id === item.id)

//                                 if (!isInWishlist) {
//                                   wishlist.push({
//                                     id: item.id,
//                                     title: item.title,
//                                     price: item.price,
//                                     image: item.images[0],
//                                     quantity: 1,
//                                   })
//                                   localStorage.setItem("wishlist", JSON.stringify(wishlist))
//                                   toast.success("Added to wishlist", {
//                                     position: "bottom-right",
//                                     autoClose: 2000,
//                                   })
//                                 } else {
//                                   const updatedWishlist = wishlist.filter((w) => w.id !== item.id)
//                                   localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
//                                   toast.info("Removed from wishlist", {
//                                     position: "bottom-right",
//                                     autoClose: 2000,
//                                   })
//                                 }
//                               }}
//                             >
//                               <FaHeart
//                                 className={`${
//                                   JSON.parse(localStorage.getItem("wishlist") || "[]").some((w) => w.id === item.id)
//                                     ? "text-red-500"
//                                     : "text-gray-300 hover:text-red-500"
//                                 } transition-colors`}
//                               />
//                             </button>
//                           </div>
//                         </div>
//                         <div className="p-3">
//                           <h3 className="font-medium text-sm">{item.title}</h3>
//                           <div className="flex items-center justify-between mt-1">
//                             <p className="text-red-500 font-semibold text-sm">Rs. {item.price}</p>
//                             <div className="flex items-center text-xs text-yellow-400">
//                               <FaStar />
//                               <span className="ml-1 text-gray-600">{item.startreview}</span>
//                             </div>
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))}
//                 </div>
//               </motion.div>
//             </div>

//             {/* Sidebar */}
//             <div className="space-y-6">
//               <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
//                 <ShoppingDetail product={product} />
//               </motion.div>

//               <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
//                 <SellerInfo />
//               </motion.div>

//               <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
//                 <Moreformrestraurant />
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   )
// }

// export default ProductPage

"use client"

import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import ProductView from "../../components/Product/ProductView"
import ShoppingDetail from "../../components/Product/ShoppingDetail"
import SellerInfo from "../../components/Product/SellerInfo"
import Moreformrestraurant from "../../components/Product/Moreformrestraurant"
import { motion } from "framer-motion"
import { FaArrowLeft, FaStar, FaHeart, FaRegStar } from "react-icons/fa"
import { useNavigate, useParams } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ProductPage = () => {
  const navigate = useNavigate()
  const { id } = useParams() // Get product ID from URL
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("description")
  const [product, setProduct] = useState(null)

  // Sample products data - in a real app, this would come from an API or context
  const products = [
    {
      id: "prod-123",
      title: "Spicy Chicken Biryani",
      description:
        "Authentic Pakistani Biryani made with premium basmati rice, tender chicken pieces, and a blend of traditional spices. Served with raita and salad. Our chef's special recipe that has been perfected over generations.",
      subtitle: "Flavor Express",
      price: 299,
      originalPrice: 399,
      startreview: 4.8,
      review: 124,
      status: "Unlimited",
      isVeg: false,
      category: "Main Course",
      tags: ["Spicy", "Popular", "Bestseller"],
      deliveryTime: "30-45 min",
      ingredients: ["Basmati Rice", "Chicken", "Spices", "Ghee", "Saffron"],
      nutritionalInfo: {
        calories: "650 kcal",
        protein: "35g",
        carbs: "80g",
        fat: "22g",
      },
      allergens: ["Dairy", "Nuts"],
      images: [
        "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      ],
    },
    {
      id: "prod-124",
      title: "Butter Chicken",
      description:
        "Creamy and rich butter chicken made with tender chicken pieces in a tomato-based gravy with butter and cream. A North Indian classic that's loved worldwide.",
      subtitle: "Curry House",
      price: 349,
      originalPrice: 449,
      startreview: 4.9,
      review: 156,
      status: "Unlimited",
      isVeg: false,
      category: "Main Course",
      tags: ["Creamy", "Popular", "Bestseller"],
      deliveryTime: "25-40 min",
      ingredients: ["Chicken", "Tomato", "Butter", "Cream", "Spices"],
      nutritionalInfo: {
        calories: "580 kcal",
        protein: "32g",
        carbs: "15g",
        fat: "42g",
      },
      allergens: ["Dairy"],
      images: [
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1484&q=80",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1371&q=80",
      ],
    },
    {
      id: "prod-125",
      title: "Paneer Tikka Masala",
      description:
        "Chunks of paneer marinated in spices and grilled to perfection, then simmered in a rich tomato-based gravy. A vegetarian delight that's full of flavor.",
      subtitle: "Veggie Delight",
      price: 279,
      originalPrice: 349,
      startreview: 4.7,
      review: 98,
      status: "Unlimited",
      isVeg: true,
      category: "Main Course",
      tags: ["Vegetarian", "Spicy", "Popular"],
      deliveryTime: "20-35 min",
      ingredients: ["Paneer", "Tomato", "Bell Peppers", "Onions", "Spices"],
      nutritionalInfo: {
        calories: "450 kcal",
        protein: "22g",
        carbs: "25g",
        fat: "30g",
      },
      allergens: ["Dairy"],
      images: [
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1371&q=80",
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1484&q=80",
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ],
    },
  ]

  // Sample reviews
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      avatar: "JD",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Absolutely delicious! The spices were perfectly balanced and the portion size was generous. Will definitely order again.",
    },
    {
      id: 2,
      name: "Sarah Kim",
      avatar: "SK",
      rating: 4,
      date: "1 month ago",
      comment: "Great food, but delivery took longer than expected. Would order again though!",
    },
    {
      id: 3,
      name: "Michael Johnson",
      avatar: "MJ",
      rating: 5,
      date: "3 weeks ago",
      comment: "Best biryani I've had in a long time. The meat was tender and the rice was perfectly cooked.",
    },
  ]

  // Load product data based on ID
  useEffect(() => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // If ID is provided, find the product
      if (id) {
        const foundProduct = products.find((p) => p.id === id) || products[0]
        setProduct(foundProduct)
      } else {
        // Default to first product if no ID
        setProduct(products[0])
      }
      setIsLoading(false)
    }, 800)
  }, [id])

  if (isLoading || !product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{product.title} | Foodi</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="bg-gray-50 min-h-screen pb-12">
        {/* Back button */}
        <div className="container mx-auto px-4 py-4">
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
          >
            <FaArrowLeft /> Back
          </motion.button>
        </div>

        {/* Product main section */}
        <div className="container mx-auto px-4">
          <ProductView
            title={product.title}
            description={product.description}
            subtitle={product.subtitle}
            price={product.price}
            originalPrice={product.originalPrice}
            startreview={product.startreview}
            review={product.review}
            status={product.status}
            isVeg={product.isVeg}
            productId={product.id}
            images={product.images}
          />

          {/* Product details section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="flex border-b">
                  {["description", "reviews", "nutrition"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-4 px-4 text-center font-medium transition-colors ${
                        activeTab === tab
                          ? "text-red-500 border-b-2 border-red-500"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  {activeTab === "description" && (
                    <div className="space-y-4">
                      <p className="text-gray-600 leading-relaxed">{product.description}</p>

                      <div className="mt-6">
                        <h3 className="font-semibold text-gray-800 mb-2">Ingredients</h3>
                        <div className="flex flex-wrap gap-2">
                          {product.ingredients.map((ingredient, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6">
                        <h3 className="font-semibold text-gray-800 mb-2">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                          {product.tags.map((tag, index) => (
                            <span key={index} className="bg-red-50 text-red-500 px-3 py-1 rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6">
                        <h3 className="font-semibold text-gray-800 mb-2">Allergens</h3>
                        <div className="flex flex-wrap gap-2">
                          {product.allergens.map((allergen, index) => (
                            <span key={index} className="bg-orange-50 text-orange-500 px-3 py-1 rounded-full text-sm">
                              {allergen}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "reviews" && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="text-3xl font-bold text-gray-800">{product.startreview}</div>
                          <div className="flex flex-col">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <span key={i}>{i < Math.floor(product.startreview) ? <FaStar /> : <FaRegStar />}</span>
                              ))}
                            </div>
                            <div className="text-sm text-gray-500">{product.review} reviews</div>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm"
                        >
                          Write a Review
                        </motion.button>
                      </div>

                      <div className="space-y-4 mt-6">
                        {reviews.map((review) => (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            key={review.id}
                            className="border-b pb-4 last:border-0"
                          >
                            <div className="flex items-start gap-3 mb-2">
                              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold flex-shrink-0">
                                {review.avatar}
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-center">
                                  <h4 className="font-medium text-gray-800">{review.name}</h4>
                                  <span className="text-sm text-gray-500">{review.date}</span>
                                </div>
                                <div className="flex items-center text-yellow-400 text-sm my-1">
                                  {[...Array(5)].map((_, i) => (
                                    <span key={i}>{i < review.rating ? <FaStar /> : <FaRegStar />}</span>
                                  ))}
                                </div>
                                <p className="text-gray-600 mt-2">{review.comment}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "nutrition" && (
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-800 mb-4">Nutritional Information</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                          <div key={key} className="bg-gray-50 p-4 rounded-lg text-center">
                            <div className="text-lg font-bold text-gray-800">{value}</div>
                            <div className="text-sm text-gray-500 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mt-4">
                        * Nutritional information is approximate and may vary based on preparation method and serving
                        size.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Related products */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h2 className="text-xl font-bold mb-4 text-gray-800">You May Also Like</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {products
                    .filter((p) => p.id !== product.id)
                    .slice(0, 3)
                    .map((item) => (
                      <motion.div
                        whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                        key={item.id}
                        className="rounded-lg overflow-hidden shadow-sm transition-all duration-300 cursor-pointer"
                        onClick={() => {
                          navigate(`/product-detail/${item.id}`)
                        }}
                      >
                        <div className="relative">
                          <img
                            src={item.images[0] || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-32 object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <button
                              className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center"
                              onClick={(e) => {
                                e.stopPropagation()
                                const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
                                const isInWishlist = wishlist.some((w) => w.id === item.id)

                                if (!isInWishlist) {
                                  wishlist.push({
                                    id: item.id,
                                    title: item.title,
                                    price: item.price,
                                    image: item.images[0],
                                    quantity: 1,
                                  })
                                  localStorage.setItem("wishlist", JSON.stringify(wishlist))
                                  toast.success("Added to wishlist", {
                                    position: "bottom-right",
                                    autoClose: 2000,
                                  })
                                } else {
                                  const updatedWishlist = wishlist.filter((w) => w.id !== item.id)
                                  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
                                  toast.info("Removed from wishlist", {
                                    position: "bottom-right",
                                    autoClose: 2000,
                                  })
                                }
                              }}
                            >
                              <FaHeart
                                className={`${
                                  JSON.parse(localStorage.getItem("wishlist") || "[]").some((w) => w.id === item.id)
                                    ? "text-red-500"
                                    : "text-gray-300 hover:text-red-500"
                                } transition-colors`}
                              />
                            </button>
                          </div>
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium text-sm">{item.title}</h3>
                          <div className="flex items-center justify-between mt-1">
                            <p className="text-red-500 font-semibold text-sm">Rs. {item.price}</p>
                            <div className="flex items-center text-xs text-yellow-400">
                              <FaStar />
                              <span className="ml-1 text-gray-600">{item.startreview}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <ShoppingDetail product={product} />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                <SellerInfo />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                <Moreformrestraurant />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default ProductPage
