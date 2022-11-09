import { createApp } from "vue";
import { createPinia } from "pinia";
import { trac } from "@gestionstock/common-front";

import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";
import { FontAwesomeIcon } from "./icons/icons";
import { misc } from "./misc/misc";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("FaIcon", FontAwesomeIcon);
app.use(misc, {
  appName: "Gestion Stockxxx",
});

app.mount("#app");

trac();
