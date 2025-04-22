
// import Carusal from "./Carusal"
// import ParentCard from "./child/ParentCard"
// import { restaurants } from "../../utils/Utils"
// import NewArrivals from "./child/NewArrivals"
// import TopCategories from "./TopCategories"
// import RestaurantStories from "./Stories"
// import { restaurantStories } from "../../utils/Utils"
// import PromotionalBanner from "./PromotionalBanner"
// import JoinUs from "./JoinUs"

// const Home = () => {
//   // Filter restaurants by category
//   const pakistaniRestaurants = restaurants.filter((restaurant) => restaurant.category === "Pakistani")
//   const bbqRestaurants = restaurants.filter((restaurant) => restaurant.category === "BBQ")
//   const biryaniRestaurants = restaurants.filter((restaurant) => restaurant.category === "Biryani")
//   const fastFoodRestaurants = restaurants.filter((restaurant) => restaurant.category === "Fast Food")
//   const desiRestaurants = restaurants.filter((restaurant) => restaurant.category === "Desi")
//   const chineseRestaurants = restaurants.filter((restaurant) => restaurant.category === "Chinese")
//   const pizzaRestaurants = restaurants.filter((restaurant) => restaurant.category === "Pizza")

//   return (
//     <div>
//       <Carusal />
//       <RestaurantStories restaurants={restaurantStories} />
//       <div className="w-[90%] mx-auto max-w-7xl">
//         <TopCategories title="Explore Categories" />
//         <ParentCard title="Popular Restaurants" rest={restaurants.slice(0, 8)} />
//         <PromotionalBanner />
//         <NewArrivals title="New on Foodie" />
//         <ParentCard title="Pakistani Cuisine" rest={pakistaniRestaurants} />
//         <ParentCard title="BBQ Delights" rest={bbqRestaurants} />
//         <ParentCard title="Biryani Specials" rest={biryaniRestaurants} />
//         <ParentCard title="Fast Food" rest={fastFoodRestaurants} />
//         <ParentCard title="Desi Food" rest={desiRestaurants} />
//         <ParentCard title="Chinese" rest={chineseRestaurants} />
//         <ParentCard title="Pizza" rest={pizzaRestaurants} />
//       </div>
//       <JoinUs />
//     </div>
//   )
// }

// export default Home

import Carusal from "./Carusal"
import ParentCard from "./child/ParentCard"
import { restaurants } from "../../utils/Utils"
import NewArrivals from "./child/NewArrivals"
import TopCategories from "./TopCategories"
import RestaurantStories from "./Stories"
import { restaurantStories } from "../../utils/Utils"
import PromotionalBanner from "./PromotionalBanner"
import JoinUs from "./JoinUs"

const Home = () => {
  // Filter restaurants by category
  const pakistaniRestaurants = restaurants.filter((restaurant) => restaurant.category === "Pakistani")
  const bbqRestaurants = restaurants.filter((restaurant) => restaurant.category === "BBQ")
  const biryaniRestaurants = restaurants.filter((restaurant) => restaurant.category === "Biryani")
  const fastFoodRestaurants = restaurants.filter((restaurant) => restaurant.category === "Fast Food")
  const desiRestaurants = restaurants.filter((restaurant) => restaurant.category === "Desi")
  const chineseRestaurants = restaurants.filter((restaurant) => restaurant.category === "Chinese")
  const pizzaRestaurants = restaurants.filter((restaurant) => restaurant.category === "Pizza")

  return (
    <div>
      <Carusal />
      <RestaurantStories restaurants={restaurantStories} />
      <div className="w-[90%] mx-auto max-w-7xl">
        <TopCategories title="Explore Categories" />
        <ParentCard title="Popular Restaurants" rest={restaurants.slice(0, 8)} />
        <PromotionalBanner />
        <NewArrivals title="New on Foodie" />
        <ParentCard title="Pakistani Cuisine" rest={pakistaniRestaurants} />
        <ParentCard title="BBQ Delights" rest={bbqRestaurants} />
        <ParentCard title="Biryani Specials" rest={biryaniRestaurants} />
        <ParentCard title="Fast Food" rest={fastFoodRestaurants} />
        <ParentCard title="Desi Food" rest={desiRestaurants} />
        <ParentCard title="Chinese" rest={chineseRestaurants} />
        <ParentCard title="Pizza" rest={pizzaRestaurants} />
      </div>
      <JoinUs />
    </div>
  )
}

export default Home
