import { Carousel } from "antd";
import React from "react";

const Carusal = () => {
  const items = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbanner.png?alt=media&token=f3117d29-8280-4c57-b019-e4d8a33cca50",
      alt: "Banner 1",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fhm-banner4.png?alt=media&token=7c853972-d8c8-4187-a872-8e345486cef4",
      alt: "Banner 2",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fhm-banner3.png?alt=media&token=9c21f78a-9d3e-4ea2-bae2-39034729fdb7",
      alt: "Banner 3",
    },
  ];
  return (
    <>
      <div className="w-full">
        <Carousel arrows={true} infinite={true} autoplay autoplaySpeed={1000} className=" overflow-hidden">
          {items.map((item, index) => (
            <div key={index} className="items-center w-full lg:h-[70vh] md:h-[50vh] sm:h-[20vh]"> {/* Responsive height */}
              <img
                src={item.src}
                alt={item.alt}
                className="h-full  object-cover" // Responsive image sizing
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
export default Carusal;