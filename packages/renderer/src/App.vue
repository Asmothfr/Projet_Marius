<script setup lang="ts">
// import { toggle } from '~/composables/useDark'

// Use system theme preference
const prefersDark = usePreferredDark()

watch(prefersDark, () => {
  toggle(prefersDark.value)
})
</script>

<template>
  <RouterView />
</template>
