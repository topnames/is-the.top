<script setup>
</script>

<template>
  <div class="h-auto flex flex-wrap items-center gap-10">
    <div v-for="_, index in 4" :key="index" class="min-h-80 flex items-center">
      <ProductCarouselItem />
    </div>
  </div>
</template>
