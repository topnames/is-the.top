const smoothSeekInstanceMap = new WeakMap<WeakKey, {
  targetTime: number
  seekId: number | undefined
  seek: (id: number) => void
}>()
export function smoothSeek(i: anime.AnimeInstance, seekTo: number) {
  if (!smoothSeekInstanceMap.get(i)) {
    smoothSeekInstanceMap.set(i, {
      targetTime: seekTo,
      seekId: undefined,
      seek(id: number) {
        if (this.seekId && id !== this.seekId)
          return

        this.seekId = id

        if (i.currentTime !== this.targetTime) {
          if (i.currentTime < this.targetTime)
            i.seek(Math.max(Math.min((this.targetTime - i.currentTime) / 20, 25), Math.min(this.targetTime - i.currentTime, 0.05)) + i.currentTime)
          else if (i.currentTime > this.targetTime)
            i.seek(i.currentTime - Math.max(Math.min((i.currentTime - this.targetTime) / 20, 25), Math.min(i.currentTime - this.targetTime, 0.05)))
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
