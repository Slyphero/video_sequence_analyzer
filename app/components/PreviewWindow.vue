<template>
  <div class="bg-green-500">
    <p>Preview Window</p>

    <video ref="video" controls>
      <source src="/videos/witch_hat_atelier_op1.mp4" type="video/mp4" />
    </video>

    <p v-if="duration !== null">
      Durée : {{ duration }} secondes
    </p>
  </div>
</template>

<script setup lang="ts">
const video = ref<HTMLVideoElement | null>(null)

const { duration, ready, load } = useVideoMetadata(video)

onMounted(() => {
  load()
})
</script>