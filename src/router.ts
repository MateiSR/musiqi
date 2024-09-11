import { createWebHistory, createRouter } from "vue-router";

// Pages (components)
import HomeView from "./HomeView.vue";
import Lobby from "./Lobby.vue";

// Routes
const routes = [
  { path: "/", component: HomeView },
  { path: "/lobby", component: Lobby },
];

// Router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
