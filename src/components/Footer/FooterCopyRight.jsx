import React from "react";

const FooterCopyRight = () => {
  return (
    <div className="w-full mx-auto">
      <div className="bg-black flex flex-col  justify-center  gap-5 md:gap-[12%] items-center md:flex-row  h-auto md:h-16 border-t border-black mt-3  md:p-0">
        <p className="text-white mt-2 md:mt-0 ml-0 md:ml-12">
          ©2024 Foodie. All rights reserved
        </p>
        <div className="flex gap-2 mt-2   md:mt-0">
          <img
            src="https://foodieweb.siswebapp.com/img/appstore.png"
            className="h-10"
            alt="App Store"
          />
          <img
            src="https://foodieweb.siswebapp.com/img/playmarket.png"
            className="h-10"
            alt="Play Market"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterCopyRight;
