// // import { useState, useEffect } from "react"
// // import { useForm } from "react-hook-form"
// // import {
// //   FaPhoneAlt,
// //   FaEnvelope,
// //   FaLock,
// //   FaEye,
// //   FaEyeSlash,
// //   FaFacebookF,
// //   FaGoogle,
// //   FaArrowRight,
// //   FaCheckCircle,
// //   FaExclamationCircle,
// // } from "react-icons/fa"
// // import { Link, useNavigate } from "react-router-dom"
// // import { motion, AnimatePresence } from "framer-motion"
// // import logo from "../../../public/logo-e.png"

// // const Login = () => {
// //   const [showPassword, setShowPassword] = useState(false)
// //   const [showSuccessModal, setShowSuccessModal] = useState(false)
// //   const [showErrorModal, setShowErrorModal] = useState(false)
// //   const [errorMessage, setErrorMessage] = useState("")
// //   const navigate = useNavigate()

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm()

// //   // Check if user is already logged in
// //   useEffect(() => {
// //     const isLoggedIn = localStorage.getItem("isLoggedIn")
// //     if (isLoggedIn === "true") {
// //       navigate("/")
// //     }
// //   }, [navigate])

// //   const onSubmit = (data) => {
// //     console.log(data)

// //     // Get users from localStorage
// //     const users = JSON.parse(localStorage.getItem("users") || "[]")

// //     // Find user with matching email
// //     const user = users.find((user) => user.email === data.email)

// //     if (user) {
// //       // Check password
// //       if (user.password === data.password) {
// //         // Store login state
// //         localStorage.setItem("isLoggedIn", "true")
// //         localStorage.setItem(
// //           "currentUser",
// //           JSON.stringify({
// //             name: `${user.firstName} ${user.lastName}`,
// //             email: user.email,
// //             phone: user.phone,
// //           }),
// //         )

// //         // Show success modal
// //         setShowSuccessModal(true)

// //         // Redirect to home after 2 seconds
// //         setTimeout(() => {
// //           setShowSuccessModal(false)
// //           navigate("/")
// //         }, 2000)
// //       } else {
// //         setErrorMessage("Incorrect password. Please try again.")
// //         setShowErrorModal(true)
// //       }
// //     } else {
// //       setErrorMessage("No account found with this email. Please sign up.")
// //       setShowErrorModal(true)
// //     }
// //   }

// //   const handleGoogleLogin = () => {
// //     // Simulate Google login
// //     const googleUser = {
// //       firstName: "Google",
// //       lastName: "User",
// //       email: "google.user@example.com",
// //     }

// //     localStorage.setItem("isLoggedIn", "true")
// //     localStorage.setItem(
// //       "currentUser",
// //       JSON.stringify({
// //         name: `${googleUser.firstName} ${googleUser.lastName}`,
// //         email: googleUser.email,
// //       }),
// //     )

// //     setShowSuccessModal(true)

// //     setTimeout(() => {
// //       setShowSuccessModal(false)
// //       navigate("/")
// //     }, 2000)
// //   }

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //         className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden"
// //       >
// //         <div className="bg-gradient-to-r from-green-500 to-green-400 py-8 px-8">
// //           <div className="flex justify-center">
// //             <img src={logo || "/placeholder.svg"} alt="Foodie" className="h-16" />
// //           </div>
// //           <h2 className="mt-4 text-center text-3xl font-extrabold text-white">Welcome Back</h2>
// //           <p className="mt-2 text-center text-white text-opacity-90">Sign in to continue to your account</p>
// //         </div>

// //         <div className="p-8">
// //           <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
// //             <div>
// //               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
// //                 Email Address
// //               </label>
// //               <div className="mt-1 relative rounded-md shadow-sm">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaEnvelope className="h-5 w-5 text-gray-400" />
// //                 </div>
// //                 <input
// //                   id="email"
// //                   type="email"
// //                   autoComplete="email"
// //                   {...register("email", {
// //                     required: "Email is required",
// //                     pattern: {
// //                       value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
// //                       message: "Invalid email address",
// //                     },
// //                   })}
// //                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors"
// //                   placeholder="Enter your email"
// //                 />
// //               </div>
// //               {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
// //             </div>

// //             <div>
// //               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
// //                 Password
// //               </label>
// //               <div className="mt-1 relative rounded-md shadow-sm">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaLock className="h-5 w-5 text-gray-400" />
// //                 </div>
// //                 <input
// //                   id="password"
// //                   type={showPassword ? "text" : "password"}
// //                   autoComplete="current-password"
// //                   {...register("password", { required: "Password is required" })}
// //                   className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors"
// //                   placeholder="Enter your password"
// //                 />
// //                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
// //                   <button
// //                     type="button"
// //                     onClick={() => setShowPassword(!showPassword)}
// //                     className="text-gray-400 hover:text-gray-500 focus:outline-none"
// //                   >
// //                     {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
// //                   </button>
// //                 </div>
// //               </div>
// //               {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
// //             </div>

// //             <div className="flex items-center justify-between">
// //               <div className="flex items-center">
// //                 <input
// //                   id="remember-me"
// //                   name="remember-me"
// //                   type="checkbox"
// //                   className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
// //                 />
// //                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
// //                   Remember me
// //                 </label>
// //               </div>

// //               <div className="text-sm">
// //                 <Link to="/forgotpassword" className="font-medium text-green-500 hover:text-green-600">
// //                   Forgot password?
// //                 </Link>
// //               </div>
// //             </div>

// //             <div>
// //               <motion.button
// //                 whileHover={{ scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //                 type="submit"
// //                 className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
// //               >
// //                 Sign In
// //               </motion.button>
// //             </div>
// //           </form>

// //           <div className="mt-6">
// //             <div className="relative">
// //               <div className="absolute inset-0 flex items-center">
// //                 <div className="w-full border-t border-gray-300"></div>
// //               </div>
// //               <div className="relative flex justify-center text-sm">
// //                 <span className="px-2 bg-white text-gray-500">Or continue with</span>
// //               </div>
// //             </div>

// //             <div className="mt-6 grid grid-cols-2 gap-3">
// //               <motion.button
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 type="button"
// //                 onClick={handleGoogleLogin}
// //                 className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
// //               >
// //                 <FaGoogle className="h-5 w-5 text-red-500 mr-2" />
// //                 Google
// //               </motion.button>
// //               <motion.button
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 type="button"
// //                 className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
// //               >
// //                 <FaFacebookF className="h-5 w-5 text-blue-600 mr-2" />
// //                 Facebook
// //               </motion.button>
// //             </div>

// //             <div className="mt-6 flex items-center justify-center">
// //               <motion.button
// //                 whileHover={{ scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //                 type="button"
// //                 className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
// //               >
// //                 <FaPhoneAlt className="h-5 w-5 text-green-500 mr-2" />
// //                 Login with Phone Number
// //               </motion.button>
// //             </div>
// //           </div>

// //           <div className="mt-6 text-center">
// //             <p className="text-sm text-gray-600">
// //               Don't have an account?{" "}
// //               <Link
// //                 to="/signup"
// //                 className="font-medium text-green-500 hover:text-green-600 flex items-center justify-center gap-1 mt-1"
// //               >
// //                 Sign up <FaArrowRight className="text-xs" />
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //       </motion.div>

// //       {/* Success Modal */}
// //       <AnimatePresence>
// //         {showSuccessModal && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
// //           >
// //             <motion.div
// //               initial={{ scale: 0.9, y: 20 }}
// //               animate={{ scale: 1, y: 0 }}
// //               exit={{ scale: 0.9, y: 20 }}
// //               className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl"
// //             >
// //               <div className="text-center">
// //                 <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
// //                   <FaCheckCircle className="h-10 w-10 text-green-500" />
// //                 </div>
// //                 <h3 className="mt-4 text-xl font-medium text-gray-900">Login Successful!</h3>
// //                 <p className="mt-2 text-gray-600">
// //                   You have successfully logged in. You will be redirected to the home page shortly.
// //                 </p>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* Error Modal */}
// //       <AnimatePresence>
// //         {showErrorModal && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
// //           >
// //             <motion.div
// //               initial={{ scale: 0.9, y: 20 }}
// //               animate={{ scale: 1, y: 0 }}
// //               exit={{ scale: 0.9, y: 20 }}
// //               className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl"
// //             >
// //               <div className="text-center">
// //                 <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100">
// //                   <FaExclamationCircle className="h-10 w-10 text-red-500" />
// //                 </div>
// //                 <h3 className="mt-4 text-xl font-medium text-gray-900">Login Failed</h3>
// //                 <p className="mt-2 text-gray-600">{errorMessage}</p>
// //                 <div className="mt-6">
// //                   <button
// //                     onClick={() => setShowErrorModal(false)}
// //                     className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
// //                   >
// //                     Try Again
// //                   </button>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   )
// // }

// // export default Login



// import { useState } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { FaGoogle, FaFacebook, FaEye, FaEyeSlash, FaCheckCircle, FaExclamationCircle } from "react-icons/fa"

// const Login = () => {
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     rememberMe: false,
//   })
//   const [errors, setErrors] = useState({})
//   const [showPassword, setShowPassword] = useState(false)
//   const [showSuccessModal, setShowSuccessModal] = useState(false)
//   const [showErrorModal, setShowErrorModal] = useState(false)
//   const [errorMessage, setErrorMessage] = useState("")

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     })

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: "",
//       })
//     }
//   }

//   const validateForm = () => {
//     const newErrors = {}

//     // Validate email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required"
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address"
//     }

//     // Validate password
//     if (!formData.password) {
//       newErrors.password = "Password is required"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     if (validateForm()) {
//       // Check if user exists in localStorage
//       const users = JSON.parse(localStorage.getItem("users") || "[]")
//       const user = users.find((u) => u.email === formData.email && u.password === formData.password)

//       if (user) {
//         // Store user in localStorage if remember me is checked
//         if (formData.rememberMe) {
//           localStorage.setItem("user", JSON.stringify(user))
//         } else {
//           sessionStorage.setItem("user", JSON.stringify(user))
//         }

//         // Show success modal
//         setShowSuccessModal(true)
//       } else {
//         // Show error modal
//         setErrorMessage("Invalid email or password")
//         setShowErrorModal(true)
//       }
//     }
//   }

//   const handleGoogleLogin = () => {
//     // Simulate Google login
//     const userData = {
//       name: "Google User",
//       email: "google.user@example.com",
//       profileImage: "https://lh3.googleusercontent.com/a/default-user",
//     }

//     localStorage.setItem("user", JSON.stringify(userData))

//     // Show success modal
//     setShowSuccessModal(true)
//   }

//   const closeSuccessModal = () => {
//     setShowSuccessModal(false)
//     navigate("/")
//   }

//   const closeErrorModal = () => {
//     setShowErrorModal(false)
//   }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
//         <div className="text-center">
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Don't have an account?{" "}
//             <Link to="/signup" className="font-medium text-green-600 hover:text-green-500">
//               Sign up
//             </Link>
//           </p>
//         </div>

//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className={`appearance-none relative block w-full px-3 py-2 border ${
//                   errors.email ? "border-red-300" : "border-gray-300"
//                 } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm mt-1`}
//                 placeholder="john@example.com"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   autoComplete="current-password"
//                   required
//                   className={`appearance-none relative block w-full px-3 py-2 border ${
//                     errors.password ? "border-red-300" : "border-gray-300"
//                   } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm mt-1`}
//                   placeholder="••••••••"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="rememberMe"
//                 name="rememberMe"
//                 type="checkbox"
//                 className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
//                 checked={formData.rememberMe}
//                 onChange={handleChange}
//               />
//               <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
//                 Remember me
//               </label>
//             </div>

//             <div className="text-sm">
//               <Link to="/forgot-password" className="font-medium text-green-600 hover:text-green-500">
//                 Forgot your password?
//               </Link>
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>

//         <div className="mt-6">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">Or continue with</span>
//             </div>
//           </div>

//           <div className="mt-6 grid grid-cols-2 gap-3">
//             <button
//               onClick={handleGoogleLogin}
//               className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//             >
//               <FaGoogle className="h-5 w-5 text-red-500 mr-2" />
//               <span>Google</span>
//             </button>
//             <button
//               type="button"
//               className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//             >
//               <FaFacebook className="h-5 w-5 text-blue-600 mr-2" />
//               <span>Facebook</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div className="fixed inset-0 z-50 overflow-y-auto">
//           <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//               <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>

//             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
//               &#8203;
//             </span>

//             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                 <div className="sm:flex sm:items-start">
//                   <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
//                     <FaCheckCircle className="h-6 w-6 text-green-600" />
//                   </div>
//                   <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                     <h3 className="text-lg leading-6 font-medium text-gray-900">Login Successful!</h3>
//                     <div className="mt-2">
//                       <p className="text-sm text-gray-500">You have successfully logged in to your account.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                 <button
//                   type="button"
//                   className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
//                   onClick={closeSuccessModal}
//                 >
//                   Continue
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Error Modal */}
//       {showErrorModal && (
//         <div className="fixed inset-0 z-50 overflow-y-auto">
//           <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//               <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>

//             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
//               &#8203;
//             </span>

//             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                 <div className="sm:flex sm:items-start">
//                   <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
//                     <FaExclamationCircle className="h-6 w-6 text-red-600" />
//                   </div>
//                   <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                     <h3 className="text-lg leading-6 font-medium text-gray-900">Login Failed</h3>
//                     <div className="mt-2">
//                       <p className="text-sm text-gray-500">{errorMessage}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                 <button
//                   type="button"
//                   className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
//                   onClick={closeErrorModal}
//                 >
//                   Try Again
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Login


"use client"

import { useState } from "react"
import { FaEye, FaEyeSlash, FaGoogle, FaCheckCircle, FaExclamationCircle, FaFacebook } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [errors, setErrors] = useState({})

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

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address"
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // For demo purposes, let's create a mock user if none exists
      const users = JSON.parse(localStorage.getItem("users") || "[]")
      if (users.length === 0) {
        const mockUser = {
          name: "Demo User",
          email: "demo@example.com",
          password: "password123",
          profileImage: "/placeholder.svg?height=40&width=40",
        }
        localStorage.setItem("users", JSON.stringify([mockUser]))
      }

      // Check if user exists in localStorage
      const updatedUsers = JSON.parse(localStorage.getItem("users") || "[]")
      const user = updatedUsers.find((u) => u.email === formData.email && u.password === formData.password)

      if (user) {
        // Store user in localStorage
        localStorage.setItem("user", JSON.stringify(user))

        // Force a window-level event to notify other components
        window.dispatchEvent(new Event("storage"))

        // Show success modal
        setShowSuccessModal(true)
      } else {
        // Show error modal
        setErrorMessage("Invalid email or password. Try demo@example.com / password123")
        setShowErrorModal(true)
      }
    }
  }

  const handleGoogleLogin = () => {
    // Simulate Google login
    const userData = {
      name: "Google User",
      email: "google.user@example.com",
      profileImage: "https://lh3.googleusercontent.com/a/default-user",
    }

    localStorage.setItem("user", JSON.stringify(userData))

    // Force a window-level event to notify other components
    window.dispatchEvent(new Event("storage"))

    // Show success modal
    setShowSuccessModal(true)
  }

  const closeSuccessModal = () => {
    setShowSuccessModal(false)
    navigate("/")
    // Force page reload to update UI
    window.location.reload()
  }

  const closeErrorModal = () => {
    setShowErrorModal(false)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium text-green-600 hover:text-green-500">
              Sign up
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
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
                  autoComplete="current-password"
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
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/forgotpassword" className="font-medium text-green-600 hover:text-green-500">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign in
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
              onClick={handleGoogleLogin}
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
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Login Successful!</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">You have successfully logged in to your account.</p>
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
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
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
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FaExclamationCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Login Failed</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{errorMessage}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeErrorModal}
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login

