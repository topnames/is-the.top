<script setup lang="ts">
const theme = useTheme()

const navMenuVisible = shallowRef(false)
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans">
    <!-- Header -->
    <header class="h-20 flex items-center justify-between border-b bg-mono-bg p-4 transition-background-color md:[&>div]:(basis-1/3)">
      <div class="h-full flex items-center justify-start gap-2 text-xl">
        <Logo class="h-full text-black dark:text-white" />
      </div>

      <div class="flex flex-row justify-center divide-x divide-primary-2 [&>div]:px-8 max-md:hidden!">
        <div>Home</div>
        <div>Product</div>
        <div>Team</div>
      </div>

      <div class="flex justify-end max-md:hidden!">
        <Menubar
          :pt="{
            root: { style: 'padding: 0;' },
            action: { style: 'padding: 1rem;' },
            icon: { class: 'shrink-0' },
          }"
          :model="[
            {
              icon: theme.icon.value,
              command: theme.toggle,
            },
            {
              icon: 'i-tabler:brand-github-filled',
              command: navigateToGithub,
            },
          ]"
        />
      </div>

      <div class="flex justify-end md:hidden!">
        <Button icon="i-tabler:menu shrink-0" outlined @click="navMenuVisible = true" />
      </div>

      <Sidebar
        v-model:visible="navMenuVisible"
        class="max-w-100vw w-100"
        header=""
        position="right"
        :pt="{ mask: { class: 'z-[calc(infinity)]!' } }"
        :pt-options="{ mergeProps: true }"
      >
        <div class="h-full flex flex-col justify-between">
          <nav class="flex flex-col gap-4">
            <div>Home</div>
            <div>Product</div>
            <div>Team</div>
          </nav>

          <div class="flex gap-4">
            <Button :icon="`${theme.icon.value} shrink-0`" @click="theme.toggle()" />
            <Button icon="i-tabler:brand-github shrink-0" @click="navigateToGithub()" />
          </div>
        </div>
      </Sidebar>
    </header>

    <!-- NuxtPage -->
    <main class="grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="h-20 flex items-center justify-between bg-white p-4 dark:(bg-gray-8)">
      <div class="h-full flex items-center justify-start gap-2 text-xl">
        <Logo class="h-full" full />
      </div>
    </footer>
  </div>
</template>
