import { api } from "boot/axios";
export const registerAction = async ({ commit }, registerPayload) => {
  await api.post(`client/register/`, registerPayload).then((response) => {
    const token = response.data.data;
    commit("setAccount", token);
  });
};
export const loginAction = async ({ commit }, loginPayload) => {
  await api.post(`client/login/`, loginPayload).then((response) => {
    const access_token = response.data.access_token;
    console.log("asd", access_token);
    const user = response.data.user;
    commit("setUser", user);
    commit("signInAccount", access_token);
    localStorage.setItem("Bearer", access_token);
    api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
  });
};
export const setApiSecretKey = async ({ commit }, apiPayload) => {
  commit("setApiSecretKey", apiPayload);
};
