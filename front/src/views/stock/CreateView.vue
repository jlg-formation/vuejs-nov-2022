<template>
  <main>
    <h1>Ajout d'un article</h1>
    <form>
      <label>
        <span>Nom</span>
        <input type="text" />
      </label>
      <label>
        <span>Prix</span>
        <input type="text" />
      </label>
      <label>
        <span>Quantité</span>
        <input type="text" />
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
