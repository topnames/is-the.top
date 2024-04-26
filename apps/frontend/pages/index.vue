<script setup lang="ts">
import LinePattern from '~/assets/svg/line-pattern.svg'

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
    {
      element: document.getElementById('csContainer')!,
      startOffset: window.innerHeight * 2 / 3,
    },
  )
})
</script>

<template>
  <header class="relative h-3xl flex flex-col items-center bg-primary-1 py-4 text-center dark:bg-primary-10">
    <div class="absolute left-0 top-0 h-full w-full overflow-hidden">
      <LinePattern class="absolute w-50vw text-white opacity-40 -top-39" />
      <LinePattern class="absolute right-0 w-50vw text-white opacity-40 -top-39" />
    </div>

    <div v-motion-slide-visible-top class="mt-20 max-w-90ch prose">
      <div class="mb-8">
        <h1>
          Hi, we're <strong>@topnames</strong>
        </h1>
        <h2>
          A small organization with big ambitions, we are individuals who strives to outperform and lead in our fields!
        </h2>
      </div>

      <NuxtLink to="https://github.com/topnames" target="_blank">
        <Button label="Check us out on GitHub" outlined raised />
      </NuxtLink>
    </div>
  </header>
  <div id="csContainer" class="relative mt-140 h-400vh">
    <h1 class="sticky top-400px drop-shadow-md light:text-primary-600">
      <ComingSoon
        id="csEl"
        class="[&_.GridMaker\_\_col]:(pointer-events-none will-change-transform)"
      />
    </h1>
  </div>
  <div>
    <div v-motion-slide-visible-left class="mx-auto mb-80 max-w-90ch py-4 text-center prose">
      <div class="mb-8">
        <h1>
          Hi, we're <strong>@topnames</strong>
        </h1>
        <h2>
          A small organization with big ambitions, we are individuals who strives to outperform and lead in our fields!
        </h2>
      </div>

      <NuxtLink to="https://github.com/topnames" target="_blank">
        <Button label="Check us out on GitHub" raised />
      </NuxtLink>
    </div>
  </div>
</template>
