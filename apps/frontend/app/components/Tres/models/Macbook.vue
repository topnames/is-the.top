<script setup lang="ts">
import { Html, useGLTF } from '@tresjs/cientos'

const { nodes } = await useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf', { draco: true })
</script>

<template>
  <primitive :object="nodes.Macbook" :position="[0, -0.6, 0]">
    <Html
      wrapper-class="block!"
      :distance-factor="11"
      :position="[0, 10.5, -13.6]"
      :rotation-x="-0.256"
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
