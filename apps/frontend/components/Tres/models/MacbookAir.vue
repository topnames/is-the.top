<script setup lang="ts">
import { Html } from '@tresjs/cientos'

const { nodes } = await useGLTF('/3d/macbook.glb', { draco: true })
</script>

<template>
  <primitive :object="nodes.Scene" :position="[0.5, -1.5, 0]" :scale="8">
    <Html
      :distance-factor="0.116"
      :position="[0, 0.10, -0.147]"
      :rotation-x="-0.35"
      occlude
      transform
    >
      <iframe
        title="YouTube video player"
        class="h-[670px] w-[1024px] rounded-lg"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=yagSpvgKhqcNN8Dc&autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
        autoplay
      />
    </Html>
  </primitive>
</template>
