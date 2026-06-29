<template>
  <div class="bg-yellow-500">
    <h2 class="font-bold">Segments Viewer</h2>

    <h3>Créer un segment</h3>

    <p>Timecode actuel : {{ secondsToString(current) }}</p>

    <button
      class="bg-blue-500 text-white px-4 py-2 rounded"
      @click="setStart"
    >
      [
    </button>

    <button
      class="bg-blue-500 text-white px-4 py-2 rounded"
      @click="setEnd"
    >
      ]
    </button>

    <p>Début : {{ secondsToString(start) }}</p>
    <p>Fin : {{ secondsToString(end) }}</p>

    <input
      v-model="label"
      type="text"
      placeholder="Nom du segment"
      class="border px-2 py-1 mt-2"
    />

    <button
      class="bg-green-500 text-white px-4 py-2 mt-2"
      @click="createSegment"
    >
      Créer segment
    </button>

    <h2 class="font-bold mt-4">Segments créés</h2>

    <ul>
      <li v-for="segment in segments" :key="segment.id">
        <button class="bg-blue-500 text-white px-4 py-2 rounded">{{ segment.label }}</button>
        <button class="bg-red-500 text-white px-4 py-2 rounded" @click="remove(segment.id)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { secondsToString } = useTimecode()
const { duration, current } = useVideoMetadata()
const { segments, addSegment, removeSegment } = useSegment()

const label = ref("")
const start = ref<number | null>(null)
const end = ref<number | null>(null)

const setStart = () => start.value = current.value ?? 0
const setEnd = () => end.value = current.value ?? 0

const createSegment = () => {
  if (start.value == null || end.value == null || !label.value) return
  
  addSegment(start.value, end.value, label.value, "")
  start.value = null
  end.value = null
  label.value = ""
}

const remove = (id: number) => {
  removeSegment(id)
}
</script>