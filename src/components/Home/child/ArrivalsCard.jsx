// import React from 'react';
// import PropTypes from 'prop-types';

// const ArrivalsCard = ({ images }) => {
//   // Check if images is defined and has length before rendering
//   if (!images || images.length === 0) {
//     return <div>No images available</div>;
//   }

//   return (
//     <div className="">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image.src}
//             alt={image.alt}
//             className="w-full h-auto"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// ArrivalsCard.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       src: PropTypes.string.isRequired,
//       alt: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default ArrivalsCard;


import PropTypes from "prop-types"

const ArrivalsCard = ({ images }) => {
  // Check if images is defined and has length before rendering
  if (!images || images.length === 0) {
    return <div>No images available</div>
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-xl">{image.alt}</h3>
              <p className="text-white/80 text-sm">New arrival</p>
              <button className="mt-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 w-max">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

ArrivalsCard.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default ArrivalsCard
