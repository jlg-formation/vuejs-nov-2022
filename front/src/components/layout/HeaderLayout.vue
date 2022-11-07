<template>
  <header>
    <RouterLink to="/">
      <img src="/images/logo.svg" alt="Logo Gestion Stock" />
      <span>Gestion Stock</span>
    </RouterLink>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #eee;
  height: 3em;
  padding: 0 0.5em;

  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    gap: 0.5em;

    text-decoration: inherit;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }

    span {
      font-size: 1.3em;
      font-weight: bold;
    }
  }
}

img {
  height: 2.5em;
}
</style>
