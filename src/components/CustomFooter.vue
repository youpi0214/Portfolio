<template>
  <fwb-footer footer-type="socialmedia" class="w-full bg-light-primary dark:bg-dark-primary border-t-2 border-light-accent dark:border-dark-accent">
    <div class="w-full mx-auto p-4 md:py-8 flex flex-col items-center">
      <!-- Main Flex Container -->
      <div class="flex flex-wrap w-full max-w-6xl items-start gap-8">
        <!-- Logo Section -->
        <div class="w-full md:w-auto">
          <fwb-footer-brand
              @click="redirectToHome"
              :src="logo.src"
              :alt="logo.alt"
              class="pt-4 ps-0 md:ps-4"
          />
        </div>
        <!-- Content Section -->
        <div class="flex flex-wrap w-full justify-between items-start gap-6">
          <!-- Contact Info -->
          <contact-info></contact-info>
          <!-- Opening Hours -->
          <opening-hours></opening-hours>
          <!-- Links Section -->
          <div class="flex flex-col space-y-8 pt-4 ps-5">
            <router-link to="/services" class="flex items-start space-x-2 text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent group">
              <icon-handshake></icon-handshake>
              <span class="font-bold">Services</span>
            </router-link>
            <router-link to="/about" class="flex items-start space-x-2 text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent group">
              <icon-about></icon-about>
              <span class="font-bold">About</span>
            </router-link>
            <router-link to="/contact" class="flex items-start space-x-2 text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent group">
              <icon-contact></icon-contact>
              <span class="font-bold">Contact</span>
            </router-link>
          </div>
        </div>
      </div>

      <hr class="my-6 border-light-accent dark:border-dark-accent sm:mx-auto lg:my-8 w-full max-w-6xl">
      <fwb-footer-copyright
          href="/"
          by="Solidium™"
          class="text-light-secondary dark:text-dark-secondary"
      />
    </div>
  </fwb-footer>
</template>

<script setup lang="ts">
import { FwbFooter, FwbFooterBrand, FwbFooterCopyright } from 'flowbite-vue';
import OpeningHours from "@/components/OpeningHours.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import { useRouter } from "vue-router";
import Logo from '@/assets/logo/logo_img.png';
import IconHandshake from "@/components/icons/IconHandshake.vue";
import IconContact from "@/components/icons/IconContact.vue";
import IconAbout from "@/components/icons/IconAbout.vue";

const logo: { src: string, alt: string } = { src: Logo, alt: 'Logo' };

const router = useRouter();
const redirectToHome = () => {
  router.push('/');
};
</script>
