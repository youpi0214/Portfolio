<template>
  <div class="flex justify-center pb-20">
    <h2 class="text-3xl font-extrabold text-primary">Skills</h2>
  </div>
  <div>
    <!-- Tabs Navigation -->
    <div class="mb-4 flex justify-center">
      <ul
          class="flex flex-wrap -mb-px text-sm font-medium text-center"
          role="tablist"
      >
        <li class="mr-2" role="presentation" v-for="(tab, index) in tabs" :key="index">
          <button
              :class="[
              'inline-block p-4 border-b-2',
              activeTab === tab.id
                ? 'border-accent text-accent'
                : 'border-transparent text-secondary',
            ]"
              @click="activeTab = tab.id"
              type="button"
              role="tab"
              :aria-controls="tab.id"
              :aria-selected="activeTab === tab.id">
            {{ tab.title }}
          </button>
        </li>
      </ul>
    </div>

    <!-- Tabs Content -->
    <div>
      <div
          v-for="(tab, index) in tabs"
          :key="index"
          :id="tab.id"
          class="p-4 rounded-lg"
          :class="{ hidden: activeTab !== tab.id }"
          role="tabpanel"
          :aria-labelledby="`${tab.id}-tab`"
      >
        <div class="flex justify-center">
          <div
              class="grid grid-flow-col auto-cols-max gap-x-6 gap-y-4 no-scrollbar"
              :class="tab.content.length > 6 ? 'grid-rows-3' : 'grid-rows-2'"
          >
            <div
                v-for="(skill, index) in tab.content"
                :key="index"
                class="flex flex-col items-center justify-center p-4 w-40 h-40 border rounded-lg bg-primary-900 text-white"
            >
              <h3 class="text-xl font-semibold mb-2 text-center">{{ skill.name }}</h3>
              <fwb-img
                  v-if="skill.image"
                  :src="skill.image"
                  :alt="skill.name"
                  class="w-12 h-12 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {FwbTabs, FwbTab, FwbImg} from "flowbite-vue";
import StarrySkyBackground from "@/components/StarrySkyBackground.vue";

const hardSkills = [
  {name: "C++", image: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png"},
  {name: "Java", image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"},
  {name: "Python", image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png"},
  {name: "MySQL", image: "https://cdn-icons-png.flaticon.com/512/528/528260.png"},
  {name: "SQLite", image: "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg"}, // Corrected SQLite logo
  {name: "MongoDB", image: "https://www.svgrepo.com/show/331488/mongodb.svg"},
  {name: "Vue.js", image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png"},
  {name: "Tailwind", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"},
  {name: "Bootstrap", image: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png"},
  {name: "TypeScript", image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png"},
  {name: "JavaScript", image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"},
  {name: "Spring Boot", image: "https://www.vectorlogo.zone/logos/springio/springio-ar21.svg"},
  {name: "Git", image: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png"},
  {name: "Docker", image: "https://cdn-icons-png.flaticon.com/512/919/919853.png"},
  {name: "Postman", image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"},
];

const softSkills = [
  {name: "Leadership", image: "https://cdn-icons-png.flaticon.com/512/2983/2983883.png"},
  {name: "Team Player", image: "https://cdn-icons-png.flaticon.com/512/4761/4761651.png"},
  {name: "Critical Thinking", image: "https://cdn-icons-png.flaticon.com/512/1998/1998619.png"},
  {name: "Communication", image: "https://cdn-icons-png.flaticon.com/512/2983/2983873.png"},
  {name: "Creativity", image: "https://cdn-icons-png.flaticon.com/512/3649/3649462.png"},
  {name: "Analytical Mindset", image: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png"},
];


const tabs = [
  {
    id: "hard-skill",
    title: "Tech Stack",
    content: hardSkills,
  },
  {
    id: "soft-skill",
    title: "Core Skills",
    content: softSkills,
  },
];

const activeTab = ref(tabs[0].id);
</script>

<style scoped>
.no-scrollbar {
  overflow-x: auto; /* Allows horizontal scrolling */
  -ms-overflow-style: none; /* Hides scrollbar in IE and Edge */
  scrollbar-width: none; /* Hides scrollbar in Firefox */
}

.no-scrollbar::-webkit-scrollbar {
  display: none; /* Hides scrollbar in Webkit-based browsers (Chrome, Safari) */
}
</style>
