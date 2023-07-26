import { api } from "boot/axios";
import { Notify } from "quasar";
export const addBooking = async ({ commit }, payload) => {
  api.defaults.headers.common["Authorization"] = localStorage.getItem("token");
  api.defaults.headers.common["HTTP_API_SECRET_KEY"] = process.env.API_SECRET;
  await api
    .post(`/client/booking/add/?rooms=${payload.value}`, payload)
    .then((response) => {
      const book = response.data.data;
      commit("setBooking", book);
      Notify.create({
        message: response.data.message,
        type: "positive",
      }).catch((err) => {
        Notify.create({
          message: err.response?.data?.error,
          type: "negative",
        });
      });
    });
};
export const cancelBooking = async ({ commit }, cancelBookingPayload) => {
  await api
    .put(
      `client/booking/cancel/?booking_id=${cancelBookingPayload.value}`,
      cancelBookingPayload
    )
    .then((response) => {
      const cancelBooking = response.data.data;
      console.log(cancelBooking);
      commit("cancelBooking", cancelBooking);
    });
};
