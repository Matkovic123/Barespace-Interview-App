export const target = 18
export const solveTwoSumTwo = (input: number[]): string => {
  for (let i = 0; i < input.length; i++) {
    const index = input.indexOf(target - input[i])
    if (index !== -1) {
      return `Numbers with index ${i} and ${index} summed up give the desired target value.`
    }
  }
  return `No matches for target ${target}`
}
export const solveCreditCardNumber = (input: number) => {
  const text = String(input)
  const remainder = text.slice(-4)
  const target = text.slice(0, text.length - remainder.length)
  return '*'.repeat(target.length) + remainder

  // return '************' + text.substring(text.length - 4)
}
export const solveMoveZerosToEnd = (input: number[]) => {
  const solution = [...input]
  solution.forEach((value, index) => {
    if (value === 0) {
      solution.splice(index, 1)
      solution.push(0)
    }
  })
  return solution
}
