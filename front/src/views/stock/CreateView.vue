<script lang="ts" setup>
import { useArticleStore } from "@/stores/ArticleStore";
import type { NewArticle } from "@gestionstock/common";
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const newArticle: NewArticle = reactive({
  name: "Truc",
  price: 1,
  qty: 10,
});

const articleStore = useArticleStore();

const submit = async (event: Event) => {
  console.log("event: ", event);
  await articleStore.add(newArticle);
  await router.push(route.matched[route.matched.length - 2].path);
};
</script>

<template>
  <main>
    <h1>Ajout d'un article</h1>
    <form @submit.prevent="submit">
      <label>
        <span>Nom</span>
        <input type="text" v-model="newArticle.name" />
      </label>
      <label>
        <span>Prix</span>
        <input type="number" v-model="newArticle.price" />
      </label>
      <label>
        <span>Quantité</span>
        <input type="number" v-model="newArticle.qty" />
      </label>
      <button class="primary">Ajouter</button>
    </form>
  </main>
</template>

<style lang="scss" scoped>
form {
  display: flex;
  flex-flow: column;
  gap: 0.5em;

  width: 100%;
  max-width: 25em;

  label {
    display: flex;
    flex-flow: column;

    input {
      padding: 0.5em 1em;
      border: 0.1em solid #bbb;
      border-radius: 0.3em;
    }
  }

  button {
    margin-top: 3em;
  }
}
</style>
