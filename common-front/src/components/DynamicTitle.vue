<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <Teleport to="head title"> {{ gs$appName }} : {{ title }} </Teleport>
</template>
