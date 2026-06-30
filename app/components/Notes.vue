<template>
	<div class="bg-purple-500">
    <h2 class="font-bold">Note-Taking</h2>
    <input v-model="label" type="text" placeholder="Titre du segment" />
    <br />
    <label>Commentaires :</label>
    <br />
    <textarea v-model="notes" />
    <br />
    <button class="bg-green-500 text-white px-4 py-2 mt-2" @click="update">Mettre à jour</button>
  </div>
</template>

<script lang="ts" setup>

const label = ref<string>("")
const notes = ref<string>("")

const { selectedSegment, updateSegment } = useSegment()

watch(
  selectedSegment,
  (segment) => {
    if (!segment) {
      label.value = ""
      notes.value = ""
      return
    }

    label.value = segment.label
    notes.value = segment.notes
  },
  { immediate: true }
)

const update = () => {
  if (!selectedSegment.value) return
  updateSegment(selectedSegment.value.id, label.value, notes.value)
}

</script>
