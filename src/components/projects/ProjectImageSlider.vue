<template>
  <div id="default-carousel" class="relative w-full bg-primary-800">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Items -->
      <div
          v-for="(image, index) in images"
          :key="index"
          class="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
          :class="{ 'opacity-0': currentSlide !== index, 'opacity-100': currentSlide === index }"
      >
        <img :src="image" alt="Slide" class="object-contain w-full h-full cursor-pointer" @click="showFullscreen"/>
        <!-- Fullscreen Overlay -->
        <div
            v-if="isFullscreen"
            class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center cursor-pointer"
            @click="closeFullscreen"
        >
          <img
              :src="image"
              alt="Full-size Image"
              class="rounded max-h-[90%] max-w-[90%]"
          />
        </div>
      </div>
    </div>

    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
      <button
          v-for="(_, index) in images"
          :key="index"
          type="button"
          class="w-3 h-3 rounded-full bg-primary"
          :class="{ 'bg-accent': currentSlide === index }"
          @click="goToSlide(index)"
          :aria-label="'Slide ' + (index + 1)"
      ></button>
    </div>

    <!-- Slider controls -->
    <button
        type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        @click="prevSlide(images)"
    >
      <IconPrevious/>
    </button>
    <button
        type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        @click="nextSlide(images)"
    >
      <IconNext/>
    </button>
  </div>
</template>


<script setup lang="ts">
import {ref} from "vue";
import IconPrevious from "@/components/icons/IconPrevious.vue";
import IconNext from "@/components/icons/IconNext.vue";

defineProps<{ images: string[] }>();
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

const nextSlide = (images: string[]) => {
  currentSlide.value = (currentSlide.value + 1) % images.length;
};

const prevSlide = (images: string[]) => {
  currentSlide.value = (currentSlide.value - 1 + images.length) % images.length;
};
</script>

