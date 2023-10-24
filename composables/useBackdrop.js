export function useBackdrop(callback) {
  const isBackdropOpen = useState('isBackdropOpen', () => true);

  function openBackdrop() {
    isBackdropOpen.value = true;
  }

  function closeBackdrop() {
    callback();
    isBackdropOpen.value = false;
  }

  return { isBackdropOpen, openBackdrop, closeBackdrop };
}
