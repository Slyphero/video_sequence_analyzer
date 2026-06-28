export {}

declare global {
	interface Segment {
    id: number,
    start: number,
    end: number,
    label: string,
    notes: string,
  }
}