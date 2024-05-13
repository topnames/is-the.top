<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans">
    <!-- Header -->
    <DefaultHeader />

    <!-- NuxtPage -->
    <main class="grow">
      <slot />
    </main>

    <!-- Footer -->
    <DefaultFooter />
  </div>
</template>
