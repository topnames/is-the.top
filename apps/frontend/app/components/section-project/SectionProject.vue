<script setup lang="ts">
</script>

<template>
  <section id="project" class="w-full flex flex-col items-center justify-center gap-10 py-10">
    <header>
      <h2 class="text-72px text-mono font-bold">
        Our projects
      </h2>
    </header>

    <div class="relative h-[calc(100vw*6)] w-full">
      <div class="h-full flex flex-col items-center px-20">
        <div class="sticky top-0 mt-100vw aspect-16/9 w-full rounded-108px bg-warning-3" />
        <div class="sticky top-6 mt-100vw aspect-16/9 w-full rounded-108px bg-warning-4" />
        <div class="sticky top-12 mt-100vw aspect-16/9 w-full rounded-108px bg-warning-5" />
      </div>
    </div>

    <ProjectCarousel />

    <CButton label="View all projects" class="text-mono!" outlined />
  </section>
</template>
