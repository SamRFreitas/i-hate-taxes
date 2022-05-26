import { formatAmount } from './format'

describe('Format Test', () => {

  it('formatAmount with just 2 zeros', () => {
    expect(formatAmount(10.22000004)).toBe(10.22)
  })

  it('formatAmount with just no zeros', () => {
    expect(formatAmount(10.00000004)).toBe(10)
  })

})