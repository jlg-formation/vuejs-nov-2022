<script lang="ts" setup>
import { ARTICLE_STORE_KEY } from "@/keys";
import { getErrorMessage, injectSafe } from "@/misc";
import type { ArticleStore } from "@/stores/ArticleStore";
import { temporize, type Article } from "@gestionstock/common";
import { computed, ref } from "vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

const isRefreshing = ref(false);
const isRemoving = ref(false);
const errorMsg = ref("");

const articleStore = injectSafe<ArticleStore>(ARTICLE_STORE_KEY);

// const articles = toRef(articleStore, "articles");
const articles = computed(() => articleStore.articles);

const selectedArticles = ref(new Set<Article>());

// setTimeout(() => {
//   console.log("timeout");
//   articles.push({ id: "s2", name: "www", price: 1, qty: 1 });
// }, 2000);

const refresh = async () => {
  try {
    errorMsg.value = "";
    isRefreshing.value = true;
    console.log("refresh");
    await temporize(300, articleStore.refresh());
    selectedArticles.value.clear();
  } catch (err) {
    console.log("err: ", err);
    errorMsg.value = getErrorMessage(err);
  } finally {
    isRefreshing.value = false;
  }
};

const toggle = (a: Article) => {
  if (selectedArticles.value.has(a)) {
    selectedArticles.value.delete(a);
    return;
  }

  selectedArticles.value.add(a);
};

const remove = async () => {
  try {
    errorMsg.value = "";
    isRemoving.value = true;
    console.log("remove");
    await temporize(
      300,
      articleStore.remove(selectedArticles.value).then(articleStore.refresh)
    );
    selectedArticles.value.clear();
  } catch (err) {
    console.log("err: ", err);
    errorMsg.value = getErrorMessage(err);
  } finally {
    isRemoving.value = false;
  }
};
</script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button title="Rafraîchir" @click="refresh" :disabled="isRefreshing">
          <FaIcon icon="fa-solid fa-rotate-right" :spin="isRefreshing" />
        </button>
        <RouterLink :to="$route.path + '/add'" class="button" title="Ajouter">
          <FaIcon icon="fa-solid fa-plus" />
        </RouterLink>
        <button
          title="Supprimer"
          v-if="selectedArticles.size > 0"
          @click="remove"
          :disabled="isRemoving"
        >
          <FaIcon
            :icon="
              'fa-solid ' + (isRemoving ? 'fa-circle-notch' : 'fa-trash-can')
            "
            :spin="isRemoving"
          />
        </button>
      </nav>
      <ErrorMessage :msg="errorMsg" />
      <table>
        <thead>
          <tr>
            <th class="name">Nom</th>
            <th class="price">Prix</th>
            <th class="qty">Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr class="isLoading" v-if="articleStore.isLoading">
            <td colspan="3">
              <div>
                <FaIcon icon="fa-solid fa-circle-notch" spin />
                <span>En cours de chargement...</span>
              </div>
            </td>
          </tr>
          <tr
            :hidden="articleStore.isLoading"
            v-for="a in articles"
            :key="a.id"
            :class="{ selected: selectedArticles.has(a) }"
            @click="toggle(a)"
          >
            <td class="name">{{ a.name }}</td>
            <td class="price">{{ a.price }} €</td>
            <td class="qty">{{ a.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style lang="scss" scoped>
div.content {
  display: flex;
  flex-flow: column;
}
nav {
  display: flex;
  gap: 0.3em;
}

table {
  border: 0.1em solid #bbb;

  thead {
    background-color: #bbb;
  }

  th,
  td {
    padding: 0.5em 1em;
  }

  tbody {
    cursor: pointer;
    tr:nth-child(even) {
      background-color: #eee;
    }

    tr:hover {
      background-color: #ddd;
    }

    tr.selected {
      background-color: #ccc;
    }
  }
}

.isLoading td div {
  display: flex;
  justify-content: center;
  gap: 0.5em;
  width: 100%;
}
</style>
