// import { useState } from "react"
// import { useForm, Controller } from "react-hook-form"
// import {
//   FaUser,
//   FaEnvelope,
//   FaLock,
//   FaEye,
//   FaEyeSlash,
//   FaPhoneAlt,
//   FaGift,
//   FaFacebookF,
//   FaGoogle,
//   FaArrowLeft,
//   FaCheckCircle,
// } from "react-icons/fa"
// import { motion, AnimatePresence } from "framer-motion"
// import PhoneInput from "react-phone-input-2"
// import "react-phone-input-2/lib/style.css"
// import { Link, useNavigate } from "react-router-dom"
// import logo from "../../../public/logo-e.png"

// const SignUp = () => {
//   const [showPassword, setShowPassword] = useState(false)
//   const [showSuccessModal, setShowSuccessModal] = useState(false)
//   const navigate = useNavigate()

//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm()

//   const onSubmit = (data) => {
//     console.log(data)
//     // Store user data in localStorage for demo purposes
//     const users = JSON.parse(localStorage.getItem("users") || "[]")
//     users.push(data)
//     localStorage.setItem("users", JSON.stringify(users))

//     // Show success modal
//     setShowSuccessModal(true)

//     // Redirect to login after 3 seconds
//     setTimeout(() => {
//       setShowSuccessModal(false)
//       navigate("/login")
//     }, 3000)
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden"
//       >
//         <div className="bg-gradient-to-r from-green-500 to-green-400 py-6 px-8">
//           <div className="flex justify-center">
//             <img src={logo || "/placeholder.svg"} alt="Foodie" className="h-16" />
//           </div>
//           <h2 className="mt-4 text-center text-3xl font-extrabold text-white">Create Account</h2>
//           <p className="mt-2 text-center text-white text-opacity-90">Sign up to join the Foodie community</p>
//         </div>

//         <div className="p-8">
//           <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//                   First Name
//                 </label>
//                 <div className="mt-1 relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaUser className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="firstName"
//                     type="text"
//                     {...register("firstName", { required: "First Name is required" })}
//                     className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors"
//                     placeholder="First Name"
//                   />
//                 </div>
//                 {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
//               </div>

//               <div>
//                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//                   Last Name
//                 </label>
//                 <div className="mt-1 relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaUser className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="lastName"
//                     type="text"
//                     {...register("lastName", { required: "Last Name is required" })}
//                     className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors"
//                     placeholder="Last Name"
//                   />
//                 </div>
//                 {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
//               </div>
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email Address
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaEnvelope className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="email"
//                   type="email"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                       message: "Invalid email address",
//                     },
//                   })}
//                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors"
//                   placeholder="Email Address"
//                 />
//               </div>
//               {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
//             </div>

//             <div>
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <Controller
//                 name="phone"
//                 control={control}
//                 rules={{ required: "Phone number is required" }}
//                 render={({ field }) => (
//                   <PhoneInput
//                     country={"pk"}
//                     value={field.value}
//                     onChange={field.onChange}
//                     inputStyle={{
//                       width: "100%",
//                       height: "48px",
//                       fontSize: "16px",
//                       borderRadius: "0.5rem",
//                       border: "1px solid #D1D5DB",
//                     }}
//                     containerStyle={{
//                       marginTop: "0.25rem",
//                     }}
//                     buttonStyle={{
//                       borderTopLeftRadius: "0.5rem",
//                       borderBottomLeftRadius: "0.5rem",
//                       border: "1px solid #D1D5DB",
//                     }}
//                   />
//                 )}
//               />
//               {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaLock className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="password"
//                   type={showPassword ? "text" : "password"}
//                   {...register("password", {
//                     required: "Password is required",
//                     minLength: {
//                       value: 8,
//                       message: "Password must be at least 8 characters",
//                     },
//                   })}
//                   className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors"
//                   placeholder="Create Password"
//                 />
//                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="text-gray-400 hover:text-gray-500 focus:outline-none"
//                   >
//                     {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
//                   </button>
//                 </div>
//               </div>
//               {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
//             </div>

//             <div>
//               <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700">
//                 Referral Code (Optional)
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaGift className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="referralCode"
//                   type="text"
//                   {...register("referralCode")}
//                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors"
//                   placeholder="Enter Referral Code"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center">
//               <input
//                 id="terms"
//                 name="terms"
//                 type="checkbox"
//                 {...register("terms", { required: "You must agree to the terms and conditions" })}
//                 className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
//               />
//               <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
//                 I agree to the{" "}
//                 <Link to="/terms" className="text-green-500 hover:text-green-600">
//                   Terms and Conditions
//                 </Link>
//               </label>
//             </div>
//             {errors.terms && <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>}

//             <div>
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
//               >
//                 Create Account
//               </motion.button>
//             </div>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">Or sign up with</span>
//               </div>
//             </div>

//             <div className="mt-6 grid grid-cols-2 gap-3">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="button"
//                 className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
//               >
//                 <FaGoogle className="h-5 w-5 text-red-500 mr-2" />
//                 Google
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="button"
//                 className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
//               >
//                 <FaFacebookF className="h-5 w-5 text-blue-600 mr-2" />
//                 Facebook
//               </motion.button>
//             </div>

//             <div className="mt-6 flex items-center justify-center">
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="button"
//                 className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
//               >
//                 <FaPhoneAlt className="h-5 w-5 text-green-500 mr-2" />
//                 Sign Up with Phone Number
//               </motion.button>
//             </div>
//           </div>

//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Already have an account?{" "}
//               <Link
//                 to="/login"
//                 className="font-medium text-green-500 hover:text-green-600 flex items-center justify-center gap-1 mt-1"
//               >
//                 <FaArrowLeft className="text-xs" /> Sign in
//               </Link>
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       {/* Success Modal */}
//       <AnimatePresence>
//         {showSuccessModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl"
//             >
//               <div className="text-center">
//                 <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
//                   <FaCheckCircle className="h-10 w-10 text-green-500" />
//                 </div>
//                 <h3 className="mt-4 text-xl font-medium text-gray-900">Registration Successful!</h3>
//                 <p className="mt-2 text-gray-600">
//                   Your account has been created successfully. You will be redirected to the login page shortly.
//                 </p>
//                 <div className="mt-6">
//                   <button
//                     onClick={() => {
//                       setShowSuccessModal(false)
//                       navigate("/login")
//                     }}
//                     className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
//                   >
//                     Go to Login
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// export default SignUp



"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa"

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    // Validate terms agreement
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Store user data in localStorage (in a real app, this would be an API call)
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        profileImage: null,
        createdAt: new Date().toISOString(),
      }

      // Check if email already exists
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]")
      const emailExists = existingUsers.some((user) => user.email === formData.email)

      if (emailExists) {
        setErrors({
          ...errors,
          email: "This email is already registered",
        })
        return
      }

      // Save user
      localStorage.setItem("users", JSON.stringify([...existingUsers, userData]))

      // Show success modal
      setShowSuccessModal(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
      })
    }
  }

  const handleGoogleSignUp = () => {
    // Simulate Google sign up
    const userData = {
      name: "Google User",
      email: "google.user@example.com",
      password: "",
      profileImage: "https://lh3.googleusercontent.com/a/default-user",
      createdAt: new Date().toISOString(),
    }

    localStorage.setItem("users", JSON.stringify([...JSON.parse(localStorage.getItem("users") || "[]"), userData]))
    localStorage.setItem("user", JSON.stringify(userData))

    // Redirect to home page
    navigate("/")
  }

  const closeSuccessModal = () => {
    setShowSuccessModal(false)
    navigate("/login")
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-green-600 hover:text-green-500">
              Sign in
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  errors.name ? "border-red-300" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm mt-1`}
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  errors.email ? "border-red-300" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm mt-1`}
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className={`appearance-none relative block w-full px-3 py-2 border ${
                    errors.password ? "border-red-300" : "border-gray-300"
                  } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm mt-1`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className={`appearance-none relative block w-full px-3 py-2 border ${
                    errors.confirmPassword ? "border-red-300" : "border-gray-300"
                  } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm mt-1`}
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                checked={formData.agreeToTerms}
                onChange={handleChange}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                I agree to the{" "}
                <Link to="/terms" className="text-green-600 hover:text-green-500">
                  Terms and Conditions
                </Link>
              </label>
              {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign up
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              onClick={handleGoogleSignUp}
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <FaGoogle className="h-5 w-5 text-red-500 mr-2" />
              <span>Google</span>
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <FaFacebook className="h-5 w-5 text-blue-600 mr-2" />
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FaCheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Registration Successful!</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your account has been created successfully. You can now log in with your credentials.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeSuccessModal}
                >
                  Go to Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SignUp
