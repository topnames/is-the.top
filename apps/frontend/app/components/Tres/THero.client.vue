<script setup>
import { TresCanvas } from '@tresjs/core'
import { Levioso, MouseParallax } from '@tresjs/cientos'
import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from 'three'

const gl = {
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}

const randomBoolean = true

const enable = shallowRef(!import.meta.dev)
if (import.meta.dev) {
  const keys = useMagicKeys()
  const altShiftF = keys['Alt+Shift+F']
  watchOnce(altShiftF, () => enable.value = true)
}

const container = ref()
const containerIsVisible = useElementVisibility(container)

onMounted(async () => {
  await nextTick()

  // Reset parallax to middle of screen
  const event = new Event('mousemove')
  event.pageX = window.outerWidth / 2
  event.pageY = window.outerHeight / 2
  window.dispatchEvent(event)
})
</script>

<template>
  <div ref="container" class="h-full! w-full!">
    <TresCanvas v-if="enable" v-bind="gl" class="h-full! w-full!" :disable-render="!containerIsVisible">
      <TresPerspectiveCamera :position="[0, 1.8, randomBoolean ? 2.5 : 3]" :look-at="[0, 1, 0]" />

      <Levioso>
        <Suspense>
          <MacbookAir v-if="randomBoolean" />
          <Macbook v-else />
        </Suspense>
      </Levioso>

      <TresAmbientLight :intensity="1" />
      <TresDirectionalLight
        :intensity="4"
        :position="[2, 3, 0]"
      />

      <MouseParallax :factor="2" :ease="1" :disabled="!containerIsVisible" />
    </TresCanvas>
    <div v-else>
      THero is disabled by default in development, press Alt+Shift+F to enable the rendering
    </div>
  </div>
</template>
