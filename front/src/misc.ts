import { inject } from "vue";

export const injectSafe = <T>(key: string): T => {
  const result = inject<T>(key);
  if (result === undefined) {
    throw new Error("Cannot find injection for key: " + key);
  }
  return result;
};
