// // // // import React, { useState } from "react";
// // // // import { CiHeart } from "react-icons/ci";
// // // // import { FaStar } from "react-icons/fa";
// // // // import PropTypes from "prop-types";

// // // // const Product = ({
// // // //   // img,
// // // //   title,
// // // //   description,
// // // //   subtitle,
// // // //   price,
// // // //   startreview,
// // // //   review,
// // // //   status,
// // // // }) => {
// // // //   const [quantity, setQuantity] = useState(1);

// // // //   const increaseQuantity = () => {
// // // //     setQuantity(quantity + 1);
// // // //   };

// // // //   const decreaseQuantity = () => {
// // // //     if (quantity > 1) {
// // // //       setQuantity(quantity - 1);
// // // //     }
// // // //   };
// // // //   // ----------------------------
// // // //   const images = [
// // // //     "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fpizza3_1720595747511.jpg?alt=media&token=a85441fb-1acb-4e68-8474-66359f47deaa",
// // // //       "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fpizza_1720595995894.jpg?alt=media&token=fa97b045-95fb-4ac7-8942-f4141fa91e2c",
// // // //       "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fburger.jpg?alt=media&token=some-other-token",
// // // //     //
// // // //   ];

// // // //   const [mainImg, setMainImg] = useState(images[0]);

// // // //   return (
// // // //     <div>
// // // //       {" "}
// // // //       <div className="h-full shadow-md p-4">
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //           <div className="col-span-1 mb-4">
// // // //             <img
// // // //               className="h-3/4 w-full object-cover rounded-lg"
// // // //               src={mainImg}
// // // //               alt="Main"
// // // //             />
// // // //             <div className="thumbnail-gallery flex space-x-4">
// // // //               {images.map((thumbnail, index) => (
// // // //                 <>
// // // //                   <div className=" ">
// // // //                     <img
// // // //                       key={index}
// // // //                       src={thumbnail}
// // // //                       className="h-20 w-full object-contain rounded-lg pt-2 cursor-pointer"
// // // //                       alt={`Thumbnail ${index + 1}`}
// // // //                       onClick={() => setMainImg(thumbnail)}
// // // //                     />
// // // //                   </div>
// // // //                 </>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           <div className="col-span-1">
// // // //             <div className=" flex  items-center">
// // // //               <div className="flex flex-col  gap-3">
// // // //                 <h1 className="text-xl font-semibold">{title}</h1>
// // // //                 <div className="flex items-center gap-2">
// // // //                   <h1 className="bg-[#28A745] flex items-center gap-2 text-white px-2 rounded-md">
// // // //                     {" "}
// // // //                     {startreview}
// // // //                     <FaStar />
// // // //                   </h1>{" "}
// // // //                   {review} Reviews <CiHeart className=" " />
// // // //                 </div>
// // // //                 <h2 className="text-md font-semibold">
// // // //                   Restaurant |<span className="text-red-500"> {subtitle}</span>
// // // //                 </h2>
// // // //                 <p className="text-sm text-gray-400">{description}</p>
// // // //               </div>
// // // //               <div className="flex flex-col gap-3">
// // // //                 <h1 className="text-red-500 text-xl font-semibold">₹{price}</h1>
// // // //                 <p className="text-gray-400 text-sm">Quantity left: {status}</p>
// // // //               </div>
// // // //             </div>
// // // //             <div>
// // // //               <h1>Size</h1>
// // // //               <div className="flex items-center gap-3 pt-4">
// // // //                 <button className="border-red-500 px-3 py-1  bg-red-500 text-white rounded-md">
// // // //                   Regular
// // // //                 </button>
// // // //                 <button className="border-red-500 px-3 py-1  bg-red-500 text-white rounded-md">
// // // //                   Large
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //             <div className="flex justify-between items-center my-4">
// // // //               <h1 className="text-sm font-semibold">QUANTITY</h1>
// // // //               <div className="flex justify-between items-center border border-gray-400 rounded-md w-24 items-center px-3 py-1 ">
// // // //                 <button
// // // //                   className="hover:text-rose-700 text-2xl font-bold"
// // // //                   onClick={decreaseQuantity}
// // // //                 >
// // // //                   -
// // // //                 </button>
// // // //                 <span className="mx-2 text-redtext-xl font-semibold">
// // // //                   {quantity}
// // // //                 </span>
// // // //                 <button
// // // //                   className="hover:text-rose-700 text-2xl font-bold"
// // // //                   onClick={increaseQuantity}
// // // //                 >
// // // //                   +
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //             <div className="flex  items-center justify-between gap-3">
// // // //               <button className="text-red-500 lg:px-3 py-1  bg-white border border-red-500 text-md lg:text-xl font-semibold rounded-lg w-full ">
// // // //                 Add To Cart
// // // //               </button>
// // // //               <button className="text-white px-3 py-1 bg-red-500 rounded-lg text-md lg:text-xl font-semibold w-full">
// // // //                 Buy Now
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // Product.propTypes = {
// // // //   img: PropTypes.string.isRequired,
// // // //   title: PropTypes.string.isRequired,
// // // //   description: PropTypes.string.isRequired,
// // // //   subtitle: PropTypes.string,
// // // //   price: PropTypes.number.isRequired,
// // // //   startreview: PropTypes.number.isRequired,
// // // //   review: PropTypes.number.isRequired,
// // // //   status: PropTypes.string.isRequired,
// // // // };

// // // // export default Product;



// // // // import { useState } from "react"
// // // // import { FaStar, FaHeart, FaRegHeart, FaShoppingCart, FaBolt } from "react-icons/fa"
// // // // import { IoShareSocialOutline } from "react-icons/io5"
// // // // import PropTypes from "prop-types"

// // // // const ProductView = ({ title, description, subtitle, price, startreview, review, status }) => {
// // // //   const [quantity, setQuantity] = useState(1)
// // // //   const [selectedSize, setSelectedSize] = useState("Regular")
// // // //   const [isFavorite, setIsFavorite] = useState(false)
// // // //   const [mainImg, setMainImg] = useState(0)

// // // //   const increaseQuantity = () => {
// // // //     setQuantity(quantity + 1)
// // // //   }

// // // //   const decreaseQuantity = () => {
// // // //     if (quantity > 1) {
// // // //       setQuantity(quantity - 1)
// // // //     }
// // // //   }

// // // //   // Sample images
// // // //   const images = [
// // // //     "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// // // //     "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// // // //     "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// // // //   ]

// // // //   return (
// // // //     <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
// // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
// // // //         {/* Left Column - Images */}
// // // //         <div>
// // // //           <div className="relative rounded-xl overflow-hidden mb-4 h-80 md:h-96">
// // // //             <img
// // // //               src={images[mainImg] || "/placeholder.svg"}
// // // //               alt={title}
// // // //               className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
// // // //             />
// // // //             <button
// // // //               onClick={() => setIsFavorite(!isFavorite)}
// // // //               className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-colors hover:bg-gray-100"
// // // //             >
// // // //               {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-400" />}
// // // //             </button>
// // // //             <div className="absolute bottom-4 right-4 flex space-x-2">
// // // //               <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-colors hover:bg-gray-100">
// // // //                 <IoShareSocialOutline className="text-gray-600" />
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //           <div className="grid grid-cols-3 gap-2">
// // // //             {images.map((img, index) => (
// // // //               <div
// // // //                 key={index}
// // // //                 className={`rounded-lg overflow-hidden cursor-pointer border-2 ${
// // // //                   mainImg === index ? "border-accent-primary" : "border-transparent"
// // // //                 }`}
// // // //                 onClick={() => setMainImg(index)}
// // // //               >
// // // //                 <img
// // // //                   src={img || "/placeholder.svg"}
// // // //                   alt={`Thumbnail ${index + 1}`}
// // // //                   className="w-full h-24 object-cover"
// // // //                 />
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* Right Column - Product Details */}
// // // //         <div className="flex flex-col">
// // // //           <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{title}</h1>
// // // //           <div className="flex items-center mb-4">
// // // //             <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded-md mr-3">
// // // //               <FaStar className="mr-1" />
// // // //               <span>{startreview}</span>
// // // //             </div>
// // // //             <span className="text-gray-600">({review} Reviews)</span>
// // // //           </div>

// // // //           <div className="mb-4">
// // // //             <h2 className="text-lg font-medium text-gray-700">
// // // //               Restaurant | <span className="text-accent-primary">{subtitle}</span>
// // // //             </h2>
// // // //             <p className="text-gray-600 mt-2">{description}</p>
// // // //           </div>

// // // //           <div className="mb-6">
// // // //             <h3 className="text-lg font-medium text-gray-800 mb-2">Size</h3>
// // // //             <div className="flex space-x-3">
// // // //               {["Regular", "Large", "Family"].map((size) => (
// // // //                 <button
// // // //                   key={size}
// // // //                   onClick={() => setSelectedSize(size)}
// // // //                   className={`px-4 py-2 rounded-lg transition-colors ${
// // // //                     selectedSize === size
// // // //                       ? "bg-accent-primary text-white"
// // // //                       : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // // //                   }`}
// // // //                 >
// // // //                   {size}
// // // //                 </button>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           <div className="mb-6">
// // // //             <h3 className="text-lg font-medium text-gray-800 mb-2">Quantity</h3>
// // // //             <div className="flex items-center">
// // // //               <button
// // // //                 onClick={decreaseQuantity}
// // // //                 className="w-10 h-10 rounded-l-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
// // // //               >
// // // //                 -
// // // //               </button>
// // // //               <div className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-300">
// // // //                 {quantity}
// // // //               </div>
// // // //               <button
// // // //                 onClick={increaseQuantity}
// // // //                 className="w-10 h-10 rounded-r-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
// // // //               >
// // // //                 +
// // // //               </button>
// // // //               <span className="ml-4 text-gray-600">{status === "Unlimited" ? "In Stock" : `${status} items left`}</span>
// // // //             </div>
// // // //           </div>

// // // //           <div className="flex items-center justify-between mt-auto">
// // // //             <div className="text-2xl font-bold text-accent-primary">Rs. {price}</div>
// // // //           </div>

// // // //           <div className="grid grid-cols-2 gap-4 mt-6">
// // // //             <button className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg border-2 border-accent-primary text-accent-primary font-medium hover:bg-accent-primary hover:text-white transition-colors">
// // // //               <FaShoppingCart />
// // // //               Add to Cart
// // // //             </button>
// // // //             <button className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-accent-primary text-white font-medium hover:bg-accent-secondary transition-colors">
// // // //               <FaBolt />
// // // //               Buy Now
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // ProductView.propTypes = {
// // // //   title: PropTypes.string.isRequired,
// // // //   description: PropTypes.string.isRequired,
// // // //   subtitle: PropTypes.string,
// // // //   price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// // // //   startreview: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// // // //   review: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// // // //   status: PropTypes.string.isRequired,
// // // // }

// // // // export default ProductView



// // // "use client"

// // // import { useState } from "react"
// // // import { FaStar, FaHeart, FaRegHeart, FaShoppingCart, FaBolt, FaCheck } from "react-icons/fa"
// // // import { IoShareSocialOutline, IoClose } from "react-icons/io5"
// // // import { motion, AnimatePresence } from "framer-motion"
// // // import PropTypes from "prop-types"
// // // import { toast, ToastContainer } from "react-toastify"
// // // import "react-toastify/dist/ReactToastify.css"

// // // const ProductView = ({ title, description, subtitle, price, startreview, review, status }) => {
// // //   const [quantity, setQuantity] = useState(1)
// // //   const [selectedSize, setSelectedSize] = useState("Regular")
// // //   const [isFavorite, setIsFavorite] = useState(false)
// // //   const [mainImg, setMainImg] = useState(0)
// // //   const [isAddedToCart, setIsAddedToCart] = useState(false)
// // //   const [showShareOptions, setShowShareOptions] = useState(false)

// // //   // Sample images
// // //   const images = [
// // //     "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// // //     "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// // //     "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// // //   ]

// // //   const increaseQuantity = () => {
// // //     setQuantity(quantity + 1)
// // //   }

// // //   const decreaseQuantity = () => {
// // //     if (quantity > 1) {
// // //       setQuantity(quantity - 1)
// // //     }
// // //   }

// // //   const toggleFavorite = () => {
// // //     setIsFavorite(!isFavorite)
// // //     toast.success(isFavorite ? "Removed from wishlist" : "Added to wishlist", {
// // //       position: "bottom-right",
// // //       autoClose: 2000,
// // //     })
// // //   }

// // //   const addToCart = () => {
// // //     setIsAddedToCart(true)
// // //     toast.success("Added to cart successfully!", {
// // //       position: "bottom-right",
// // //       autoClose: 2000,
// // //     })

// // //     // Reset the button after 2 seconds
// // //     setTimeout(() => {
// // //       setIsAddedToCart(false)
// // //     }, 2000)
// // //   }

// // //   const buyNow = () => {
// // //     addToCart()
// // //     // Redirect to checkout page
// // //     // window.location.href = "/checkout"
// // //   }

// // //   const socialPlatforms = [
// // //     { name: "Facebook", icon: <FaStar className="text-blue-600" />, color: "bg-blue-100" },
// // //     { name: "Twitter", icon: <FaStar className="text-blue-400" />, color: "bg-blue-50" },
// // //     { name: "WhatsApp", icon: <FaStar className="text-green-500" />, color: "bg-green-100" },
// // //     { name: "Email", icon: <FaStar className="text-red-500" />, color: "bg-red-100" },
// // //   ]

// // //   return (
// // //     <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 transition-all duration-300">
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
// // //         {/* Left Column - Images */}
// // //         <div>
// // //           <div className="relative rounded-xl overflow-hidden mb-4 h-80 md:h-96 group">
// // //             <img
// // //               src={images[mainImg] || "/placeholder.svg"}
// // //               alt={title}
// // //               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// // //             />
// // //             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

// // //             <motion.button
// // //               whileTap={{ scale: 0.9 }}
// // //               onClick={toggleFavorite}
// // //               className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-100 z-10"
// // //             >
// // //               {isFavorite ? (
// // //                 <FaHeart className="text-red-500 text-xl" />
// // //               ) : (
// // //                 <FaRegHeart className="text-gray-400 text-xl hover:text-red-500" />
// // //               )}
// // //             </motion.button>

// // //             <motion.button
// // //               whileTap={{ scale: 0.9 }}
// // //               onClick={() => setShowShareOptions(!showShareOptions)}
// // //               className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-100 z-10"
// // //             >
// // //               <IoShareSocialOutline className="text-gray-600 text-xl" />
// // //             </motion.button>

// // //             {/* Share options popup */}
// // //             <AnimatePresence>
// // //               {showShareOptions && (
// // //                 <motion.div
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   animate={{ opacity: 1, y: 0 }}
// // //                   exit={{ opacity: 0, y: 20 }}
// // //                   className="absolute bottom-20 right-4 bg-white rounded-lg shadow-xl p-3 z-20"
// // //                 >
// // //                   <div className="flex flex-col space-y-2">
// // //                     <div className="flex justify-between items-center mb-2">
// // //                       <h3 className="font-medium text-gray-700">Share</h3>
// // //                       <button onClick={() => setShowShareOptions(false)}>
// // //                         <IoClose className="text-gray-500" />
// // //                       </button>
// // //                     </div>
// // //                     <div className="flex space-x-2">
// // //                       {socialPlatforms.map((platform, index) => (
// // //                         <motion.button
// // //                           key={index}
// // //                           whileHover={{ y: -3 }}
// // //                           whileTap={{ scale: 0.95 }}
// // //                           className={`w-10 h-10 rounded-full ${platform.color} flex items-center justify-center`}
// // //                         >
// // //                           {platform.icon}
// // //                         </motion.button>
// // //                       ))}
// // //                     </div>
// // //                   </div>
// // //                 </motion.div>
// // //               )}
// // //             </AnimatePresence>
// // //           </div>

// // //           <div className="grid grid-cols-3 gap-2">
// // //             {images.map((img, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 whileHover={{ scale: 1.05 }}
// // //                 whileTap={{ scale: 0.95 }}
// // //                 className={`rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
// // //                   mainImg === index ? "border-red-500 shadow-md" : "border-transparent hover:border-gray-300"
// // //                 }`}
// // //                 onClick={() => setMainImg(index)}
// // //               >
// // //                 <img
// // //                   src={img || "/placeholder.svg"}
// // //                   alt={`Thumbnail ${index + 1}`}
// // //                   className="w-full h-24 object-cover"
// // //                 />
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Right Column - Product Details */}
// // //         <div className="flex flex-col">
// // //           <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{title}</h1>

// // //           <div className="flex items-center mb-4">
// // //             <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded-md mr-3">
// // //               <FaStar className="mr-1" />
// // //               <span>{startreview}</span>
// // //             </div>
// // //             <span className="text-gray-600">({review} Reviews)</span>
// // //           </div>

// // //           <div className="mb-6">
// // //             <h2 className="text-lg font-medium text-gray-700">
// // //               Restaurant | <span className="text-red-500">{subtitle}</span>
// // //             </h2>
// // //             <p className="text-gray-600 mt-2 leading-relaxed">
// // //               {description ||
// // //                 "Delicious authentic Pakistani dish prepared with fresh ingredients and traditional spices. A must-try for food lovers!"}
// // //             </p>
// // //           </div>

// // //           <div className="mb-6">
// // //             <h3 className="text-lg font-medium text-gray-800 mb-3">Size</h3>
// // //             <div className="flex flex-wrap gap-3">
// // //               {["Regular", "Large", "Family"].map((size) => (
// // //                 <motion.button
// // //                   key={size}
// // //                   whileHover={{ scale: 1.05 }}
// // //                   whileTap={{ scale: 0.95 }}
// // //                   onClick={() => setSelectedSize(size)}
// // //                   className={`px-6 py-2 rounded-lg transition-all duration-300 ${
// // //                     selectedSize === size
// // //                       ? "bg-red-500 text-white shadow-md"
// // //                       : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// // //                   }`}
// // //                 >
// // //                   {size}
// // //                 </motion.button>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <div className="mb-6">
// // //             <h3 className="text-lg font-medium text-gray-800 mb-3">Quantity</h3>
// // //             <div className="flex items-center">
// // //               <motion.button
// // //                 whileHover={{ scale: 1.1 }}
// // //                 whileTap={{ scale: 0.9 }}
// // //                 onClick={decreaseQuantity}
// // //                 className="w-12 h-12 rounded-l-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors text-xl font-bold"
// // //               >
// // //                 -
// // //               </motion.button>
// // //               <div className="w-16 h-12 flex items-center justify-center border-t border-b border-gray-300 bg-white text-lg">
// // //                 {quantity}
// // //               </div>
// // //               <motion.button
// // //                 whileHover={{ scale: 1.1 }}
// // //                 whileTap={{ scale: 0.9 }}
// // //                 onClick={increaseQuantity}
// // //                 className="w-12 h-12 rounded-r-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors text-xl font-bold"
// // //               >
// // //                 +
// // //               </motion.button>
// // //               <span className="ml-4 text-gray-600 flex items-center">
// // //                 {status === "Unlimited" ? (
// // //                   <span className="flex items-center text-green-500">
// // //                     <FaCheck className="mr-1" /> In Stock
// // //                   </span>
// // //                 ) : (
// // //                   <span className={`${Number.parseInt(status) < 10 ? "text-orange-500" : "text-green-500"}`}>
// // //                     {status} items left
// // //                   </span>
// // //                 )}
// // //               </span>
// // //             </div>
// // //           </div>

// // //           <div className="flex items-center justify-between mt-auto">
// // //             <div className="text-3xl font-bold text-red-500">Rs. {price}</div>
// // //           </div>

// // //           <div className="grid grid-cols-2 gap-4 mt-6">
// // //             <motion.button
// // //               whileHover={{ scale: 1.03 }}
// // //               whileTap={{ scale: 0.97 }}
// // //               onClick={addToCart}
// // //               className={`flex items-center justify-center gap-2 py-3 px-6 rounded-lg border-2 transition-all duration-300 ${
// // //                 isAddedToCart
// // //                   ? "bg-green-500 text-white border-green-500"
// // //                   : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
// // //               }`}
// // //             >
// // //               {isAddedToCart ? <FaCheck /> : <FaShoppingCart />}
// // //               {isAddedToCart ? "Added to Cart" : "Add to Cart"}
// // //             </motion.button>

// // //             <motion.button
// // //               whileHover={{ scale: 1.03 }}
// // //               whileTap={{ scale: 0.97 }}
// // //               onClick={buyNow}
// // //               className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-all duration-300 shadow-md"
// // //             >
// // //               <FaBolt />
// // //               Buy Now
// // //             </motion.button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <ToastContainer />
// // //     </div>
// // //   )
// // // }

// // // ProductView.propTypes = {
// // //   title: PropTypes.string.isRequired,
// // //   description: PropTypes.string,
// // //   subtitle: PropTypes.string,
// // //   price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// // //   startreview: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// // //   review: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// // //   status: PropTypes.string.isRequired,
// // // }

// // // export default ProductView
// // "use client"

// // import { useState, useEffect } from "react"
// // import {
// //   FaStar,
// //   FaHeart,
// //   FaRegHeart,
// //   FaShoppingCart,
// //   FaBolt,
// //   FaCheck,
// //   FaShareAlt,
// //   FaMinus,
// //   FaPlus,
// // } from "react-icons/fa"
// // import { IoClose } from "react-icons/io5"
// // import { motion, AnimatePresence } from "framer-motion"
// // import PropTypes from "prop-types"
// // import { toast, ToastContainer } from "react-toastify"
// // import "react-toastify/dist/ReactToastify.css"
// // import { useNavigate } from "react-router-dom"

// // const ProductView = ({ title, description, subtitle, price, startreview, review, status }) => {
// //   const [quantity, setQuantity] = useState(1)
// //   const [selectedSize, setSelectedSize] = useState("Regular")
// //   const [isFavorite, setIsFavorite] = useState(false)
// //   const [mainImg, setMainImg] = useState(0)
// //   const [isAddedToCart, setIsAddedToCart] = useState(false)
// //   const [showShareOptions, setShowShareOptions] = useState(false)
// //   const [totalPrice, setTotalPrice] = useState(price)
// //   const navigate = useNavigate()

// //   // Sample images
// //   const images = [
// //     "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// //   ]

// //   // Update total price when quantity changes
// //   useEffect(() => {
// //     setTotalPrice(price * quantity)
// //   }, [price, quantity])

// //   const increaseQuantity = () => {
// //     setQuantity(quantity + 1)
// //   }

// //   const decreaseQuantity = () => {
// //     if (quantity > 1) {
// //       setQuantity(quantity - 1)
// //     }
// //   }

// //   const toggleFavorite = () => {
// //     setIsFavorite(!isFavorite)

// //     // Get existing wishlist from localStorage
// //     const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")

// //     if (!isFavorite) {
// //       // Add to wishlist
// //       const newItem = {
// //         id: Date.now(),
// //         title,
// //         price,
// //         image: images[mainImg],
// //         quantity: 1,
// //       }
// //       wishlist.push(newItem)
// //       toast.success("Added to wishlist", {
// //         position: "bottom-right",
// //         autoClose: 2000,
// //       })
// //     } else {
// //       // Remove from wishlist (filter by title for simplicity)
// //       const updatedWishlist = wishlist.filter((item) => item.title !== title)
// //       localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
// //       toast.info("Removed from wishlist", {
// //         position: "bottom-right",
// //         autoClose: 2000,
// //       })
// //     }

// //     // Save updated wishlist
// //     localStorage.setItem("wishlist", JSON.stringify(wishlist))
// //   }

// //   const addToCart = () => {
// //     setIsAddedToCart(true)

// //     // Get existing cart from localStorage
// //     const cart = JSON.parse(localStorage.getItem("cart") || "[]")

// //     // Check if item already exists in cart
// //     const existingItemIndex = cart.findIndex((item) => item.title === title)

// //     if (existingItemIndex >= 0) {
// //       // Update quantity if item exists
// //       cart[existingItemIndex].quantity += quantity
// //     } else {
// //       // Add new item
// //       const newItem = {
// //         id: Date.now(),
// //         title,
// //         price,
// //         image: images[mainImg],
// //         quantity,
// //         size: selectedSize,
// //       }
// //       cart.push(newItem)
// //     }

// //     // Save updated cart
// //     localStorage.setItem("cart", JSON.stringify(cart))

// //     toast.success("Added to cart successfully!", {
// //       position: "bottom-right",
// //       autoClose: 2000,
// //     })

// //     // Reset the button after 2 seconds
// //     setTimeout(() => {
// //       setIsAddedToCart(false)
// //     }, 2000)
// //   }

// //   const buyNow = () => {
// //     addToCart()
// //     // Redirect to checkout page
// //     navigate("/checkout")
// //   }

// //   const socialPlatforms = [
// //     { name: "Facebook", icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png", color: "bg-blue-100" },
// //     { name: "Twitter", icon: "https://cdn-icons-png.flaticon.com/512/124/124021.png", color: "bg-blue-50" },
// //     { name: "WhatsApp", icon: "https://cdn-icons-png.flaticon.com/512/124/124034.png", color: "bg-green-100" },
// //     { name: "Email", icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png", color: "bg-red-100" },
// //   ]

// //   return (
// //     <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 transition-all duration-300">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-6">
// //         {/* Left Column - Images */}
// //         <div>
// //           <div className="relative rounded-xl overflow-hidden mb-4 h-64 sm:h-80 md:h-96 group">
// //             <img
// //               src={images[mainImg] || "/placeholder.svg"}
// //               alt={title}
// //               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

// //             <motion.button
// //               whileTap={{ scale: 0.9 }}
// //               onClick={toggleFavorite}
// //               className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-100 z-10"
// //             >
// //               {isFavorite ? (
// //                 <FaHeart className="text-red-500 text-xl" />
// //               ) : (
// //                 <FaRegHeart className="text-gray-400 text-xl hover:text-red-500" />
// //               )}
// //             </motion.button>

// //             <motion.button
// //               whileTap={{ scale: 0.9 }}
// //               onClick={() => setShowShareOptions(!showShareOptions)}
// //               className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-100 z-10"
// //             >
// //               <FaShareAlt className="text-gray-600 text-lg" />
// //             </motion.button>

// //             {/* Share options popup */}
// //             <AnimatePresence>
// //               {showShareOptions && (
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   exit={{ opacity: 0, y: 20 }}
// //                   className="absolute bottom-20 right-4 bg-white rounded-lg shadow-xl p-3 z-20"
// //                 >
// //                   <div className="flex flex-col space-y-2">
// //                     <div className="flex justify-between items-center mb-2">
// //                       <h3 className="font-medium text-gray-700">Share</h3>
// //                       <button onClick={() => setShowShareOptions(false)}>
// //                         <IoClose className="text-gray-500" />
// //                       </button>
// //                     </div>
// //                     <div className="flex space-x-2">
// //                       {socialPlatforms.map((platform, index) => (
// //                         <motion.button
// //                           key={index}
// //                           whileHover={{ y: -3 }}
// //                           whileTap={{ scale: 0.95 }}
// //                           className={`w-10 h-10 rounded-full ${platform.color} flex items-center justify-center overflow-hidden`}
// //                         >
// //                           <img src={platform.icon || "/placeholder.svg"} alt={platform.name} className="w-6 h-6" />
// //                         </motion.button>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </div>

// //           <div className="grid grid-cols-3 gap-2">
// //             {images.map((img, index) => (
// //               <motion.div
// //                 key={index}
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className={`rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
// //                   mainImg === index ? "border-red-500 shadow-md" : "border-transparent hover:border-gray-300"
// //                 }`}
// //                 onClick={() => setMainImg(index)}
// //               >
// //                 <img
// //                   src={img || "/placeholder.svg"}
// //                   alt={`Thumbnail ${index + 1}`}
// //                   className="w-full h-20 sm:h-24 object-cover"
// //                 />
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Right Column - Product Details */}
// //         <div className="flex flex-col">
// //           <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">{title}</h1>

// //           <div className="flex items-center mb-4">
// //             <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded-md mr-3">
// //               <FaStar className="mr-1" />
// //               <span>{startreview}</span>
// //             </div>
// //             <span className="text-gray-600">({review} Reviews)</span>
// //           </div>

// //           <div className="mb-6">
// //             <h2 className="text-lg font-medium text-gray-700">
// //               Restaurant | <span className="text-red-500">{subtitle}</span>
// //             </h2>
// //             <p className="text-gray-600 mt-2 leading-relaxed">
// //               {description ||
// //                 "Delicious authentic Pakistani dish prepared with fresh ingredients and traditional spices. A must-try for food lovers!"}
// //             </p>
// //           </div>

// //           <div className="mb-6">
// //             <h3 className="text-lg font-medium text-gray-800 mb-3">Size</h3>
// //             <div className="flex flex-wrap gap-3">
// //               {["Regular", "Large", "Family"].map((size) => (
// //                 <motion.button
// //                   key={size}
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                   onClick={() => setSelectedSize(size)}
// //                   className={`px-4 py-2 rounded-lg transition-all duration-300 ${
// //                     selectedSize === size
// //                       ? "bg-red-500 text-white shadow-md"
// //                       : "bg-gray-100 text-gray-800 hover:bg-gray-200"
// //                   }`}
// //                 >
// //                   {size}
// //                 </motion.button>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="mb-6">
// //             <h3 className="text-lg font-medium text-gray-800 mb-3">Quantity</h3>
// //             <div className="flex items-center">
// //               <motion.button
// //                 whileHover={{ scale: 1.1 }}
// //                 whileTap={{ scale: 0.9 }}
// //                 onClick={decreaseQuantity}
// //                 className="w-10 h-10 rounded-l-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
// //               >
// //                 <FaMinus />
// //               </motion.button>
// //               <div className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-300 bg-white text-lg">
// //                 {quantity}
// //               </div>
// //               <motion.button
// //                 whileHover={{ scale: 1.1 }}
// //                 whileTap={{ scale: 0.9 }}
// //                 onClick={increaseQuantity}
// //                 className="w-10 h-10 rounded-r-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
// //               >
// //                 <FaPlus />
// //               </motion.button>
// //               <span className="ml-4 text-gray-600 flex items-center">
// //                 {status === "Unlimited" ? (
// //                   <span className="flex items-center text-green-500">
// //                     <FaCheck className="mr-1" /> In Stock
// //                   </span>
// //                 ) : (
// //                   <span className={`${Number.parseInt(status) < 10 ? "text-orange-500" : "text-green-500"}`}>
// //                     {status} items left
// //                   </span>
// //                 )}
// //               </span>
// //             </div>
// //           </div>

// //           <div className="flex items-center justify-between mt-auto">
// //             <div className="text-2xl sm:text-3xl font-bold text-red-500">Rs. {totalPrice}</div>
// //           </div>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
// //             <motion.button
// //               whileHover={{ scale: 1.03 }}
// //               whileTap={{ scale: 0.97 }}
// //               onClick={addToCart}
// //               className={`flex items-center justify-center gap-2 py-3 px-6 rounded-lg border-2 transition-all duration-300 ${
// //                 isAddedToCart
// //                   ? "bg-green-500 text-white border-green-500"
// //                   : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
// //               }`}
// //             >
// //               {isAddedToCart ? <FaCheck /> : <FaShoppingCart />}
// //               {isAddedToCart ? "Added to Cart" : "Add to Cart"}
// //             </motion.button>

// //             <motion.button
// //               whileHover={{ scale: 1.03 }}
// //               whileTap={{ scale: 0.97 }}
// //               onClick={buyNow}
// //               className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-all duration-300 shadow-md"
// //             >
// //               <FaBolt />
// //               Buy Now
// //             </motion.button>
// //           </div>
// //         </div>
// //       </div>
// //       <ToastContainer />
// //     </div>
// //   )
// // }

// // ProductView.propTypes = {
// //   title: PropTypes.string.isRequired,
// //   description: PropTypes.string,
// //   subtitle: PropTypes.string,
// //   price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// //   startreview: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// //   review: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// //   status: PropTypes.string.isRequired,
// // }

// // export default ProductView



// "use client"

// import { useState, useEffect } from "react"
// import {
//   FaStar,
//   FaHeart,
//   FaRegHeart,
//   FaShoppingCart,
//   FaBolt,
//   FaCheck,
//   FaShareAlt,
//   FaMinus,
//   FaPlus,
//   FaFacebook,
//   FaTwitter,
//   FaWhatsapp,
//   FaEnvelope,
// } from "react-icons/fa"
// import { IoClose } from "react-icons/io5"
// import { motion, AnimatePresence } from "framer-motion"
// import PropTypes from "prop-types"
// import { toast, ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
// import { useNavigate } from "react-router-dom"

// const ProductView = ({ title, description, subtitle, price, startreview, review, status }) => {
//   const [quantity, setQuantity] = useState(1)
//   const [selectedSize, setSelectedSize] = useState("Regular")
//   const [isFavorite, setIsFavorite] = useState(false)
//   const [mainImg, setMainImg] = useState(0)
//   const [isAddedToCart, setIsAddedToCart] = useState(false)
//   const [showShareOptions, setShowShareOptions] = useState(false)
//   const [totalPrice, setTotalPrice] = useState(price)
//   const [isInWishlist, setIsInWishlist] = useState(false)
//   const navigate = useNavigate()

//   // Sample images
//   const images = [
//     "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//   ]

//   // Check if product is in wishlist on component mount
//   useEffect(() => {
//     const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
//     const isInList = wishlist.some((item) => item.title === title)
//     setIsInWishlist(isInList)
//     setIsFavorite(isInList)
//   }, [title])

//   // Check if product is in cart on component mount
//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]")
//     const isInCart = cart.some((item) => item.title === title)
//     setIsAddedToCart(isInCart)
//   }, [title])

//   // Update total price when quantity changes
//   useEffect(() => {
//     setTotalPrice(price * quantity)
//   }, [price, quantity])

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1)
//   }

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1)
//     }
//   }

//   const toggleFavorite = () => {
//     // Get existing wishlist from localStorage
//     const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")

//     if (!isFavorite) {
//       // Add to wishlist
//       const newItem = {
//         id: Date.now(),
//         title,
//         price,
//         image: images[mainImg],
//         quantity: 1,
//       }
//       wishlist.push(newItem)
//       toast.success("Added to wishlist", {
//         position: "bottom-right",
//         autoClose: 2000,
//         icon: <FaHeart className="text-red-500" />,
//       })
//     } else {
//       // Remove from wishlist (filter by title for simplicity)
//       const updatedWishlist = wishlist.filter((item) => item.title !== title)
//       localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
//       toast.info("Removed from wishlist", {
//         position: "bottom-right",
//         autoClose: 2000,
//         icon: <FaRegHeart className="text-gray-500" />,
//       })
//     }

//     // Save updated wishlist
//     localStorage.setItem("wishlist", JSON.stringify(wishlist))
//     setIsFavorite(!isFavorite)
//     setIsInWishlist(!isInWishlist)
//   }

//   const addToCart = () => {
//     // Get existing cart from localStorage
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]")

//     // Check if item already exists in cart
//     const existingItemIndex = cart.findIndex((item) => item.title === title)

//     if (existingItemIndex >= 0) {
//       // Update quantity if item exists
//       cart[existingItemIndex].quantity += quantity
//     } else {
//       // Add new item
//       const newItem = {
//         id: Date.now(),
//         title,
//         price,
//         image: images[mainImg],
//         quantity,
//         size: selectedSize,
//       }
//       cart.push(newItem)
//     }

//     // Save updated cart
//     localStorage.setItem("cart", JSON.stringify(cart))

//     setIsAddedToCart(true)
//     toast.success("Added to cart successfully!", {
//       position: "bottom-right",
//       autoClose: 2000,
//       icon: <FaShoppingCart className="text-green-500" />,
//     })

//     // Reset the button after 2 seconds
//     setTimeout(() => {
//       setIsAddedToCart(false)
//     }, 2000)
//   }

//   const buyNow = () => {
//     addToCart()
//     // Redirect to checkout page
//     navigate("/checkout")
//   }

//   const socialPlatforms = [
//     { name: "Facebook", icon: <FaFacebook className="text-blue-600 text-lg" />, color: "bg-blue-100" },
//     { name: "Twitter", icon: <FaTwitter className="text-blue-400 text-lg" />, color: "bg-blue-50" },
//     { name: "WhatsApp", icon: <FaWhatsapp className="text-green-500 text-lg" />, color: "bg-green-100" },
//     { name: "Email", icon: <FaEnvelope className="text-red-500 text-lg" />, color: "bg-red-100" },
//   ]

//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 transition-all duration-300">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-6">
//         {/* Left Column - Images */}
//         <div>
//           <div className="relative rounded-xl overflow-hidden mb-4 h-64 sm:h-80 md:h-96 group">
//             <motion.img
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               src={images[mainImg] || "/placeholder.svg"}
//               alt={title}
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={toggleFavorite}
//               className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-100 z-10"
//             >
//               {isFavorite ? (
//                 <FaHeart className="text-red-500 text-xl" />
//               ) : (
//                 <FaRegHeart className="text-gray-400 text-xl hover:text-red-500" />
//               )}
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setShowShareOptions(!showShareOptions)}
//               className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-100 z-10"
//             >
//               <FaShareAlt className="text-gray-600 text-lg" />
//             </motion.button>

//             {/* Share options popup */}
//             <AnimatePresence>
//               {showShareOptions && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 20 }}
//                   className="absolute bottom-20 right-4 bg-white rounded-lg shadow-xl p-4 z-20 w-56"
//                 >
//                   <div className="flex flex-col space-y-3">
//                     <div className="flex justify-between items-center mb-2">
//                       <h3 className="font-medium text-gray-700">Share</h3>
//                       <button onClick={() => setShowShareOptions(false)} className="text-gray-500 hover:text-gray-700">
//                         <IoClose />
//                       </button>
//                     </div>
//                     <div className="grid grid-cols-4 gap-2">
//                       {socialPlatforms.map((platform, index) => (
//                         <motion.button
//                           key={index}
//                           whileHover={{ y: -3 }}
//                           whileTap={{ scale: 0.95 }}
//                           className={`w-10 h-10 rounded-full ${platform.color} flex items-center justify-center`}
//                         >
//                           {platform.icon}
//                         </motion.button>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <div className="grid grid-cols-3 gap-2">
//             {images.map((img, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
//                   mainImg === index ? "border-red-500 shadow-md" : "border-transparent hover:border-gray-300"
//                 }`}
//                 onClick={() => setMainImg(index)}
//               >
//                 <img
//                   src={img || "/placeholder.svg"}
//                   alt={`Thumbnail ${index + 1}`}
//                   className="w-full h-20 sm:h-24 object-cover"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Right Column - Product Details */}
//         <div className="flex flex-col">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2"
//           >
//             {title}
//           </motion.h1>

//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="flex items-center mb-4"
//           >
//             <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded-md mr-3">
//               <FaStar className="mr-1" />
//               <span>{startreview}</span>
//             </div>
//             <span className="text-gray-600">({review} Reviews)</span>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mb-6"
//           >
//             <h2 className="text-lg font-medium text-gray-700">
//               Restaurant | <span className="text-red-500">{subtitle}</span>
//             </h2>
//             <p className="text-gray-600 mt-2 leading-relaxed">
//               {description ||
//                 "Delicious authentic Pakistani dish prepared with fresh ingredients and traditional spices. A must-try for food lovers!"}
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="mb-6"
//           >
//             <h3 className="text-lg font-medium text-gray-800 mb-3">Size</h3>
//             <div className="flex flex-wrap gap-3">
//               {["Regular", "Large", "Family"].map((size) => (
//                 <motion.button
//                   key={size}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-4 py-2 rounded-lg transition-all duration-300 ${
//                     selectedSize === size
//                       ? "bg-red-500 text-white shadow-md"
//                       : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//                   }`}
//                 >
//                   {size}
//                 </motion.button>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="mb-6"
//           >
//             <h3 className="text-lg font-medium text-gray-800 mb-3">Quantity</h3>
//             <div className="flex items-center">
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={decreaseQuantity}
//                 className="w-10 h-10 rounded-l-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
//               >
//                 <FaMinus />
//               </motion.button>
//               <div className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-300 bg-white text-lg">
//                 {quantity}
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={increaseQuantity}
//                 className="w-10 h-10 rounded-r-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
//               >
//                 <FaPlus />
//               </motion.button>
//               <span className="ml-4 text-gray-600 flex items-center">
//                 {status === "Unlimited" ? (
//                   <span className="flex items-center text-green-500">
//                     <FaCheck className="mr-1" /> In Stock
//                   </span>
//                 ) : (
//                   <span className={`${Number.parseInt(status) < 10 ? "text-orange-500" : "text-green-500"}`}>
//                     {status} items left
//                   </span>
//                 )}
//               </span>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//             className="flex items-center justify-between mt-auto"
//           >
//             <div className="text-2xl sm:text-3xl font-bold text-red-500">Rs. {totalPrice}</div>
//             {price !== totalPrice && (
//               <div className="text-sm text-green-600 font-medium">{quantity > 1 ? `${quantity} items` : ""}</div>
//             )}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//             className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
//           >
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               onClick={addToCart}
//               className={`flex items-center justify-center gap-2 py-3 px-6 rounded-lg border-2 transition-all duration-300 ${
//                 isAddedToCart
//                   ? "bg-green-500 text-white border-green-500"
//                   : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
//               }`}
//             >
//               {isAddedToCart ? <FaCheck /> : <FaShoppingCart />}
//               {isAddedToCart ? "Added to Cart" : "Add to Cart"}
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               onClick={buyNow}
//               className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-all duration-300 shadow-md"
//             >
//               <FaBolt />
//               Buy Now
//             </motion.button>
//           </motion.div>

//           {/* Wishlist status indicator */}
//           {isInWishlist && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="mt-4 flex items-center justify-center text-red-500 text-sm"
//             >
//               <FaHeart className="mr-2" /> This item is in your wishlist
//             </motion.div>
//           )}
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   )
// }

// ProductView.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string,
//   subtitle: PropTypes.string,
//   price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   startreview: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   review: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   status: PropTypes.string.isRequired,
// }

// export default ProductView


"use client"

import { useState, useEffect } from "react"
import {
  FaStar,
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
  FaBolt,
  FaCheck,
  FaShareAlt,
  FaMinus,
  FaPlus,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaLeaf,
  FaFire,
} from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { motion, AnimatePresence } from "framer-motion"
import PropTypes from "prop-types"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom"

const ProductView = ({
  title,
  description,
  subtitle,
  price,
  originalPrice,
  startreview,
  review,
  status,
  isVeg,
  productId,
  images,
}) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("Regular")
  const [isFavorite, setIsFavorite] = useState(false)
  const [mainImg, setMainImg] = useState(0)
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  const [showShareOptions, setShowShareOptions] = useState(false)
  const [totalPrice, setTotalPrice] = useState(price)
  const [isInWishlist, setIsInWishlist] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)
  const navigate = useNavigate()

  // Default images if none provided
  const defaultImages = [
    "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  ]

  // Use provided images or default
  const productImages = images || defaultImages

  // Size options with prices
  const sizeOptions = [
    { name: "Regular", priceMultiplier: 1 },
    { name: "Large", priceMultiplier: 1.5 },
    { name: "Family", priceMultiplier: 2.2 },
  ]

  // Check if product is in wishlist on component mount
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    const isInList = wishlist.some((item) => item.id === productId || item.title === title)
    setIsInWishlist(isInList)
    setIsFavorite(isInList)
  }, [title, productId])

  // Check if product is in cart on component mount
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const isInCart = cart.some((item) => item.id === productId || item.title === title)
    setIsAddedToCart(isInCart)
  }, [title, productId])

  // Update total price when quantity or size changes
  useEffect(() => {
    const selectedSizeOption = sizeOptions.find((option) => option.name === selectedSize)
    const basePrice = price
    setTotalPrice(Math.round(basePrice * selectedSizeOption.priceMultiplier * quantity))
  }, [price, quantity, selectedSize])

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const toggleFavorite = () => {
    // Get existing wishlist from localStorage
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")

    if (!isFavorite) {
      // Add to wishlist
      const newItem = {
        id: productId || Date.now(),
        title,
        price,
        image: productImages[mainImg],
        quantity: 1,
      }

      // Check if item already exists in wishlist
      const existingItemIndex = wishlist.findIndex((item) => item.id === productId || item.title === title)

      if (existingItemIndex === -1) {
        wishlist.push(newItem)
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
      }

      toast.success("Added to wishlist", {
        position: "bottom-right",
        autoClose: 2000,
        icon: <FaHeart className="text-red-500" />,
      })
    } else {
      // Remove from wishlist
      const updatedWishlist = wishlist.filter((item) => item.id !== productId && item.title !== title)
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))

      toast.info("Removed from wishlist", {
        position: "bottom-right",
        autoClose: 2000,
        icon: <FaRegHeart className="text-gray-500" />,
      })
    }

    setIsFavorite(!isFavorite)
    setIsInWishlist(!isInWishlist)
  }

  const addToCart = () => {
    // Get existing cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")

    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex((item) => item.id === productId || item.title === title)

    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      cart[existingItemIndex].quantity += quantity
      cart[existingItemIndex].size = selectedSize
      cart[existingItemIndex].price = price // Update price in case it changed
    } else {
      // Add new item
      const newItem = {
        id: productId || Date.now(),
        title,
        price,
        image: productImages[mainImg],
        quantity,
        size: selectedSize,
      }
      cart.push(newItem)
    }

    // Save updated cart
    localStorage.setItem("cart", JSON.stringify(cart))

    setIsAddedToCart(true)
    toast.success("Added to cart successfully!", {
      position: "bottom-right",
      autoClose: 2000,
      icon: <FaShoppingCart className="text-green-500" />,
    })

    // Reset the button after 2 seconds
    setTimeout(() => {
      setIsAddedToCart(false)
    }, 2000)
  }

  const buyNow = () => {
    addToCart()
    // Redirect to checkout page
    navigate("/checkout")
  }

  const socialPlatforms = [
    { name: "Facebook", icon: <FaFacebook className="text-blue-600 text-lg" />, color: "bg-blue-100" },
    { name: "Twitter", icon: <FaTwitter className="text-blue-400 text-lg" />, color: "bg-blue-50" },
    { name: "WhatsApp", icon: <FaWhatsapp className="text-green-500 text-lg" />, color: "bg-green-100" },
    { name: "Email", icon: <FaEnvelope className="text-red-500 text-lg" />, color: "bg-red-100" },
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-6">
        {/* Left Column - Images */}
        <div>
          <div className="relative rounded-xl overflow-hidden mb-4 h-64 sm:h-80 md:h-96 group">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={productImages[mainImg] || "/placeholder.svg"}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isZoomed ? "scale-125" : "group-hover:scale-110"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Veg/Non-veg indicator */}
            <div className="absolute top-4 left-4 z-10">
              <div
                className={`flex items-center gap-1 px-3 py-1 rounded-full ${
                  isVeg ? "bg-green-500 text-white" : "bg-red-500 text-white"
                }`}
              >
                {isVeg ? <FaLeaf className="text-sm" /> : <FaFire className="text-sm" />}
                <span className="text-xs font-medium">{isVeg ? "Veg" : "Non-Veg"}</span>
              </div>
            </div>

            {/* Discount badge */}
            {originalPrice && (
              <div className="absolute top-4 left-24 z-10">
                <div className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
                </div>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleFavorite}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-100 z-10"
            >
              {isFavorite ? (
                <FaHeart className="text-red-500 text-xl" />
              ) : (
                <FaRegHeart className="text-gray-400 text-xl hover:text-red-500" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowShareOptions(!showShareOptions)}
              className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-100 z-10"
            >
              <FaShareAlt className="text-gray-600 text-lg" />
            </motion.button>

            {/* Image zoom hint */}
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Click to {isZoomed ? "zoom out" : "zoom in"}
            </div>

            {/* Share options popup */}
            <AnimatePresence>
              {showShareOptions && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-20 right-4 bg-white rounded-lg shadow-xl p-4 z-20 w-56"
                >
                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-gray-700">Share</h3>
                      <button onClick={() => setShowShareOptions(false)} className="text-gray-500 hover:text-gray-700">
                        <IoClose />
                      </button>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {socialPlatforms.map((platform, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-10 h-10 rounded-full ${platform.color} flex items-center justify-center`}
                        >
                          {platform.icon}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {productImages.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                  mainImg === index ? "border-red-500 shadow-md" : "border-transparent hover:border-gray-300"
                }`}
                onClick={() => setMainImg(index)}
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-20 sm:h-24 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2"
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center mb-4"
          >
            <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded-md mr-3">
              <FaStar className="mr-1" />
              <span>{startreview}</span>
            </div>
            <span className="text-gray-600">({review} Reviews)</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-lg font-medium text-gray-700">
              Restaurant | <span className="text-red-500">{subtitle}</span>
            </h2>
            <p className="text-gray-600 mt-2 leading-relaxed">
              {description ||
                "Delicious authentic Pakistani dish prepared with fresh ingredients and traditional spices. A must-try for food lovers!"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <h3 className="text-lg font-medium text-gray-800 mb-3">Size</h3>
            <div className="flex flex-wrap gap-3">
              {sizeOptions.map((size) => (
                <motion.button
                  key={size.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSize(size.name)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedSize === size.name
                      ? "bg-red-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span>{size.name}</span>
                    {size.name !== "Regular" && (
                      <span className="text-xs mt-1">{size.name === "Large" ? "+50%" : "+120%"}</span>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6"
          >
            <h3 className="text-lg font-medium text-gray-800 mb-3">Quantity</h3>
            <div className="flex items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={decreaseQuantity}
                className="w-10 h-10 rounded-l-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaMinus />
              </motion.button>
              <div className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-300 bg-white text-lg">
                {quantity}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={increaseQuantity}
                className="w-10 h-10 rounded-r-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaPlus />
              </motion.button>
              <span className="ml-4 text-gray-600 flex items-center">
                {status === "Unlimited" ? (
                  <span className="flex items-center text-green-500">
                    <FaCheck className="mr-1" /> In Stock
                  </span>
                ) : (
                  <span className={`${Number.parseInt(status) < 10 ? "text-orange-500" : "text-green-500"}`}>
                    {status} items left
                  </span>
                )}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-between mt-auto"
          >
            <div className="flex items-end gap-2">
              <div className="text-2xl sm:text-3xl font-bold text-red-500">Rs. {totalPrice}</div>
              {originalPrice && (
                <div className="text-gray-400 line-through text-lg mb-1">Rs. {originalPrice * quantity}</div>
              )}
            </div>
            {price !== totalPrice && (
              <div className="text-sm text-green-600 font-medium">{quantity > 1 ? `${quantity} items` : ""}</div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={addToCart}
              className={`flex items-center justify-center gap-2 py-3 px-6 rounded-lg border-2 transition-all duration-300 ${
                isAddedToCart
                  ? "bg-green-500 text-white border-green-500"
                  : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              }`}
            >
              {isAddedToCart ? <FaCheck /> : <FaShoppingCart />}
              {isAddedToCart ? "Added to Cart" : "Add to Cart"}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={buyNow}
              className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-all duration-300 shadow-md"
            >
              <FaBolt />
              Buy Now
            </motion.button>
          </motion.div>

          {/* Wishlist status indicator */}
          {isInWishlist && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 flex items-center justify-center text-red-500 text-sm"
            >
              <FaHeart className="mr-2" /> This item is in your wishlist
            </motion.div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

ProductView.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  originalPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  startreview: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  review: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  status: PropTypes.string.isRequired,
  isVeg: PropTypes.bool,
  productId: PropTypes.string,
  images: PropTypes.array,
}

export default ProductView
