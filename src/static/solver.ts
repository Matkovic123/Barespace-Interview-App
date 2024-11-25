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
export const solveCreditCardNumber = (input: number) => {
  const text = String(input)
  return '************' + text.substring(text.length - 4)
}
export const solveMoveZerosToEnd = (input: number[]) => String(input)
