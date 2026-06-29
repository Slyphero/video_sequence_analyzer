export const useSegment = () => {
  const segments = ref<Segment[]>([])
  const index = ref<number>(0)

  const isOverlaping = (start: number, end: number): boolean => {
    for (const segment of segments.value) {
      if (start < segment.end || end > segment.start) return true
    }

    return false
  }

  const isSegmentValid = (start: number, end: number, duration: number): boolean => {
    if (start >= end || start < 0 || end < 0 || end > duration || isOverlaping(start, end)) return false
    
    return true
  }

  const addSegment = (start: number, end: number, label: string, notes: string, duration: number) => {
    if (!isSegmentValid(start, end, duration)) return

    const segment: Segment = {
      index: index.value,
      start: start,
      end: end,
      label: label,
      notes: notes,
    }

    let i = 0

    while (i < segments.value.length && segments.value[i].start < start) {
      i++
    }

    segments.value.splice(i, 0, segment)

    index.value++
  }

  const removeSegment = (index: number) => {
    const i = segments.value.findIndex(s => s.index === index)
    if (i === -1) return
    segments.value.splice(i, 1)
  }

  const updateSegmentNotes = (index: number, label: string, notes: string) => {
  }

  

  return {
    segments,
    index,
    addSegment,
    removeSegment,
    updateSegmentNotes
  }
}
