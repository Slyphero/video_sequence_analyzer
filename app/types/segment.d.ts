export {}

declare global {
	interface Segment {
    id: string,
    start: number,
    end: number,
    label: string,
    notes: string,
  }
}