import axios from "axios";

const baseUrl = "https://travel-expense-server-dot-project-akhir-tcc.as.r.appspot.com";


export const totalExpenses = async (callback) => {
    const token = await localStorage.getItem("token");
    await axios
    .get(`${baseUrl}/expenses/total`, { headers: { Authorization: `Bearer ${token}` } })
    .then(async (res) => {
      await callback(true, res);
    })
    .catch((err) => {
      callback(true, err);
    });
}
export const totalExpensesByTrip = async (tripId, callback) => {
    const token = await localStorage.getItem("token");
    await axios
    .get(`${baseUrl}/expenses/total/${tripId}`, data, { headers: { Authorization: `Bearer ${token}` } })
    .then(async (res) => {
      await callback(true, res);
    })
    .catch((err) => {
      callback(true, err);
    });
}
export const addExpense = async (data, callback) => {
    const token = await localStorage.getItem("token");
    await axios
    .post(`${baseUrl}/expense`, data, { headers: { Authorization: `Bearer ${token}` } })
    .then(async (res) => {
      await callback(true, res);
    })
    .catch((err) => {
      callback(true, err);
    });
}
export const expenseById = async (tripId,expenseId, callback) => {
    const token = await localStorage.getItem("token");
    await axios
    .get(`${baseUrl}/expense/${tripId}/${expenseId}`,{ headers: { Authorization: `Bearer ${token}` } })
    .then(async (res) => {
      await callback(true, res);
    })
    .catch((err) => {
      callback(true, err);
    });
}
export const editExpense = async (tripId, expenseId, data, callback) => {
    const token = await localStorage.getItem("token");
    await axios
    .put(`${baseUrl}/expense/${tripId}/${expenseId}`, data, { headers: { Authorization: `Bearer ${token}` } })
    .then(async (res) => {
      await callback(true, res);
    })
    .catch((err) => {
      callback(true, err);
    });
}

export const destroyExpense = async (tripId,expenseId, callback) => {
    const token = await localStorage.getItem("token");
    await axios
    .delete(`${baseUrl}/expense/${tripId}/${expenseId}`, { headers: { Authorization: `Bearer ${token}` } })
    .then(async (res) => {
      await callback(true, res);
      console.log("res ", res);
    })
    .catch((err) => {
      callback(true, err);
    });
}