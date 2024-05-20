<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/lib/components/ui/carousel'
</script>

<template>
  <Carousel
    class="relative w-full"
    :opts="{
      align: 'start',
      dragFree: true,
    }"
  >
    <CarouselContent class="section-padding cursor-grab gap-10">
      <CarouselItem v-for="(_, index) in 10" :key="index" class="basis-auto">
        <div class="min-h-124 flex items-center justify-center">
          <ProjectCarouselItem />
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>
