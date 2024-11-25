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
          <RouterLink :to="`/question/${index}`">
            <div class="buttons">
              <a class="button"> Question {{ index + 1 }} </a>
            </div>
          </RouterLink>
        </b-navbar-item>
      </template>
    </b-navbar>
    <br />
  </div>
</template>

<style lang="scss" scoped></style>
