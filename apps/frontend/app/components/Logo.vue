<script setup lang="ts">
const {
  full,
} = defineProps<{
  full?: boolean
}>()
</script>

<template>
  <img v-if="full" src="/logo-full.svg" alt="Logo - full variant">
  <img v-else src="/logo-simple.svg" alt="Logo - simple variant">
</template>
