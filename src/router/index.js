import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/views/MainPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/read-more",
    name: "read-more",
    component: () => import("../views/ReadMoreCovidSymptoms.vue"),
  },
  {
    path: "/medicine-articles",
    name: "medicine-articles",
    component: () => import("../views/MedicineArticles.vue"),
  },
  {
    path: "/medicine-article/:id",
    name: "medicine-article",
    component: () => import("../components/MedArticleReader.vue"),
  },
  {
    path: "/hospital/",
    name: "medicine-article",
    component: () => import("../views/HospitalPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
