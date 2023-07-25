import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import addBooking from "./add-booking";
import auth from "./auth";
import search from "./search";
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

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

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
