<script setup lang="ts">
import { useQuestiontStore, type Question } from '@/stores/QuestionStore'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const questionStore = useQuestiontStore()
const route = useRoute()
const questionIndex = computed(() => route.params.index)
const question = computed((): Question => questionStore.list[questionIndex.value])

const solve = () => questionStore.solve(questionIndex.value)
</script>

<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">{{ question.title }}</h1>
        <p class="is-size-4">{{ question.instructions }}</p>
        <br />
        <p v-if="question.input" class="is-size-5">Input: {{ question.input }}</p>
        <p v-if="question.target" class="is-size-5">Target: {{ question.target }}</p>
      </div>
      <div class="column">
        <h1 class="title is-3">Solution</h1>
        <p v-if="question.solution" class="is-size-4">{{ question.solution }}</p>
        <p v-else>
          <b-button @click="solve" type="is-success">Solve</b-button>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
