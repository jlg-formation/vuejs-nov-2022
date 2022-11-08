import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";
import { FontAwesomeIcon } from "./icons/icons";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("FaIcon", FontAwesomeIcon);

app.mount("#app");
