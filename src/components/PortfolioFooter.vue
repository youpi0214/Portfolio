<template>
  <fwb-footer footer-type="socialmedia" class="bg-primary-700 bg-opacity-50">
    <hr class="my-6  lg:my-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <fwb-footer-copyright by="Yannick Andre Ouamba™" class="text-accent-500"/>
      <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <linked-in-icon :href="linkedin"></linked-in-icon>
        <icon-github :href="github"></icon-github>
      </div>
    </div>
  </fwb-footer>
</template>

<script setup>
import {FwbFooter, FwbFooterCopyright, FwbFooterIcon,} from 'flowbite-vue';
import IconGithub from "@/components/icons/IconGithub.vue";
import LinkedInIcon from "@/components/icons/LinkedInIcon.vue";

const linkedin = "https://www.linkedin.com/in/yannick-andre-ouamba-06a562232";
const github = "https://github.com/youpi0214";
</script>