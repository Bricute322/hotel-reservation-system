import { api } from "boot/axios";
export const addBooking = async ({ commit }, payload) => {
  await api
    .post(`/client/booking/add/?rooms=${payload.value}`, payload)
    .then((response) => {
      const book = response.data.data;
      commit("setBooking", book);
    });
};
export const cancelBooking = async ({ commit }, cancelBookingPayload) => {
  await api
    .put(
      `client/booking/cancel/=${cancelBookingPayload.value}`,
      cancelBookingPayload
    )
    .then((response) => {
      const cancelBooking = response.data.data;
      commit("cancelBook", cancelBooking);
    });
};
