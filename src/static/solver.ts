import { log } from 'console'

export const solveTwoSumTwo = (input: number[], target: number): string => {
  for (let i = 0; i < input.length; i++) {
    const index = input.indexOf(target - input[i])
    if (index !== -1) {
      return `Numbers with index ${i} and ${index} summed up give the desired target value.`
    }
  }
  return `No matches for target ${target}`
}
export const solveCreditCardNumber = (input: number): string => {
  const text = String(input)
  const remainder = text.slice(-4)
  const target = text.slice(0, text.length - remainder.length)
  return '*'.repeat(target.length) + remainder

  // return '************' + text.substring(text.length - 4)
}
export const solveMoveZerosToEnd = (input: number[]): number[] => {
  const solution = [...input]

  for (let i = solution.length - 1; i >= 0; i--) {
    if (solution[i] === 0) {
      solution.splice(i, 1)
      solution.push(0)
    }
  }
  return solution
}

// export const solveMoveZerosToEnd = (input: number[]): number[] => {
//   const arr = [...input]
//   let count = 0

//   for (let i = 0; i < arr.length; i++) {
//     // If the current element is non-zero
//     if (arr[i] !== 0) {
//       // Swap the current element with the 0 at index 'count'
//       ;[arr[i], arr[count]] = [arr[count], arr[i]]

//       // Move 'count' pointer to the next position
//       count++
//     }
//   }
//   return arr
// }
