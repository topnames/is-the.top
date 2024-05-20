<script setup lang="ts">
const {
  texts,
} = defineProps<{
  texts: string[]
}>()

const id = useState(() => `${Date.now()}-${Math.random()}`)
</script>

<template>
  <NuxtMarquee :id="id" auto-fill :speed="200">
    <div class="mr-1ch w-fit flex items-center gap-1ch">
      <template v-for="text, index of texts" :key="index">
        <div>{{ text }}</div>
        <slot name="separator" />
      </template>
    </div>
  </NuxtMarquee>
</template>
