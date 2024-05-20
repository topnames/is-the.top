<script setup lang="ts">
import type { ButtonProps } from 'primevue/button'

export interface CButtonProps extends /* @vue-ignore */ ButtonProps {
}

const props = defineProps<CButtonProps>()
</script>

<template>
  <Button
    v-bind="props"
    :pt="{
      root: 'rounded-full!',
    }"
  />
</template>
