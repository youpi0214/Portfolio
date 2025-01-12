<template>
  <div class="mt-8">
    <router-link :to="to">
      <button
        class="text-xl text-primary-50 font-medium rounded-lg border-2 p-3 bg-primary border-primary
        hover:bg-accent hover:text-primary active:bg-accent active:text-primary transition-colors duration-300"
      >
        {{ text }}
      </button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { RouteLocationRaw } from "vue-router";

defineProps({
  to: {
    type: [String, Object] as PropType<RouteLocationRaw>,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
</script>

