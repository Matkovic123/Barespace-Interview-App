<script lang="ts" setup>
import { useQuestiontStore, type Question } from '@/stores/QuestionStore'
import { RouterLink } from 'vue-router'
const store = useQuestiontStore()
const questions: Question[] = store.list
</script>

<template>
  <b-navbar>
    <template #start>
      <b-navbar-item>
        <div class="buttons">
          <a v-for="(question, index) in questions" :key="question.id" class="button">
            <RouterLink :to="`/question/${index}`">Question {{ index + 1 }}</RouterLink>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style lang="scss" scoped></style>
