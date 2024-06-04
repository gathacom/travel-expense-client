import Header from "@/components/Fragments/Header";
import React, { useState } from "react";

const TripPage = () => {
  const [username, setUsername] = useState("Gathacom");
    const [totalExpese , setTotalExpense] = useState(1000000);
  return (
    <>
      <div>
        <Header></Header>
        <div className="flex flex-row justify-between py-10 px-10">
        <div className="">
            <h2 className="font-bold text-xl text-primary">Wellcome {username}</h2>
        </div>
        <div className="w-1/4 p-2 bg-light border-primary border-2 rounded-xl">
            <h2 className="font-semibold">Total Expense</h2>
            <p className="font-bold text-xl text-primary">{totalExpese}</p>
            <select name="" id="" className="w-full border-2 rounded-lg">
                <option value="IDR">IDR</option>
                <option value="USD">USD</option>
                <option value="JPY">JPY</option>
            </select>
        </div>

        </div>

        <div className="p-10">
          <h1>Trip</h1>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Trip</th>
                <th className="border px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Bali</td>
                <td className="border px-4 py-2">2 Hari 2 malam</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TripPage;
