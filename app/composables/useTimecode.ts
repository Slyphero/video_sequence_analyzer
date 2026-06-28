export const useTimecode = () => {
  const timecodeSeconds = ref<number | null>(null)
  const timecodeString = ref<string | null>(null)
  const timecode = ref<Timecode | null>(null)

  const secondsToTimecode = (seconds: number): Timecode => {
    return {
      hours: Math.floor(seconds / 3600),
      minutes: Math.floor((seconds % 3600) / 60),
      seconds: Math.floor(seconds % 60)
    }
  }

  const secondsToString = (seconds: number): String => {
    const timecode = secondsToTimecode(seconds)
    return `${timecode.hours.toString().padStart(2, '0')}:${timecode.minutes.toString().padStart(2, '0')}:${timecode.seconds.toString().padStart(2, '0')}`
  }

  return {
    secondsToTimecode,
    secondsToString
  }
}
