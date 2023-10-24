import { ref } from 'vue';

export function useNavState() {
  const isNavOpen = ref(false);
  const isBackdropOpen = ref(false);

  function openNav() {
    isNavOpen.value = true;
    isBackdropOpen.value = true;
  }

  function closeNav() {
    isNavOpen.value = false;
    isBackdropOpen.value = false;
  }

  return { isNavOpen, isBackdropOpen, openNav, closeNav };
}
