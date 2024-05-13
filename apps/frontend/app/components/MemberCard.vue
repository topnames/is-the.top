<script setup lang="ts">

</script>

<template>
  <div class="h-120 w-92 flex flex-col items-center gap-4 rounded-16px bg-white p-5">
    <div class="custom-avatar-border h-58 w-58">
      <NuxtImg src="https://i.pravatar.cc/400?img=32" class="rounded-full p-4.5" />
    </div>

    <div class="flex flex-col gap-1">
      <div class="text-h-4 text-grey-10 font-semibold">
        N. Huyen
      </div>
      <div class="text-body-1 text-grey-8 font-semibold">
        UI/UX Designer
      </div>
    </div>

    <div class="text-body-3 text-grey-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.
    </div>

    <div class="flex text-black divide-x divide-grey-3 children:px-7.5 first-children:pl-0 last-children:pr-0">
      <div>
        <div i-tabler:brand-facebook-filled />
      </div>
      <div>
        <div i-tabler:brand-instagram />
      </div>
      <div>
        <div i-tabler:brand-twitter-filled />
      </div>
      <div>
        <div i-tabler:brand-youtube-filled />
      </div>
    </div>
  </div>
</template>
