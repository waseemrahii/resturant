import React from "react";
import FooterContectUs from "./FooterContectUs";
import FooterCopyRight from "./FooterCopyRight";
import logo from "../../../public/logo-e.png";
const socialMediaIcons = [
  {
    name: "Facebook",
    url: "https://cdn.iconscout.com/icon/free/png-512/free-facebook-75-189796.png?f=webp&w=256",
    alt: "Facebook",
  },
  {
    name: "Instagram",
    url: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png",
    alt: "Instagram",
  },
  {
    name: "YouTube",
    url: "https://cdn.iconscout.com/icon/free/png-512/free-youtube-3691236-3073756.png?f=webp&w=256",
    alt: "YouTube",
  },
  {
    name: "Twitter",
    url: "https://cdn.iconscout.com/icon/free/png-512/free-twitter-34-83443.png?f=webp&w=256",
    alt: "Twitter",
  },
];

const services = ["Delivery support", "Contact us", "Terms of use", "About us"];
const userLinks = ["User login", "User Register", "Account Setting"];

const FooterTop = () => {
  return (
    <>
      <div className="relative z-20 bg-transparent text-white bg-gray-800">
        {/* Main Footer Content */}

        <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-6 items-center p-5 md:items-start text-center md:text-left ">
          <div className=" flex flex-col items-center md:items-start">
            <img src={logo} className="h-16" alt="E-Market Logo" />
            <div className="p-4">
              <p className="font-semibold  leading-relaxed md:leading-loose">
                Lorem Ipsum is simply dummy text of the printing <br /> and
                typesetting industry. Lorem Ipsum has been the <br /> industry's
                standard dummy text ever since the 1500s, when an <br /> unknown
                printer took a galley of type and scrambled it <br /> to make a
                type specimen book.
              </p>
            </div>
            <div className="flex flex-row justify-center p-4 md:justify-start gap-4 md:gap-6">
              {socialMediaIcons.map((icon) => (
                <div
                  key={icon.name}
                  className="w-12 h-12 md:w-10 md:h-10 lg:w-8 lg:h-8"
                >
                  <img
                    src={icon.url}
                    alt={icon.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className=" md:mt-0 p-5 md:p-0">
            <h1 className="font-bold text-xl">SERVICES</h1>
            <div className="mt-2 flex justify-center md:justify-start items-center">
              <div className="w-8 h-1 bg-red-500"></div>
              <div className="w-16 h-1 bg-gray-200"></div>
            </div>
            <ul className="mt-4 space-y-2 md:space-y-4">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div className=" md:mt-0 p-5 md:p-0">
            <h1 className="font-bold text-xl">FOR USERS</h1>
            <div className="mt-2 flex justify-center md:justify-start items-center">
              <div className="w-8 h-1 bg-red-500"></div>
              <div className="w-16 h-1 bg-gray-200"></div>
            </div>
            <ul className="mt-4 space-y-2 md:space-y-4">
              {userLinks.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="border-b border-gray-300 w-full md:w-[80vw] mx-4 md:mx-[1.5rem]"></div> */}
        <div className="flex justify-center items-center ">
          <div className="border-b border-gray-300 w-[70%] "></div>
        </div>
      </div>

      {/* Footer Contact Us Section */}
      <div className="relative z-20 p-5 text-white text-center">
        <FooterContectUs />
      </div>

      {/* Footer Copy Right Section */}
      <div className="relative z-20 text-white text-center">
        <FooterCopyRight />
      </div>
    </>
  );
};

export default FooterTop;
