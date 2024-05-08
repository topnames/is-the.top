<script setup>
import { BasicShadowMap, NoToneMapping, SRGBColorSpace, Vector3 } from 'three'

const gl = {
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}
</script>

<template>
  <TresCanvas v-bind="gl">
    <TresPerspectiveCamera :position="[-2, 3, 2]" />
    <CameraControls />

    <Suspense>
      <Macbook />
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
