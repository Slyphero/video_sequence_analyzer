export const useVideoMetadata = () => {
  const duration = useState<number | null>("video-duration", () => null)
  const current = useState<number | null>("video-current", () => null)
  const ready = useState<boolean>("video-ready", () => false)

  const setDuration = (v: number) => {
    duration.value = v
  }

  const setCurrent = (v: number) => {
    current.value = v
  }

  const setReady = (v: boolean) => {
    ready.value = v
  }

  return {
    duration,
    current,
    ready,
    setDuration,
    setCurrent,
    setReady
  }
}