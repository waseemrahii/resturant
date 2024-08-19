import PropTypes from 'prop-types';

const CartSummary = ({ summaryItems, tip, setTip, total }) => {
  return (
    <div className="rounded-lg shadow-md border border-gray-200 my-2 p-4 w-full h-[65%] sticky top-2">
      <div>
        <h2 className="text-sm font-semibold text-gray-500">Your Cart is Empty</h2>
        <div className="w-full border-b border-gray-300 mt-2"></div>
      </div>

      <div className="my-4">
        <h3 className="text-md font-semibold mb-2">Delivery Option</h3>
        <p className="text-gray-500">Delivery</p>
      </div>

      <div className="my-8">
        <h3 className="text-sm font-semibold mb-2">Tip Your delivery partner</h3>
        <p className="text-gray-500">100% of the tip goes to your delivery partner</p>
        <div className="flex space-x-2 mt-2">
          {[10, 20, 30].map((amount) => (
            <button
              key={amount}
              onClick={() => setTip(amount)}
              className={`px-4 py-2 rounded border ${
                tip === amount ? "bg-red text-primary-900" : "bg-white text-gray-700"
              }`}
            >
              ${amount}
            </button>
          ))}
          <button
            onClick={() => setTip(null)}
            className={`px-4 py-2 rounded border ${
              tip === null ? "bg-red text-primary-900" : "bg-white text-gray-700"
            }`}
          >
            Other
          </button>
        </div>
        <div className="w-full border-b border-gray-300 mt-5"></div>
      </div>

      {summaryItems.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between text-md text-gray-600">
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>
          {index < summaryItems.length - 1 && <div className="w-full border-b border-gray-300 mt-4"></div>}
        </div>
      ))}

      <div className="w-full border-b border-gray-300 mt-4"></div>
      <div className="flex justify-between text-lg font-semibold mb-4">
        <span>Total</span>
        <span>${total}</span>
      </div>
      <button className="w-full bg-red-500 text-white py-3 rounded-lg">Pay ${total} →</button>
    </div>
  );
};

CartSummary.propTypes = {
  summaryItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  tip: PropTypes.number.isRequired,
  setTip: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default CartSummary;
