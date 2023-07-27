function guardMyroute(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("token")) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next();
  } else {
    next("/");
  }
}
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
        beforeEnter: guardMyroute,
      },
      {
        path: "/booking-list",
        component: () => import("src/pages/BookListPage.vue"),
        beforeEnter: guardMyroute,
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
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
