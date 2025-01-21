<template>
  <div class="relative h-screen bg-black overflow-hidden">
    <!-- Starry Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

    <!-- Shooting Stars -->
    <section class="absolute inset-0 bg-cover bg-center animate-animateBg">
      <span
          v-for="n in 10"
          :key="n"
          class="absolute w-1 h-1 bg-white rounded-full opacity-0"
          :style="generateStarStyle(n)"
      ></span>
    </section>
  </div>
</template>
<script setup lang="ts">

const generateStarStyle = (n: number) => {
  const delays = [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 0.75, 2.75];
  const durations = [1, 3, 2, 1.5, 2.5, 3, 1.75, 1.25, 2.25, 2.75];
  const positions = [
    {top: '0%', right: '0%'},
    {top: '0%', right: '80px'},
    {top: '80px', right: '0px'},
    {top: '0%', right: '180px'},
    {top: '0%', right: '400px'},
    {top: '0%', right: '600px'},
    {top: '300px', right: '0px'},
    {top: '0%', right: '700px'},
    {top: '0%', right: '1000px'},
    {top: '0%', right: '450px'},
  ];

  return {
    ...positions[n - 1],
    animationDelay: `${delays[n - 1]}s`,
    animationDuration: `${durations[n - 1]}s`,
  };
};

</script>


<style scoped lang="postcss">
/* Animate background scaling */
@keyframes animateBg {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.animate-animateBg {
  animation: animateBg 50s linear infinite;
}

/* Shooting Star Animation */
span {
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 8px rgba(255, 255, 255, 0.1),
  0 0 20px rgba(255, 255, 255, 0.1);
  animation: animate 3s linear infinite;
}

span::before {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  height: 1px;
  background: linear-gradient(90deg, #fff, transparent);
}

@keyframes animate {
  0% {
    transform: rotate(315deg) translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(315deg) translateX(-1000px);
    opacity: 0;
  }
}
</style>