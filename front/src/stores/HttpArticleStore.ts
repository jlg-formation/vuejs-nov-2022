import { HTTP_ARTICLE_KEY } from "@/keys";
import type { Article } from "@gestionstock/common";
import axios from "axios";
import { defineStore } from "pinia";
import { computed } from "vue";
import { useArticleStore } from "./ArticleStore";

const url = "http://localhost:3000/api/articles";

export const useHttpArticleStore = defineStore(HTTP_ARTICLE_KEY, () => {
  console.log("defining http store");
  const articleStore = useArticleStore();

  const refresh = async () => {
    // await articleStore.refresh();

    const response = await axios.get<Article[]>(url);
    const articles = response.data;
    console.log("articles: ", articles);
    articleStore.articles = articles;
  };
  return {
    ...articleStore,
    articles: computed(() => articleStore.articles),
    refresh,
  };
});
