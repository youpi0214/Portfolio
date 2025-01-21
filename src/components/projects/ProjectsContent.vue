<template>
  <section id="projects" class="py-16">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-primary-500 mb-12">
        My Projects
      </h2>

      <div class="grid gap-4">
        <!-- Main Featured Project -->
        <div>
          <project-display :selectedProject="selectedProject"/>
        </div>

        <!-- Thumbnail Projects -->
        <div class="grid grid-cols-5 gap-4">
          <div
              v-for="(project, index) in projects"
              :key="project.id"
              @click="selectProject(project)"
              class="cursor-pointer border-2 rounded-lg"
              :class="{
              'border-blue-600': project.id === selectedProject.id,
              'border-transparent': project.id !== selectedProject.id,
            }"
          >
            <img
                :src="project.thumbnail"
                :alt="project.title"
                class="h-auto max-w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref} from "vue";
import ProjectDisplay from "@/components/projects/ProjectDisplay.vue";
import type {Project} from "@/components/projects/project_script.ts";
import {ufoodImages} from "@/components/projects/project_script.ts";


const projects = ref<Project[]>([
  {
    id: 1,
    title: "UFood",
    technologies: [],
    description: "UFood is a collaborative web application designed to help users discover restaurants," +
        " share favorites with friends, and track dining experiences. The application includes features like restaurant search," +
        " user profiles, dynamic filtering, and interactive maps.",
    thumbnail: ufoodImages[0],
    images: ufoodImages,
    github: "null",
    demo: "https://ufood-h2024.vercel.app/",
  },
  {
    id: 2,
    title: "NYSS Transport",
    technologies: [],
    description: "null",
    thumbnail: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    images: [],
    github: "null",
    demo: "null",
  },
  {
    id: 3,
    title: "ChalClt",
    technologies: [],
    description: "null",
    thumbnail: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    images: [],
    github: "null",
    demo: "null",
  },
  {
    id: 4,
    title: "Solidium",
    technologies: [],
    description: "null",
    thumbnail: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    images: [],
    github: "null",
    demo: "null",
  },
  {
    id: 5,
    title: "Tic-Tac-Toe",
    technologies: [],
    description: "null",
    thumbnail: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    images: [],
    github: "null",
    demo: "null",
  },
]);

const selectedProject = ref<Project>(projects.value[0]);

const selectProject = (project: Project) => {
  selectedProject.value = project;
};
</script>
