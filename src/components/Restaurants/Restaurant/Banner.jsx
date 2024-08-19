import React from "react";
import PropTypes from "prop-types";

const Banner = ({ imageUrl }) => {
  return (
    <div className="col-span-2 h-96">
      <img
        src={imageUrl}
        alt="Main Banner"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  );
};

Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default Banner;
