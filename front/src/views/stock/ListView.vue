<script lang="ts" setup>
import { useArticleStore } from "@/stores/ArticleStore";
import { computed, ref } from "vue";

const isRefreshing = ref(false);

const articleStore = useArticleStore();
// const articles = toRef(articleStore, "articles");
const articles = computed(() => articleStore.articles);

// setTimeout(() => {
//   console.log("timeout");
//   articles.push({ id: "s2", name: "www", price: 1, qty: 1 });
// }, 2000);

const refresh = async () => {
  try {
    isRefreshing.value = true;
    console.log("refresh");
    await articleStore.refresh();
  } catch (err) {
    console.log("err: ", err);
  } finally {
    isRefreshing.value = false;
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
        <button title="Supprimer">
          <FaIcon icon="fa-solid fa-trash-can" />
        </button>
      </nav>
      <table>
        <thead>
          <tr>
            <th class="name">Nom</th>
            <th class="price">Prix</th>
            <th class="qty">Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in articles" :key="a.id">
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
  gap: 2em;
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
</style>
