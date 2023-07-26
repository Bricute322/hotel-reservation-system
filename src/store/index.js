import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import addBooking from "./add-booking";
import auth from "./auth";
import search from "./search";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    // state: {
    //   roomDetails: "",
    // },
    // mutations: {
    //   ROOM_DETAILS(state, payloadUID) {
    //     state.roomDetails = payloadUID;
    //   },
    // },
    // actions: {
    //   getListRooms({ commit }, payloadUID) {
    //     axios
    //       .get(`/client/rooms/list/?uid=${payloadUID.uid}`)
    //       .then((response) => {
    //         commit("ROOM_DETAILS", response.data.data);
    //       });
    //   },
    // },
    modules: {
      addBooking,
      auth,
      search,
    },

    strict: process.env.DEBUGGING,
  });

  return Store;
});
