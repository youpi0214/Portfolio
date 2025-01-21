<template>
  <div class="h-auto max-w-full rounded-lg bg-secondary border border-gray-200 shadow">
    <project-image-slider :mediaContent="selectedProject.mediaContent"/>
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold text-gray-900">
        {{ selectedProject.title }}
      </h5>
      <tech-stack :tech-stack="selectedProject.technologies"></tech-stack>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ selectedProject.description }}
      </p>
      <div class="flex justify-start gap-10">
        <project-button :selected-project="selectedProject" :live-demo="true"></project-button>
        <project-button :selected-project="selectedProject" :live-demo="false"></project-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {type Project} from "@/components/projects/project_script";
import ProjectImageSlider from "@/components/projects/ProjectImageSlider.vue";
import TechStack from "@/components/projects/TechStack.vue";
import ProjectButton from "@/components/projects/ProjectButton.vue";

defineProps<{ selectedProject: Project }>();
</script>
