<template>
  <footer>
    <RouterLink to="/legal">Mentions Légales</RouterLink>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: #eee;
  height: 3em;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: inherit;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
