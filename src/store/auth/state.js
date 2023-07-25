export default function () {
  return {
    register: [],
    login: [],
    apiSecret: null,
    token: localStorage.getItem("access_tokne"),
    status: "",
    user: null,
  };
}
