

import PropTypes from "prop-types" // Step 1: Import PropTypes
import { CategoriesData, restaurants } from "../../utils/Utils"
import CategoriesCard from "./child/CategoriesCard"
import Title from "./child/Title"

const TopCategories = ({ title }) => {
  return (
    <>
      <div className="mt-8">
        <Title title={title} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6 mt-4">
          {CategoriesData.map((item, index) => (
            <CategoriesCard
              key={index}
              categoryId={item.index}
              image={item.img}
              name={item.name}
              restaurantId={restaurants.id}
            />
          ))}
        </div>
      </div>
    </>
  )
}

// Step 2: Define PropTypes
TopCategories.propTypes = {
  title: PropTypes.string.isRequired,
}

export default TopCategories
