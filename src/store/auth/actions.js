import { api } from "boot/axios";
import { Notify } from "quasar";
export const registerAction = async ({ commit }, registerPayload) => {
  await api.post(`client/register/`, registerPayload).then((response) => {
    const token = response.data.data;
    commit("setAccount", token);
  });
};
export const logout = async ({ commit }) => {
  await api.post(`/client/logout/`).then(() => {
    commit("logoutAccount");
  });
};
export const loginAction = async ({ commit }, loginPayload) => {
  return await api
    .post(`client/login/`, loginPayload)
    .then((response) => {
      const access_token = response.data.access_token;
      commit("setUser", { name: "Ronuel Reyes" });
      commit("signInAccount", access_token);
      localStorage.setItem("token", `Bearer ${access_token}`);
      api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
      return true;
    })
    .catch((err) => {
      Notify.create({
        message: err.response?.data?.error,
        type: "negative",
      });
      return false;
    });
};
export const setApiSecretKey = async ({ commit }, apiPayload) => {
  commit("setApiSecretKey", apiPayload);
};

// export const testAction = async () => {
//   console.log("try", api.defaults.headers);
//   api.defaults.headers.common["Authorization"] = localStorage.getItem("token");
//   api.defaults.headers.common["X-Api-Secret-Key"] = process.env.API_SECRET;
//   await api
//     .get(`https://jsonplaceholder.typicode.com/todos/1`)
//     .then((response) => {

//       console.log(response);
//     });
// };
