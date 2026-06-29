export {}

declare global {
	interface Segment {
    index: number,
    start: number,
    end: number,
    label: string,
    notes: string,
  }
}