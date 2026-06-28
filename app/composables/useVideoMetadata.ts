export const useVideoMetadata = (videoRef: Ref<HTMLVideoElement | null>) => {
  const duration = ref<number | null>(null)
  const ready = ref(false)
  const current = ref<number | null>(null)

  function waitForMetadata(el: HTMLVideoElement) {
    return new Promise<void>((resolve, reject) => {
      if (el.readyState >= 1 && isFinite(el.duration)) {
        resolve()
        return
      }

      const onLoaded = () => {
        cleanup()
        resolve()
      }

      const onError = () => {
        cleanup()
        reject()
      }

      const cleanup = () => {
        el.removeEventListener("loadedmetadata", onLoaded)
        el.removeEventListener("error", onError)
      }

      el.addEventListener("loadedmetadata", onLoaded, { once: true })
      el.addEventListener("error", onError)
    })
  }

  const load = async () => {
    const el = videoRef.value
    if (!el) return

    await waitForMetadata(el)

    duration.value = el.duration
    current.value = el.currentTime
    ready.value = true
  }

  const updateCurrentTime = (time: number) => {
    current.value = time
  }

  return {
    duration,
    ready,
    current,
    load,
    updateCurrentTime
  }
}
