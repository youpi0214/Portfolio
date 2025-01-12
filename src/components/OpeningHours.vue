<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold text-white mb-4">Heures</h2>
    <ul class="space-y-2">
      <li
          v-for="(time, day) in hours"
          :key="day"
          class="grid grid-cols-2 gap-x-8 text-white"
      >
        <span class="font-medium">{{ day }} :</span>
        <span class="tabular-nums">{{ time }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const hours = {
  "Lundi à Jeudi": "7:30 - 19:00",
  Vendredi: "Sur RDV",
};
</script>
