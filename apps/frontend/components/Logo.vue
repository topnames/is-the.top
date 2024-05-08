<script setup lang="ts">
import LogoSimple from '~/public/logo-simple.svg'
import LogoFull from '~/public/logo-full.svg'

const {
  full,
} = defineProps<{
  full?: boolean
}>()
</script>

<template>
  <LogoFull v-if="full" />
  <LogoSimple v-else />
</template>
