<template>
  <div class="bg-green-500">
    <h2 class="font-bold">Preview Window</h2>

    <video ref="video" @timeupdate="onTimeUpdate" controls>
      <source src="/videos/witch_hat_atelier_op1.mp4" type="video/mp4" />
    </video>

    <p v-if="duration !== null">
      Durée : {{ secondsToString(duration) }}
    </p>

    <p v-if="current !== null">
      Timecode actuel : {{ secondsToString(current) }}
    </p>
  </div>
</template>

<script setup lang="ts">
const video = ref<HTMLVideoElement | null>(null)

const { duration, current, load, updateCurrentTime } = useVideoMetadata(video)
const { secondsToTimecode, secondsToString } = useTimecode()

onMounted(() => {
  load()
})

const onTimeUpdate = (e: Event) => {
  const el = e.target as HTMLVideoElement
  updateCurrentTime(el.currentTime)
}
</script>