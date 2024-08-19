import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaEnvelope } from "react-icons/fa";

const Loginwithphone = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Login</h2>
        <p className='text-sm text-gray-500'>Sign in to continue</p>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="phone" className="text-gray-500">Login</label>
              <PhoneInput
                placeholder="Phone"
                country={'us'}
                
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: true,
                  
                }}
                inputStyle={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '16px',
                  borderBottom: '1px solid #d1d5db',
                  backgroundColor: 'white',
                }}
                containerStyle={{
                  width: '100%',
                }}
                dropdownStyle={{
                  backgroundColor: 'white',
                  zIndex: '10',
                }}
                buttonStyle={{
                  backgroundColor: 'white',
                  borderRight: '1px solid #d1d5db',
                }}

              />
            </div>
          </div>
          <div>
            <button 
              type="submit" 
              className="relative flex justify-center w-full h-14 px-8 py-4 text-base font-bold text-white bg-[#FF6637] border border-transparent rounded-md group hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send OTP
            </button>
          </div>
          <div className="relative flex items-center justify-center w-full mt-4">
            <hr className="w-full border-gray-300" />
            <div className="absolute px-2 text-lg text-[#ff6637] bg-white">OR</div>
          </div>
          <div>
            <button 
              type="button" 
              className="relative flex justify-center w-full h-14 px-4 py-4 mt-2 text-base font-medium text-white bg-[#FF6637] border border-transparent rounded-md group hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute gap-3 flex items-center pl-3">
                <FaEnvelope className="w-5 h-5 text-white" />
                Login with Email
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginwithphone;
