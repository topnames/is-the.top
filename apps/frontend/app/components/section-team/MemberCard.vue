<script setup lang="ts">
const {
  email,
  bio,
} = defineProps<{
  email: TeamMember['email']
  bio?: TeamMember['bio']
}>()

const hashed = computedAsync(() => sha256(email), '0')
</script>

<template>
  <div class="relative h-90 w-160 flex flex-col items-center gap-4 rounded-16px bg-white p-5">
    <div class="h-50 w-50">
      <Transition name="slide-fade" mode="out-in">
        <NuxtImg :key="hashed" :src="`https://gravatar.com/avatar/${hashed}?s=400&d=mp`" alt="member's gravatar image" class="h-full w-full rounded-full" />
      </Transition>
    </div>

    <div class="line-clamp-3 text-body-3 text-grey-8">
      <Transition mode="out-in">
        <div :key="bio" class="whitespace-pre-line">
          {{ bio }}
        </div>
      </Transition>
    </div>

    <div class="absolute bottom-5 flex text-black divide-x divide-grey-3 children:px-7.5 first-children:pl-0 last-children:pr-0">
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
