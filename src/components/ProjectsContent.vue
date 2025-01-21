<template>
  <section id="projects" class="py-16">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-primary-500 mb-12">
        My Projects
      </h2>

      <div class="grid gap-4">
        <!-- Main Featured Project -->
        <div>
          <img
              :src="selectedProject.image"
              alt="Selected Project"
              class="h-auto max-w-full rounded-lg"
          />
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
                :src="project.image"
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
import ufood from "@/assets/pictures/projects/ufood.png";
import { ref } from "vue";

interface Project {
  id: number;
  title: string;
  image: string;
}

const projects = ref<Project[]>([
  {
    id: 1,
    title: "Ufood",
    image: ufood,
  },
  {
    id: 2,
    title: "Project 1",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  },
  {
    id: 3,
    title: "Project 2",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  },
  {
    id: 4,
    title: "Project 3",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  },
  {
    id: 5,
    title: "Project 4",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  },
]);

const selectedProject = ref<Project>(projects.value[0]);

const selectProject = (project: Project) => {
  selectedProject.value = project;
};
</script>
