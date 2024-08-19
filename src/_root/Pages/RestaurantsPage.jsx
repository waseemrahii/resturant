import React from "react";
import Banner from "../../components/Restaurants/Restaurant/Banner";
import CateCard from "../../components/Restaurants/Restaurant/CateCard";
import RestaurantInfo from "../../components/Restaurants/Restaurant/Restaurantsinfo";
import Restaurants from "../../components/Restaurants";
import Foods from "../../components/Foods";
// import { CategoriesData } from "../../utils/Utils";

const RestaurantPage = () => {
  const bannerImageUrl =
    "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbanner.png?alt=media&token=f3117d29-8280-4c57-b019-e4d8a33cca50";

  const categoriesData = [
    {
      name: "Pizza Hut",
      img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    },
    {
      name: "KFC",
      img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    },
    {
      name: "McDonald's",
      img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
    },
  ];

  const handleOnClose = () => {
    console.log("Close button clicked");
  };

  return (
    <div className='w-[80%] mx-auto'>
      <div className="grid grid-cols-3 gap-4">
        <Banner imageUrl={bannerImageUrl} />
        <div className="grid grid-rows-2 grid-cols-2 gap-4">
          {categoriesData.map((item, index) => (
            <CateCard
              item={item}
              index={index}
              key={index}
              length={categoriesData.length}
            />
          ))}
        </div>
      </div>
      <RestaurantInfo
        name="SipNSnack"
        address="Link Road, Old Faridabad, Faridabad, HR, India"
        reviews={0}
        rating={5}
        time="12:00 PM - 11:00 PM"
        onClose={handleOnClose}
      />
      <Foods />
    </div>
  );
};

export default RestaurantPage;
