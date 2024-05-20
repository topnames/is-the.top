<script setup lang="ts">

</script>

<template>
  <footer class="bg-mono-bg pt-16">
    <div class="px-4 lg:px-20">
      <Logo full class="w-8 border rounded-8px" />
    </div>

    <div class="h-30 flex justify-between bg-gray-50 px-4 py-12 max-sm:(flex-col items-center gap-4) dark:bg-gray-900 lg:px-20">
      <div>© 2024 @topnames. All rights reserved.</div>
      <div class="flex gap-6 children:(h-6 w-6)">
        <div i-tabler:brand-x />
        <div i-tabler:brand-linkedin />
        <div i-tabler:brand-facebook />
        <div i-tabler:brand-github />
      </div>
    </div>
  </footer>
</template>
