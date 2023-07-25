import { boot } from "quasar/wrappers";
import axios from "axios";
import { Store } from "vuex";
// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: "http://127.0.0.1:8000" });
axios.interceptors.request.use(
  (config) => {
    const access_token = Store.state.login.access_token;
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    const api_secret = Store.state.apiSecret.api_secret;
    if (api_secret) {
      config.headers[
        "998c252dbd701945b097c603d3421a73442283abfab86f787f2d8adc75e9c4ac"
      ] = api_secret;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { axios, api };
