<script setup lang="ts">
import HeaderLayout from "./components/layout/HeaderLayout.vue";
import BodyLayout from "./components/layout/BodyLayout.vue";
import FooterLayout from "./components/layout/FooterLayout.vue";
import { provide } from "vue";
import { useArticleStore } from "./stores/ArticleStore";
import { ARTICLE_STORE_KEY } from "./keys";

provide(ARTICLE_STORE_KEY, useArticleStore());
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
