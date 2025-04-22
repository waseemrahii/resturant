
// // import { useState, useEffect } from "react"
// // import { useParams } from "react-router-dom"
// // import { foodItems, restaurants } from "../../utils/Utils"
// // import FoodCard from "../../components/Foods/FoodCard"
// // import RestaurantCard from "../../components/Restaurants/AllRestaurants"

// // const CategoryPage = () => {
// //   const { categoryId } = useParams()
// //   const [items, setItems] = useState([])
// //   const [isFood, setIsFood] = useState(true)
// //   const [categoryName, setCategoryName] = useState("")

// //   useEffect(() => {
// //     // Format the category name for display
// //     const formattedName = categoryId
// //       .split("-")
// //       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// //       .join(" ")

// //     setCategoryName(formattedName)

// //     // Check if this is a food category or restaurant category
// //     const foodCategory = foodItems.some((item) => item.category.toLowerCase() === formattedName.toLowerCase())

// //     if (foodCategory) {
// //       setIsFood(true)
// //       setItems(foodItems.filter((item) => item.category.toLowerCase() === formattedName.toLowerCase()))
// //     } else {
// //       setIsFood(false)
// //       setItems(restaurants.filter((item) => item.category.toLowerCase() === formattedName.toLowerCase()))
// //     }
// //   }, [categoryId])

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <h1 className="text-3xl font-bold mb-8 text-gray-800">{categoryName}</h1>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //         {isFood
// //           ? // Render food items
// //             items.map((food, index) => (
// //               <FoodCard
// //                 key={index}
// //                 img={food.img}
// //                 name={food.name}
// //                 price={food.price}
// //                 originalPrice={food.originalPrice}
// //                 rating={food.rating}
// //                 reviews={food.reviews}
// //                 isVeg={food.isVeg}
// //               />
// //             ))
// //           : // Render restaurant items
// //             items.map((restaurant, index) => <RestaurantCard key={index} restaurant={restaurant} />)}
// //       </div>

// //       {items.length === 0 && (
// //         <div className="text-center py-12">
// //           <h2 className="text-2xl text-gray-500">No items found in this category</h2>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // export default CategoryPage


// import { useState, useEffect } from "react"
// import { useParams, useLocation, Link } from "react-router-dom"
// import { foodItems, restaurants } from "../../utils/Utils"
// import FoodCard from "../../components/Foods/FoodCard"
// import Card from "../../components/Cards/Card"

// const CategoryPage = () => {
//   const { categoryId } = useParams()
//   const location = useLocation()
//   const [items, setItems] = useState([])
//   const [isFood, setIsFood] = useState(true)
//   const [categoryName, setCategoryName] = useState("")
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     setLoading(true)

//     // Get category info from location state if available
//     const stateCategory = location.state?.categoryName
//     const stateIsFood = location.state?.isFood

//     // Format the category name for display if not provided in state
//     const formattedName =
//       stateCategory ||
//       categoryId
//         .split("-")
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ")

//     setCategoryName(formattedName)

//     // Use isFood from state if available, otherwise determine from data
//     if (stateIsFood !== undefined) {
//       setIsFood(stateIsFood)
//     } else {
//       // Check if this is a food category or restaurant category
//       const foodCategory = foodItems.some((item) => item.category.toLowerCase() === formattedName.toLowerCase())
//       setIsFood(foodCategory)
//     }

//     // Filter items based on category
//     if (isFood) {
//       const filteredItems = foodItems.filter((item) => item.category.toLowerCase() === formattedName.toLowerCase())
//       setItems(filteredItems.length > 0 ? filteredItems : foodItems.slice(0, 12))
//     } else {
//       const filteredItems = restaurants.filter((item) => item.category.toLowerCase() === formattedName.toLowerCase())
//       setItems(filteredItems.length > 0 ? filteredItems : restaurants.slice(0, 12))
//     }

//     setLoading(false)
//   }, [categoryId, location.state, isFood])

//   if (loading) {
//     return (
//       <div className="container mx-auto px-4 py-8 text-center">
//         <p>Loading...</p>
//       </div>
//     )
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">{categoryName}</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {isFood
//           ? // Render food items
//             items.map((food, index) => (
//               <Link key={index} to={`/product-detail/${food.id || index}`}>
//                 <FoodCard
//                   img={food.img}
//                   name={food.name}
//                   price={food.price}
//                   originalPrice={food.originalPrice}
//                   rating={food.rating}
//                   reviews={food.reviews || 0}
//                   isVeg={food.isVeg}
//                   id={food.id || index}
//                 />
//               </Link>
//             ))
//           : // Render restaurant items
//             items.map((restaurant, index) => (
//               <Link key={index} to={`/restaurant/${restaurant.id || index}`}>
//                 <Card restaurant={restaurant} />
//               </Link>
//             ))}
//       </div>

//       {items.length === 0 && (
//         <div className="text-center py-12">
//           <h2 className="text-2xl text-gray-500">No items found in this category</h2>
//         </div>
//       )}
//     </div>
//   )
// }

// export default CategoryPage



"use client"

import { useState, useEffect } from "react"
import { useParams, useLocation, Link } from "react-router-dom"
import { foodItems, restaurants, categories } from "../../utils/Utils"
import FoodCard from "../../components/Foods/FoodCard"
import Card from "../../components/Cards/Card"

const CategoryPage = () => {
  const { categoryId } = useParams()
  const location = useLocation()
  const [items, setItems] = useState([])
  const [isFood, setIsFood] = useState(true)
  const [categoryName, setCategoryName] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    // Get category info from location state if available
    const stateCategory = location.state?.categoryName
    const stateIsFood = location.state?.isFood

    // Format the category name for display if not provided in state
    let formattedName = stateCategory || ""

    // Only try to format categoryId if it exists
    if (categoryId && typeof categoryId === "string") {
      formattedName =
        formattedName ||
        categoryId
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
    }

    // If we still don't have a category name, use a default
    if (!formattedName) {
      formattedName = "All Items"
    }

    setCategoryName(formattedName)

    // Use isFood from state if available, otherwise determine from data
    if (stateIsFood !== undefined) {
      setIsFood(stateIsFood)
    } else {
      // Check if this is a food category or restaurant category
      const foodCategory = foodItems.some(
        (item) => item.category && item.category.toLowerCase() === formattedName.toLowerCase(),
      )
      setIsFood(foodCategory)
    }

    // Filter items based on category
    if (isFood) {
      const filteredItems = foodItems.filter(
        (item) =>
          !formattedName ||
          formattedName === "All Items" ||
          (item.category && item.category.toLowerCase() === formattedName.toLowerCase()),
      )
      setItems(filteredItems.length > 0 ? filteredItems : foodItems)
    } else {
      const filteredItems = restaurants.filter(
        (item) =>
          !formattedName ||
          formattedName === "All Items" ||
          (item.category && item.category.toLowerCase() === formattedName.toLowerCase()),
      )
      setItems(filteredItems.length > 0 ? filteredItems : restaurants)
    }

    setLoading(false)
  }, [categoryId, location.state, isFood])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">{categoryName}</h1>

      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
            state={{ categoryName: category.name, isFood: true }}
            className={`px-4 py-2 rounded-full transition-colors ${
              categoryName === category.name ? "bg-red-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.icon} {category.name}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isFood
          ? // Render food items
            items.map((food, index) => (
              <Link key={index} to={`/product-detail/${food.id || index}`}>
                <FoodCard
                  img={food.img}
                  name={food.name}
                  price={food.price}
                  originalPrice={food.originalPrice}
                  rating={food.rating}
                  reviews={food.reviews || 0}
                  isVeg={food.isVeg}
                  id={food.id || index}
                />
              </Link>
            ))
          : // Render restaurant items
            items.map((restaurant, index) => (
              <Link key={index} to={`/restaurant/${restaurant.id || index}`}>
                <Card restaurant={restaurant} />
              </Link>
            ))}
      </div>

      {items.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl text-gray-500">No items found in this category</h2>
        </div>
      )}
    </div>
  )
}

export default CategoryPage
