<template>
  <div class="col-span-3 bg-blue-500">
    <h2 class="font-bold">Timeline</h2>

    <div class="relative w-full h-8 bg-zinc-900 rounded">
      <!-- track -->
      <div class="absolute inset-0 bg-zinc-800 rounded" />

      <div 
        v-for="segment in segments" 
        :key="segment.id"
        class="absolute inset-2 bg-green-500 rounded" 
        :style="{left: segment.start + '%', width: (segment.end - segment.start) + '%'}"
      /> 

      <!-- playhead -->
      <div
        class="absolute top-1/2 h-8 w-[4px] bg-red-500 -translate-x-1/2 -translate-y-1/2"
        :style="{ left: playheadPosition + '%' }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { duration, current } = useVideoMetadata()

const { segments } = useSegment()

const playheadPosition = computed(() => {
  if (!duration.value) return 0
  return (current.value / duration.value) * 100
})
</script>
