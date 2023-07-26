export default function () {
  return {
    register: [],
    login: [],
    apiSecret: null,
    token: localStorage.getItem("access_token"),
    status: "",
    user: null,
  };
}
