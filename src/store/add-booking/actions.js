import { api } from "boot/axios";
import { Notify } from "quasar";
export const addBooking = async ({ commit }, payload) => {
  api.defaults.headers.common["Authorization"] = localStorage.getItem("token");
  api.defaults.headers.common["api-secret-key"] = process.env.API_SECRET;
  await api
    .post(`/client/booking/add/?rooms=${payload.value}`, payload)
    .then((response) => {
      const book = response.data.data;
      commit("setBooking", book);
      Notify.create({
        message: response.data.message,
        type: "positive",
        actions: [
          {
            label: "Check your Bookings",
            to: "/booking-list",
            color: "yellow",
          },
        ],
      });
    })
    .catch((err) => {
      Notify.create({
        message: err.response?.data?.message,
        type: "negative",
      });
    });
};
export const cancelBooking = async ({ commit }, cancelBookingPayload) => {
  await api
    .put(
      `/client/booking/cancel/?booking_id=${cancelBookingPayload}`,
      cancelBookingPayload
    )
    .then((response) => {
      const cancelBooking = response.data.data;
      commit("cancelBooking", cancelBooking);
      Notify.create({
        message: response.data.message,
        type: "positive",
      });
      window.location.reload();
    });
};
