
import React from "react";
import FooterTop from "./FooterTop";
// import FooterContectUs from './FooterContectUs'
// import FooterCopyRight from './FooterCopyRight'

const Footer = () => {
  return (
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
  );
};

export default Footer;



// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"
// import { IoLocationOutline, IoMailOutline, IoCallOutline } from "react-icons/io5"
// import { Link } from "react-router-dom"
// import logo from "../../../public/logo-e.png"

// const Footer = () => {
//   const year = new Date().getFullYear()

//   return (
//     <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-16 pb-8">
//       <div className="container-custom">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {/* Column 1 - About */}
//           <div>
//             <div className="flex items-center mb-6">
//               <img src={logo || "/placeholder.svg"} alt="Foodie" className="h-12 mr-3" />
//               <h2 className="text-2xl font-bold gradient-text">Foodie</h2>
//             </div>
//             <p className="text-gray-300 mb-6">
//               Pakistan's favorite food delivery app. Bringing the best restaurants and dishes right to your doorstep
//               with fast delivery and exceptional service.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-accent-primary transition-colors duration-300"
//               >
//                 <FaFacebookF />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-accent-primary transition-colors duration-300"
//               >
//                 <FaTwitter />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-accent-primary transition-colors duration-300"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-accent-primary transition-colors duration-300"
//               >
//                 <FaYoutube />
//               </a>
//             </div>
//           </div>

//           {/* Column 2 - Quick Links */}
//           <div>
//             <h3 className="text-xl font-bold mb-6 relative">
//               Quick Links
//               <span className="absolute bottom-0 left-0 w-16 h-1 bg-accent-primary rounded-full -mb-2"></span>
//             </h3>
//             <ul className="space-y-3">
//               {["Home", "About Us", "Restaurants", "Menu", "Contact Us", "Privacy Policy"].map((item) => (
//                 <li key={item}>
//                   <Link
//                     to="/"
//                     className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center"
//                   >
//                     <span className="mr-2">›</span> {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3 - Contact */}
//           <div>
//             <h3 className="text-xl font-bold mb-6 relative">
//               Contact Us
//               <span className="absolute bottom-0 left-0 w-16 h-1 bg-accent-primary rounded-full -mb-2"></span>
//             </h3>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <IoLocationOutline className="text-accent-primary text-xl mt-1 mr-3 flex-shrink-0" />
//                 <span className="text-gray-300">
//                   C-407, Ganesh Meridian, Opp. Amiraj Farm, Ahmedabad - 380013, Pakistan
//                 </span>
//               </li>
//               <li className="flex items-center">
//                 <IoMailOutline className="text-accent-primary text-xl mr-3 flex-shrink-0" />
//                 <a
//                   href="mailto:info@foodie.com"
//                   className="text-gray-300 hover:text-white transition-colors duration-300"
//                 >
//                   info@foodie.com
//                 </a>
//               </li>
//               <li className="flex items-center">
//                 <IoCallOutline className="text-accent-primary text-xl mr-3 flex-shrink-0" />
//                 <a href="tel:+923161887004" className="text-gray-300 hover:text-white transition-colors duration-300">
//                   +92 316 188 7004
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Column 4 - Download App */}
//           <div>
//             <h3 className="text-xl font-bold mb-6 relative">
//               Download App
//               <span className="absolute bottom-0 left-0 w-16 h-1 bg-accent-primary rounded-full -mb-2"></span>
//             </h3>
//             <p className="text-gray-300 mb-4">Get the Foodie App for the best experience</p>
//             <div className="flex flex-col space-y-3">
//               <a href="#" className="transition-transform duration-300 hover:scale-105">
//                 <img src="https://foodieweb.siswebapp.com/img/appstore.png" alt="App Store" className="h-12" />
//               </a>
//               <a href="#" className="transition-transform duration-300 hover:scale-105">
//                 <img src="https://foodieweb.siswebapp.com/img/playmarket.png" alt="Play Store" className="h-12" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-700 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-sm mb-4 md:mb-0">
//               © {year} Foodie. All rights reserved. Designed with ❤️ in Pakistan
//             </p>
//             <div className="flex space-x-6">
//               <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
//                 Terms of Service
//               </Link>
//               <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
//                 Privacy Policy
//               </Link>
//               <Link to="/contact-us" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
//                 Support
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer
