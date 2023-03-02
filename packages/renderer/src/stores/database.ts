import { acceptHMRUpdate, defineStore } from 'pinia'

export const useDatabase = defineStore('database', () => {
  const db = ref(new Map<string, string>())
  return {
    db,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useDatabase, import.meta.hot))
