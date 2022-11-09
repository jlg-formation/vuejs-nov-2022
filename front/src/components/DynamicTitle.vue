<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <Teleport to="head title"> Gestion Stock : {{ title }} </Teleport>
</template>
