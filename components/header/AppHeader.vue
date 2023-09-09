<script setup lang="ts">
const isNavOpen = ref(false);

function toggleNav() {
  isNavOpen.value = !isNavOpen.value;
}
</script>

<template>
  <header class="bg-red-500 py-4">
    <nav class="container mx-auto px-2 sm:px-0">
      <p>Glovo</p>
      <div @click="toggleNav" class="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-8 h-8"
        >
          <path
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div :class="{ hidden: !isNavOpen, flex: isNavOpen }" class="md:flex">
        <ul>
          <li>Home</li>
        </ul>
      </div>
    </nav>
  </header>
</template>
