import { api } from "boot/axios";
import { Notify } from "quasar";
export const registerAction = async ({ commit }, registerPayload) => {
  await api.post(`client/register/`, registerPayload).then((response) => {
    const token = response.data.data;
    commit("setAccount", token);
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
