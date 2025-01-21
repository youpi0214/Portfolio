<template>
  <div class="relative">
    <!-- Starry Sky Background -->
    <div class="fixed inset-0 -z-10">
      <starry-sky-background></starry-sky-background>
    </div>

    <!-- Main Content -->
    <CustomNavBar></CustomNavBar>
    <section id="home">
      <home-view></home-view>
    </section>

    <section id="skills">
      <skills-view></skills-view>
    </section>

    <section id="projects">
      <projects></projects>
    </section>

    <section id="contact">
      <contact-us-view></contact-us-view>
    </section>
    <portfolio-footer></portfolio-footer>
  </div>
</template>

<script setup lang="ts">
import CustomNavBar from "@/components/CustomNavBar.vue";
import HomeView from "@/views/HomeView.vue";
import Projects from "@/views/ProjectsView.vue";
import ContactUsView from "@/views/ContactView.vue";
import SkillsView from "@/views/SkillsView.vue";
import StarrySkyBackground from "@/components/StarrySkyBackground.vue";
import PortfolioFooter from "@/components/PortfolioFooter.vue";
</script>
