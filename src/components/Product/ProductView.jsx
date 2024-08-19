import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const Product = ({
  // img,
  title,
  description,
  subtitle,
  price,
  startreview,
  review,
  status,
}) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  // ----------------------------
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fpizza3_1720595747511.jpg?alt=media&token=a85441fb-1acb-4e68-8474-66359f47deaa",
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fpizza_1720595995894.jpg?alt=media&token=fa97b045-95fb-4ac7-8942-f4141fa91e2c",
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fburger.jpg?alt=media&token=some-other-token",
    //
  ];

  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <div>
      {" "}
      <div className="h-full shadow-md p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 mb-4">
            <img
              className="h-3/4 w-full object-cover rounded-lg"
              src={mainImg}
              alt="Main"
            />
            <div className="thumbnail-gallery flex space-x-4">
              {images.map((thumbnail, index) => (
                <>
                  <div className=" ">
                    <img
                      key={index}
                      src={thumbnail}
                      className="h-20 w-full object-contain rounded-lg pt-2 cursor-pointer"
                      alt={`Thumbnail ${index + 1}`}
                      onClick={() => setMainImg(thumbnail)}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <div className=" flex  items-center">
              <div className="flex flex-col  gap-3">
                <h1 className="text-xl font-semibold">{title}</h1>
                <div className="flex items-center gap-2">
                  <h1 className="bg-[#28A745] flex items-center gap-2 text-white px-2 rounded-md">
                    {" "}
                    {startreview}
                    <FaStar />
                  </h1>{" "}
                  {review} Reviews <CiHeart className=" " />
                </div>
                <h2 className="text-md font-semibold">
                  Restaurant |<span className="text-red-500"> {subtitle}</span>
                </h2>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-red-500 text-xl font-semibold">₹{price}</h1>
                <p className="text-gray-400 text-sm">Quantity left: {status}</p>
              </div>
            </div>
            <div>
              <h1>Size</h1>
              <div className="flex items-center gap-3 pt-4">
                <button className="border-red-500 px-3 py-1  bg-red-500 text-white rounded-md">
                  Regular
                </button>
                <button className="border-red-500 px-3 py-1  bg-red-500 text-white rounded-md">
                  Large
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center my-4">
              <h1 className="text-sm font-semibold">QUANTITY</h1>
              <div className="flex justify-between items-center border border-gray-400 rounded-md w-24 items-center px-3 py-1 ">
                <button
                  className="hover:text-rose-700 text-2xl font-bold"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <span className="mx-2 text-redtext-xl font-semibold">
                  {quantity}
                </span>
                <button
                  className="hover:text-rose-700 text-2xl font-bold"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex  items-center justify-between gap-3">
              <button className="text-red-500 lg:px-3 py-1  bg-white border border-red-500 text-md lg:text-xl font-semibold rounded-lg w-full ">
                Add To Cart
              </button>
              <button className="text-white px-3 py-1 bg-red-500 rounded-lg text-md lg:text-xl font-semibold w-full">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  price: PropTypes.number.isRequired,
  startreview: PropTypes.number.isRequired,
  review: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

export default Product;
