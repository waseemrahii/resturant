
// import React from "react";
// import FooterTop from "./FooterTop";
// // import FooterContectUs from './FooterContectUs'
// // import FooterCopyRight from './FooterCopyRight'

// const Footer = () => {
//   return (
//     <div className="overflow-hidden relative ">
//       <img
//         src="https://foodieweb.siswebapp.com/img/footer-bg.jpg"
//         className="w-full h-full object-cover absolute top-0 left-0 z-0"
//         alt="Footer background"
//       />
//       <div className="w-full h-full bg-black opacity-90 absolute top-0 left-0 z-10"></div>

//       <div className="relative z-20">
//         <FooterTop />
//       </div>
//     </div>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Left Column - Logo and Social */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img src="/logoemart.png" alt="6amMart Logo" className="h-12" />
            </Link>

            <p className="text-gray-600 mb-6">Connect with our social media and other sites to keep up to date</p>

            <div className="flex space-x-4 mb-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-green-100 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-green-100 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-green-100 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-green-100 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-green-100 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors"
              >
                <FaPinterestP size={18} />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex items-center bg-gray-900 text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors"
              >
                <div className="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.03 7.03 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center bg-gray-900 text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors"
              >
                <div className="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Download ON</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Links and Contact */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/vendor" className="text-gray-600 hover:text-green-500">
                      Become a Vendor owner
                    </Link>
                  </li>
                  <li>
                    <Link to="/delivery" className="text-gray-600 hover:text-green-500">
                      Become a delivery man
                    </Link>
                  </li>
                  <li>
                    <Link to="/support" className="text-gray-600 hover:text-green-500">
                      Help & Support
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-gray-600 hover:text-green-500">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/track-order" className="text-gray-600 hover:text-green-500">
                      Track Order
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Send Us Mails</h4>
                    <a href="mailto:support@6amtech.com" className="text-gray-600 hover:text-green-500">
                      support@6amtech.com
                    </a>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Contact Us</h4>
                    <a href="tel:01700000000" className="text-gray-600 hover:text-green-500">
                      01700000000
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="font-bold text-lg mb-4">Find Us Here</h3>
                <p className="text-gray-600">00 ST, NY 10011</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Policies */}
      <div className="border-t border-gray-200 py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">2021-{year} 6amMart.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link to="/terms" className="text-gray-500 text-sm hover:text-green-500">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-green-500">
                Privacy Policy
              </Link>
              <Link to="/refund" className="text-gray-500 text-sm hover:text-green-500">
                Refund Policy
              </Link>
              <Link to="/cancellation" className="text-gray-500 text-sm hover:text-green-500">
                Cancellation Policy
              </Link>
              <Link to="/shipping" className="text-gray-500 text-sm hover:text-green-500">
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
