

// import PropTypes from "prop-types" // Step 1: Import PropTypes
// import { CategoriesData, restaurants } from "../../utils/Utils"
// import CategoriesCard from "./child/CategoriesCard"
// import Title from "./child/Title"

// const TopCategories = ({ title }) => {
//   return (
//     <>
//       <div className="mt-8">
//         <Title title={title} />
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6 mt-4">
//           {CategoriesData.map((item, index) => (
//             <CategoriesCard
//               key={index}
//               categoryId={item.index}
//               image={item.img}
//               name={item.name}
//               restaurantId={restaurants.id}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// // Step 2: Define PropTypes
// TopCategories.propTypes = {
//   title: PropTypes.string.isRequired,
// }

// export default TopCategories




import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
import PropTypes from "prop-types"
import CategoriesCard from "./child/CategoriesCard"

const TopCategories = ({ title }) => {
  // Sample categories with proper IDs
  const categories = [
    {
      id: "italian",
      name: "Italian",
      image:
        "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: "chinese",
      name: "Chinese",
      image:
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    },
    {
      id: "mexican",
      name: "Mexican",
      image:
        "https://images.unsplash.com/photo-1613514785940-daed07799d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "PAKISTANI",
      name: "pakistani",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1788&q=80",
    },
    {
      id: "japanese",
      name: "Japanese",
      image:
        "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "thai",
      name: "Thai",
      image:
        "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    },
    {
      id: "american",
      name: "American",
      image:
        "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    },
    {
      id: "mediterranean",
      name: "Mediterranean",
      image:
        "https://images.unsplash.com/photo-1599749001441-8e8a21a299e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ]

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 pt-4">{title}</h1>
        <Link to="/categories" className="flex items-center text-primary-500 hover:text-primary-600 transition-colors">
          <span className="mr-2 text-xl font-bold ">See All</span>
          <FaArrowRight className="text-sm" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category, index) => (
          <Link key={index} to={`/category/${category.id}`} state={{ categoryName: category.name, isFood: true }}>
            <CategoriesCard image={category.image} name={category.name} categoryId={category.id} restaurantId="" />
          </Link>
        ))}
      </div>
    </div>
  )
}

TopCategories.propTypes = {
  title: PropTypes.string.isRequired,
}

export default TopCategories
