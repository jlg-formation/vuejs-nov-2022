<script lang="ts" setup>
import { articles } from "@/stores/ArticleStore";

setTimeout(() => {
  console.log("coucou");
  articles.value.push({ id: "a5", name: "Truc", price: 2, qty: 5 });
  console.log("articles: ", articles);
}, 2000);
</script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button>Rafraîchir</button>
        <RouterLink :to="$route.path + '/add'" class="button">
          Ajouter
        </RouterLink>
        <button>Supprimer</button>
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
