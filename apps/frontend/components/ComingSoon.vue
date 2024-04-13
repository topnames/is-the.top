<script setup lang="ts">
import { GridMaker } from '@local/common'
</script>

<template>
  <div class="flex gap-4 flex-wrap xl:flex-nowrap justify-center [&_*]:($SIZE-[6px] sm:$SIZE-[10px] lg:$SIZE-[16px])">
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
    <div class="m-2 basis-full shrink-0 xl:basis-0" />
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
