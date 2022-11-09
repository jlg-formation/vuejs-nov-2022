import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./assets/main.css";
import { misc } from "./lib";

const app = createApp(App);

app.use(createPinia());
app.use(misc, { appName: "truc" });

app.mount("#app");
