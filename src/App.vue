<template>
  <div>
    <CustomNavBar></CustomNavBar>
    <main>
      <RouterView/>
    </main>
    <CustomFooter></CustomFooter>
  </div>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
import CustomNavBar from "@/components/CustomNavBar.vue";
import CustomFooter from "@/components/CustomFooter.vue";
</script>
