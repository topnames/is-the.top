<script setup lang="ts">
import LinePattern from '~/assets/svg/line-pattern.svg'
import LinePattern2 from '~/assets/svg/line-pattern-2.svg'

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
      smoothSeek(csAnime, ((p - 1) * -1) * csAnime.duration, { clampMax: 0 })
    },
    {
      element: document.getElementById('csContainer')!,
    },
  )

  const lp2El = document.getElementById('lp2')!
  const _lp2Anime = $anime({
    targets: lp2El,
    translateY: 30,
    duration: 3000,
    direction: 'alternate',
    easing: 'easeInOutSine',
    loop: true,
    autoplay: true,
  })
})
</script>

<template>
  <!-- Hero section -->
  <header id="hero" class="relative bg-primary-bg py-8 pb-20 text-center transition-background-color">
    <div class="absolute left-0 top-0 h-full w-full overflow-hidden">
      <LinePattern class="absolute w-50vw text-primary-2 opacity-60" />
      <LinePattern class="absolute right-0 w-50vw text-primary-2 opacity-60" />
    </div>

    <div class="flex flex-col items-center gap-12">
      <div v-motion-slide-visible-top class="mx-auto max-w-90ch px-2 prose">
        <h1 class="text-h-1 text-mono">
          Hi, we're <strong>@topnames</strong>
        </h1>
        <p class="text-body-1 text-grey-8 dark:text-grey-2">
          A small organization with big ambitions, we are individuals who strives to outperform and lead in our fields!
        </p>
      </div>

      <NuxtLink to="https://github.com/topnames" target="_blank">
        <Button label="Check us out on GitHub" outlined raised />
      </NuxtLink>

      <div class="relative aspect-16/9 h-auto w-60vw border border-primary-7 rounded-8px shadow-green-3 shadow-md backdrop-blur-3 transition-shadow-400 dark:border-primary-3 hover:shadow-[0px_4px_20px_4px]">
        <THero @wheel.prevent="true" />
      </div>
    </div>
  </header>

  <!-- Statistic section -->
  <div class="flex items-center justify-center bg-mono-bg py-5 pb-7.5">
    <div class="flex text-center [&>div]:(w-58 flex flex-col gap-3) max-md:(flex-col divide-y [&>div]:py-4) divide-primary-2 md:(divide-x [&>div]:px-4)">
      <div>
        <div class="text-60px text-primary-6 font-bold">
          40+
        </div>
        <div class="text-body-1">
          Lorem
        </div>
      </div>
      <div>
        <div class="text-60px text-primary-6 font-bold">
          600%
        </div>
        <div class="text-body-1">
          Ipsum bunny banana
        </div>
      </div>
      <div>
        <div class="text-60px text-primary-6 font-bold">
          4k+
        </div>
        <div class="text-body-1">
          Super bananas
        </div>
      </div>
    </div>
  </div>

  <!-- Product section -->
  <section id="product" class="relative h-full w-full overflow-hidden bg-primary-10 pb-60">
    <div class="pointer-events-none absolute h-full w-full">
      <LinePattern2 id="lp2" preserveAspectRatio="none" class="absolute box-border h-full w-full overflow-visible pb-40 text-primary-3 opacity-40 will-change-transform" />
    </div>

    <div class="relative flex flex-col items-center gap-12">
      <div v-motion-slide-visible-top class="mx-auto max-w-90ch px-2 text-center prose">
        <h2 class="text-h-2 text-white">
          About our products
        </h2>
        <p class="text-body-1 text-white">
          Everything you need to convert, engage, and retain more users.
        </p>
      </div>

      <div class="grid w-full gap-16 px-10 md:grid-cols-2 md:px-32">
        <div class="flex place-self-end items-center self-center">
          <NuxtImg src="https://images.samsung.com/is/image/samsung/p6pim/vn/2307/gallery/vn-galaxy-z-flip5-f731-sm-f731blgexxv-537229868" />
        </div>

        <div class="max-w-90ch flex flex-col gap-16 text-white">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <div class="px-20">
        <ProductCarousel />
      </div>
    </div>
  </section>

  <!-- Team section -->
  <section id="team" class="border-t border-primary-1 bg-primary-bg py-8 pb-20 text-center transition-background-color">
    <div class="flex flex-col items-center gap-12">
      <div v-motion-slide-visible-top class="mx-auto max-w-90ch px-2 prose">
        <h1 class="text-h-1 text-mono">
          Our creative team
        </h1>
        <p class="text-body-1 text-grey-8 dark:text-grey-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
        </p>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-10">
        <MemberCard />
        <MemberCard />
      </div>
    </div>
  </section>

  <!-- Coming Soon grid -->
  <div id="csContainer" class="relative mt-140 h-400vh">
    <h1 class="sticky top-400px max-w-100vw overflow-x-clip drop-shadow-md light:text-primary-600">
      <ComingSoon
        id="csEl"
        class="[&_.GridMaker\_\_col]:(pointer-events-none will-change-transform)"
      />
    </h1>
  </div>

  <!-- Near footer -->
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

<style>
.custom-avatar-border {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23333' stroke-width='4' stroke-dasharray='95' stroke-dashoffset='34' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 100px;
}
</style>