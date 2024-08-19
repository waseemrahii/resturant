import React from 'react';
import PropTypes from 'prop-types';

const ArrivalsCard = ({ images }) => {
  // Check if images is defined and has length before rendering
  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-auto"
          />
        ))}
      </div>
    </div>
  );
};

ArrivalsCard.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ArrivalsCard;