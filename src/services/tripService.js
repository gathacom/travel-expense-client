import axios from "axios";

const baseUrl = "https://travel-expense-server-dot-project-akhir-tcc.as.r.appspot.com";


export const addTrip = async (data, callback) => {
    const token = await localStorage.getItem("token");
    await axios
    .post(`${baseUrl}/trip`, data, { headers: { Authorization: `Bearer ${token}` } })
    .then(async (res) => {
      await callback(true, res);
    })
    .catch((err) => {
      callback(true, err);
    });
}
export const tripsByAuthor = async (callback) => {
    const token = await localStorage.getItem("token");
    await axios
    .get(`${baseUrl}/tripsByAuthor`,{ headers: { Authorization: `Bearer ${token}` } })
    .then(async (res) => {
      await callback(true, res);
    })
    .catch((err) => {
      callback(false, err);
    });
}
export const tripById = async (tripId, callback) => {
    const token = await localStorage.getItem("token");
    await axios
    .get(`${baseUrl}/trip/${tripId}`,{ headers: { Authorization: `Bearer ${token}` } })
    .then(async (res) => {
      await callback(true, res);
    })
    .catch((err) => {
      callback(true, err);
    });
}
export const editTrip = async (tripId, data, callback) => {
    const token = await localStorage.getItem("token");
    await axios
    .patch(`${baseUrl}/trip/${tripId}`,data, { headers: { Authorization: `Bearer ${token}` } })
    .then(async (res) => {
      await callback(true, res);
    })
    .catch((err) => {
      callback(true, err);
    });
}

export const destroyTrip = async (tripId, callback) => {
    const token = await localStorage.getItem("token");
    await axios
    .delete(`${baseUrl}/trip/${tripId}`, { headers: { Authorization: `Bearer ${token}` } })
    .then(async (res) => {
      await callback(true, res);
      console.log("res ", res);
    })
    .catch((err) => {
      callback(true, err);
    });
}