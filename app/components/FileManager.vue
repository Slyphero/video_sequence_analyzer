<template>
  <div
    @dragover.prevent
    @drop.prevent="onDrop" 
    class=bg-red-500
  >
    <h2 class="font-bold">Import Div</h2>
  </div>
</template>

<script lang="ts" setup>
const { loadVideoFile } = useVideoMetadata()

const onDrop = (e: DragEvent) => {
  const file = e.dataTransfer?.files?.[0]

  if (!file) return

  loadVideoFile(file)
}
</script>
