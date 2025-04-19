// import React, { useState } from "react";
// import { CiHeart } from "react-icons/ci";
// import { FaStar } from "react-icons/fa";
// import PropTypes from "prop-types";

// const Product = ({
//   // img,
//   title,
//   description,
//   subtitle,
//   price,
//   startreview,
//   review,
//   status,
// }) => {
//   const [quantity, setQuantity] = useState(1);

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };
//   // ----------------------------
//   const images = [
//     "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fpizza3_1720595747511.jpg?alt=media&token=a85441fb-1acb-4e68-8474-66359f47deaa",
//       "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fpizza_1720595995894.jpg?alt=media&token=fa97b045-95fb-4ac7-8942-f4141fa91e2c",
//       "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fburger.jpg?alt=media&token=some-other-token",
//     //
//   ];

//   const [mainImg, setMainImg] = useState(images[0]);

//   return (
//     <div>
//       {" "}
//       <div className="h-full shadow-md p-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="col-span-1 mb-4">
//             <img
//               className="h-3/4 w-full object-cover rounded-lg"
//               src={mainImg}
//               alt="Main"
//             />
//             <div className="thumbnail-gallery flex space-x-4">
//               {images.map((thumbnail, index) => (
//                 <>
//                   <div className=" ">
//                     <img
//                       key={index}
//                       src={thumbnail}
//                       className="h-20 w-full object-contain rounded-lg pt-2 cursor-pointer"
//                       alt={`Thumbnail ${index + 1}`}
//                       onClick={() => setMainImg(thumbnail)}
//                     />
//                   </div>
//                 </>
//               ))}
//             </div>
//           </div>

//           <div className="col-span-1">
//             <div className=" flex  items-center">
//               <div className="flex flex-col  gap-3">
//                 <h1 className="text-xl font-semibold">{title}</h1>
//                 <div className="flex items-center gap-2">
//                   <h1 className="bg-[#28A745] flex items-center gap-2 text-white px-2 rounded-md">
//                     {" "}
//                     {startreview}
//                     <FaStar />
//                   </h1>{" "}
//                   {review} Reviews <CiHeart className=" " />
//                 </div>
//                 <h2 className="text-md font-semibold">
//                   Restaurant |<span className="text-red-500"> {subtitle}</span>
//                 </h2>
//                 <p className="text-sm text-gray-400">{description}</p>
//               </div>
//               <div className="flex flex-col gap-3">
//                 <h1 className="text-red-500 text-xl font-semibold">₹{price}</h1>
//                 <p className="text-gray-400 text-sm">Quantity left: {status}</p>
//               </div>
//             </div>
//             <div>
//               <h1>Size</h1>
//               <div className="flex items-center gap-3 pt-4">
//                 <button className="border-red-500 px-3 py-1  bg-red-500 text-white rounded-md">
//                   Regular
//                 </button>
//                 <button className="border-red-500 px-3 py-1  bg-red-500 text-white rounded-md">
//                   Large
//                 </button>
//               </div>
//             </div>
//             <div className="flex justify-between items-center my-4">
//               <h1 className="text-sm font-semibold">QUANTITY</h1>
//               <div className="flex justify-between items-center border border-gray-400 rounded-md w-24 items-center px-3 py-1 ">
//                 <button
//                   className="hover:text-rose-700 text-2xl font-bold"
//                   onClick={decreaseQuantity}
//                 >
//                   -
//                 </button>
//                 <span className="mx-2 text-redtext-xl font-semibold">
//                   {quantity}
//                 </span>
//                 <button
//                   className="hover:text-rose-700 text-2xl font-bold"
//                   onClick={increaseQuantity}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//             <div className="flex  items-center justify-between gap-3">
//               <button className="text-red-500 lg:px-3 py-1  bg-white border border-red-500 text-md lg:text-xl font-semibold rounded-lg w-full ">
//                 Add To Cart
//               </button>
//               <button className="text-white px-3 py-1 bg-red-500 rounded-lg text-md lg:text-xl font-semibold w-full">
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Product.propTypes = {
//   img: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   subtitle: PropTypes.string,
//   price: PropTypes.number.isRequired,
//   startreview: PropTypes.number.isRequired,
//   review: PropTypes.number.isRequired,
//   status: PropTypes.string.isRequired,
// };

// export default Product;



import { useState } from "react"
import { FaStar, FaHeart, FaRegHeart, FaShoppingCart, FaBolt } from "react-icons/fa"
import { IoShareSocialOutline } from "react-icons/io5"
import PropTypes from "prop-types"

const ProductView = ({ title, description, subtitle, price, startreview, review, status }) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("Regular")
  const [isFavorite, setIsFavorite] = useState(false)
  const [mainImg, setMainImg] = useState(0)

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  // Sample images
  const images = [
    "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  ]

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Left Column - Images */}
        <div>
          <div className="relative rounded-xl overflow-hidden mb-4 h-80 md:h-96">
            <img
              src={images[mainImg] || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-colors hover:bg-gray-100"
            >
              {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-400" />}
            </button>
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-colors hover:bg-gray-100">
                <IoShareSocialOutline className="text-gray-600" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {images.map((img, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden cursor-pointer border-2 ${
                  mainImg === index ? "border-accent-primary" : "border-transparent"
                }`}
                onClick={() => setMainImg(index)}
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{title}</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded-md mr-3">
              <FaStar className="mr-1" />
              <span>{startreview}</span>
            </div>
            <span className="text-gray-600">({review} Reviews)</span>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-700">
              Restaurant | <span className="text-accent-primary">{subtitle}</span>
            </h2>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Size</h3>
            <div className="flex space-x-3">
              {["Regular", "Large", "Family"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedSize === size
                      ? "bg-accent-primary text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Quantity</h3>
            <div className="flex items-center">
              <button
                onClick={decreaseQuantity}
                className="w-10 h-10 rounded-l-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                -
              </button>
              <div className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-300">
                {quantity}
              </div>
              <button
                onClick={increaseQuantity}
                className="w-10 h-10 rounded-r-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                +
              </button>
              <span className="ml-4 text-gray-600">{status === "Unlimited" ? "In Stock" : `${status} items left`}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <div className="text-2xl font-bold text-accent-primary">Rs. {price}</div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <button className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg border-2 border-accent-primary text-accent-primary font-medium hover:bg-accent-primary hover:text-white transition-colors">
              <FaShoppingCart />
              Add to Cart
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-accent-primary text-white font-medium hover:bg-accent-secondary transition-colors">
              <FaBolt />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductView.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  startreview: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  review: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  status: PropTypes.string.isRequired,
}

export default ProductView
