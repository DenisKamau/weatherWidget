import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import Vue3Transitions from "vue3-transitions";

const app = createApp(App);
app.use(Vue3Transitions);
app.mount("#app");
