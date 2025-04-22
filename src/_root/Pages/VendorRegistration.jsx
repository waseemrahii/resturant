"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaEye, FaEyeSlash, FaMapMarkerAlt } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"

const VendorRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    vendorName: "",
    vendorAddress: "",
    businessType: "",
    businessModule: "",
    vatTax: "",
    minDeliveryTime: "",
    maxDeliveryTime: "",
    durationType: "Hour",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    logo: null,
    coverPhoto: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }))
    }
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    // Redirect or show success message
    alert("Registration submitted successfully!")
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Vendor Application</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-10">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 1 ? "bg-green-500" : "bg-gray-300"} text-white font-bold`}
          >
            1
          </div>
          <div
            className={`h-1 w-16 md:w-32 ${currentStep >= 2 ? "bg-green-500" : "bg-gray-300"} flex items-center justify-center`}
          >
            <IoIosArrowForward className="text-white text-xl" />
          </div>
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 2 ? "bg-green-500" : "bg-gray-300"} text-white font-bold`}
          >
            2
          </div>
          <div
            className={`h-1 w-16 md:w-32 ${currentStep >= 3 ? "bg-green-500" : "bg-gray-300"} flex items-center justify-center`}
          >
            <IoIosArrowForward className="text-white text-xl" />
          </div>
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 3 ? "bg-green-500" : "bg-gray-300"} text-white font-bold`}
          >
            3
          </div>
        </div>

        <div className="text-center mb-6">
          <span className={`font-medium ${currentStep === 1 ? "text-green-500" : "text-gray-500"}`}>
            General Information
          </span>
          <span className="mx-4 text-gray-300">|</span>
          <span className={`font-medium ${currentStep === 2 ? "text-green-500" : "text-gray-500"}`}>Business Plan</span>
          <span className="mx-4 text-gray-300">|</span>
          <span className={`font-medium ${currentStep === 3 ? "text-green-500" : "text-gray-500"}`}>
            Complete Registration
          </span>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Vendor Info */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Vendor Info</h2>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Language</label>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                    >
                      English
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                    >
                      Arabic
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="vendorName" className="block text-gray-700 text-sm font-medium mb-2">
                    Vendor Name *
                  </label>
                  <input
                    type="text"
                    id="vendorName"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="vendorAddress" className="block text-gray-700 text-sm font-medium mb-2">
                    Vendor Address *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="vendorAddress"
                      name="vendorAddress"
                      value={formData.vendorAddress}
                      onChange={handleChange}
                      className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                    <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="businessType" className="block text-gray-700 text-sm font-medium mb-2">
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select Business Type</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="grocery">Grocery</option>
                      <option value="pharmacy">Pharmacy</option>
                      <option value="shop">Shop</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="businessModule" className="block text-gray-700 text-sm font-medium mb-2">
                      Business Module
                    </label>
                    <select
                      id="businessModule"
                      name="businessModule"
                      value={formData.businessModule}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select Module</option>
                      <option value="food">Food</option>
                      <option value="grocery">Grocery</option>
                      <option value="pharmacy">Pharmacy</option>
                      <option value="ecommerce">E-commerce</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="vatTax" className="block text-gray-700 text-sm font-medium mb-2">
                    VAT/TAX (%)
                  </label>
                  <input
                    type="text"
                    id="vatTax"
                    name="vatTax"
                    value={formData.vatTax}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label htmlFor="minDeliveryTime" className="block text-gray-700 text-sm font-medium mb-2">
                      Minimum Delivery Time *
                    </label>
                    <input
                      type="number"
                      id="minDeliveryTime"
                      name="minDeliveryTime"
                      value={formData.minDeliveryTime}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="maxDeliveryTime" className="block text-gray-700 text-sm font-medium mb-2">
                      Maximum Delivery Time *
                    </label>
                    <input
                      type="number"
                      id="maxDeliveryTime"
                      name="maxDeliveryTime"
                      value={formData.maxDeliveryTime}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="durationType" className="block text-gray-700 text-sm font-medium mb-2">
                      Duration Type
                    </label>
                    <select
                      id="durationType"
                      name="durationType"
                      value={formData.durationType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="Hour">Hour</option>
                      <option value="Minute">Minute</option>
                      <option value="Day">Day</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Owner Information */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Owner Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <div className="flex">
                    <select className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>+1</option>
                      <option>+91</option>
                      <option>+44</option>
                      <option>+966</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="logo" className="block text-gray-700 text-sm font-medium mb-2">
                    Logo
                  </label>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <input
                        type="file"
                        id="logo"
                        name="logo"
                        onChange={handleFileChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        accept="image/*"
                      />
                      <p className="text-xs text-gray-500 mt-1">JPG, JPEG, PNG, Max Size: 2MB, Ratio: 1:1</p>
                    </div>
                    <div className="w-32 h-32 bg-gray-100 rounded-md flex items-center justify-center">
                      {formData.logo ? (
                        <img
                          src={URL.createObjectURL(formData.logo) || "/placeholder.svg"}
                          alt="Logo Preview"
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <span className="text-gray-400">Logo Preview</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="coverPhoto" className="block text-gray-700 text-sm font-medium mb-2">
                    Cover Photo
                  </label>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <input
                        type="file"
                        id="coverPhoto"
                        name="coverPhoto"
                        onChange={handleFileChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        accept="image/*"
                      />
                      <p className="text-xs text-gray-500 mt-1">JPG, JPEG, PNG, Max Size: 2MB, Ratio: 3:1</p>
                    </div>
                    <div className="w-32 h-32 bg-gray-100 rounded-md flex items-center justify-center">
                      {formData.coverPhoto ? (
                        <img
                          src={URL.createObjectURL(formData.coverPhoto) || "/placeholder.svg"}
                          alt="Cover Photo Preview"
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <span className="text-gray-400">Cover Preview</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Account Info */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Account Info</h2>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showConfirmPassword ? (
                        <FaEyeSlash className="text-gray-400" />
                      ) : (
                        <FaEye className="text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 text-green-500 focus:ring-green-400 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      I agree to the{" "}
                      <Link to="/terms-and-conditions" className="text-green-500 hover:text-green-600">
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none"
                >
                  Next
                </button>
              ) : (
                <div className="flex gap-4">
                  <button
                    type="button"
                    className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                    onClick={() => {
                      setFormData({
                        vendorName: "",
                        vendorAddress: "",
                        businessType: "",
                        businessModule: "",
                        vatTax: "",
                        minDeliveryTime: "",
                        maxDeliveryTime: "",
                        durationType: "Hour",
                        firstName: "",
                        lastName: "",
                        phone: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        logo: null,
                        coverPhoto: null,
                      })
                      setCurrentStep(1)
                    }}
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default VendorRegistration
