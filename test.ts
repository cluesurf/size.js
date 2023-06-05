/* eslint-disable @typescript-eslint/no-unsafe-argument */
import size from './index.js'

test('קג', size.hebrew.make(123))

function test(a: string, b: string) {
  if (a !== b) {
    throw new Error(`${a} != ${b}`)
  }
}
