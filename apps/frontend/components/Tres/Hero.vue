<script setup>
import { BasicShadowMap, NoToneMapping, SRGBColorSpace, Vector3 } from 'three'

const gl = {
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}

const randomBoolean = Math.random() > 0.5
</script>

<template>
  <TresCanvas v-bind="gl">
    <TresPerspectiveCamera :position="[randomBoolean ? -2 : 2, 3, 2]" />
    <CameraControls />

    <Suspense>
      <MacbookAir v-if="randomBoolean" />
      <Macbook v-else />
    </Suspense>

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
  </TresCanvas>
</template>
