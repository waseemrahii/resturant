import React from 'react'
import Carusal from './Carusal'
import ParentCard from './child/ParentCard'
import { barfood, restaurants, restaurantStories } from '../../utils/Utils'
import NewArrivals from './child/NewArrivals'
import TopCategories from './TopCategories'
import RestaurantStories from './Stories'

const Home = () => {
  return (
    <div>
     <Carusal/>
     <RestaurantStories restaurants={restaurantStories}/>
     <div className='w-[80%] mx-auto'>
     <TopCategories title="Top Category"/>
     <ParentCard title="Popular Restaurants" rest={restaurants} />
     <NewArrivals title="New Arrivals"/>
     <ParentCard title="Italian" rest={restaurants} />
     <ParentCard title="Sandwiches" rest={barfood} />
     <ParentCard title="Bar Foods" rest={restaurants} />
     <ParentCard title="Burger" rest={barfood} />
     <ParentCard title="Mexican" rest={restaurants} />
     <ParentCard title="All Restaurants" rest={barfood} />
     </div>
     
    </div>
  )
}

export default Home
