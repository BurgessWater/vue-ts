import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/home/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "software" */ "../views/About.vue")
  },
  {
    path: "/software-detail",
    name: "software-detail",
    component: () =>
      import(/* webpackChunkName: "software" */ "../views/home/software-detail.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
