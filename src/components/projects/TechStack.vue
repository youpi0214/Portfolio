<template>
  <div class="flex flex-wrap gap-2">
    <div
        v-for="(tech, index) in techStack"
        :key="index"
        class="flex items-center justify-center p-2 rounded-lg"
    >
      <fwb-img
          :src="tech"
          alt="tech"
          class="w-8 h-8 object-contain"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {FwbImg} from "flowbite-vue";

defineProps<{ techStack: string[] }>();
</script>
