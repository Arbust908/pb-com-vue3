import { acceptHMRUpdate, defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', () => {
  const print_mode = ref(false)
  const togglePrintMode = useToggle(print_mode)

  const activatePrintMode = () => {
    togglePrintMode(true)
  }
  const deactivatePrintMode = () => {
    togglePrintMode(false)
  }

  return {
    print_mode,
    activatePrintMode,
    deactivatePrintMode,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGeneralStore, import.meta.hot))
