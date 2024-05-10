export function useTheme() {
  const colorMode = useColorMode()

  return {
    icon: computed(() => colorMode.preference !== 'dark' ? `i-tabler:moon` : 'i-tabler:sun'),
    toggle: () => colorMode.preference = (colorMode.preference !== 'dark') ? 'dark' : 'light',
  }
}
