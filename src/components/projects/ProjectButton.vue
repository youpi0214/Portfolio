<template>
  <FwbButton
      :href="liveDemo ? selectedProject.demo : selectedProject.github"
      size="xl"
      class="rounded-lg  font-bold text-secondary-50 hover:bg-accent-600 hover:text-primary"
      :class="liveDemo ? 'bg-green-500' : 'bg-red-600'"
  >
    {{ liveDemo ? "Live Demo" : "GitHub" }}
  </FwbButton>
</template>

<script setup lang="ts">
import {FwbButton} from "flowbite-vue";
import {defineProps} from "vue";
import {type Project} from "@/components/projects/project_script.ts";

defineProps<{ selectedProject: Project, liveDemo: boolean }>();
</script>
