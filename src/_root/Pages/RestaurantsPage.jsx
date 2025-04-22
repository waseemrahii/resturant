

// import { useEffect, useState } from "react"
// import { useParams, useLocation } from "react-router-dom"
// import Banner from "../../components/Restaurants/Restaurant/Banner"
// import CateCard from "../../components/Restaurants/Restaurant/CateCard"
// import RestaurantInfo from "../../components/Restaurants/Restaurant/Restaurantsinfo"
// import Foods from "../../components/Foods"
// import { restaurants } from "../../utils/Utils"

// const RestaurantPage = () => {
//   const { restaurantId } = useParams()
//   const location = useLocation()
//   const [restaurant, setRestaurant] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     // Try to get restaurant from location state first
//     const restaurantFromState = location.state?.restaurant

//     if (restaurantFromState) {
//       setRestaurant(restaurantFromState)
//       setLoading(false)
//       return
//     }

//     // If not in state, find it in the restaurants data
//     const id = Number.parseInt(restaurantId)
//     const foundRestaurant = restaurants.find((r) => r.id === id)

//     if (foundRestaurant) {
//       setRestaurant(foundRestaurant)
//     } else {
//       // Fallback to first restaurant if ID not found
//       setRestaurant(restaurants[0])
//     }

//     setLoading(false)
//   }, [restaurantId, location.state])

//   if (loading) {
//     return <div className="w-[80%] mx-auto py-12 text-center">Loading restaurant details...</div>
//   }

//   if (!restaurant) {
//     return <div className="w-[80%] mx-auto py-12 text-center">Restaurant not found</div>
//   }

//   // Sample categories for the restaurant
//   const categoriesData = [
//     {
//       name: "Appetizers",
//       img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     },
//     {
//       name: "Main Course",
//       img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     },
//     {
//       name: "Desserts",
//       img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
//     },
//   ]

//   const handleOnClose = () => {
//     console.log("Close button clicked")
//   }

//   return (
//     <div className="w-[80%] mx-auto py-8">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <Banner imageUrl={restaurant.image} />
//         <div className="md:col-span-2 grid grid-cols-2 gap-4">
//           {categoriesData.map((item, index) => (
//             <CateCard item={item} index={index} key={index} length={categoriesData.length} />
//           ))}
//         </div>
//       </div>

//       <RestaurantInfo
//         name={restaurant.name}
//         address={restaurant.address}
//         reviews={restaurant.reviews}
//         rating={restaurant.rating}
//         time="10:00 AM - 10:00 PM"
//         onClose={handleOnClose}
//       />

//       <Foods />
//     </div>
//   )
// }

// export default RestaurantPage




import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { restaurants, foodItems } from "../../utils/Utils"
import RestaurantDetail from "../../components/Restaurants/RestaurantDetail"
import FoodItems from "../../components/Foods/FoodItems"
import { categories } from "../../utils/Utils"
import Foods from "../../components/Foods"

const RestaurantsPage = () => {
  const { restaurantId } = useParams()
  const [restaurant, setRestaurant] = useState(null)
  const [restaurantFoods, setRestaurantFoods] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch restaurant details
    setLoading(true)

    setTimeout(() => {
      // Find restaurant by ID
      const foundRestaurant = restaurants.find((r) => r.id === Number.parseInt(restaurantId)) || restaurants[0]

      if (foundRestaurant) {
        setRestaurant({
          ...foundRestaurant,
          openingHours: "12:10 AM - 11:08 PM",
          reviews: foundRestaurant.reviews || 25,
          address: foundRestaurant.location || "10, Kailash Dham Society, Anand Nagar, Surat, Gujarat 395006, India",
        })

        // Filter foods by restaurant
        const filteredFoods = foodItems.filter(
          (food) => food.restaurantId === Number.parseInt(restaurantId) || Math.random() > 0.5, // For demo purposes, randomly assign some foods
        )

        setRestaurantFoods(filteredFoods)
      }

      setLoading(false)
    }, 500)
  }, [restaurantId])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="animate-pulse flex flex-col w-full">
          <div className="h-96 bg-gray-200 rounded-lg mb-6"></div>
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!restaurant) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Restaurant not found</h2>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <RestaurantDetail restaurant={restaurant} />

      <div className="mt-8">
        {/* <FoodItems categories={categories} foods={restaurantFoods} initialCategory={categories[0]?.name} /> */}
        <Foods />

      </div>
    </div>
  )
}

export default RestaurantsPage
