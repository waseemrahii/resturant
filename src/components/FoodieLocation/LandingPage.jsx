import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocationCard from "./LocationCard";
import FooterTop from "./Footer/FooterTop";
import logo from "../../../public/logo-e.png";
import { TbCurrentLocation } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LandingPage = ({ onLocationSet }) => {
  const [location, setLocation] = useState("");

  const handleLocateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          reverseGeocode(latitude, longitude);
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const reverseGeocode = async (latitude, longitude) => {
    // Example implementation of reverse geocoding
    // Replace this with a real reverse geocoding API call
    const address = `Address for (${latitude}, ${longitude})`; // Placeholder address
    setLocation(address);
    onLocationSet(); // Notify RootLayout that location is set
  };

  const handleContinue = () => {
    if (location) {
      onLocationSet(); // Notify RootLayout that location is set
    } else {
      alert("Please enter or detect your location.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="overflow-hidden flex flex-col-reverse md:flex-row justify-between items-center  ">
        <div className="relative md:w-1/2 flex flex-col gap-5">
          <div className="absolute left-0 top-72 hidden  lg:block">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTdvpOQAOAcxVvAO2KgV4L_puc0Xc7ILW85w4wAub0ST--KEIzU"
              alt="img"
              className="h-20 w-20 opacity-70"
            />
          </div>
          <div className="absolute top-14 right-0 hidden lg:block">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxbHXGOt9h44LdPd5TudS_yGkc1Ufo6gsMdMgtEyPsz9RTLJ1Y"
              alt="img"
              className="h-20 w-20 opacity-70"
            />
          </div>
          <div className="px-4 md:px-20 py-5 flex flex-col gap-5">
            <img src={logo} alt="Foodie Logo" className="h-16 w-28" />
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
              We’re always in the mood for delivering food
            </h1>
            <p className="text-gray-500 text-lg md:text-xl">
              Get Faster and Reliable food deliveries with the foodie food
              delivery app.
            </p>

            <form className="relative flex items-center w-full">
              <input
                type="text"
                placeholder="Enter Your Location"
                className="w-full px-4 py-3 bg-white rounded-sm border border-gray-200 focus:outline-none focus:border-red-500"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 inset-y-0 flex items-center text-gray-600 hover:text-gray-800"
                onClick={handleLocateMe}
              >
                <TbCurrentLocation className="text-xl font-bold mr-2" />
                <span className="text-sm">Locate Me</span>
              </button>
            </form>

            <div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>

            {/* <form
              // onSubmit={handleSubmit}
              className="relative flex items-center w-full"
            >
              <input
                type="text"
                placeholder="Enter Your Location"
                className="w-full px-4 py-3 bg-white rounded-sm border border-gray-200 focus:outline-none focus:border-red-500"
                // value={location}
                // onChange={(e) => setLocation(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 inset-y-0 flex items-center text-gray-600 hover:text-gray-800"
                // onClick={handleLocateMe}
              >
                <TbCurrentLocation className="text-xl font-bold mr-2" />
                <span className="text-sm">Locate Me</span>
              </button>
            </form>

            <div>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600">
                Continue
              </button>
            </div> */}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://foodieweb.siswebapp.com/img/hero_img.png"
            alt="Food and Drinks"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="overflow-hidden bg-[#1F1F1F] py-12 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 md:mx-[6rem]">
          <LocationCard
            name="Swift Delivery"
            img="https://foodieweb.siswebapp.com/img/swift_delivery.png"
            details="Experience lightning-fast delivery with our app."
          />
          <LocationCard
            img="https://foodieweb.siswebapp.com/img/order_online.png"
            name="Order Online"
            details="Order online from your office, home, or anywhere and get it delivered to your doorstep."
          />
          <LocationCard
            img="https://foodieweb.siswebapp.com/img/live+tracking.png"
            name="Live Order Tracking"
            details="Track your order from the vendor to your doorstep."
          />
        </div>
      </div>

      {/* Download Section */}
      <section className="overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-20 py-12 items-center">
        <div className="relative flex flex-col justify-center gap-5">
          <div className="absolute left-1 inset-0 flex justify-start items-start">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6P6TXO7vcRWO_wUVQOFf13OvFvQ26Aweat8KOYQR6AoT9hhV0-P0zRgXVJyN2KO2R5TM&usqp=CAU"
              alt="line"
              className="opacity-30  w-40"
            />
          </div>

          <h1 className="relative text-3xl md:text-4xl font-bold">
            All Vendors at your Finger Touch
          </h1>
          <p className="relative text-gray-500 text-lg md:text-xl">
            It is a great time to order your favorite food. Let foodie order
            foods from your store with a few clicks from their mobile with the
            help of the Foodie App.
          </p>

          <div className="relative w-full pt-5 text-start">
            <h1 className="text-xl font-bold">Download Foodie App Today!</h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-5">
              <img
                src="https://foodieweb.siswebapp.com/img/appstore.png"
                alt="App Store"
                className="h-12 sm:h-14 md:h-16 w-40 sm:w-44 md:w-52"
              />
              <img
                src="https://foodieweb.siswebapp.com/img/playmarket.png"
                alt="Play Store"
                className="h-12 sm:h-14 md:h-16 w-40 sm:w-44 md:w-52"
              />
            </div>
          </div>
        </div>

        <div className="w-full   md:w-4/4">
          <img
            src="https://foodieweb.siswebapp.com/img/all_vendor.png"
            alt="Vendors"
            className="w-full h-full  mt-6 md:mt-0 object-contain"
          />
        </div>
      </section>

      {/* footer */}

      <div className="overflow-hidden relative ">
        <img
          src="https://foodieweb.siswebapp.com/img/footer-bg.jpg"
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
          alt="Footer background"
        />
        <div className="w-full h-full bg-black opacity-90 absolute top-0 left-0 z-10"></div>

        <div className="relative z-20">
          <FooterTop />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
