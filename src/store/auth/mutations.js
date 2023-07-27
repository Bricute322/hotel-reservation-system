export const setAccount = (state, register) => {
  state.register = register;
};
export const signInAccount = (state, login) => {
  state.login = login;
};
export const setUser = (state, user) => {
  state.user = user;
};
export const setApiSecretKey = (state, apiSecret) => {
  state.apiSecret = apiSecret;
};
export const logoutAccount = (state) => {
  state.logout = null;
  window.localStorage.removeItem("vuex");
};
