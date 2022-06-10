import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import Vue3Transitions from "vue3-transitions";
// import VueKinesis from "vue-kinesis";

const app = createApp(App);
app.use(Vue3Transitions);
// app.use(VueKinesis);
app.mount("#app");
