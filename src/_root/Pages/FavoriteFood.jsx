import { favoritefood } from "../../utils/Utils";
import FavoriteFoodCard from "../../components/Favorite/FavoriteFoodCard";

const FavoriteFood = () => {
  return (
    <div className='w-[80%] mx-auto'>
      <div className="border-b p-4">
        <h1 className="text-xl font-bold ">Favorite Foods</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
        {favoritefood.length > 0 ? (
          favoritefood.map((restaurant, index) => (
            <FavoriteFoodCard key={index} favoriteRestaurant={restaurant} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No favorite restaurants found.
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteFood;
