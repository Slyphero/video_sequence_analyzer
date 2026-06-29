<template>
	<div class="bg-yellow-500">
    <h2 class="font-bold">Segments Viewer</h2>

    <h3>Créer un segment</h3>
    <p>Timecode actuel : {{ secondsToString(current) }}</p>
    <button 
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      [
    </button>
    <button 
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      ]
    </button>

    <p>Début du segment : </p>
    <p>Fin du segment : </p>

    <form>
      <label>Nom du segment : </label>
      <input type="text" placeholder="Nom du segment" />
      <br />
      <input 
        type="submit" 
        value="Créer segment" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
      />
    </form>

    <h2 class="font-bold">Segments crées</h2>
    <ul v-for="segment in segments">
      <li>
        <button>{{ segment.label }}</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { secondsToString } = useTimecode()
const { duration, current } = useVideoMetadata()
const { segments } = useSegment()
</script>