import {
  generateId,
  sleep,
  type Article,
  type NewArticle,
} from "@gestionstock/common";
import { defineStore } from "pinia";
import { ref } from "vue";

const save = (articles: Article[]) => {
  localStorage.setItem("articles", JSON.stringify(articles));
};

const getArticles = () => {
  const str = localStorage.getItem("articles");
  if (str === null) {
    return [
      { id: "a1", name: "Tournevis", price: 2.99, qty: 120 },
      { id: "a2", name: "Pelle", price: 8.1, qty: 30 },
      { id: "a3", name: "Marteau", price: 5, qty: 200 },
      { id: "a4", name: "Défonceuse", price: 120, qty: 32 },
    ];
  }
  return JSON.parse(str) as Article[];
};

export const useArticleStore = defineStore("articles", () => {
  const articles = ref<Article[]>(getArticles());

  const add = async (newArticle: NewArticle): Promise<void> => {
    await sleep(300);
    const article: Article = { ...newArticle, id: generateId() };
    articles.value.push(article);
    save(articles.value);
  };

  const refresh = async () => {
    await sleep(300);
    articles.value = getArticles();
  };

  return {
    articles,
    add,
    refresh,
  };
});
