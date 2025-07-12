import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/Default.vue";
import MainPage from "@/views/MainPage.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        component: MainPage,
        name: "home",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
