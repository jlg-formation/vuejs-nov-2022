import type { Directive } from "vue";

const FocusDirective: Directive<HTMLElement, "select" | undefined> = {
  mounted: (el, bindings) => {
    console.log("bindings.value: ", bindings.value);
    if (bindings.value === "select") {
      if (el instanceof HTMLInputElement) {
        el.select();
      }
      return;
    }

    el.focus();
  },
};

export default FocusDirective;
