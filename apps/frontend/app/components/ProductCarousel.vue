<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/lib/components/ui/carousel'
</script>

<template>
  <Carousel
    class="relative w-74 2xl:w-318 fhd:w-400 md:w-154 xl:w-236"
    :opts="{
      align: 'start',
    }"
  >
    <CarouselContent class="">
      <CarouselItem v-for="(_, index) in 10" :key="index" class="basis-full 2xl:basis-1/4 fhd:basis-1/5 md:basis-1/2 xl:basis-1/3">
        <div class="min-h-80 flex items-center justify-center">
          <ProductCarouselItem />
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>
