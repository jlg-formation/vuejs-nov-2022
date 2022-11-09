<script lang="ts" setup>
import { ARTICLE_STORE_KEY } from "@/keys";
import { injectSafe } from "@/misc";
import type { ArticleStore } from "@/stores/ArticleStore";
import { temporize, type NewArticle } from "@gestionstock/common";
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const isAdding = ref(false);

const router = useRouter();
const route = useRoute();

const newArticle: NewArticle = reactive({
  name: "Truc",
  price: 1,
  qty: 10,
});

const articleStore = injectSafe<ArticleStore>(ARTICLE_STORE_KEY);

const submit = async (event: Event) => {
  try {
    isAdding.value = true;
    console.log("event: ", event);
    await temporize(
      300,
      articleStore.add(newArticle).then(articleStore.refresh)
    );

    await router.push(route.matched[route.matched.length - 2].path);
  } catch (err) {
    console.log("err: ", err);
  } finally {
    isAdding.value = false;
  }
};
</script>

<template>
  <main>
    <DynamicTitle title="Ajout d'un article" />
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
      <button class="primary" :disabled="isAdding">
        <FaIcon
          :icon="'fa-solid ' + (isAdding ? 'fa-circle-notch' : 'fa-plus')"
          :spin="isAdding"
        />
        <span>Ajouter</span>
      </button>
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
