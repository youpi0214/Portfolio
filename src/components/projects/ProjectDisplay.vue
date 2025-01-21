<template>
  <div class="h-auto max-w-full rounded-lg bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
    <project-image-slider :images="selectedProject.images"/>
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ selectedProject.title }}
      </h5>
      <vue-logo></vue-logo>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ selectedProject.description }}
      </p>
      <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
        >
          <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import type {Project} from "@/components/projects/project_script";
import ProjectImageSlider from "@/components/projects/ProjectImageSlider.vue";
import VueLogo from "@/components/technologies/VueLogo.vue";

defineProps<{ selectedProject: Project }>();
</script>
