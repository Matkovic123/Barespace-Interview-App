<script setup lang="ts">
import { RouterView } from 'vue-router';
import InterviewNavigation from './components/InterviewNavigation.vue';
</script>

<template>
  <header>
    <InterviewNavigation />
  </header>
  <RouterView />
</template>
<style></style>
