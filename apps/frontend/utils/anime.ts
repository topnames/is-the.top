const smoothSeekInstanceMap = new WeakMap<WeakKey, {
  targetTime: number
  seekId: number | undefined // This ensure that we only have one active loop for each instance
  elapseStamp: number
  seek: (id: number) => void
}>()
export function smoothSeek(i: anime.AnimeInstance, seekTo: number, { speed = 0.005, clampMin = 0.05, clampMax = 73 } = {}) {
  if (!smoothSeekInstanceMap.get(i)) {
    smoothSeekInstanceMap.set(i, {
      targetTime: seekTo,
      elapseStamp: 0,
      seekId: undefined,
      seek(id: number) {
        requestAnimationFrame((elapsed) => {
          // Checking
          if (!this.seekId)
            this.seekId = id
          else if (id !== this.seekId)
            return

          // Logic
          if (i.currentTime !== this.targetTime) {
            const seekDestination = easeToTarget(i.currentTime, this.targetTime, {
              speed,
              delta: elapsed - this.elapseStamp,
              clampMin,
              clampMax,
            })
            i.seek(seekDestination)
          }

          // Cleaning up
          this.elapseStamp = elapsed

          if (i.currentTime !== this.targetTime)
            return this.seek(id)
          else
            this.seekId = undefined
        })
      },
    })
  }

  const obj = smoothSeekInstanceMap.get(i)!

  obj.targetTime = seekTo

  if (!obj.seekId) {
    obj.elapseStamp = performance.now()
    obj.seek(Math.random())
  }
}
