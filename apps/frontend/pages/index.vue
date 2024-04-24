<script setup lang="ts">
const colorMode = useColorMode()
const { $anime } = useNuxtApp()

onMounted(async () => {
  await nextTick()
  const csEl = document.getElementById('csEl')!

  const csAnime = $anime({
    targets: csEl.querySelectorAll('.GridMaker__col'),
    translateX: $anime.stagger([-120, 240], { grid: [48, 6], from: 'center', axis: 'x' }),
    translateY: () => $anime.random(-600, 1200),
    rotateZ: () => $anime.random(-90, 90),
    delay: $anime.stagger(50, { grid: [6, 6], from: 'last' }),
    easing: 'easeInOutElastic',
    autoplay: false,
  })

  usePageScrollPercentage(
    (p) => {
      smoothSeek(csAnime, ((p - 1) * -1) * csAnime.duration)
    },
    { startOffset: window.innerHeight * 2 / 3 },
  )
})
</script>

<template>
  <div class="h-screen flex justify-center overflow-x-clip">
    <div class="relative h-4096px flex flex-col items-center">
      <div class="m-4 flex items-center gap-4">
        <div class="flex items-center gap-2">
          <div class="text-xl">
            Theme:
          </div>
          <div class="flex items-center gap-2">
            <Button
              :label="colorMode.preference"
              @click="colorMode.preference = (colorMode.preference !== 'dark')
                ? 'dark'
                : 'light'"
            />
          </div>
        </div>

        <NuxtLink to="https://github.com/topnames/is-the.top" target="_blank">
          <Button
            icon="i-tabler:brand-github-filled shrink-0"
            class="h-12 w-12"
            text rounded
          />
        </NuxtLink>
      </div>

      <h1 class="sticky top-400px drop-shadow-md light:text-primary-600">
        <ComingSoon
          id="csEl"
          class="[&_.GridMaker\_\_col]:(pointer-events-none will-change-transform)"
        />
      </h1>
    </div>
  </div>
</template>
