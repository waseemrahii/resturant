// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { FaPhoneAlt } from 'react-icons/fa';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

// const SignUp = () => {
//   const { register, handleSubmit, control, formState: { errors } } = useForm();

//   const onSubmit = data => {
//     console.log(data);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
//         <h2 className="text-2xl font-bold mb-4">Sign up With Us</h2>
//         <p className="mb-6">Sign up to continue</p>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <label className="block text-gray-700">First Name</label>
//           <input
//             type="text"
//             className="w-full pt-2 mb-4 border-b"
//             placeholder="Enter First Name"
//             {...register('firstName', { required: 'First Name is required' })}
//           />
//           {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

//           <label className="block text-gray-700">Last Name</label>
//           <input
//             type="text"
//             className="w-full pt-2 mb-4 border-b"
//             placeholder="Enter Last Name"
//             {...register('lastName', { required: 'Last Name is required' })}
//           />
//           {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}

//           <label className="block text-gray-700">Email Address</label>
//           <input
//             type="email"
//             className="w-full pt-2 mb-4 border-b"
//             placeholder="Enter Email Address"
//             {...register('email', { 
//               required: 'Email is required',
//               pattern: {
//                 value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//                 message: 'Entered value does not match email format'
//               }
//             })}
//           />
//           {errors.email && <p className="text-red-500">{errors.email.message}</p>}

//           <label className="block text-gray-700">Phone Number</label>
//           <Controller
//             name="phone"
//             control={control}
//             rules={{ required: 'Phone number is required' }}
//             render={({ field }) => (
//               <PhoneInput
//                 country={'us'}
//                 value={field.value}
//                 onChange={field.onChange}
//                 inputStyle={{
//                   width: '100%',
//                   padding: '10px 0',
//                   fontSize: '16px',
//                   border: 'none',
//                   borderBottom: '1px solid #d1d5db',
//                   backgroundColor: 'white',
//                 }}
//                 containerStyle={{
//                   width: '100%',
//                 }}
//                 dropdownStyle={{
//                   backgroundColor: 'white',
//                   border: 'none',
//                   boxShadow: 'none',
//                   zIndex: '10',
//                 }}
//                 buttonStyle={{
//                   backgroundColor: 'white',
//                   border: 'none',
//                   borderBottom: '1px solid #d1d5db',
//                   boxShadow: 'none',
//                 }}
//               />
//             )}
//           />
//           {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

//           <label className="block text-gray-700 pt-2">Password</label>
//           <input
//             type="password"
//             className="w-full pt-2 mb-4 border-b"
//             placeholder="Enter Password"
//             {...register('password', { required: 'Password is required' })}
//           />
//           {errors.password && <p className="text-red-500">{errors.password.message}</p>}

//           <label className="block text-gray-700 pt-2">Referral Code (optional)</label>
//           <input
//             type="text"
//             className="w-full pt-2 mb-4 border-b"
//             placeholder="Enter Referral Code"
//             {...register('referralCode')}
//           />

//           <button 
//             type="submit" 
//             className="relative flex justify-center w-full h-14 px-4 py-4 mt-2 text-base font-medium text-white bg-[#FF6637] border border-transparent rounded-md group hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Sign Up
//           </button>

//           <div className="relative flex items-center justify-center w-full mt-5">
//             <hr className="w-full border-gray-300" />
//             <div className="absolute px-2 text-lg text-[#ff6637] bg-white">OR</div>
//           </div>

//           <button 
//             type="button" 
//             className="relative flex items-center justify-center w-full h-14 px-4 py-4 mt-5 text-base font-medium text-white bg-gradient-to-r from-[#FF6637] to-[#FF6637] border border-transparent rounded-md group hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             <span className="absolute gap-3 flex items-center pl-3">
//               <FaPhoneAlt className="w-5 h-5 text-white" />
//               Sign Up with Phone Number
//             </span>
//           </button>
//         </form>
//       </div>
//       <div className="mt-4">
//         <p className="text-gray-700">Already an account? <span className="text-[#FF6637]">SIGN IN</span></p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

"use client"
import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaPhoneAlt,
  FaGift,
  FaFacebookF,
  FaGoogle,
} from "react-icons/fa"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { Link } from "react-router-dom"
import logo from "../../../public/logo-e.png"

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-accent-primary to-accent-secondary py-6 px-8">
          <div className="flex justify-center">
            <img src={logo || "/placeholder.svg"} alt="Foodie" className="h-16" />
          </div>
          <h2 className="mt-4 text-center text-3xl font-extrabold text-white">Create Account</h2>
          <p className="mt-2 text-center text-white text-opacity-80">Sign up to join the Foodie community</p>
        </div>

        <div className="p-8">
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="firstName"
                    type="text"
                    {...register("firstName", { required: "First Name is required" })}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-accent-primary focus:border-accent-primary transition-colors"
                    placeholder="First Name"
                  />
                </div>
                {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="lastName"
                    type="text"
                    {...register("lastName", { required: "Last Name is required" })}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-accent-primary focus:border-accent-primary transition-colors"
                    placeholder="Last Name"
                  />
                </div>
                {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
              </div>
            </div>

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
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-accent-primary focus:border-accent-primary transition-colors"
                  placeholder="Email Address"
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <PhoneInput
                    country={"pk"}
                    value={field.value}
                    onChange={field.onChange}
                    inputStyle={{
                      width: "100%",
                      height: "48px",
                      fontSize: "16px",
                      borderRadius: "0.5rem",
                      border: "1px solid #D1D5DB",
                    }}
                    containerStyle={{
                      marginTop: "0.25rem",
                    }}
                    buttonStyle={{
                      borderTopLeftRadius: "0.5rem",
                      borderBottomLeftRadius: "0.5rem",
                      border: "1px solid #D1D5DB",
                    }}
                  />
                )}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
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
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-accent-primary focus:border-accent-primary transition-colors"
                  placeholder="Create Password"
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

            <div>
              <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700">
                Referral Code (Optional)
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaGift className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="referralCode"
                  type="text"
                  {...register("referralCode")}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-accent-primary focus:border-accent-primary transition-colors"
                  placeholder="Enter Referral Code"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                {...register("terms", { required: "You must agree to the terms and conditions" })}
                className="h-4 w-4 text-accent-primary focus:ring-accent-primary border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{" "}
                <Link to="/terms" className="text-accent-primary hover:text-accent-secondary">
                  Terms and Conditions
                </Link>
              </label>
            </div>
            {errors.terms && <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-accent-primary hover:bg-accent-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary transition-colors"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <FaGoogle className="h-5 w-5 text-red-500 mr-2" />
                Google
              </button>
              <button
                type="button"
                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <FaFacebookF className="h-5 w-5 text-blue-600 mr-2" />
                Facebook
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center">
              <button
                type="button"
                className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <FaPhoneAlt className="h-5 w-5 text-accent-primary mr-2" />
                Sign Up with Phone Number
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-accent-primary hover:text-accent-secondary">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
