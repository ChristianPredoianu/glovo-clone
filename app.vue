<script setup lang="ts">
function dsa(isNavOpen: Ref<boolean>) {
  console.log(isNavOpen.value);
}
</script>

<template>
  <div>
    <Backdrop />
    <AppHeader @updateIsNavOpen="dsa" />
    <NuxtPage />
  </div>
</template>
