import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = "cur_live_qMHCbPI4lK83ZUKyMBJh2wVgMiYnDOpOMEfARTIU";

const currenciesData = [
  { label: "IDR", value: "IDR" },
  { label: "USD", value: "USD" },
  { label: "EUR", value: "EUR" },
  { label: "JPY", value: "JPY" },
  { label: "GBP", value: "GBP" },
  { label: "AUD", value: "AUD" },
];

const TotalExpense = ({ totalExpense = 1000 }) => {
  const [currency, setCurrency] = useState("IDR");
  const [convertedExpense, setConvertedExpense] = useState(totalExpense);

  useEffect(() => {
    const convertCurrency = async () => {
      try {
        const response = await axios.get(
          `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=IDR&currencies=${currency}`
        );
        const rate = response.data.data[currency].value;
        setConvertedExpense(totalExpense * rate);
      } catch (error) {
        console.error("Error fetching currency data: ", error);
      }
    };
    if (currency !== "IDR") {
      convertCurrency();
    } else {
      setConvertedExpense(totalExpense);
    }
  }, [currency, totalExpense]);

  return (
    <>
      <div className="flex flex-col items-center w-full p-2">
        <h2 className="font-semibold text-light">Your Total Expense</h2>
        <p className="font-bold text-xl text-light py-4">
          {convertedExpense ? convertedExpense.toFixed(2) : "0.00"}
        </p>
        <select
          name="currency"
          id="currency"
          className="w-1/2 h-10 text-lg font-semibold text-center border-2 rounded-lg"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {currenciesData.map((currency) => (
            <option key={currency.value} value={currency.value}>
              {currency.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default TotalExpense;
