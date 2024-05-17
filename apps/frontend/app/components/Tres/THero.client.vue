<script setup>
import { TresCanvas } from '@tresjs/core'
import { Levioso, MouseParallax } from '@tresjs/cientos'
import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from 'three'

const gl = {
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}

const randomBoolean = Math.random() > 0.5

const enable = shallowRef(!import.meta.dev)
if (import.meta.dev) {
  const keys = useMagicKeys()
  const altShiftF = keys['Alt+Shift+F']
  watchOnce(altShiftF, () => enable.value = true)
}

const container = ref()
const containerIsVisible = useElementVisibility(container)
</script>

<template>
  <div ref="container" class="h-full! w-full!">
    <TresCanvas v-if="enable" v-bind="gl" class="h-full! w-full!">
      <TresPerspectiveCamera :position="[randomBoolean ? -0.5 : 0.5, 2, randomBoolean ? 2.5 : 3]" :look-at="[0, 1, 0]" />

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
        :cast-shadow="true"
        :shadow-camera-far="50"
        :shadow-camera-left="-10"
        :shadow-camera-right="10"
        :shadow-camera-top="10"
        :shadow-camera-bottom="-10"
      />

      <MouseParallax :factor="2" :ease="1" :disabled="!containerIsVisible" />
    </TresCanvas>
    <div v-else>
      THero is disabled by default in development, press Alt+Shift+F to enable the rendering
    </div>
  </div>
</template>
