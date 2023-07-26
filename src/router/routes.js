const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/FirstPageMain.vue") },
      {
        path: "/details/:uid",
        component: () => import("src/pages/HotelDetailsPage.vue"),
      },
      {
        path: "/book/:uid",
        component: () => import("src/pages/BookingForm.vue"),
      },
      {
        path: "/booking-list",
        component: () => import("src/pages/BookListPage.vue"),
      },
      { path: "/login", component: () => import("src/pages/Login.vue") },
      { path: "/register", component: () => import("src/pages/Register.vue") },
      {
        path: "/result",
        component: () => import("src/pages/ResultPage.vue"),
      },
    ],
  },
  {
    path: "/auth",
    name: "Login",
    component: () => import("src/layouts/CreditsLayout.vue"),
    children: [
      // { path: "/login", component: () => import("src/pages/Login.vue") },
      // { path: "/register", component: () => import("src/pages/Register.vue") },
    ],
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   component: () => import("src/layouts/CreditsLayout.vue"),
  //   children: [{ path: "", component: () => import("src/pages/Register.vue") }],
  // },
  // {
  //   path: "/result",
  //   name: "Results",
  //   component: () => import("src/layouts/ResultLayout.vue"),
  //   children: [
  //     { path: "", component: () => import("src/pages/ResultPage.vue") },
  //   ],
  //   //   { path: "/add", component: () => import("src/pages/BookingForm.vue") },
  //   //   {
  //   //     path: "/details",
  //   //     component: () => import("src/pages/HotelDetails.vue"),
  //   //   },
  //   // ],
  // },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
