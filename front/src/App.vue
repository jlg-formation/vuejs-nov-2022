<script setup lang="ts">
import HeaderLayout from "./components/layout/HeaderLayout.vue";
import BodyLayout from "./components/layout/BodyLayout.vue";
import FooterLayout from "./components/layout/FooterLayout.vue";
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
