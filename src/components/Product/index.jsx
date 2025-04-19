import React from "react";
import ProductView from "./ProductView";
import ShoppingDetail from "./ShoppingDetail";
import SellerInfo from "./SellerInfo";
import { RxDividerVertical } from "react-icons/rx";
import Moreformrestraurant from "./Moreformrestraurant";

const ProductDetail = () => {
  const product = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2FChicken-and-Broccoli-Wraps-12_1720616492873.jpg?alt=media&token=02e4ba39-add6-4773-9a47-b2f605de847d",
      title: "Thin crust veggie Pizza",
      description: "Thin crust veggie Pizza",
      subtitle: "Flavor Express",
      price: "56",
      startreview: "4",
      review: "1",
      status: "Unlimited",
    },
  ];
  return (
    <div className="flex flex-col w-[80%] mx-auto">
      <ProductView
        // img={product.img}
        title={product.title}
        description={product.description}
        subtitle={product.subtitle}
        price={product.price}
        startreview={product.startreview}
        review={product.review}
        status={product.status}
      />
      <div className="flex">
        <div className="w-[100%]">
          <div className="w-[70%]">
            <div className="w-full">
              <h1>kjhdskjh</h1>
            </div>
          </div>
          <div className="flex flex-wrapp gap-6 w-full ">
            <ShoppingDetail />
            <SellerInfo />
            <Moreformrestraurant />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
