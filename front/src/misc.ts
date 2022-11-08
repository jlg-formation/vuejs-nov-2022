import { inject } from "vue";

export const injectSafe = <T>(key: string): T => {
  const result = inject<T>(key);
  if (result === undefined) {
    throw new Error("Cannot find injection for key: " + key);
  }
  return result;
};

export const getErrorMessage = (err: unknown) => {
  if (err instanceof Error) {
    return err.message;
  }
  return "Oups. Erreur technique.";
};
