// import { Carousel } from "antd";
// import React from "react";

// const Carusal = () => {
//   const items = [
//     {
//       src: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbanner.png?alt=media&token=f3117d29-8280-4c57-b019-e4d8a33cca50",
//       alt: "Banner 1",
//     },
//     {
//       src: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fhm-banner4.png?alt=media&token=7c853972-d8c8-4187-a872-8e345486cef4",
//       alt: "Banner 2",
//     },
//     {
//       src: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fhm-banner3.png?alt=media&token=9c21f78a-9d3e-4ea2-bae2-39034729fdb7",
//       alt: "Banner 3",
//     },
//   ];
//   return (
//     <>
//       <div className="w-full">
//         <Carousel arrows={true} infinite={true} autoplay autoplaySpeed={1000} className=" overflow-hidden">
//           {items.map((item, index) => (
//             <div key={index} className="items-center w-full lg:h-[70vh] md:h-[50vh] sm:h-[20vh]"> {/* Responsive height */}
//               <img
//                 src={item.src}
//                 alt={item.alt}
//                 className="h-full  object-cover" // Responsive image sizing
//               />
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </>
//   );
// }
// export default Carusal;


import { Carousel } from "antd"

const Carusal = () => {
  const items = [
    {
      src: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Pakistani Cuisine",
      title: "Authentic Pakistani Flavors",
      subtitle: "Discover the rich taste of traditional dishes",
    },
    {
      src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      alt: "Biryani Special",
      title: "Biryani Festival",
      subtitle: "Enjoy the king of rice dishes from top restaurants",
    },
    {
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      alt: "BBQ Delights",
      title: "BBQ Extravaganza",
      subtitle: "Sizzling hot BBQ from Pakistan's finest",
    },
  ]
  return (
    <>
      <div className="w-full">
        <Carousel arrows={true} infinite={true} autoplay autoplaySpeed={3000} className="overflow-hidden">
          {items.map((item, index) => (
            <div key={index} className="relative items-center w-full lg:h-[70vh] md:h-[50vh] sm:h-[20vh]">
              <img
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                className="h-full w-full object-cover brightness-75"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">{item.title}</h1>
                <p className="text-lg md:text-xl drop-shadow-lg">{item.subtitle}</p>
                <button className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  )
}
export default Carusal
