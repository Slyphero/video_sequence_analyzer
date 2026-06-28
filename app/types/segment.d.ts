export {}

declare global {
	interface Segment {
    start: number,
    end: number,
    label: string,
    notes: string,
  }
}