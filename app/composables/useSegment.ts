export const useSegment = () => {
  const { current, duration } = useVideoMetadata()
  const segments = useState<Segment[]>("segments", () => [])  

  const isOverlaping = (start: number, end: number): boolean => {
    for (const segment of segments.value) {
      if (start < segment.end && end > segment.start) return true
    }

    return false
  }

  const isSegmentValid = (start: number, end: number): boolean => {
    if (duration.value == null) return false
    if (start >= end || start < 0 || end < 0 || end > duration.value || isOverlaping(start, end)) return false
    
    return true
  }

  const addSegment = (start: number, end: number, label: string, notes: string) => {
    if (duration.value == null) return false
    if (!isSegmentValid(start, end)) return

    const segment: Segment = {
      id: crypto.randomUUID(),
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
  }

  const removeSegment = (id: string) => {
    const i = segments.value.findIndex(s => s.id === id)
    if (i === -1) return
    segments.value.splice(i, 1)
  }

  const updateSegment = (id: string, label: string, notes: string) => {
    const segment = segments.value.find(s => s.id === id)
    if (!segment) return

    segment.label = label
    segment.notes = notes
  }

  const selectedSegment = computed(() => {
    if (current.value == null) return null 
    
    return (
      segments.value.find(
        s => 
          current.value! >= s.start && 
          current.value! <= s.end
      ) ?? null
    )
  })

  return {
    segments,
    selectedSegment,
    addSegment,
    removeSegment,
    updateSegment,
  }
}
