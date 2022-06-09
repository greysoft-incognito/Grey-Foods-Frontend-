const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/onboarding", component: () => import("pages/OnBoarding.vue") },
      { path: "/login", component: () => import("pages/Login.vue") },
      { path: "/register", component: () => import("pages/Register.vue") },
      { path: "/app", component: () => import("pages/Index.vue") },
      {
        path: "/notifications",
        component: () => import("pages/Notifications.vue"),
        name: "Notifications",
      },
      {
        path: "/order",
        component: () => import("pages/Order.vue"),
        name: " Order",
      },
      {
        path: "/order_rating",
        component: () => import("pages/OrderRating.vue"),
        name: "Rate Your Order",
      },
      {
        path: "/favourites",
        component: () => import("pages/Favourites.vue"),
        name: "Favourites",
      },
      {
        path: "/help",
        component: () => import("pages/Help.vue"),
        name: "Help",
      },
      {
        path: "/sample",
        component: () => import("pages/Sample.vue"),
        name: "Sample",
      },
    ],
  },
  {
    path: "/index",
    component: () => import("layouts/UserDashboard.vue"),
    children: [{ path: "/index", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/welcome",
    component: () => import("layouts/UserDashboard.vue"),
    children: [
      { path: "/welcome", component: () => import("pages/Welcome.vue") },
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
