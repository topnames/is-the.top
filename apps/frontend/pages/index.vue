<script setup>
const colorMode = useColorMode()
const { $anime } = useNuxtApp()

onMounted(async () => {
  await nextTick()
  const csEl = document.getElementById('csEl')

  const csAnime = $anime({
    targets: csEl.querySelectorAll('.GridMaker__col'),
    translateX: $anime.stagger([-120, 240], { grid: [48, 6], from: 'center', axis: 'x' }),
    translateY: () => $anime.random(-600, 1200),
    rotateZ: $anime.stagger(48, { grid: [6, 6], from: 'center', axis: 'x' }),
    delay: $anime.stagger(50, { grid: [6, 6], from: 'last' }),
    easing: 'easeInOutElastic',
    direction: 'reverse',
    autoplay: false,
  })

  csEl.style.visibility = 'visible'

  usePageScrollPercentage((p) => {
    csAnime.seek(((p - 1) * -1) * csAnime.duration)
  }, { startOffset: window.innerHeight })
})
</script>

<template>
  <div class="h-screen flex justify-center overflow-x-clip">
    <div class="flex flex-col prose items-center h-4096px relative">
      <div class="flex items-center gap-4 m-4">
        <div>Theme:&nbsp;</div>
        <div class="flex gap-2 items-center">
          <Button
            :label="colorMode.preference"
            @click="colorMode.preference = (colorMode.preference !== 'dark')
              ? 'dark'
              : 'light'"
          />
        </div>
      </div>

      <h1 class="sticky top-400px">
        <ClientOnly>
          <ComingSoon
            id="csEl"
            class="invisible"
          />
        </ClientOnly>
      </h1>
    </div>
  </div>
</template>
