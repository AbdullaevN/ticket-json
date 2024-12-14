import React from "react";

const CurrencySelector = ({ currency, onCurrencyChange }) => {
  const currencies = ["RUB", "USD", "EUR"];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Валюта</h2>
      <div className="flex gap-2">
        {currencies.map((curr) => (
          <button
            key={curr}
            onClick={() => onCurrencyChange(curr)}
            className={`px-4 py-2 rounded ${
              currency === curr ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {curr}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CurrencySelector;
