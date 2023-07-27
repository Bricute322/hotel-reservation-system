export const setBooking = (state, book) => {
  state.book = book;
};
export const cancelBook = (state, cancelBookingPayload) => {
  state.cancelBooking = cancelBookingPayload;
};
