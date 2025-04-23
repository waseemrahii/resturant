// // "use client"

// // import { useState } from "react"
// // import { Link } from "react-router-dom"
// // import { FaEye, FaEyeSlash, FaMapMarkerAlt } from "react-icons/fa"
// // import { IoIosArrowForward } from "react-icons/io"

// // const VendorRegistration = () => {
// //   const [currentStep, setCurrentStep] = useState(1)
// //   const [showPassword, setShowPassword] = useState(false)
// //   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
// //   const [formData, setFormData] = useState({
// //     vendorName: "",
// //     vendorAddress: "",
// //     businessType: "",
// //     businessModule: "",
// //     vatTax: "",
// //     minDeliveryTime: "",
// //     maxDeliveryTime: "",
// //     durationType: "Hour",
// //     firstName: "",
// //     lastName: "",
// //     phone: "",
// //     email: "",
// //     password: "",
// //     confirmPassword: "",
// //     logo: null,
// //     coverPhoto: null,
// //   })

// //   const handleChange = (e) => {
// //     const { name, value } = e.target
// //     setFormData((prev) => ({ ...prev, [name]: value }))
// //   }

// //   const handleFileChange = (e) => {
// //     const { name, files } = e.target
// //     if (files && files[0]) {
// //       setFormData((prev) => ({ ...prev, [name]: files[0] }))
// //     }
// //   }

// //   const nextStep = () => {
// //     setCurrentStep((prev) => Math.min(prev + 1, 3))
// //   }

// //   const prevStep = () => {
// //     setCurrentStep((prev) => Math.max(prev - 1, 1))
// //   }

// //   const handleSubmit = (e) => {
// //     e.preventDefault()
// //     // Here you would typically send the data to your backend
// //     console.log("Form submitted:", formData)
// //     // Redirect or show success message
// //     alert("Registration submitted successfully!")
// //   }

// //   const togglePasswordVisibility = () => {
// //     setShowPassword(!showPassword)
// //   }

// //   const toggleConfirmPasswordVisibility = () => {
// //     setShowConfirmPassword(!showConfirmPassword)
// //   }

// //   return (
// //     <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-8">
// //       <div className="max-w-6xl mx-auto">
// //         <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Vendor Application</h1>

// //         {/* Progress Steps */}
// //         <div className="flex items-center justify-center mb-10">
// //           <div
// //             className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 1 ? "bg-green-500" : "bg-gray-300"} text-white font-bold`}
// //           >
// //             1
// //           </div>
// //           <div
// //             className={`h-1 w-16 md:w-32 ${currentStep >= 2 ? "bg-green-500" : "bg-gray-300"} flex items-center justify-center`}
// //           >
// //             <IoIosArrowForward className="text-white text-xl" />
// //           </div>
// //           <div
// //             className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 2 ? "bg-green-500" : "bg-gray-300"} text-white font-bold`}
// //           >
// //             2
// //           </div>
// //           <div
// //             className={`h-1 w-16 md:w-32 ${currentStep >= 3 ? "bg-green-500" : "bg-gray-300"} flex items-center justify-center`}
// //           >
// //             <IoIosArrowForward className="text-white text-xl" />
// //           </div>
// //           <div
// //             className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 3 ? "bg-green-500" : "bg-gray-300"} text-white font-bold`}
// //           >
// //             3
// //           </div>
// //         </div>

// //         <div className="text-center mb-6">
// //           <span className={`font-medium ${currentStep === 1 ? "text-green-500" : "text-gray-500"}`}>
// //             General Information
// //           </span>
// //           <span className="mx-4 text-gray-300">|</span>
// //           <span className={`font-medium ${currentStep === 2 ? "text-green-500" : "text-gray-500"}`}>Business Plan</span>
// //           <span className="mx-4 text-gray-300">|</span>
// //           <span className={`font-medium ${currentStep === 3 ? "text-green-500" : "text-gray-500"}`}>
// //             Complete Registration
// //           </span>
// //         </div>

// //         <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
// //           <form onSubmit={handleSubmit}>
// //             {/* Step 1: Vendor Info */}
// //             {currentStep === 1 && (
// //               <div>
// //                 <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Vendor Info</h2>

// //                 <div className="mb-6">
// //                   <label className="block text-gray-700 text-sm font-medium mb-2">Language</label>
// //                   <div className="flex space-x-4">
// //                     <button
// //                       type="button"
// //                       className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
// //                     >
// //                       English
// //                     </button>
// //                     <button
// //                       type="button"
// //                       className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
// //                     >
// //                       Arabic
// //                     </button>
// //                   </div>
// //                 </div>

// //                 <div className="mb-6">
// //                   <label htmlFor="vendorName" className="block text-gray-700 text-sm font-medium mb-2">
// //                     Vendor Name *
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="vendorName"
// //                     name="vendorName"
// //                     value={formData.vendorName}
// //                     onChange={handleChange}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //                     required
// //                   />
// //                 </div>

// //                 <div className="mb-6">
// //                   <label htmlFor="vendorAddress" className="block text-gray-700 text-sm font-medium mb-2">
// //                     Vendor Address *
// //                   </label>
// //                   <div className="relative">
// //                     <input
// //                       type="text"
// //                       id="vendorAddress"
// //                       name="vendorAddress"
// //                       value={formData.vendorAddress}
// //                       onChange={handleChange}
// //                       className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //                       required
// //                     />
// //                     <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
// //                   </div>
// //                 </div>

// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// //                   <div>
// //                     <label htmlFor="businessType" className="block text-gray-700 text-sm font-medium mb-2">
// //                       Business Type
// //                     </label>
// //                     <select
// //                       id="businessType"
// //                       name="businessType"
// //                       value={formData.businessType}
// //                       onChange={handleChange}
// //                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //                     >
// //                       <option value="">Select Business Type</option>
// //                       <option value="restaurant">Restaurant</option>
// //                       <option value="grocery">Grocery</option>
// //                       <option value="pharmacy">Pharmacy</option>
// //                       <option value="shop">Shop</option>
// //                     </select>
// //                   </div>

// //                   <div>
// //                     <label htmlFor="businessModule" className="block text-gray-700 text-sm font-medium mb-2">
// //                       Business Module
// //                     </label>
// //                     <select
// //                       id="businessModule"
// //                       name="businessModule"
// //                       value={formData.businessModule}
// //                       onChange={handleChange}
// //                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //                     >
// //                       <option value="">Select Module</option>
// //                       <option value="food">Food</option>
// //                       <option value="grocery">Grocery</option>
// //                       <option value="pharmacy">Pharmacy</option>
// //                       <option value="ecommerce">E-commerce</option>
// //                     </select>
// //                   </div>
// //                 </div>

// //                 <div className="mb-6">
// //                   <label htmlFor="vatTax" className="block text-gray-700 text-sm font-medium mb-2">
// //                     VAT/TAX (%)
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="vatTax"
// //                     name="vatTax"
// //                     value={formData.vatTax}
// //                     onChange={handleChange}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //                   />
// //                 </div>

// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
// //                   <div>
// //                     <label htmlFor="minDeliveryTime" className="block text-gray-700 text-sm font-medium mb-2">
// //                       Minimum Delivery Time *
// //                     </label>
// //                     <input
// //                       type="number"
// //                       id="minDeliveryTime"
// //                       name="minDeliveryTime"
// //                       value={formData.minDeliveryTime}
// //                       onChange={handleChange}
// //                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //                       required
// //                     />
// //                   </div>

// //                   <div>
// //                     <label htmlFor="maxDeliveryTime" className="block text-gray-700 text-sm font-medium mb-2">
// //                       Maximum Delivery Time *
// //                     </label>
// //                     <input
// //                       type="number"
// //                       id="maxDeliveryTime"
// //                       name="maxDeliveryTime"
// //                       value={formData.maxDeliveryTime}
// //                       onChange={handleChange}
// //                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //                       required
// //                     />
// //                   </div>

// //                   <div>
// //                     <label htmlFor="durationType" className="block text-gray-700 text-sm font-medium mb-2">
// //                       Duration Type
// //                     </label>
// //                     <select
// //                       id="durationType"
// //                       name="durationType"
// //                       value={formData.durationType}
// //                       onChange={handleChange}
// //                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //                     >
// //                       <option value="Hour">Hour</option>
// //                       <option value="Minute">Minute</option>
// //                       <option value="Day">Day</option>
// //                     </select>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Step 2: Owner Information */}
// //             {currentStep === 2 && (
// //               <div>
// //                 <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Owner Information</h2>

// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// //                   <div>
// //                     <label htmlFor="firstName" className="block text-gray-700 text-sm font-medium mb-2">
// //                       First Name *
// //                     </label>
// //                     <input
// //                       type="text"
// //                       id="firstName"
// //                       name="firstName"
// //                       value={formData.firstName}
// //                       onChange={handleChange}
// //                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //                       required
// //                     />
// //                   </div>

// //                   <div>
// //                     <label htmlFor="lastName" className="block text-gray-700 text-sm font-medium mb-2">
// //                       Last Name *
// //                     </label>
// //                     <input
// //                       type="text"
// //                       id="lastName"
// //                       name="lastName"
// //                       value={formData.lastName}
// //                       onChange={handleChange}
// //                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //                       required
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="mb-6">
// //                   <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
// //                     Phone *
// //                   </label>
// //                   <div className="flex">
// //                     <select className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500">
// //                       <option>+1</option>
// //                       <option>+91</option>
// //                       <option>+44</option>
// //                       <option>+966</option>
// //                     </select>
// //                     <input
// //                       type="tel"
// //                       id="phone"
// //                       name="phone"
// //                       value={formData.phone}
// //                       onChange={handleChange}
// //                       className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //                       required
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="mb-6">
// //                   <label htmlFor="logo" className="block text-gray-700 text-sm font-medium mb-2">
// //                     Logo
// //                   </label>
// //                   <div className="flex flex-col md:flex-row gap-6">
// //                     <div className="flex-1">
// //                       <input
// //                         type="file"
// //                         id="logo"
// //                         name="logo"
// //                         onChange={handleFileChange}
// //                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //                         accept="image/*"
// //                       />
// //                       <p className="text-xs text-gray-500 mt-1">JPG, JPEG, PNG, Max Size: 2MB, Ratio: 1:1</p>
// //                     </div>
// //                     <div className="w-32 h-32 bg-gray-100 rounded-md flex items-center justify-center">
// //                       {formData.logo ? (
// //                         <img
// //                           src={URL.createObjectURL(formData.logo) || "/placeholder.svg"}
// //                           alt="Logo Preview"
// //                           className="max-w-full max-h-full object-contain"
// //                         />
// //                       ) : (
// //                         <span className="text-gray-400">Logo Preview</span>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="mb-6">
// //                   <label htmlFor="coverPhoto" className="block text-gray-700 text-sm font-medium mb-2">
// //                     Cover Photo
// //                   </label>
// //                   <div className="flex flex-col md:flex-row gap-6">
// //                     <div className="flex-1">
// //                       <input
// //                         type="file"
// //                         id="coverPhoto"
// //                         name="coverPhoto"
// //                         onChange={handleFileChange}
// //                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //                         accept="image/*"
// //                       />
// //                       <p className="text-xs text-gray-500 mt-1">JPG, JPEG, PNG, Max Size: 2MB, Ratio: 3:1</p>
// //                     </div>
// //                     <div className="w-32 h-32 bg-gray-100 rounded-md flex items-center justify-center">
// //                       {formData.coverPhoto ? (
// //                         <img
// //                           src={URL.createObjectURL(formData.coverPhoto) || "/placeholder.svg"}
// //                           alt="Cover Photo Preview"
// //                           className="max-w-full max-h-full object-contain"
// //                         />
// //                       ) : (
// //                         <span className="text-gray-400">Cover Preview</span>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Step 3: Account Info */}
// //             {currentStep === 3 && (
// //               <div>
// //                 <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Account Info</h2>

// //                 <div className="mb-6">
// //                   <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
// //                     Email *
// //                   </label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //                     required
// //                   />
// //                 </div>

// //                 <div className="mb-6">
// //                   <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
// //                     Password *
// //                   </label>
// //                   <div className="relative">
// //                     <input
// //                       type={showPassword ? "text" : "password"}
// //                       id="password"
// //                       name="password"
// //                       value={formData.password}
// //                       onChange={handleChange}
// //                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //                       required
// //                     />
// //                     <button
// //                       type="button"
// //                       onClick={togglePasswordVisibility}
// //                       className="absolute inset-y-0 right-0 pr-3 flex items-center"
// //                     >
// //                       {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
// //                     </button>
// //                   </div>
// //                 </div>

// //                 <div className="mb-6">
// //                   <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-2">
// //                     Confirm Password *
// //                   </label>
// //                   <div className="relative">
// //                     <input
// //                       type={showConfirmPassword ? "text" : "password"}
// //                       id="confirmPassword"
// //                       name="confirmPassword"
// //                       value={formData.confirmPassword}
// //                       onChange={handleChange}
// //                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //                       required
// //                     />
// //                     <button
// //                       type="button"
// //                       onClick={toggleConfirmPasswordVisibility}
// //                       className="absolute inset-y-0 right-0 pr-3 flex items-center"
// //                     >
// //                       {showConfirmPassword ? (
// //                         <FaEyeSlash className="text-gray-400" />
// //                       ) : (
// //                         <FaEye className="text-gray-400" />
// //                       )}
// //                     </button>
// //                   </div>
// //                 </div>

// //                 <div className="mb-6">
// //                   <div className="flex items-center">
// //                     <input
// //                       id="terms"
// //                       type="checkbox"
// //                       className="h-4 w-4 text-green-500 focus:ring-green-400 border-gray-300 rounded"
// //                     />
// //                     <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
// //                       I agree to the{" "}
// //                       <Link to="/terms-and-conditions" className="text-green-500 hover:text-green-600">
// //                         Terms and Conditions
// //                       </Link>
// //                     </label>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             <div className="flex justify-between mt-8">
// //               {currentStep > 1 ? (
// //                 <button
// //                   type="button"
// //                   onClick={prevStep}
// //                   className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
// //                 >
// //                   Back
// //                 </button>
// //               ) : (
// //                 <div></div>
// //               )}

// //               {currentStep < 3 ? (
// //                 <button
// //                   type="button"
// //                   onClick={nextStep}
// //                   className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none"
// //                 >
// //                   Next
// //                 </button>
// //               ) : (
// //                 <div className="flex gap-4">
// //                   <button
// //                     type="button"
// //                     className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
// //                     onClick={() => {
// //                       setFormData({
// //                         vendorName: "",
// //                         vendorAddress: "",
// //                         businessType: "",
// //                         businessModule: "",
// //                         vatTax: "",
// //                         minDeliveryTime: "",
// //                         maxDeliveryTime: "",
// //                         durationType: "Hour",
// //                         firstName: "",
// //                         lastName: "",
// //                         phone: "",
// //                         email: "",
// //                         password: "",
// //                         confirmPassword: "",
// //                         logo: null,
// //                         coverPhoto: null,
// //                       })
// //                       setCurrentStep(1)
// //                     }}
// //                   >
// //                     Reset
// //                   </button>
// //                   <button
// //                     type="submit"
// //                     className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none"
// //                   >
// //                     Submit
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default VendorRegistration



// "use client"

// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { ArrowLeft, ArrowRight, Check, MapPin, Upload, Eye, EyeOff, Store, User, Mail, Phone, Lock } from "lucide-react"

// const VendorRegistration = () => {
//   const [step, setStep] = useState(1)
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//   const nextStep = () => {
//     if (step < 3) setStep(step + 1)
//   }

//   const prevStep = () => {
//     if (step > 1) setStep(step - 1)
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen py-12">
//       <div className="container mx-auto px-4 max-w-5xl">
//         <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Home
//         </Link>

//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-[#FF6637] to-[#FF8E6B] px-8 py-6 text-white">
//             <h1 className="text-2xl font-bold">Vendor Application</h1>
//             <p className="text-white/80">Join 6amMart and start selling your products</p>
//           </div>

//           {/* Progress Steps */}
//           <div className="px-8 py-6 border-b">
//             <div className="flex items-center justify-between max-w-2xl mx-auto">
//               <div className="flex flex-col items-center">
//                 <div
//                   className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? "bg-[#FF6637] text-white" : "bg-gray-200 text-gray-500"}`}
//                 >
//                   {step > 1 ? <Check className="w-5 h-5" /> : "1"}
//                 </div>
//                 <span className="text-sm mt-2 text-gray-600">General Information</span>
//               </div>

//               <div className={`flex-1 h-1 mx-2 ${step >= 2 ? "bg-[#FF6637]" : "bg-gray-200"}`}></div>

//               <div className="flex flex-col items-center">
//                 <div
//                   className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? "bg-[#FF6637] text-white" : "bg-gray-200 text-gray-500"}`}
//                 >
//                   {step > 2 ? <Check className="w-5 h-5" /> : "2"}
//                 </div>
//                 <span className="text-sm mt-2 text-gray-600">Business Plan</span>
//               </div>

//               <div className={`flex-1 h-1 mx-2 ${step >= 3 ? "bg-[#FF6637]" : "bg-gray-200"}`}></div>

//               <div className="flex flex-col items-center">
//                 <div
//                   className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? "bg-[#FF6637] text-white" : "bg-gray-200 text-gray-500"}`}
//                 >
//                   "3"
//                 </div>
//                 <span className="text-sm mt-2 text-gray-600">Complete Registration</span>
//               </div>
//             </div>
//           </div>

//           {/* Form Content */}
//           <div className="p-8">
//             {step === 1 && (
//               <div>
//                 <h2 className="text-xl font-semibold mb-6">Vendor Info</h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Vendor Name *</label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <Store className="h-5 w-5 text-gray-400" />
//                       </div>
//                       <input
//                         type="text"
//                         className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6637] focus:ring-[#FF6637] sm:text-sm h-10 border px-3"
//                         placeholder="Enter your business name"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Vendor Address *</label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <MapPin className="h-5 w-5 text-gray-400" />
//                       </div>
//                       <input
//                         type="text"
//                         className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6637] focus:ring-[#FF6637] sm:text-sm h-10 border px-3"
//                         placeholder="Enter your business address"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-8">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Business Type *</label>
//                   <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6637] focus:ring-[#FF6637] sm:text-sm h-10 border px-3">
//                     <option value="">Select business type</option>
//                     <option value="restaurant">Restaurant</option>
//                     <option value="grocery">Grocery</option>
//                     <option value="pharmacy">Pharmacy</option>
//                     <option value="shop">Shop</option>
//                   </select>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Delivery Time *</label>
//                     <div className="flex items-center">
//                       <input
//                         type="number"
//                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6637] focus:ring-[#FF6637] sm:text-sm h-10 border px-3"
//                         placeholder="30"
//                       />
//                       <span className="ml-2 text-gray-500">minutes</span>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Delivery Time *</label>
//                     <div className="flex items-center">
//                       <input
//                         type="number"
//                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6637] focus:ring-[#FF6637] sm:text-sm h-10 border px-3"
//                         placeholder="60"
//                       />
//                       <span className="ml-2 text-gray-500">minutes</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-8">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Location on Map</label>
//                   <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
//                     <div className="text-center">
//                       <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
//                       <p className="text-gray-500">Map will be displayed here</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {step === 2 && (
//               <div>
//                 <h2 className="text-xl font-semibold mb-6">Business Media</h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Cover Photo</label>
//                     <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//                       <div className="space-y-1 text-center">
//                         <Upload className="mx-auto h-12 w-12 text-gray-400" />
//                         <div className="flex text-sm text-gray-600">
//                           <label className="relative cursor-pointer bg-white rounded-md font-medium text-[#FF6637] hover:text-[#FF8E6B]">
//                             <span>Upload a file</span>
//                             <input type="file" className="sr-only" />
//                           </label>
//                           <p className="pl-1">or drag and drop</p>
//                         </div>
//                         <p className="text-xs text-gray-500">PNG, JPG, GIF up to 2MB</p>
//                       </div>
//                     </div>
//                     <p className="mt-2 text-xs text-gray-500">Recommended: 2000×700 px</p>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Logo</label>
//                     <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//                       <div className="space-y-1 text-center">
//                         <Upload className="mx-auto h-12 w-12 text-gray-400" />
//                         <div className="flex text-sm text-gray-600">
//                           <label className="relative cursor-pointer bg-white rounded-md font-medium text-[#FF6637] hover:text-[#FF8E6B]">
//                             <span>Upload a file</span>
//                             <input type="file" className="sr-only" />
//                           </label>
//                           <p className="pl-1">or drag and drop</p>
//                         </div>
//                         <p className="text-xs text-gray-500">PNG, JPG, GIF up to 1MB</p>
//                       </div>
//                     </div>
//                     <p className="mt-2 text-xs text-gray-500">Recommended: 200×200 px</p>
//                   </div>
//                 </div>

//                 <h2 className="text-xl font-semibold mb-6">Owner Information</h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <User className="h-5 w-5 text-gray-400" />
//                       </div>
//                       <input
//                         type="text"
//                         className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6637] focus:ring-[#FF6637] sm:text-sm h-10 border px-3"
//                         placeholder="Enter first name"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <User className="h-5 w-5 text-gray-400" />
//                       </div>
//                       <input
//                         type="text"
//                         className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6637] focus:ring-[#FF6637] sm:text-sm h-10 border px-3"
//                         placeholder="Enter last name"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-8">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Phone className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       type="tel"
//                       className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6637] focus:ring-[#FF6637] sm:text-sm h-10 border px-3"
//                       placeholder="Enter phone number"
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}

//             {step === 3 && (
//               <div>
//                 <h2 className="text-xl font-semibold mb-6">Account Info</h2>

//                 <div className="mb-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Mail className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       type="email"
//                       className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6637] focus:ring-[#FF6637] sm:text-sm h-10 border px-3"
//                       placeholder="Enter your email"
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Lock className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       className="pl-10 pr-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6637] focus:ring-[#FF6637] sm:text-sm h-10 border px-3"
//                       placeholder="Enter password"
//                     />
//                     <button
//                       type="button"
//                       className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? (
//                         <EyeOff className="h-5 w-5 text-gray-400" />
//                       ) : (
//                         <Eye className="h-5 w-5 text-gray-400" />
//                       )}
//                     </button>
//                   </div>
//                   <p className="mt-1 text-xs text-gray-500">Password must be at least 8 characters long</p>
//                 </div>

//                 <div className="mb-8">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Lock className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       className="pl-10 pr-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF6637] focus:ring-[#FF6637] sm:text-sm h-10 border px-3"
//                       placeholder="Confirm password"
//                     />
//                     <button
//                       type="button"
//                       className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                       onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                     >
//                       {showConfirmPassword ? (
//                         <EyeOff className="h-5 w-5 text-gray-400" />
//                       ) : (
//                         <Eye className="h-5 w-5 text-gray-400" />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 <div className="mb-8">
//                   <div className="flex items-start">
//                     <div className="flex items-center h-5">
//                       <input
//                         type="checkbox"
//                         className="focus:ring-[#FF6637] h-4 w-4 text-[#FF6637] border-gray-300 rounded"
//                       />
//                     </div>
//                     <div className="ml-3 text-sm">
//                       <label className="font-medium text-gray-700">
//                         I agree to the{" "}
//                         <a href="#" className="text-[#FF6637]">
//                           Terms of Service
//                         </a>{" "}
//                         and{" "}
//                         <a href="#" className="text-[#FF6637]">
//                           Privacy Policy
//                         </a>
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Navigation Buttons */}
//             <div className="flex justify-between mt-8">
//               {step > 1 ? (
//                 <button
//                   type="button"
//                   onClick={prevStep}
//                   className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
//                 >
//                   <ArrowLeft className="mr-2 h-4 w-4" />
//                   Previous
//                 </button>
//               ) : (
//                 <div></div>
//               )}

//               {step < 3 ? (
//                 <button
//                   type="button"
//                   onClick={nextStep}
//                   className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#FF6637] hover:bg-[#FF8E6B]"
//                 >
//                   Next
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </button>
//               ) : (
//                 <button
//                   type="submit"
//                   className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#FF6637] hover:bg-[#FF8E6B]"
//                 >
//                   Complete Registration
//                   <Check className="ml-2 h-5 w-5" />
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default VendorRegistration


"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MapPin,
  Upload,
  Eye,
  EyeOff,
  Store,
  User,
  Mail,
  Phone,
  Lock,
  Calendar,
  DollarSign,
  Percent,
} from "lucide-react"

const VendorRegistration = () => {
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#28A745] to-[#20c997] px-8 py-6 text-white">
            <h1 className="text-2xl font-bold">Vendor Application</h1>
            <p className="text-white/80">Join 6amMart and start selling your products</p>
          </div>

          {/* Progress Steps */}
          <div className="px-8 py-6 border-b">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? "bg-[#28A745] text-white" : "bg-gray-200 text-gray-500"}`}
                >
                  {step > 1 ? <Check className="w-5 h-5" /> : "1"}
                </div>
                <span className="text-sm mt-2 text-gray-600">General Information</span>
              </div>

              <div className={`flex-1 h-1 mx-2 ${step >= 2 ? "bg-[#28A745]" : "bg-gray-200"}`}></div>

              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? "bg-[#28A745] text-white" : "bg-gray-200 text-gray-500"}`}
                >
                  {step > 2 ? <Check className="w-5 h-5" /> : "2"}
                </div>
                <span className="text-sm mt-2 text-gray-600">Business Plan</span>
              </div>

              <div className={`flex-1 h-1 mx-2 ${step >= 3 ? "bg-[#28A745]" : "bg-gray-200"}`}></div>

              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? "bg-[#28A745] text-white" : "bg-gray-200 text-gray-500"}`}
                >
                  "3"
                </div>
                <span className="text-sm mt-2 text-gray-600">Complete Registration</span>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            {step === 1 && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Vendor Info</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Vendor Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Store className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745] sm:text-sm h-10 border px-3"
                        placeholder="Enter your business name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Vendor Address *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745] sm:text-sm h-10 border px-3"
                        placeholder="Enter your business address"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Type *</label>
                  <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745] sm:text-sm h-10 border px-3">
                    <option value="">Select business type</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="grocery">Grocery</option>
                    <option value="pharmacy">Pharmacy</option>
                    <option value="shop">Shop</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Delivery Time *</label>
                    <div className="flex items-center">
                      <input
                        type="number"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745] sm:text-sm h-10 border px-3"
                        placeholder="30"
                      />
                      <span className="ml-2 text-gray-500">minutes</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Delivery Time *</label>
                    <div className="flex items-center">
                      <input
                        type="number"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745] sm:text-sm h-10 border px-3"
                        placeholder="60"
                      />
                      <span className="ml-2 text-gray-500">minutes</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">VAT/TAX (%)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Percent className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745] sm:text-sm h-10 border px-3"
                        placeholder="5"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location on Map</label>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Map will be displayed here</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Business Media</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cover Photo</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer bg-white rounded-md font-medium text-[#28A745] hover:text-[#20c997]">
                            <span>Upload a file</span>
                            <input type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 2MB</p>
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">Recommended: 2000×700 px</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Logo</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer bg-white rounded-md font-medium text-[#28A745] hover:text-[#20c997]">
                            <span>Upload a file</span>
                            <input type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 1MB</p>
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">Recommended: 200×200 px</p>
                  </div>
                </div>

                <h2 className="text-xl font-semibold mb-6">Owner Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745] sm:text-sm h-10 border px-3"
                        placeholder="Enter first name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745] sm:text-sm h-10 border px-3"
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745] sm:text-sm h-10 border px-3"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Opening Hours</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745] sm:text-sm h-10 border px-3"
                        placeholder="e.g. 9:00 AM - 10:00 PM"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Order Amount</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSign className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745] sm:text-sm h-10 border px-3"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Account Info</h2>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745] sm:text-sm h-10 border px-3"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="pl-10 pr-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745] sm:text-sm h-10 border px-3"
                      placeholder="Enter password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">Password must be at least 8 characters long</p>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="pl-10 pr-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745] sm:text-sm h-10 border px-3"
                      placeholder="Confirm password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="focus:ring-[#28A745] h-4 w-4 text-[#28A745] border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-medium text-gray-700">
                        I agree to the{" "}
                        <a href="#" className="text-[#28A745]">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-[#28A745]">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </button>
              ) : (
                <div></div>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#28A745] hover:bg-[#20c997]"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#28A745] hover:bg-[#20c997]"
                >
                  Complete Registration
                  <Check className="ml-2 h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorRegistration
