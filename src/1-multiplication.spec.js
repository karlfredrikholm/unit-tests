import { multiply } from './1-multiplication'

describe('1-multiplication', () => {
  it('should return the value from multiplying two numbers', () => {
    expect(multiply(2, 2)).toEqual(4)
  })
  it('test', () => {
    expect(multiply(3, 3)).toEqual(9)
  })
})
