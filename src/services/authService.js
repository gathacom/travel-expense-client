import axios from "axios";

const baseUrl = "https://travel-expense-server-dot-project-akhir-tcc.as.r.appspot.com";

export const signUp = async (data, callback) => {
    await axios
    .post(`${baseUrl}/signup`, data)
    .then(async (res) => {
      await callback(true, res);
    })
    .catch((err) => {
      callback(true, err);
    });
}
export const signIn = async (data, callback) => {
    await axios
    .post(`${baseUrl}/signin`, data)
    .then(async (res) => {
      await callback(true, res);
    })
    .catch((err) => {
      callback(true, err.message);
    });
}

export const checkUser = async (callback) => {
    const token = localStorage.getItem("token");
    await axios
    .post(`${baseUrl}/checkUser`,  { headers: { authorization: `Bearer ${token}` } })
    .then(async (res) => {
      await callback(true, res);
      console.log(res)
    })
    .catch((err) => {
      callback(false, err);
      // console.log(err)
      // console.log(err.response.config.data)
    });
}