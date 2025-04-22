"use client"

import { useState } from "react"

const JoinUs = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    alert(`Thank you for subscribing with: ${email}`)
    setEmail("")
  }

  return (
    <div className="w-[90%] max-w-7xl mx-auto my-12 bg-[#e8f5f0] rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
          <img src="/newsletter-300x215.jpg" alt="Join our newsletter" className="w-48 md:w-64 mb-4 md:mb-0 md:mr-8" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-2">Join Us!</h2>
            <p className="text-gray-600 max-w-md">
              Subscribe to our weekly newsletter and be a part of our journey to self discovery and love.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="flex-grow md:w-64 px-4 py-3 rounded-l-lg focus:outline-none border-2 border-r-0 border-gray-200"
            required
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-r-lg transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default JoinUs
