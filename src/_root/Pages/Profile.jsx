import React, { useState } from "react";
import { FaArrowRight, FaRegEdit } from "react-icons/fa";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "Aqib",
    lastName: "Ahmed",
    email: "aqibahmed886@gmail.com",
    phone: "+923161887004",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="w-[80%] mx-auto h-screen mt-10 my-auto mx-auto p-2">
      <div className="flex  flex-col lg:flex-row gap-4">
        <div className="bg-white  lg:w-1/3">
          <div className="flex flex-col border py-4 shadow-md rounded-lg items-center">
            <div className="flex gap-2">
              <div className="rounded-full bg-gray-100 p-3 mb-4">
                <FaRegEdit className="text-6xl text-red-500" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-xm font-bold text-red-500">Aqib Ahmed</h2>
                <p className="text-gray-500 mb-4">aqibahmed886@gmail.com</p>
              </div>
            </div>
            <div className="flex bg-gray-100 justify-between w-full text-center mb-4 h-16 items-center p-4">
              <p className="text-gray-500">Wallet Amount</p>
              <p className="text-red-500 text-xl">$0.00</p>
            </div>
            <button className="flex justify-between items-center bg-white w-full  p-4 text-gray-400 font-bold rounded-md py-2 px-4">
              Change Password
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-2/3">
          <h2 className="text-xl font-bold mb-4">My account</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Image</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="flex w-full">
              <button
                type="submit"
                className="bg-red-500 w-full text-white rounded-lg py-2 px-6"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
