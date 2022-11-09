import { createApp } from "vue";
import { createPinia } from "pinia";
import { misc } from "@gestionstock/common-front";

import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";
import "@gestionstock/common-front/dist/style.css";
import { FontAwesomeIcon } from "./icons/icons";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("FaIcon", FontAwesomeIcon);
app.use(misc, {
  appName: "Gestion Stock",
});

app.mount("#app");
