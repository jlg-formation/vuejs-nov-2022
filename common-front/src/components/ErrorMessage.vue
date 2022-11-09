<script lang="ts" setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <p>
    {{ msg }}
  </p>
</template>

<style lang="scss" scoped>
p {
  display: flex;
  align-items: center;
  margin: 0;

  height: 2em;
  font-weight: bold;
}
</style>
