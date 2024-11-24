<script setup lang="ts">
import { useQuestiontStore } from '@/stores/QuestionStore'

const questionStore = useQuestiontStore()
const question1 = questionStore.list[0]
</script>

<template>
  <div>
    Question component nr
    <pre>{{ question1 }}</pre>
  </div>
</template>

<style lang="scss" scoped></style>
