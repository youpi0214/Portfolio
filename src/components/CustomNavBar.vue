<template>
  <nav
      :class="[
      'fixed left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-300',
      isVisible ? 'translate-y-0 top-6' : '-translate-y-full'
    ]"
  >
    <div class="p-4 border rounded-full shadow-lg bg-gradient-to-r from-primary-400 to-primary-600">
      <ul class="flex space-x-8">
        <li v-for="navItem in navItems" :key="navItem.title">
          <a
              :href="navItem.url"
              @click.prevent="scrollToSection(navItem.url)"
              :class="[
              'relative font-medium transition-colors group',
              navItem.isSelected
                ? 'text-accent-500 underline'
                : 'text-secondary-50 hover:text-accent-500'
            ]"
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

const navItems = ref([
  { title: "About Me", url: "#home", isSelected: ref(false) },
  { title: "Skills", url: "#skills", isSelected: ref(false) },
  { title: "Projects", url: "#projects", isSelected: ref(false) },
  { title: "Contact", url: "#contact", isSelected: ref(false) },
]);

const isVisible = ref(true);
let lastScrollPosition = 0;

// Smooth scrolling to a section
const scrollToSection = (id: string) => {
  const target = document.querySelector(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

// Observe sections and highlight active
const observeSections = () => {
  const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const sectionId = `#${entry.target.id}`;
          const isIntersecting = entry.isIntersecting;

          navItems.value.forEach(navItem => {
            navItem.isSelected = navItem.url === sectionId && isIntersecting;
          });
        });
      },
      {
        threshold: 0.6, // Trigger when 60% of the section is in view
      }
  );

  // Observe all sections
  const sections = document.querySelectorAll("section");
  sections.forEach(section => observer.observe(section));
};

// Scroll behavior
const handleScroll = () => {
  const currentScrollPosition = window.scrollY;
  isVisible.value = currentScrollPosition <= lastScrollPosition;
  lastScrollPosition = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  observeSections();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
