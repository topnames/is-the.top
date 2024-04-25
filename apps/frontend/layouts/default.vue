<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <!-- div for any global style of layout -->
  <div class="min-h-screen flex flex-col">
    <header class="h-20 flex items-center justify-between bg-white p-4 [&>div]:(basis-1/3) dark:(bg-gray-8)">
      <div class="flex items-center justify-start gap-2 text-xl">
        <div i-tabler:icons />
        <div>
          Topnames
        </div>
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
      <div class="flex items-center justify-start gap-2 text-xl">
        <div i-tabler:icons />
        <div>
          Topnames
        </div>
      </div>
    </footer>
  </div>
</template>
