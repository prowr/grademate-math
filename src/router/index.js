import Vue from "vue";
import Router from "vue-router";
import HomeView from "../views/HomeView.vue";
import MathProblemsView from "../views/MathProblemsView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/problems",
      name: "MathProblems",
      component: MathProblemsView,
    },
  ],
});
