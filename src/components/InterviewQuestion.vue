<script setup lang="ts">
import { useQuestiontStore, type Question } from '@/stores/QuestionStore'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const questionStore = useQuestiontStore()
const route = useRoute()
const questionIndex = computed(() => route.params.index)
const question = computed((): Question => questionStore.list[questionIndex.value])
</script>

<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">{{ question.title }}</h1>
        <p class="is-size-4">{{ question.instructions }}</p>
        <br />
        <p v-if="question.input" class="is-size-5">Input: {{ question.input }}</p>
      </div>
      <div class="column">
        <h1 class="title is-3">Solution</h1>
        <p v-if="question.solution">{{ question.solution }}</p>
        <p v-else>
          <b-button type="is-success">Solve</b-button>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<!-- {
  id: '9f995ce4-d2fc-4d00-af1d-6cb1647c6bd3',
  title: 'Two sum Two',
  instructions: 'Look for the two numbers that sum up to the target. Target = 18',
  input: [2, 11, 7, 15],
  output: null,
}, -->
