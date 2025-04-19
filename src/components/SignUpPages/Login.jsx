// // import React from 'react';
// // import { useForm } from 'react-hook-form';
// // import { FaPhoneAlt } from 'react-icons/fa';

// // const Login = () => {
// //   const { register, handleSubmit, formState: { errors } } = useForm();

// //   const onSubmit = (data) => {
// //     console.log(data);
// //     // Handle form submission here
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen mx-auto bg-gray-100">
// //       <div className="w-full max-w-lg p-8 space-y-8 bg-white rounded-lg shadow-lg">
// //         <h2 className="text-2xl">Login</h2>
// //         <p className='text-sm text-gray-500'>Sign in to continue</p>
// //         <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
// //           <div className="rounded-md shadow-sm">
// //             <div>
// //               <label htmlFor="email" className="text-gray-500">Email</label>
// //               <input 
// //                 id="email" 
// //                 type="email" 
// //                 autoComplete="email" 
// //                 required 
// //                 {...register('email', { required: 'Email is required' })}
// //                 className="w-full px-3 py-2 text-gray-900 bg-white mt-4 border-b border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
// //                 placeholder="Enter Email" 
// //               />
// //               {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
// //             </div>
// //             <div className="pt-4">
// //               <label htmlFor="password" className="text-gray-500">Password</label>
// //               <input 
// //                 id="password" 
// //                 type="password" 
// //                 autoComplete="current-password" 
// //                 required 
// //                 {...register('password', { required: 'Password is required' })}
// //                 className="w-full px-3 py-2 mt-4 text-gray-900 bg-white border-b border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
// //                 placeholder="Enter Password" 
// //               />
// //               {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
// //             </div>
// //           </div>
// //           <div className="text-sm">
// //             <a href="#" className="font-medium text-red-500 hover:text-indigo-500">
// //               Forgot Password?
// //             </a>
// //           </div>
// //           <div>
// //             <button 
// //               type="submit" 
// //               className="relative flex justify-center w-full h-14 px-8 py-4 text-base font-bold text-white bg-[#FF6637] border border-transparent rounded-md group hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// //             >
// //               Log In
// //             </button>
// //           </div>
// //           <div>
// //             <button 
// //               type="button" 
// //               className="relative flex justify-center w-full h-14 px-4 py-4 mt-2 text-base font-medium text-white bg-[#FF6637] border border-transparent rounded-md group hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// //             >
// //               Sign Up
// //             </button>
// //           </div>
// //           <div className="relative flex items-center justify-center w-full mt-4">
// //             <hr className="w-full border-gray-300" />
// //             <div className="absolute px-2 text-lg text-[#ff6637] bg-white">OR</div>
// //           </div>
// //           <div>
// //             <button 
// //               type="button" 
// //               className="relative flex items-center justify-center w-full h-14 px-4 py-4 mt-2 text-base font-medium text-white bg-gradient-to-r from-[#FF6637] to-[#FF6637] border border-transparent rounded-md group hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// //             >
// //               <span className="absolute gap-3 flex items-center pl-3">
// //                 <FaPhoneAlt className="w-5 h-5 text-white" />
// //                 Login with Phone
// //               </span>
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;




// // "use client"
// // import { useState } from "react"
// // import { useForm } from "react-hook-form"
// // import { FaPhoneAlt, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaFacebookF, FaGoogle } from "react-icons/fa"
// // import { Link } from "react-router-dom"
// // import logo from "../../../public/logo-e.png"

// // const Login = () => {
// //   const [showPassword, setShowPassword] = useState(false)
// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm()

// //   const onSubmit = (data) => {
// //     console.log(data)
// //     // Handle form submission here
// //   }

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
// //         <div className="bg-gradient-to-r from-accent-primary to-accent-secondary py-6 px-8">
// //           <div className="flex justify-center">
// //             <img src={logo || "/placeholder.svg"} alt="Foodie" className="h-16" />
// //           </div>
// //           <h2 className="mt-4 text-center text-3xl font-extrabold text-white">Welcome Back</h2>
// //           <p className="mt-2 text-center text-white text-opacity-80">Sign in to continue to your account</p>
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
// //                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-accent-primary focus:border-accent-primary transition-colors"
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
// //                   className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-accent-primary focus:border-accent-primary transition-colors"
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
// //                   className="h-4 w-4 text-accent-primary focus:ring-accent-primary border-gray-300 rounded"
// //                 />
// //                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
// //                   Remember me
// //                 </label>
// //               </div>

// //               <div className="text-sm">
// //                 <Link to="/forget" className="font-medium text-accent-primary hover:text-accent-secondary">
// //                   Forgot password?
// //                 </Link>
// //               </div>
// //             </div>

// //             <div>
// //               <button
// //                 type="submit"
// //                 className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-accent-primary hover:bg-accent-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary transition-colors"
// //               >
// //                 Sign In
// //               </button>
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
// //               <button
// //                 type="button"
// //                 className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
// //               >
// //                 <FaGoogle className="h-5 w-5 text-red-500 mr-2" />
// //                 Google
// //               </button>
// //               <button
// //                 type="button"
// //                 className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
// //               >
// //                 <FaFacebookF className="h-5 w-5 text-blue-600 mr-2" />
// //                 Facebook
// //               </button>
// //             </div>

// //             <div className="mt-6 flex items-center justify-center">
// //               <button
// //                 type="button"
// //                 className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
// //               >
// //                 <FaPhoneAlt className="h-5 w-5 text-accent-primary mr-2" />
// //                 Login with Phone Number
// //               </button>
// //             </div>
// //           </div>

// //           <div className="mt-6 text-center">
// //             <p className="text-sm text-gray-600">
// //               Don't have an account?{" "}
// //               <Link to="/register" className="font-medium text-accent-primary hover:text-accent-secondary">
// //                 Sign up
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Login



// "use client"
// import { useState } from "react"
// import { useForm } from "react-hook-form"
// import { FaPhoneAlt, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaFacebookF, FaGoogle } from "react-icons/fa"
// import { Link } from "react-router-dom"
// import logo from "../../../public/logo-e.png"

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false)
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm()

//   const onSubmit = (data) => {
//     console.log(data)
//     // Handle form submission here
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
//         <div className="bg-gradient-to-r from-accent-primary to-accent-secondary py-6 px-8">
//           <div className="flex justify-center">
//             <img src={logo || "/placeholder.svg"} alt="Foodie" className="h-16" />
//           </div>
//           <h2 className="mt-4 text-center text-3xl font-extrabold text-white">Welcome Back</h2>
//           <p className="mt-2 text-center text-white text-opacity-80">Sign in to continue to your account</p>
//         </div>

//         <div className="p-8">
//           <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
//                   autoComplete="email"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                       message: "Invalid email address",
//                     },
//                   })}
//                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-accent-primary focus:border-accent-primary transition-colors"
//                   placeholder="Enter your email"
//                 />
//               </div>
//               {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
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
//                   autoComplete="current-password"
//                   {...register("password", { required: "Password is required" })}
//                   className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-accent-primary focus:border-accent-primary transition-colors"
//                   placeholder="Enter your password"
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

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-accent-primary focus:ring-accent-primary border-gray-300 rounded"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <Link to="/forget" className="font-medium text-accent-primary hover:text-accent-secondary">
//                   Forgot password?
//                 </Link>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-accent-primary hover:bg-accent-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary transition-colors"
//               >
//                 Sign In
//               </button>
//             </div>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">Or continue with</span>
//               </div>
//             </div>

//             <div className="mt-6 grid grid-cols-2 gap-3">
//               <button
//                 type="button"
//                 className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
//               >
//                 <FaGoogle className="h-5 w-5 text-red-500 mr-2" />
//                 Google
//               </button>
//               <button
//                 type="button"
//                 className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
//               >
//                 <FaFacebookF className="h-5 w-5 text-blue-600 mr-2" />
//                 Facebook
//               </button>
//             </div>

//             <div className="mt-6 flex items-center justify-center">
//               <button
//                 type="button"
//                 className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
//               >
//                 <FaPhoneAlt className="h-5 w-5 text-accent-primary mr-2" />
//                 Login with Phone Number
//               </button>
//             </div>
//           </div>

//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Don't have an account?{" "}
//               <Link to="/register" className="font-medium text-accent-primary hover:text-accent-secondary">
//                 Sign up
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login



"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { FaPhoneAlt, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaFacebookF, FaGoogle, FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import logo from "../../../public/logo-e.png"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-[#FF6637] to-[#FF8C66] py-8 px-8">
          <div className="flex justify-center">
            <img src={logo || "/placeholder.svg"} alt="Foodie" className="h-16" />
          </div>
          <h2 className="mt-4 text-center text-3xl font-extrabold text-white">Welcome Back</h2>
          <p className="mt-2 text-center text-white text-opacity-90">Sign in to continue to your account</p>
        </div>

        <div className="p-8">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#FF6637] focus:border-[#FF6637] transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  {...register("password", { required: "Password is required" })}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#FF6637] focus:border-[#FF6637] transition-colors"
                  placeholder="Enter your password"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#FF6637] focus:ring-[#FF6637] border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forget" className="font-medium text-[#FF6637] hover:text-[#FF8C66]">
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-[#FF6637] hover:bg-[#FF8C66] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6637] transition-colors"
              >
                Sign In
              </motion.button>
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <FaGoogle className="h-5 w-5 text-red-500 mr-2" />
                Google
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <FaFacebookF className="h-5 w-5 text-blue-600 mr-2" />
                Facebook
              </motion.button>
            </div>

            <div className="mt-6 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <FaPhoneAlt className="h-5 w-5 text-[#FF6637] mr-2" />
                Login with Phone Number
              </motion.button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-[#FF6637] hover:text-[#FF8C66] flex items-center justify-center gap-1 mt-1"
              >
                Sign up <FaArrowRight className="text-xs" />
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
