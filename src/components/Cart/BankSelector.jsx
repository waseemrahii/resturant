import  { useState } from "react";

const banks = ["HDFC", "ICICI", "AXIS", "KOTAK"];

const BankSelector = () => {
  const [activeTab, setActiveTab] = useState(banks[0]);
  const [selectedBank, setSelectedBank] = useState(banks[0]);

  const handleTabClick = (bank) => {
    setActiveTab(bank);
    setSelectedBank(bank);
  };

  const handleSelectChange = (e) => {
    setSelectedBank(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="flex border border-gray-300 rounded">
        {banks.slice(0, 3).map((bank) => (
          <button
            key={bank}
            onClick={() => handleTabClick(bank)}
            className={`flex-1 py-2 ${
              activeTab === bank
                ? "bg-gray-500 text-white"
                : "bg-white text-gray-700"
            } border-r last:border-r-0`}
          >
            {bank}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Select Bank
        </label>
        <select
          value={selectedBank}
          onChange={handleSelectChange}
          className="block w-full border border-gray-300 rounded py-2 px-3 text-gray-700"
        >
          {banks.map((bank) => (
            <option key={bank} value={bank}>
              {bank}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BankSelector;
