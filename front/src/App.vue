<script setup lang="ts">
import { provide } from "vue";
import BodyLayout from "./components/layout/BodyLayout.vue";
import FooterLayout from "./components/layout/FooterLayout.vue";
import HeaderLayout from "./components/layout/HeaderLayout.vue";
import { ARTICLE_STORE_KEY } from "./keys";
import { useHttpArticleStore } from "./stores/HttpArticleStore";

provide(ARTICLE_STORE_KEY, useHttpArticleStore());
</script>

<template>
  <div>
    <HeaderLayout></HeaderLayout>
    <BodyLayout></BodyLayout>
    <FooterLayout></FooterLayout>
  </div>
</template>

<style lang="scss" scoped>
div {
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}
</style>
