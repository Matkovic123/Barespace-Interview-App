import { solveCreditCardNumber, solveMoveZerosToEnd, solveTwoSumTwo } from '@/static/solver'
import { defineStore } from 'pinia'

export type Question = {
  id: string
  title: string
  instructions: string
  input: number[] | null
  solution: number[] | null
}

type StateShape = {
  list: Question[]
}

export const useQuestiontStore = defineStore('QuestionStore', {
  // Data
  state: (): StateShape => ({
    list: [
      {
        id: '9f995ce4-d2fc-4d00-af1d-6cb1647c6bd3',
        title: 'Two sum Two',
        instructions: 'Look for the two numbers that sum up to the target of 18',
        input: [2, 11, 7, 15],
        solution: null,
      },
      {
        id: '0625d3be-9548-4551-80da-6dae27361e74',
        title: 'Hide a credit card number',
        instructions:
          'A credit card usually contains 16 digits with an (*) arsterisk and keeps its last four digits as is. Return the updated string with the first 12 characters replaced with asterisks (*).',
        input: null,
        solution: null,
      },
      {
        id: '8b672083-fbc3-4ca3-8980-aaf05e85d5b9',
        title: 'Move all zeros in the array to the end',
        instructions:
          'Move all the zeros to the end of the array while maintaining relative order to the non zero elements',
        input: [0, 1, 0, 3, 12],
        solution: null,
      },
    ],
  }),
  // Computed
  getters: {},
  //Methods
  actions: {
    solve(index: string): void {
      switch (index) {
        case '0':
          this.list[index].solution = solveTwoSumTwo(this.list[index].input)
          break
        case '1':
          this.list[index].solution = solveCreditCardNumber()
          break
        case '2':
          this.list[index].solution = solveMoveZerosToEnd(this.list[index].input)
          break
        default:
          console.log('Switch statement fell through')
      }
    },
  },
})
