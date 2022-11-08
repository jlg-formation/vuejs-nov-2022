import { HTTP_ARTICLE_KEY } from "@/keys";
import type { Article } from "@gestionstock/common";
import { defineStore } from "pinia";
import { computed } from "vue";
import { useArticleStore } from "./ArticleStore";

const url = "http://localhost:3000/api/articles";

export const useHttpArticleStore = defineStore(HTTP_ARTICLE_KEY, () => {
  console.log("defining http store");
  const articleStore = useArticleStore();

  const refresh = async () => {
    // await articleStore.refresh();
    const response = await fetch(url);
    const articles: Article[] = await response.json();
    articleStore.articles = articles;
  };
  return {
    ...articleStore,
    articles: computed(() => articleStore.articles),
    refresh,
  };
});
