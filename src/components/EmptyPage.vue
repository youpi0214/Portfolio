<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-light-background dark:bg-dark-background">
    <!-- Card Component -->
    <div class="max-w-md p-6 bg-light-primary dark:bg-dark-primary border border-light-secondary dark:border-dark-secondary rounded-lg shadow-md">
      <h1 class="text-2xl font-bold text-light-secondary dark:text-dark-secondary text-center">
        {{ pageName ? `Welcome to ${pageName}` : "Welcome!" }}
      </h1>
      <p class="text-light-accent dark:text-dark-accent mt-4 text-center">
        There's no content to display here yet. Check back soon!
      </p>
      <!-- Button -->
      <div class="mt-6 flex justify-center">
        <button
            @click="goHome"
            type="button"
            class="px-4 py-2 bg-light-accent dark:bg-dark-accent text-light-primary dark:text-dark-primary rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:ring-opacity-75"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const pageName = route.meta?.title || route.name || "this page";

const goHome = () => {
  router.push("/");
};
</script>
