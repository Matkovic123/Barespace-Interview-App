export const solveTwoSumTwo = (input: number[]): string => {
  const target = 18
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = input.length - 1; j > i; j--) {
      if (input[i] + input[j] === target) {
        return `Numbers in position ${i} and ${j} summed up give the desired target value. Total time ${totalTime}`
      }
    }
  }
  return 'No matches'
}
export const solveCreditCardNumber = () => '222'
export const solveMoveZerosToEnd = (input: number[]) => '333'
