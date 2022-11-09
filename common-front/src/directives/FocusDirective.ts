import type { Directive } from "vue";

const FocusDirective: Directive<HTMLElement> = {
  mounted: (el) => el.focus(),
};

export default FocusDirective;
