
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
import PropTypes from "prop-types"
import ArrivalsCard from "./ArrivalsCard"
import { foodItems } from "../../../utils/Utils"

const NewArrivals = ({ title }) => {
  // Get the first 4 food items for display
  const newFoodItems = foodItems.slice(0, 4)

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <Link
          to="/category/new-arrivals"
          state={{ categoryName: "New Arrivals", isFood: true }}
          className="flex items-center text-primary-500 hover:text-primary-600 transition-colors"
        >
          <span className="mr-2 text-xl font-bold">See All</span>
          <FaArrowRight className="text-sm" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newFoodItems.map((food, index) => (
          // <Link key={index} to={`/product-detail/${food.id || index}`}>
          <Link key={index} to={`/product-detail`}>
            <ArrivalsCard
              key={index}
              img={food.img}
              name={food.name}
              price={food.price}
              originalPrice={food.originalPrice}
              rating={food.rating}
              isVeg={food.isVeg}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

NewArrivals.propTypes = {
  title: PropTypes.string.isRequired,
}

export default NewArrivals
