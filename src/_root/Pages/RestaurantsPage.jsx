
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

