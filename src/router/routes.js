const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // { path: "", component: () => import("src/pages/Search.vue") },
      { path: "", component: () => import("src/pages/FirstPageMain.vue") },
    ],
  },
  {
    path: "/",
    name: "Login",
    component: () => import("src/layouts/CreditsLayout.vue"),
    children: [
      { path: "/login", component: () => import("src/pages/Login.vue") },
      { path: "/register", component: () => import("src/pages/Register.vue") },
      {
        path: "/details",
        component: () => import("src/pages/HotelDetailsPage.vue"),
      },
    ],
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   component: () => import("src/layouts/CreditsLayout.vue"),
  //   children: [{ path: "", component: () => import("src/pages/Register.vue") }],
  // },
  {
    path: "/result",
    name: "Results",
    component: () => import("src/layouts/ResultLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/ResultPage.vue") },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
