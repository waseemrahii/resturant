import React from "react";
import PropTypes from "prop-types";

const TipOptions = ({ tip, setTip }) => (
  <div className="my-8">
    <h3 className="text-sm font-semibold mb-2">Tip Your delivery partner</h3>
    <p className="text-gray-500">
      100% of the tip go to your delivery partner
    </p>
    <div className="flex space-x-2 mt-2">
      {[10, 20, 30].map((amount) => (
        <button
          key={amount}
          onClick={() => setTip(amount)}
          className={`px-4 py-2 rounded border ${
            tip === amount ? "bg-red-500 text-white" : "bg-white text-gray-700"
          }`}
        >
          ${amount}
        </button>
      ))}
      <button
        onClick={() => setTip(null)}
        className={`px-4 py-2 rounded border ${
          tip === null ? "bg-red-500 text-white" : "bg-white text-gray-700"
        }`}
      >
        Other
      </button>
    </div>
  </div>
);

TipOptions.propTypes = {
  tip: PropTypes.number,
  setTip: PropTypes.func.isRequired,
};

export default TipOptions;
