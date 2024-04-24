import { clamp } from '@vueuse/core'

const smoothSeekInstanceMap = new WeakMap<WeakKey, {
  targetTime: number
  seekId: number | undefined
  seek: (id: number) => void
}>()
export function smoothSeek(i: anime.AnimeInstance, seekTo: number, { clampMin = 0.05, clampMax = 73 } = {}) {
  if (!smoothSeekInstanceMap.get(i)) {
    smoothSeekInstanceMap.set(i, {
      targetTime: seekTo,
      seekId: undefined,
      seek(id: number) {
        if (this.seekId && id !== this.seekId)
          return

        this.seekId = id

        if (i.currentTime !== this.targetTime) {
          if (i.currentTime < this.targetTime) {
            const diff = this.targetTime - i.currentTime
            i.seek(i.currentTime + clamp(diff / 20, clampMin, clampMax))
          }
          else if (i.currentTime > this.targetTime) {
            const diff = i.currentTime - this.targetTime
            i.seek(i.currentTime - clamp(diff / 20, clampMin, clampMax))
          }
        }

        if (i.currentTime !== this.targetTime)
          requestAnimationFrame(() => this.seek(id))
        else
          this.seekId = undefined
      },
    })
  }

  const obj = smoothSeekInstanceMap.get(i)!

  obj.targetTime = seekTo

  if (!obj.seekId)
    obj.seek(Math.random())
}
