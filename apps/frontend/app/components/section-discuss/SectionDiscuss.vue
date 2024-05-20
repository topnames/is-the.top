<script setup lang="ts">
const yourEmail = shallowRef()
</script>

<template>
  <section class="w-full flex flex-col items-center justify-center gap-10 p-20 text-center max-md:px-10">
    <header>
      <h2 class="text-h-1 font-bold">
        Have an Awesome Project Idea?
        <br>
        <span class="text-primary-6">Let's Discuss</span>
      </h2>
    </header>

    <label for="yourEmail" class="min-w-40vw flex items-center gap-2 border border-primary-4 rounded-full p-2 md:gap-5">
      <div class="rounded-full bg-primary-1 p-4">
        <div i-tabler:mail-filled class="h-8 w-8 text-primary-5" />
      </div>

      <InputText id="yourEmail" v-model="yourEmail" placeholder="Enter your email" class="h-fit border-0 text-body-3 w-full!" />

      <CButton label="Send" class="h-16 px-8 text-button-lg font-semibold md:px-10" />
    </label>
  </section>
</template>
