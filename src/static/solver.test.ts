import { expect, test } from 'vitest'
import { solveTwoSumTwo, solveCreditCardNumber, solveMoveZerosToEnd } from '@/static/solver'

test('solveTwoSumTwo test', () => {
  expect(solveTwoSumTwo([1, 2, 3, 4], 7)).toStrictEqual(
    `Numbers with index 2 and 3 summed up give the desired target value.`,
  )
  expect(solveTwoSumTwo([2, 11, 7, 15], 18)).toStrictEqual(
    `Numbers with index 1 and 2 summed up give the desired target value.`,
  )
})

test('solveCreditCardNumber test', () => {
  expect(solveCreditCardNumber(1234567898745632)).toStrictEqual('************5632')
})

test('solveMoveZerosToEnd test', () => {
  expect(solveMoveZerosToEnd([0, 0, 1, 2, 0, 3, 0, 4, 0])).toStrictEqual([
    1, 2, 3, 4, 0, 0, 0, 0, 0,
  ])
})
