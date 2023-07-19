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
    path: "/login",
    name: "Login",
    component: () => import("src/layouts/CreditsLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/Login.vue") }],
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("src/layouts/CreditsLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/Register.vue") }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
