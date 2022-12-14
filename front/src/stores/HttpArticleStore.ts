import { HTTP_ARTICLE_KEY } from "@/keys";
import type { Article, NewArticle } from "@gestionstock/common";
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
    articleStore.loadingErrorMsg = "";
    try {
      const response = await axios.get<Article[]>(url);
      const articles = response.data;
      console.log("articles: ", articles);
      articleStore.articles = articles;
    } catch (err) {
      console.log("err: ", err);
      articleStore.loadingErrorMsg = "Erreur de chargement.";
    }
  };

  const init = async () => {
    try {
      articleStore.isLoading = true;
      await refresh();
    } finally {
      articleStore.isLoading = false;
    }
  };

  init();

  const add = async (a: NewArticle) => {
    articleStore.loadingErrorMsg = "";
    await articleStore.add(a);
    await axios.post(url, a);
  };

  const remove = async (selectedArticles: Set<Article>) => {
    articleStore.loadingErrorMsg = "";
    const ids = [...selectedArticles].map((a) => a.id);
    await axios.delete(url, {
      data: ids,
    });
  };

  return {
    ...articleStore,
    articles: computed(() => articleStore.articles),
    isLoading: computed(() => articleStore.isLoading),
    loadingErrorMsg: computed(() => articleStore.loadingErrorMsg),
    refresh,
    add,
    remove,
  };
});
