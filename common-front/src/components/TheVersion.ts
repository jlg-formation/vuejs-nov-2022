import { h } from "vue";

export default {
  setup() {
    return () => {
      return [
        h("div", { title: "coucou" }, ["truc truc"]),
        h("div", { title: "coucou" }, ["truc trucxxxx"]),
      ];
    };
  },
};
