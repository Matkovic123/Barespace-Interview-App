export const solveTwoSumTwo = (input: number[]): string => {
  const target = 18
  for (let i = 0; i < input.length; i++) {
    const index = input.indexOf(target - input[i])
    if (index !== -1) {
      return `Numbers in position ${i} and ${index} summed up give the desired target value.`
    }
  }
  // return `Numbers in position ${i} and ${j} summed up give the desired target value. Total time ${totalTime}`
  return 'No matches'
}
export const solveCreditCardNumber = () => '222'
export const solveMoveZerosToEnd = (input: number[]) => '333'
