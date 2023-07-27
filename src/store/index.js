import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import persistedStateVuex from "persisted-state-vuex";

import addBooking from "./add-booking";
import auth from "./auth";
import search from "./search";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      addBooking,
      auth,
      search,
    },
    plugins: [persistedStateVuex.init],
    strict: process.env.DEBUGGING,
  });

  return Store;
});
