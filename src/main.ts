// Vue
import { createApp } from "vue";
import router from "./router.ts";

// Styles
import "./assets/styles/style.css";

// Pages (components)
import App from "./App.vue";

// Initialize Vue
const app = createApp(App);
app.use(router);
app.mount("#app");
