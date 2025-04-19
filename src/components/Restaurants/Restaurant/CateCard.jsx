// import React from "react";
// import PropTypes from "prop-types";

// const CateCard = ({ item, index }) => {
//   return (
//     <div
//       key={index}
//       className={`rounded-2xl hover:shadow-md flex flex-col justify-between ${
//         index === 1 ? "row-span-3" : ""
//       }`}
//     >
//       {index === 1 && (
//         <div className="absolute inset-300 h-[44%] w-[14%] bg-opacity-50 rounded-2xl z-50"></div>
//       )}
//       <img
//         src={item.img}
//         alt={item.name}
//         className="w-full h-full object-cover rounded-2xl"
//       />
//     </div>
//   );
// };

// CateCard.propTypes = {
//   item: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     img: PropTypes.string.isRequired,
//   }).isRequired,
//   index: PropTypes.number.isRequired,
// };

// export default CateCard;



import PropTypes from "prop-types"

const CateCard = ({ item, index }) => {
  return (
    <div
      key={index}
      className={`rounded-2xl hover:shadow-md flex flex-col justify-between ${index === 1 ? "row-span-3" : ""}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        <img
          src={item.img || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            e.target.onerror = null
            e.target.src =
              "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-bold text-xl">{item.name}</h3>
        </div>
      </div>
    </div>
  )
}

CateCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

export default CateCard
