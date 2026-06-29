<template>
  <div class="bg-green-500">
    <h2 class="font-bold">Preview Window</h2>

    <video ref="video" @timeupdate="onTimeUpdate" controls muted>
      <source src="/videos/witch_hat_atelier_op1.mp4" type="video/mp4" />
    </video>

    <p v-if="duration !== null">
      Durée : {{ secondsToString(duration) }}
    </p>
  </div>
</template>

<script setup lang="ts">
const video = ref<HTMLVideoElement | null>(null)

import { secondsToString } from '~/utils/timecode'

const {
  duration,
  current,
  setDuration,
  setCurrent,
  setReady
} = useVideoMetadata()

onMounted(() => {
  const el = video.value
  if (!el) return

  const handle = () => {
    setDuration(el.duration)
    setReady(true)
  }

  if (el.readyState >= 1 && isFinite(el.duration)) {
    handle()
    return
  }

  el.addEventListener("loadedmetadata", handle, { once: true })
})

const onTimeUpdate = (e: Event) => {
  const el = e.target as HTMLVideoElement
  setCurrent(el.currentTime)
}
</script>