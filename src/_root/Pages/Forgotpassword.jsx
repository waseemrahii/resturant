import React from 'react';

const Forgotpassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className="outline-none bg-white w-full px-3 py-2 text-gray-900 border-b border-gray-300" 
                placeholder="Enter Email" 
              />
            </div>
          </div>
          <div>
            <button 
              type="submit" 
              className="relative flex justify-center w-full h-14 px-8 py-4 text-base font-bold text-white bg-[#FF6637] border border-transparent rounded-md group hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Link
            </button>
          </div>
          <div>
            <button 
              type="button" 
              className="relative flex justify-center w-full h-14 px-8 py-4 text-base font-bold text-white bg-[#FF6637] border border-transparent rounded-md group hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;
