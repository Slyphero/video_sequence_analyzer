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
import { ref, onMounted, nextTick } from "vue"

const video = ref<HTMLVideoElement | null>(null)
const duration = ref<number | null>(null)

function waitForMetadata(el: HTMLVideoElement) {
  return new Promise<void>((resolve, reject) => {
    if (el.readyState >= 1 && isFinite(el.duration)) {
      resolve()
      return
    }

    const onLoaded = () => {
      cleanup()
      resolve()
    }

    const onError = () => {
      cleanup()
      reject()
    }

    const cleanup = () => {
      el.removeEventListener("loadedmetadata", onLoaded)
      el.removeEventListener("error", onError)
    }

    el.addEventListener("loadedmetadata", onLoaded, { once: true })
    el.addEventListener("error", onError)
  })
}

onMounted(async () => {
  await nextTick()

  const el = video.value
  if (!el) return

  await waitForMetadata(el)

  duration.value = el.duration
})
</script>