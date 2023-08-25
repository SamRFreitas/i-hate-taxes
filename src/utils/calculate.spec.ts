import { calculatePercentageValue } from '../utils/calculate';

describe('Format Test', () => {
  
  it('calculatePercentageValue', () => {    
    expect(calculatePercentageValue(100, 3.05)).toBe(3.05)
  })

})