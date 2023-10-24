export function useNavState() {
  const isNavOpen = useState('isNavOpen', () => false);
  const isBackdropOpen = useState('isBackdropOpen', () => true);

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
