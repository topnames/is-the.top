<script setup lang="ts">
import { GridMaker } from '@local/common-vue'
</script>

<template>
  <div class="flex flex-wrap justify-center gap-4 xl:flex-nowrap [&_*]:($SIZE-[6px] lg:$SIZE-[16px] sm:$SIZE-[10px])">
    <GridMaker
      :value="[
        '*****',
        '*****',
        '**',
        '**',
        '*****',
        '*****',
      ]"
    />
    <GridMaker
      :value="[
        '*****',
        '** **',
        '** **',
        '** **',
        '** **',
        '*****',
      ]"
    />
    <GridMaker
      :value="[
        '**   **',
        '*** ***',
        '*******',
        '** * **',
        '**   **',
        '**   **',
      ]"
    />
    <GridMaker
      :value="[
        '**',
        '**',
        '**',
        '**',
        '**',
        '**',
      ]"
    />
    <GridMaker
      :value="[
        '**  **',
        '*** **',
        '******',
        '** ***',
        '**  **',
        '**  **',
      ]"
    />
    <GridMaker
      :value="[
        '*****',
        '*****',
        '**',
        '** **',
        '*****',
        '*****',
      ]"
    />
    <div class="m-2 shrink-0 basis-full xl:basis-0" />
    <GridMaker
      :value="[
        '*****',
        '** **',
        '**',
        '*****',
        '   **',
        '*****',
      ]"
    />
    <GridMaker
      :value="[
        '*****',
        '** **',
        '** **',
        '** **',
        '** **',
        '*****',
      ]"
    />
    <GridMaker
      :value="[
        '*****',
        '** **',
        '** **',
        '** **',
        '** **',
        '*****',
      ]"
    />
    <GridMaker
      :value="[
        '**  **',
        '*** **',
        '******',
        '** ***',
        '**  **',
        '**  **',
      ]"
    />
  </div>
</template>
