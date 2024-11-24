<script setup lang="ts">
import { useQuestiontStore } from '@/stores/QuestionStore'

const store = useQuestiontStore()
</script>

<template>
  <main>
    <h1>I'll be putting my stuff here</h1>
    <pre>{{ store.list[0] }}</pre>
  </main>
</template>
