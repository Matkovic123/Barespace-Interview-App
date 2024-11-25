<script lang="ts" setup>
import type { Question } from '@/stores/QuestionStore'
import { ref } from 'vue'

type PropTypes = {
  question: Question
}
const props = defineProps<PropTypes>()
const newQuestion = ref<Question>({ ...props.question })

const emits = defineEmits<{
  (e: 'save-edit', question: Question): void
  (e: 'cancel'): void
}>()

const inputString = ref(newQuestion.value.input + '')

const checkInput = (e: InputEvent) => {
  if (e.inputType === 'deleteContentBackward') {
    inputString.value = inputString.value.slice(0, -1)
  } else if (e.data === ',' || e.data === ' ' || !isNaN(Number(e.data))) {
    inputString.value += e.data
  }
}

const saveEdit = () => {
  newQuestion.value.input = inputString.value.split(',').map(Number)
  emits('save-edit', newQuestion.value)
}
const cancelEdit = () => {
  emits('cancel')
}
</script>
<template>
  <div>Edit form</div>
  <b-field label="Input">
    <b-input :value="inputString" @input="checkInput"></b-input>
  </b-field>

  <b-field v-if="props.question.target" label="Target">
    <b-input type="number" v-model="newQuestion.target"> </b-input>
  </b-field>
  <div class="buttons">
    <b-button @click="saveEdit" type="is-success">Save</b-button>
    <b-button @click="cancelEdit" type="is-danger">Cancel</b-button>
  </div>
</template>

<style lang="scss" scoped></style>
