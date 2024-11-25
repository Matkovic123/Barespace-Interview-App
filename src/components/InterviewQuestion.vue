<script setup lang="ts">
import { useQuestiontStore, type Question } from '@/stores/QuestionStore'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import EditInterviewQuestion from './EditInterviewQuestion.vue'

const questionStore = useQuestiontStore()
const route = useRoute()
const router = useRouter()

const questionIndex = computed(() => route.params.index)
const question = computed((): Question => questionStore.list[questionIndex.value])

const showEdit = ref(false)
router.beforeEach(() => {
  cancelEdit()
})

const saveEdit = (newQuestion: Question) => {
  questionStore.saveEdit(newQuestion)
}
const cancelEdit = () => {
  showEdit.value = false
}

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
        <br />
        <b-button v-if="!showEdit" @click="showEdit = true" type="is-info">Change input</b-button>
        <EditInterviewQuestion
          :question
          @save-edit="saveEdit"
          @cancel="cancelEdit"
          v-if="showEdit"
        />
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
