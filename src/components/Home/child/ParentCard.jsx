

// // // import Title from "./Title"
// // // import PropTypes from "prop-types" // Import PropTypes for validation
// // // import Card from "../../Cards/Card"

// // // const ParentCard = ({ title, rest }) => {
// // //   // Slice the array to get only the first five elements
// // //   const displayedRestaurants = rest.slice(0, 4)

// // //   return (
// // //     <div className="mt-12">
// // //       <Title title={title} />
// // //       <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // //         {displayedRestaurants.map((restaurant) => (
// // //           <Card key={restaurant.id} restaurant={restaurant} />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // // Prop types validation
// // // ParentCard.propTypes = {
// // //   title: PropTypes.string.isRequired,
// // //   rest: PropTypes.array.isRequired,
// // // }

// // // export default ParentCard


// // import { Link } from "react-router-dom"
// // import { FaArrowRight } from "react-icons/fa"
// // import PropTypes from "prop-types"
// // import Card from "../../Cards/Card"

// // const ParentCard = ({ title, rest }) => {
// //   return (
// //     <div className="mb-12">
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
// //         <Link
// //           to={`/category/${title.toLowerCase().replace(/\s+/g, "-")}`}
// //           className="flex items-center text-red-500 hover:text-red-600 transition-colors"
// //         >
// //           <span className="mr-2">See All</span>
// //           <FaArrowRight className="text-sm" />
// //         </Link>
// //       </div>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //         {rest.slice(0, 4).map((restaurant, index) => (
// //           <Card key={index} restaurant={restaurant} />
// //         ))}
// //       </div>
// //     </div>
// //   )
// // }

// // ParentCard.propTypes = {
// //   title: PropTypes.string.isRequired,
// //   rest: PropTypes.array.isRequired,
// // }

// // export default ParentCard



// import { Link } from "react-router-dom"
// import { FaArrowRight } from "react-icons/fa"
// import PropTypes from "prop-types"
// import Card from "../../Cards/Card"

// const ParentCard = ({ title, rest }) => {
//   // Create a URL-friendly category ID
//   const categoryId = title.toLowerCase().replace(/\s+/g, "-")

//   return (
//     <div className="mb-12">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
//         <Link
//           to={`/category/${categoryId}`}
//           state={{ categoryName: title, isRestaurant: true }}
//           className="flex items-center text-red-500 hover:text-red-600 transition-colors"
//         >
//           <span className="mr-2">See All</span>
//           <FaArrowRight className="text-sm" />
//         </Link>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {rest.slice(0, 4).map((restaurant, index) => (
//           <Link key={index} to={`/restaurant/${restaurant.id || index}`}>
//             <Card restaurant={restaurant} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

// ParentCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   rest: PropTypes.array.isRequired,
// }

// export default ParentCard



import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
import PropTypes from "prop-types"
import Card from "../../Cards/Card"

const ParentCard = ({ title, rest }) => {
  // Create a URL-friendly category ID
  const categoryId = title ? title.toLowerCase().replace(/\s+/g, "-") : "all"

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <Link
          to={`/category/${categoryId}`}
          state={{ categoryName: title, isRestaurant: true }}
          className="flex items-center text-primary-500 hover:text-primary-600 transition-colors"
        >
          <span className="mr-2 text-2xl font-bold">See All</span>
          <FaArrowRight className="text-sm" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {rest.slice(0, 4).map((restaurant, index) => (
          // <Link key={index} to={`/restaurant/${restaurant.id || index}`}>
          <Link key={index} to={`/product-detail`}>
            <Card restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  )
}

ParentCard.propTypes = {
  title: PropTypes.string.isRequired,
  rest: PropTypes.array.isRequired,
}

export default ParentCard
