export const secondsToTimecode = (seconds: number): Timecode => {
  return {
    hours: Math.floor(seconds / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: Math.floor(seconds % 60)
  }
}

export  const secondsToString = (seconds: number): string => {
  const timecode = secondsToTimecode(seconds)
  return `${timecode.hours.toString().padStart(2, '0')}:${timecode.minutes.toString().padStart(2, '0')}:${timecode.seconds.toString().padStart(2, '0')}`
}