<template>
  <div class="bg-green-500">
    <p>Preview Window</p>
    <video ref="video" controls>
      <source src="/videos/witch_hat_atelier_op1.mp4" type="video/mp4" />
    </video>

    <p>Durée : {{ duration }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

const video = ref<HTMLVideoElement | null>(null)
const duration = ref<number | null>(null)

onMounted(async () => {
  await nextTick()

  const el = video.value
  if (!el) return

  const resolveIfReady = () => {
    if (el.readyState >= 1 && isFinite(el.duration)) {
      duration.value = el.duration
      return true
    }
    return false
  }

  if (resolveIfReady()) return

  await new Promise<void>((resolve) => {
    const handler = () => {
      el.removeEventListener('loadedmetadata', handler)
      resolve()
    }

    el.addEventListener('loadedmetadata', handler, { once: true })
  })

  resolveIfReady()
})
</script>