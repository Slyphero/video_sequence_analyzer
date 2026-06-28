export const useTimecode = () => {
  const parse = (str: string): Timecode => {
    const parts = str.split(':').map(Number)
    return {
      hours: parts[0] ?? 0,
      minutes: parts[1] ?? 0,
      seconds: parts[2] ?? 0
    }
  }

  const format = (tc: Timecode): string => {
    return `
        ${tc.hours.toString().padStart(2, '0')}:
        ${tc.minutes.toString().padStart(2, '0')}:
        ${tc.seconds.toString().padStart(2, '0')}
    `
  }

  return { parse, format }
}
