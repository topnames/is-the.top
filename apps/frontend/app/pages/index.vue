<script setup lang="ts">
import { useProgress } from '@tresjs/cientos'
import Lenis from 'lenis'
import Circle from '~/assets/svg/circle.svg'
import CircleHollow from '~/assets/svg/circle-hollow.svg'
import Diamond from '~/assets/svg/diamond.svg'
import Star from '~/assets/svg/star.svg'
import LinePattern2 from '~/assets/svg/line-pattern-2.svg'

const { $anime } = useNuxtApp()

// eslint-disable-next-line unused-imports/no-unused-vars
const { hasFinishLoading, progress } = !import.meta.dev ? await useProgress() : { hasFinishLoading: shallowRef(true), progress: shallowRef(100) }

onMounted(async () => {
  await nextTick()

  until(hasFinishLoading).toBe(true).then(() => {
    if (import.meta.client) {
      const lenis = new Lenis()

      function lenisRaf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(lenisRaf)
      }

      requestAnimationFrame(lenisRaf)
    }

    $anime({
      targets: '#d1',
      translateX: [
        { value: 0 },
        { value: '-15vw', duration: 1000, delay: 100 },
        { value: '-6vw', duration: 1000 },
      ],
      scaleX: [
        { value: 2, duration: 100, delay: 2100, easing: 'easeOutExpo' },
        { value: 1, duration: 900 },
      ],
      rotateZ: [
        { value: 15, duration: 1000, delay: 2100 },
      ],
      zIndex: [
        { value: 2, delay: 200 },
      ],
      easing: 'easeOutElastic(1, .8)',
    })

    $anime({
      targets: '#d2',
      rotateZ: [
        { value: -15, duration: 1000, delay: 2100 },
      ],
      easing: 'easeOutElastic(1, .8)',
    })

    $anime({
      targets: ['#d2', '#ch1'],
      translateX: [
        { value: '100vw' },
        { value: '10vw', duration: 100, delay: 500 },
        { value: '5vw', duration: 300 },
        { value: 0, duration: 150 },
      ],
      translateY: [
        { value: 0 },
        { value: -100, duration: 100, delay: 500 },
        { value: -200, duration: 300 },
        { value: 0, duration: 150 },
      ],
      rotateZ: [
        { value: 0 },
        { value: -10, duration: 100, delay: 500 },
        { value: 10, duration: 300 },
        { value: 0, duration: 150 },
      ],
      begin() {
        document.getElementById('d2')!.style.display = 'block'
        document.getElementById('ch1')!.style.display = 'block'
      },
      easing: 'easeOutSine',
    })
  })
})
</script>

<template>
  <main v-if="!hasFinishLoading" class="flex grow items-center justify-center">
    <h1 class="text-h-1">
      Loading...
    </h1>
  </main>
  <main class="grow" :class="!hasFinishLoading && 'hidden'">
    <!-- Hero section -->
    <header id="hero" class="relative max-w-100vw overflow-x-clip bg-primary-bg py-8 pb-20 text-center transition-background-color">
      <div class="absolute left-0 top-0 h-full w-full overflow-hidden">
        <Diamond id="d1" class="absolute bottom-35% left-25% w-8vw text-#FF6250" />
        <Circle id="c1" class="absolute bottom-0 left-50% w-80vw translate-y-60% text-warning-4 -translate-x-50%" />
        <Diamond id="d2" class="absolute bottom-15% right-18% hidden w-4vw text-white" />
        <CircleHollow id="ch1" class="absolute bottom-4% right-8% hidden w-10vw text-green-7" />
      </div>

      <div class="flex flex-col items-center gap-12">
        <div v-motion-slide-visible-top class="mx-auto max-w-90ch px-2 prose">
          <h1 class="text-h-1 text-mono">
            Hi, we're
            <strong class="relative">
              <span>@topnames</span>
              <div v-motion-slide-visible-once-right :delay="200" :duration="800" class="absolute top-0 -left-3 -z-1">
                <div class="h-18 w-10ch rotate-z-2 bg-primary-4" />
              </div>
            </strong>
          </h1>
          <p class="text-body-1 text-grey-8 dark:text-grey-2">
            A small organization with big ambitions, we are individuals who strives to outperform and lead in our fields!
          </p>
        </div>

        <NuxtLink v-motion-pop :duration="500" :delay="1000" to="https://github.com/topnames" target="_blank">
          <Button label="Check us out on GitHub" outlined raised />
        </NuxtLink>

        <div class="relative aspect-16/9 h-auto w-60vw border border-primary-7 rounded-8px shadow-green-3 shadow-md backdrop-blur-3 transition-shadow-400 max-md:w-80vw dark:border-primary-3 hover:shadow-[0px_4px_20px_4px]">
          <THero />
        </div>
      </div>
    </header>

    <!-- Wordy section -->
    <section id="wordy" class="w-full flex flex-col items-center justify-center gap-10 rounded-b-200px bg-primary-10 bg-primary-10 px-20 py-30 text-center max-md:px-10">
      <header class="max-w-140ch">
        <h2 class="text-72px text-white font-semibold">
          At @topnames, we focuses on providing customized solutions for web app development and UI/UX design.
        </h2>
      </header>

      <Logo class="w-52 text-white" />
    </section>

    <!-- Projects section -->
    <SectionProject />

    <!-- Team section -->
    <SectionTeam />

    <!-- Discuss section -->
    <SectionDiscuss />

    <!-- Near Footer Running Banner -->
    <div class="w-full overflow-hidden bg-mono py-2">
      <div class="my-2ch w-[calc(100%+4px)] bg-mono-i py-2 text-h-3 -ml-2px -rotate-2">
        <RunningText
          :texts="[
            'UX Design',
            'App Design',
            'Dashboard',
            'Wireframe',
            'User Research',
          ]"
        >
          <template #separator>
            <Star class="h-1.5ch w-1.5ch shrink-0 text-primary-4" />
          </template>
        </RunningText>
      </div>
    </div>
  </main>
</template>
