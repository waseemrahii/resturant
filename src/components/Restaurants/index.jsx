import Restaurant from './Restaurant'
import { categories, restaurants } from '../../utils/Utils';

const Restaurants = () => {
  return (
    <div className='w-[80%] mx-auto' >
      <Restaurant  categories={categories} restaurants={restaurants}/>
    </div>
  )
}

export default Restaurants
