<script setup lang="ts">
const isNavOpen = ref(false);

function toggleNav() {
  isNavOpen.value = !isNavOpen.value;
}
</script>

<template>
  <header>
    <nav class="flex items-center justify-between flex-wrap container mx-auto p-4">
      <span class="font-semibold text-yellow-400 text-xl">Glovo</span>
      <div class="block sm:hidden">
        <button
          @click="toggleNav"
          class="relative z-10 flex items-center px-3 py-2 border rounded text-black border-teal-light"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="isNavOpen ? ['block', '-translate-x-[1rem]'] : ['-translate-x-[30rem]']"
        class="relative w-full flex-grow bg-red-500 sm:flex sm:items-center sm:translate-x-0 sm:ml-4 sm:w-auto transition ease-in-out delay-150"
      >
        <ul class="text-sm sm:flex-grow">
          <li
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Docs
          </li>
          <li
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Docs
          </li>
          <li
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Docs
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
