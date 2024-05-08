<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <!-- div for any global style of layout -->
  <div class="min-h-screen flex flex-col">
    <header class="h-20 flex items-center justify-between border-b bg-white p-4 transition-background-color [&>div]:(basis-1/3) dark:(bg-gray-8)">
      <div class="h-full flex items-center justify-start gap-2 text-xl">
        <Logo class="h-full text-black dark:text-white" />
      </div>

      <div class="flex justify-center divide-x divide-primary-2 [&>div]:(px-8)">
        <div>Home</div>
        <div>Product</div>
        <div>Team</div>
      </div>

      <div class="flex items-center justify-end gap-2">
        <Button
          :icon="`shrink-0 ${colorMode.preference !== 'dark' ? `i-tabler:moon` : 'i-tabler:sun'}`"
          class="h-12 w-12"
          rounded
          @click="colorMode.preference = (colorMode.preference !== 'dark')
            ? 'dark'
            : 'light'"
        />
        <NuxtLink to="https://github.com/topnames/is-the.top" target="_blank">
          <Button
            icon="i-tabler:brand-github-filled shrink-0"
            class="h-12 w-12"
            rounded
          />
        </NuxtLink>
      </div>
    </header>

    <main class="grow">
      <slot />
    </main>

    <footer class="h-20 flex items-center justify-between bg-white p-4 dark:(bg-gray-8)">
      <div class="h-full flex items-center justify-start gap-2 text-xl">
        <Logo class="h-full" full />
      </div>
    </footer>
  </div>
</template>
