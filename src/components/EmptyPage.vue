<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <!-- Flowbite Card Component -->
    <div class="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold text-gray-800 text-center">
        {{ pageName ? `Welcome to ${pageName}` : "Welcome!" }}
      </h1>
      <p class="text-gray-600 mt-4 text-center">
        There's no content to display here yet. Check back soon!
      </p>
      <!-- Flowbite Button -->
      <div class="mt-6 flex justify-center">
        <button
          @click="goHome"
          type="button"
          class="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();

const pageName = route.meta?.title || route.name || "this page";

const goHome = () => {
  router.push("/");
};
</script>
