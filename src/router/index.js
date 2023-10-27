import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/dashboard/transaction-details/:id",
    name: "transaction details",
    component: () => import("../views/DashboardTransactionDetails.vue"),
  },
];

const base = "/dashboard";

const router = createRouter({
  history: createWebHistory(base),
  routes,
});

export default router;
