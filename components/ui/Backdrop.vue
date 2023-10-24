<script setup lang="ts">
import { ref } from 'vue';

const isBackdropOpen = ref(false);
</script>

<template>
  <div
    class="absolute inset-0 min-h-screen w-full bg-slate-200 z-50 opacity-50"
    v-if="isBackdropOpen"
  ></div>
</template>
