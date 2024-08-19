import { useState } from "react";
import { Carousel } from "antd";

import { FaCreditCard } from "react-icons/fa";

const BuyGift = () => {
  const items = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbanner.png?alt=media&token=f3117d29-8280-4c57-b019-e4d8a33cca50",
      alt: "Banner 1",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fhm-banner4.png?alt=media&token=7c853972-d8c8-4187-a872-8e345486cef4",
      alt: "Banner 2",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fhm-banner3.png?alt=media&token=9c21f78a-9d3e-4ea2-bae2-39034729fdb7",
      alt: "Banner 3",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbanner.png?alt=media&token=f3117d29-8280-4c57-b019-e4d8a33cca50",
      alt: "Banner 1",
    },
  ];
  const [showInput, setShowInput] = useState(false);
  const [amount, setAmount] = useState("");
  // const [message, setMessage] = useState("");
  const [selected, setSelected] = useState("");

  const handleButtonClick = (value) => {
    setSelected(value);
    if (value === "other") {
      setShowInput(true);
    } else {
      setShowInput(false);
      setAmount(value);
    }
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className=" grid grid-cols-6 gap-1 my-4">
      <div className="col-span-6 md:col-span-4 lg:col-span-4 sticky">
        <Carousel arrows={true} infinite={true} className="carousel h-[100%]">
          {items.map((item, index) => (
            <div key={index}>
              <img
                src={item.src}
                alt={item.alt}
                className="lg:h-[60vh] md:h-[50vh] h-[40vh] w-full object-cover rounded-lg"
              />
            </div>
          ))}
        </Carousel>
        <div className="flex flex-col w-[80%] justify-end mx-end my-4">
          <div className="mb-4 px-5 py-3 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Add Amount</h2>
            <div className=" flex flex-col gap-2 lg:flex-row md:flex-row">
              {["1000", "2000", "5000"].map((value) => (
                <button
                  key={value}
                  className={`p-2 rounded ${
                    selected === value ? "bg-red text-white" : "bg-gray-200"
                  }`}
                  onClick={() => handleButtonClick(value)}
                >
                  ${value}.00
                </button>
              ))}
              <button
                className={`p-2 rounded ${
                  selected === "other" ? "bg-red text-white" : "bg-gray-200"
                }`}
                onClick={() => handleButtonClick("other")}
              >
                Other
              </button>
            </div>
            {showInput && (
              <div className="mb-4 pt-5">
                <label className="block mb-2 font-semibold text-lg">
                  Add Amount
                </label>
                <input
                  type="number"
                  className="border p-2 rounded w-full"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            )}
          </div>

          <div className="mb-4 px-5 py-3 bg-white rounded-lg shadow-md">
            <label className="block mb-2 font-semibold text-xl">
              Add Message (optional)
            </label>
            <textarea
              name="
            "
              id=""
              className="border p-2 rounded w-full h-10 "
            ></textarea>

            {/* <input
              type="text"
              className="border p-2 rounded w-full"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            /> */}
          </div>

          <div className="w-full ">
            <div className=" ">
              <div className="text-3xl  p-2 font-bold bg-red text-white hidden lg:flex md:flex items-center justify-center rounded-full">
                <FaCreditCard />
              </div>
            </div>
            <div className="p-4 w-full bg-white rounded-xl shadow-md overflow-hidden">
              <div className="flex items-center space-x-4">
                <div>
                  <div className="text-xl font-medium text-black">
                    Select Payment Option
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="border-t border-gray-300 my-2"></div>
                <div className="flex items-center mb-2 text-xl font-semibold">
                  <input
                    id="razorpay"
                    name="paymentOption"
                    type="radio"
                    value="RazorPay"
                    checked={selectedOption === "RazorPay"}
                    onChange={handleOptionChange}
                    className="form-radio h-4 w-4 text-red"
                  />
                  <label
                    htmlFor="razorpay"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    RazorPay
                  </label>
                </div>
                <div className="border-t border-gray-300 my-2"></div>
                <div className="flex items-center mb-2 text-xl font-semibold">
                  <input
                    id="stripe"
                    name="paymentOption"
                    type="radio"
                    value="Stripe"
                    checked={selectedOption === "Stripe"}
                    onChange={handleOptionChange}
                    className="form-radio h-4 w-4 text-red"
                  />
                  <label
                    htmlFor="stripe"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Stripe
                  </label>
                </div>
                <div className="border-t border-gray-300 my-2"></div>
                <div className="flex items-center mb-2 text-xl font-semibold">
                  <input
                    id="paypal"
                    name="paymentOption"
                    type="radio"
                    value="PayPal"
                    checked={selectedOption === "PayPal"}
                    onChange={handleOptionChange}
                    className="form-radio h-4 w-4 text-red"
                  />
                  <label
                    htmlFor="paypal"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    PayPal
                  </label>
                </div>
                <div className="border-t border-gray-300 my-2"></div>
                <div className="flex items-center mb-2 text-xl font-semibold">
                  <input
                    id="payfast"
                    name="paymentOption"
                    type="radio"
                    value="PayFast"
                    checked={selectedOption === "PayFast"}
                    onChange={handleOptionChange}
                    className="form-radio h-4 w-4 text-red"
                  />
                  <label
                    htmlFor="payfast"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    PayFast
                  </label>
                </div>
                <div className="border-t border-gray-300 my-2"></div>
                <div className="flex items-center mb-2 text-xl font-semibold">
                  <input
                    id="paystack"
                    name="paymentOption"
                    type="radio"
                    value="PayStack"
                    checked={selectedOption === "PayStack"}
                    onChange={handleOptionChange}
                    className="form-radio h-4 w-4 text-red"
                  />
                  <label
                    htmlFor="paystack"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    PayStack
                  </label>
                </div>
                <div className="border-t border-gray-300 my-2"></div>
                <div className="flex items-center mb-2 text-xl font-semibold">
                  <input
                    id="flutterwave"
                    name="paymentOption"
                    type="radio"
                    value="FlutterWave"
                    checked={selectedOption === "FlutterWave"}
                    onChange={handleOptionChange}
                    className="form-radio h-4 w-4 text-red"
                  />
                  <label
                    htmlFor="flutterwave"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    FlutterWave
                  </label>
                </div>
                <div className="border-t border-gray-300 my-2"></div>
                <div className="flex items-center mb-2 text-xl font-semibold">
                  <input
                    id="mercadopago"
                    name="paymentOption"
                    type="radio"
                    value="MercadoPago"
                    checked={selectedOption === "MercadoPago"}
                    onChange={handleOptionChange}
                    className="form-radio h-4 w-4 text-red"
                  />
                  <label
                    htmlFor="mercadopago"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    MercadoPago
                  </label>
                </div>
                <div className="border-t border-gray-300 my-2 text-xl font-semibold"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky col-span-6 md:col-span-2 lg:col-span-2 p-4 sticky ">
        <div className="max-w-full md:max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8">
          <h2 className="text-xl  font-semibold mb-4 text-gray-800">
            Billing Summary
          </h2>
          <div className="border-b-2 border-red mb-4 w-16"></div>
          <p className="text-sm text-gray-600 mb-4">
            Complete payment and share this e-gift card with loved ones using
            any app.
          </p>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Sub Total</span>
            <span className="text-gray-800">$ 0</span>
          </div>
          <div className="border-t border-gray-300 my-4"></div>
          <div className="flex justify-between items-center mb-6">
            <span className="font-semibold text-gray-800">Total</span>
            <span className="font-semibold text-gray-800">$ 0</span>
          </div>
          <button
            type="button"
            className="w-full py-3 text-white font-bold bg-red-500 hover:bg-orange-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-800"
          >
            Pay $ 0 →
          </button>
        </div>
      </div>
      {/* -------------------------------------------------- */}
    </div>
  );
};

export default BuyGift;
