<script setup lang="ts">
import { useQuestiontStore } from '@/stores/QuestionStore'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const questionStore = useQuestiontStore()
const route = useRoute()
const questionIndex = computed(() => route.params.index)
</script>

<template>
  <div>
    <pre>{{ questionStore.list[questionIndex] }}</pre>
  </div>
</template>

<style lang="scss" scoped></style>
