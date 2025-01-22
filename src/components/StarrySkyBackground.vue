<template>
  <div class="relative h-screen bg-black overflow-hidden">
    <!-- Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

    <!-- Twinkling Stars (Fixed Position) -->
    <div class="fixed inset-0">
      <div
          v-for="n in 50"
          :key="'twinkle-' + n"
          class="absolute w-[2px] h-[2px] bg-white rounded-full"
          :style="generateTwinkleStarStyle(n)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const generateTwinkleStarStyle = (n: number) => {
  const top = `${Math.random() * 100}%`; // Random vertical position
  const left = `${Math.random() * 100}%`; // Random horizontal position
  const duration = `${(Math.random() * 3 + 2).toFixed(2)}s`; // Animation duration (2-5 seconds)
  const delay = `${(Math.random() * 3).toFixed(2)}s`; // Animation delay (0-3 seconds)
  const initialOpacity = (Math.random() * 0.7 + 0.8).toFixed(2); // Initial opacity (0.8 to 1.5 for brighter stars)

  return {
    top,
    left,
    animation: `twinkle ${duration} infinite ${delay}`,
    opacity: initialOpacity,
  };
};
</script>

<style>
/* Twinkling Stars Animation */
@keyframes twinkle {
  0%, 100% {
    opacity: 0.8; /* Minimum brightness for twinkling */
  }
  50% {
    opacity: 1.5; /* Maximum brightness for twinkling */
  }
}

.absolute {
  position: absolute;
}

.fixed {
  position: fixed;
}

.relative {
  position: relative;
}
</style>
