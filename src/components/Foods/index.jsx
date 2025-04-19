// import React from 'react'
// import { categories, foodItems } from '../../utils/Utils'
// import FoodItems from './FoodItems'

// const Foods = () => {
//   return (
//     <div>
//       <FoodItems  categories={categories} foods={foodItems}/>
//     </div>
//   )
// }

// export default Foods


"use client"

import { useState } from "react"
import { categories, foodItems } from "../../utils/Utils"
import FoodItems from "./FoodItems"

const Foods = () => {
  // Set a default active category
  const [activeCategory, setActiveCategory] = useState(categories[0]?.name || "Pakistani")

  return (
    <div className="mt-8">
      <FoodItems categories={categories} foods={foodItems} initialCategory={activeCategory} />
    </div>
  )
}

export default Foods
