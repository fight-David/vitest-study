import { describe, afterAll, afterEach, beforeAll, beforeEach, test, it, expect } from './core.js'

beforeAll(() => {
    console.log('before all')
})

beforeEach(() => {
    console.log('before each')
})

test('first test case', () => {
    console.log('first test case')
    expect(2).toBe(2)
})

// test.only('only test case', () => {
//     console.log('only test case')
// })

it('second test case', () => {
    console.log('second test case')
    expect(2).toBe(3)
})

describe('sub', () => {
    test('sub:first test case', () => {
        console.log('sub:first test case')
        expect(2).toBe(2)
    })
})

afterEach(() => {
    console.log('after each')
})

afterAll(() => {
    console.log('after all')
})
