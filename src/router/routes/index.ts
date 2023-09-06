const routes = [
  {
    path: "/workbench",
    name: "Workbench",
    component: () => import("@/layout/index.vue"),
  },
  {
    path: "/home",
    name: "Home",
    alias: "/",
    component: () => import("@/views/home.vue"),
  },
];

export default routes;
