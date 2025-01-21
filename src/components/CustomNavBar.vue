<template>
  <nav
      :class="[
      'fixed  left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-300',
      isVisible ? 'translate-y-0 top-6' : '-translate-y-full',
    ]"
  >
    <div class="p-4 border rounded-lg shadow-md bg-white">
      <ul class="flex space-x-8">
        <li v-for="navItem in navItems" :key="navItem.title">
          <a
              :href="navItem.url"
              @click="handleNavItemClick"
              class="text-gray-800 hover:text-primary-500 font-medium transition-colors"
          >
            {{ navItem.title }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

// Navigation items
const navItems = ref([
  { title: "About Me", url: "#home", isSelected: ref(false) },
  { title: "Skills", url: "#skills", isSelected: ref(false) },
  { title: "Projects", url: "#projects", isSelected: ref(false) },
  { title: "Contact", url: "#contact", isSelected: ref(false) },
]);

// State to control visibility of the navbar
const isVisible = ref(true);
let lastScrollPosition = 0;

// Function to handle scroll behavior
const handleScroll = () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    isVisible.value = false;
  } else {
    isVisible.value = true;
  }

  lastScrollPosition = currentScrollPosition;
};

// Function to handle navigation item clicks
const handleNavItemClick = () => {
  isVisible.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>