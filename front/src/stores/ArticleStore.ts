import { ARTICLE_KEY } from "@/keys";
import {
  generateId,
  type Article,
  type NewArticle,
} from "@gestionstock/common";
import { defineStore } from "pinia";
import { ref, watch } from "vue";

const save = (articles: Article[]) => {
  localStorage.setItem(ARTICLE_KEY, JSON.stringify(articles));
};

const getArticles = () => {
  const str = localStorage.getItem(ARTICLE_KEY);
  if (str === null) {
    return [];
  }
  return JSON.parse(str) as Article[];
};

export const useArticleStore = defineStore(ARTICLE_KEY, () => {
  const articles = ref<Article[]>(getArticles());

  watch(
    articles,
    (newValue) => {
      save(newValue);
    },
    { deep: true }
  );

  const add = async (newArticle: NewArticle): Promise<void> => {
    const article: Article = { ...newArticle, id: generateId() };
    articles.value.push(article);
  };

  const refresh = async () => {
    articles.value = getArticles();
  };

  const remove = async (selectedArticles: Set<Article>) => {
    articles.value = articles.value.filter((a) => !selectedArticles.has(a));
  };

  return {
    articles,
    add,
    refresh,
    remove,
  };
});

export type ArticleStore = ReturnType<typeof useArticleStore>;
