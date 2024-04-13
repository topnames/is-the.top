<script setup>
import { Gradient } from '@local/common'

const colorMode = useColorMode()
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <Gradient class="logoGradient absolute" :conic="true" />

    <div class="flex flex-col gap-4 prose items-center">
      <h1>Coming Soon!</h1>
      <div class="flex gap-2 items-center">
        <div>Theme:&nbsp;</div>
        <Button
          :label="colorMode.preference"
          @click="colorMode.preference = (colorMode.preference !== 'dark')
            ? 'dark'
            : 'light'"
        />
      </div>
    </div>
  </div>
</template>

<style>
@import url("~/assets/css/main.css");
</style>
