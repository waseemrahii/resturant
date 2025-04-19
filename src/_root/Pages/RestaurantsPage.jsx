// import React from "react";
// import Banner from "../../components/Restaurants/Restaurant/Banner";
// import CateCard from "../../components/Restaurants/Restaurant/CateCard";
// import RestaurantInfo from "../../components/Restaurants/Restaurant/Restaurantsinfo";
// import Restaurants from "../../components/Restaurants";
// import Foods from "../../components/Foods";
// // import { CategoriesData } from "../../utils/Utils";

// const RestaurantPage = () => {
//   const bannerImageUrl =
//     "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbanner.png?alt=media&token=f3117d29-8280-4c57-b019-e4d8a33cca50";

//   const categoriesData = [
//     {
//       name: "Pizza Hut",
//       img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
//     },
//     {
//       name: "KFC",
//       img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
//     },
//     {
//       name: "McDonald's",
//       img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
//     },
//   ];

//   const handleOnClose = () => {
//     console.log("Close button clicked");
//   };

//   return (
//     <div className='w-[80%] mx-auto'>
//       <div className="grid grid-cols-3 gap-4">
//         <Banner imageUrl={bannerImageUrl} />
//         <div className="grid grid-rows-2 grid-cols-2 gap-4">
//           {categoriesData.map((item, index) => (
//             <CateCard
//               item={item}
//               index={index}
//               key={index}
//               length={categoriesData.length}
//             />
//           ))}
//         </div>
//       </div>
//       <RestaurantInfo
//         name="SipNSnack"
//         address="Link Road, Old Faridabad, Faridabad, HR, India"
//         reviews={0}
//         rating={5}
//         time="12:00 PM - 11:00 PM"
//         onClose={handleOnClose}
//       />
//       <Foods />
//     </div>
//   );
// };

// export default RestaurantPage;


import { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import Banner from "../../components/Restaurants/Restaurant/Banner"
import CateCard from "../../components/Restaurants/Restaurant/CateCard"
import RestaurantInfo from "../../components/Restaurants/Restaurant/Restaurantsinfo"
import Foods from "../../components/Foods"
import { restaurants } from "../../utils/Utils"

const RestaurantPage = () => {
  const { restaurantId } = useParams()
  const location = useLocation()
  const [restaurant, setRestaurant] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Try to get restaurant from location state first
    const restaurantFromState = location.state?.restaurant

    if (restaurantFromState) {
      setRestaurant(restaurantFromState)
      setLoading(false)
      return
    }

    // If not in state, find it in the restaurants data
    const id = Number.parseInt(restaurantId)
    const foundRestaurant = restaurants.find((r) => r.id === id)

    if (foundRestaurant) {
      setRestaurant(foundRestaurant)
    } else {
      // Fallback to first restaurant if ID not found
      setRestaurant(restaurants[0])
    }

    setLoading(false)
  }, [restaurantId, location.state])

  if (loading) {
    return <div className="w-[80%] mx-auto py-12 text-center">Loading restaurant details...</div>
  }

  if (!restaurant) {
    return <div className="w-[80%] mx-auto py-12 text-center">Restaurant not found</div>
  }

  // Sample categories for the restaurant
  const categoriesData = [
    {
      name: "Appetizers",
      img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Main Course",
      img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Desserts",
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    },
  ]

  const handleOnClose = () => {
    console.log("Close button clicked")
  }

  return (
    <div className="w-[80%] mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Banner imageUrl={restaurant.image} />
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {categoriesData.map((item, index) => (
            <CateCard item={item} index={index} key={index} length={categoriesData.length} />
          ))}
        </div>
      </div>

      <RestaurantInfo
        name={restaurant.name}
        address={restaurant.address}
        reviews={restaurant.reviews}
        rating={restaurant.rating}
        time="10:00 AM - 10:00 PM"
        onClose={handleOnClose}
      />

      <Foods />
    </div>
  )
}

export default RestaurantPage
