import type { Article } from "@gestionstock/common";
import { ref } from "vue";
export const articles = ref<Article[]>([
  { id: "a1", name: "Tournevis", price: 2.99, qty: 120 },
  { id: "a2", name: "Pelle", price: 8.1, qty: 30 },
  { id: "a3", name: "Marteau", price: 5, qty: 200 },
  { id: "a4", name: "Défonceuse", price: 120, qty: 32 },
]);
