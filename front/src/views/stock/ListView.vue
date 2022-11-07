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
          <tr>
            <td class="name">Tournevis</td>
            <td class="price">2.99 €</td>
            <td class="qty">120</td>
          </tr>
          <tr>
            <td class="name">Pelle</td>
            <td class="price">5.00 €</td>
            <td class="qty">34</td>
          </tr>
          <tr>
            <td class="name">Tondeuse à gazon</td>
            <td class="price">230.00 €</td>
            <td class="qty">11</td>
          </tr>
          <tr>
            <td class="name">Défonceuse</td>
            <td class="price">120.00 €</td>
            <td class="qty">30</td>
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
