import type { Plugin } from "vue";

import DynamicTitle from "../components/DynamicTitle.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import TheVersion from "../components/TheVersion";
import FocusDirective from "../directives/FocusDirective";

export const misc: Plugin = (
  app,
  options?: {
    appName?: string;
  }
) => {
  app.component("DynamicTitle", DynamicTitle);
  app.component("ErrorMessage", ErrorMessage);
  app.component("TheVersion", TheVersion);
  app.directive("focus", FocusDirective);
  app.config.globalProperties.gs$appName =
    options?.appName ?? "Replace me by a appName";
};

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    gs$appName: string;
  }
}
