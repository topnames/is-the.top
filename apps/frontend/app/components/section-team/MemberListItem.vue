<script setup lang="ts">
const {
  name,
  specialize,
  link,
} = defineProps<{
  name: TeamMember['name']
  specialize: TeamMember['specialize']
  link?: TeamMember['link']
}>()
</script>

<template>
  <li class="group h-20 flex items-center overflow-hidden py-4 opacity-40 transition-all [&.active]:(h-29 opacity-100)" :class="[link?.default && 'cursor-pointer']" @click="link?.default && navigateToOutside(link.default)">
    <div class="h-4 w-4 rounded-full bg-current" alt="dot point" />
    <div class="ml-17.5 flex flex-col gap-2 text-left">
      <div class="text-h-3 font-semibold">
        {{ name }}
      </div>
      <div class="h-0 text-body-1 opacity-0 transition-all group-[.active]:(h-7 opacity-100)">
        {{ specialize }}
      </div>
    </div>
  </li>
</template>
