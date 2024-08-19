import React from 'react'
import FavoriteRestCard from '../../components/Favorite/FavoriteRestCard'
import { favoriteRestaurants } from '../../utils/Utils'

const FavoriteRestaurants = () => {
  return (
    <div className='w-[80%] mx-auto'>
    <div className='border-b p-4'>
      <h1 className='text-xl font-bold '>Favorite Restaurants</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
    {favoriteRestaurants.length > 0 ? (
          favoriteRestaurants.map((restaurant, index) => (
            <FavoriteRestCard
              key={index}
              favoriteRestaurant={restaurant}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No favorite restaurants found.
          </div>
        )}
    </div>
    </div>
    
  )
}

export default FavoriteRestaurants
