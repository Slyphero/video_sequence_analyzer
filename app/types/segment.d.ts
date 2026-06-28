export {}

declare global {
	interface Segment {
    id: number,
    start: Timecode,
    end: Timecode,
    label: string,
    notes: string,
  }
}