import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FaPhoneAlt } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const SignUp = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Sign up With Us</h2>
        <p className="mb-6">Sign up to continue</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            className="w-full pt-2 mb-4 border-b"
            placeholder="Enter First Name"
            {...register('firstName', { required: 'First Name is required' })}
          />
          {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            className="w-full pt-2 mb-4 border-b"
            placeholder="Enter Last Name"
            {...register('lastName', { required: 'Last Name is required' })}
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}

          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            className="w-full pt-2 mb-4 border-b"
            placeholder="Enter Email Address"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Entered value does not match email format'
              }
            })}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <label className="block text-gray-700">Phone Number</label>
          <Controller
            name="phone"
            control={control}
            rules={{ required: 'Phone number is required' }}
            render={({ field }) => (
              <PhoneInput
                country={'us'}
                value={field.value}
                onChange={field.onChange}
                inputStyle={{
                  width: '100%',
                  padding: '10px 0',
                  fontSize: '16px',
                  border: 'none',
                  borderBottom: '1px solid #d1d5db',
                  backgroundColor: 'white',
                }}
                containerStyle={{
                  width: '100%',
                }}
                dropdownStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  boxShadow: 'none',
                  zIndex: '10',
                }}
                buttonStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderBottom: '1px solid #d1d5db',
                  boxShadow: 'none',
                }}
              />
            )}
          />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

          <label className="block text-gray-700 pt-2">Password</label>
          <input
            type="password"
            className="w-full pt-2 mb-4 border-b"
            placeholder="Enter Password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}

          <label className="block text-gray-700 pt-2">Referral Code (optional)</label>
          <input
            type="text"
            className="w-full pt-2 mb-4 border-b"
            placeholder="Enter Referral Code"
            {...register('referralCode')}
          />

          <button 
            type="submit" 
            className="relative flex justify-center w-full h-14 px-4 py-4 mt-2 text-base font-medium text-white bg-[#FF6637] border border-transparent rounded-md group hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>

          <div className="relative flex items-center justify-center w-full mt-5">
            <hr className="w-full border-gray-300" />
            <div className="absolute px-2 text-lg text-[#ff6637] bg-white">OR</div>
          </div>

          <button 
            type="button" 
            className="relative flex items-center justify-center w-full h-14 px-4 py-4 mt-5 text-base font-medium text-white bg-gradient-to-r from-[#FF6637] to-[#FF6637] border border-transparent rounded-md group hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute gap-3 flex items-center pl-3">
              <FaPhoneAlt className="w-5 h-5 text-white" />
              Sign Up with Phone Number
            </span>
          </button>
        </form>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">Already an account? <span className="text-[#FF6637]">SIGN IN</span></p>
      </div>
    </div>
  );
};

export default SignUp;
