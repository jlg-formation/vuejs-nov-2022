import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/legal",
      component: () => import("../views/LegalView.vue"),
    },
    {
      path: "/stock",
      children: [
        {
          path: "",
          component: () => import("../views/stock/ListView.vue"),
        },
        {
          path: "add",
          component: () => import("../views/stock/CreateView.vue"),
        },
      ],
    },
  ],
});

export default router;
