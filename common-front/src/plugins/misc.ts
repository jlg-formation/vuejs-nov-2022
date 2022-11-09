import type { Plugin } from "vue";

import DynamicTitle from "../components/DynamicTitle.vue";
import ErrorMessage from "../components/ErrorMessage.vue";

export const misc: Plugin = (
  app,
  options?: {
    appName?: string;
  }
) => {
  app.component("DynamicTitle", DynamicTitle);
  app.component("ErrorMessage", ErrorMessage);
  app.config.globalProperties.gs$appName =
    options?.appName ?? "Replace me by a appName";
};

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    gs$appName: string;
  }
}
