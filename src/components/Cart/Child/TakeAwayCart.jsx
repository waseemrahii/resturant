import PropTypes from 'prop-types';

const TakeAwayCart = ({ summaryItems, total }) => {
  return (
    <div className="rounded-lg shadow-md border border-gray-200 my-2 p-4 w-full h-[65%] sticky top-2">
      <div>
        <h2 className="text-sm font-semibold text-gray-500">Your Cart is Empty</h2>
        <div className="w-full border-b border-gray-300 mt-2"></div>
      </div>

      <div className="my-6 text-xs">
        <h3 className="text-sm font-semibold mb-2">Delivery Option</h3>
        <p className="text-gray-500">Takeaway(Free)</p>
      </div>
    <div className='py-6'>
    {summaryItems.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between text-md text-gray-600 border-b-2 py-2">
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>
          {/* {index < summaryItems.length - 1 && <div className="w-full border-b border-gray-300 mt-4"></div>} */}
        </div>
      ))}
    </div>
      

      <div className="flex justify-between text-lg font-semibold mb-4">
        <span>Total</span>
        <span>${total}</span>
      </div>
      <button className="w-full bg-red-500 text-white py-3 rounded-lg">Pay ${total} →</button>
    </div>
  );
};

TakeAwayCart.propTypes = {
  summaryItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
};

export default TakeAwayCart;
