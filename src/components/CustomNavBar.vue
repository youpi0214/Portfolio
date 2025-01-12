<template>
  <nav class="bg-primary fixed w-full z-20 top-0 start-0 ">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link to="/">
        <fwb-img
          :alt="logo.alt"
          :src="logo.src"
          class="w-14"
        />
      </router-link>

      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse bg-accent rounded">
        <button
          @click="isMenuOpen = !isMenuOpen"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2"
          aria-controls="navbar-hamburger"
          aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>

      <div :class="{ hidden: !isMenuOpen, 'flex flex-col items-center justify-between w-full md:flex md:w-auto md:order-1': true}" id="navbar-hamburger">
        <ul
          class="flex flex-col w-full md:p-0 font-medium  md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li
            v-for="navItem in navItems" :key="navItem.title" class="w-full text-center text-white hover:text-accent">
            <router-link :to="navItem.url" :class="navItem.isSelected ? navItem.selectedClass : navItem.defaultClass" @click="isMenuOpen = false">
              {{ navItem.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
import logo_img from '@/assets/logo/logo_img.png';
import {FwbImg} from "flowbite-vue";

const logo: { src: string, alt: string } = {src: logo_img, alt: 'Logo'};

const route = useRoute();
const isMenuOpen = ref(false);

const navItemClass: string =
  "block py-2 px-4 md:hover:bg-transparent md:hover:text-sec md:p-0 md:dark:hover:bg-transparent  whitespace-nowrap";
const navItenSelectedClass: string =
  navItemClass + " font-extrabold text-orange-400  border-t-2 md:border-t-0 border-b-2 border-accent";

const navItems = ref([
  {
    title: "Accueil",
    url: "/",
    defaultClass: navItemClass,
    selectedClass: navItenSelectedClass,
    isSelected: ref(false),
  },
  {
    title: "Services",
    url: "/services",
    defaultClass: navItemClass,
    selectedClass: navItenSelectedClass,
    isSelected: ref(false),
  },
  {
    title: "À Propos",
    url: "/about",
    defaultClass: navItemClass,
    selectedClass: navItenSelectedClass,
    isSelected: ref(false),
  },
  {
    title: "Nous Joindre",
    url: "/contact",
    defaultClass: navItemClass,
    selectedClass: navItenSelectedClass,
    isSelected: ref(false),
  },
]);

watch(
  () => route.path,
  () => {
    navItems.value.forEach((navItem) => {
      navItem.isSelected = route.path === navItem.url;
    });
  },
  {immediate: true}
);
</script>
