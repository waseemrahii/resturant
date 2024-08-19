import React from 'react'
import { categories, foodItems } from '../../utils/Utils'
import FoodItems from './FoodItems'

const Foods = () => {
  return (
    <div>
      <FoodItems  categories={categories} foods={foodItems}/>
    </div>
  )
}

export default Foods
