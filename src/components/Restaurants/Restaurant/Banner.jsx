// import React from "react";
// import PropTypes from "prop-types";

// const Banner = ({ imageUrl }) => {
//   return (
//     <div className="col-span-2 h-96">
//       <img
//         src={imageUrl}
//         alt="Main Banner"
//         className="w-full h-full object-cover rounded-xl"
//       />
//     </div>
//   );
// };

// Banner.propTypes = {
//   imageUrl: PropTypes.string.isRequired,
// };

// export default Banner;



import PropTypes from "prop-types"

const Banner = ({ imageUrl }) => {
  return (
    <div className="col-span-1 md:col-span-1 h-64 md:h-96 w-full">
      <img
        src={imageUrl || "/placeholder.svg"}
        alt="Restaurant Banner"
        className="w-full h-full object-cover rounded-xl shadow-md"
        onError={(e) => {
          e.target.onerror = null
          e.target.src =
            "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }}
      />
    </div>
  )
}

Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
}

export default Banner
