<template>
  <div id="default-carousel" class="relative w-full bg-primary-800">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Items -->
      <div
          v-for="(media, index) in mediaContent"
          :key="index"
          class="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
          :class="{ 'opacity-0': currentSlide !== index, 'opacity-100': currentSlide === index }"
      >
        <img :src="media.url" alt="Slide" class="object-contain w-full h-full cursor-pointer" @click="showFullscreen"/>
        <!-- Fullscreen Overlay -->
        <div
            v-if="isFullscreen"
            class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center cursor-pointer"
            @click="closeFullscreen"
        >
          <img
              v-if="media.isImage"
              :src="media.url"
              alt="Full-size Image"
              class="rounded max-h-[90%] max-w-[90%]"
          />

          <video v-else class="w-full" autoplay controls>
            <source :src="media.url" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>

    <!-- Slider controls -->
    <button
        type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        @click="prevSlide(mediaContent)"
    >
      <IconPrevious/>
    </button>
    <button
        type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        @click="nextSlide(mediaContent)"
    >
      <IconNext/>
    </button>
  </div>
</template>


<script setup lang="ts">
import {ref} from "vue";
import IconPrevious from "@/components/icons/IconPrevious.vue";
import IconNext from "@/components/icons/IconNext.vue";
import type {MediaContent} from "@/components/projects/project_script.ts";

defineProps<{ mediaContent: MediaContent[] }>();
const isFullscreen = ref(false);
const currentSlide = ref<number>(0);

const showFullscreen = () => {
  isFullscreen.value = true;

};
const closeFullscreen = () => {
  isFullscreen.value = false;

};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

const nextSlide = (mediaContent: MediaContent[]) => {
  currentSlide.value = (currentSlide.value + 1) % mediaContent.length;
};

const prevSlide = (mediaContent: MediaContent[]) => {
  currentSlide.value = (currentSlide.value - 1 + mediaContent.length) % mediaContent.length;
};
</script>

