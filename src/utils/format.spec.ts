import { formatAmount } from './format'

describe('Format Test', () => {
  
  it('formatAmount with just 3 digital digits', () => {
    expect(formatAmount(0, 0)).toBe(0)
  })

  it('formatAmount with just 3 digital digits', () => {
    expect(formatAmount(0.075, 3)).toBe(0.075)
  })

  it('formatAmount with just 2 zeros', () => {
    expect(formatAmount(10.22000004, 2)).toBe(10.22)
  })

  it('formatAmount with just no zeros', () => {
    expect(formatAmount(10.00000004, 2)).toBe(10)
  })

})