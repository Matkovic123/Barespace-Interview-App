<script lang="ts" setup>
import { useQuestiontStore, type Question } from '@/stores/QuestionStore'
import { RouterLink } from 'vue-router'
const store = useQuestiontStore()
const questions: Question[] = store.list
</script>

<template>
  <div class="container">
    <b-navbar centered shadow>
      <template #start>
        <b-navbar-item v-for="(question, index) in questions" :key="question.id">
          <div class="buttons">
            <a class="button">
              <RouterLink :to="`/question/${index}`">Question {{ index + 1 }}</RouterLink>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <br />
  </div>
</template>

<style lang="scss" scoped></style>
