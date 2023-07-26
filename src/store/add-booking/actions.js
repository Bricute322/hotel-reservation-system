import { api } from "boot/axios";
import { Notify } from "quasar";
export const addBooking = async ({ commit }, payload) => {
  api.defaults.headers.common["Authorization"] = localStorage.getItem("token");
  api.defaults.headers.common["X-Api-Secret-Key"] = process.env.API_SECRET;
  await api
    .post(`/client/booking/add/?rooms=${payload.value}`, payload)
    .then((response) => {
      const book = response.data.data;
      commit("setBooking", book);
      Notify.create({
        message: response.data.message,
        type: "negative",
      }).catch((err) => {
        err.data.message;
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
// export const bookingList = async ({ commit }, cancelBookingPayload) => {
//   await api
//     .get(
//       `client/booking/cancel/?booking_id=${cancelBookingPayload.value}`,
//       cancelBookingPayload
//     )
//     .then((response) => {
//       const cancelBooking = response.data.data;
//       console.log(cancelBooking);
//       commit("cancelBooking", cancelBooking);
//     });
// };
