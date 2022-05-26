import { Tax } from './Tax'

describe('Tax test - ', () => {

  it('calculateTax', () => {
    //The constructor implementation needs to be refactored
    let tax = new Tax(0, 0, 0, 0)
    
    expect(tax.calculatePercentageValue(100, 3.05)).toBe(3.05)
  })

  it('getProLabore', () => {
    let tax = new Tax(100, 28, 0, 0)
    
    expect(tax.getProLabore()).toBe(28)
  })

  it('getINSSTax', () => {
    let tax = new Tax(100, 28, 11, 0)
    
    expect(tax.getINSSTax()).toBe(3.08)
  })

  it('getDASTax', () => {
    let tax = new Tax(100, 0, 0, 3.05)
    
    expect(tax.getDASTax()).toBe(3.05)
  })

  it('getDLA', () => {
    let tax = new Tax(1000, 28, 11, 3.05)
    
    expect(tax.getDLA()).toBe(658.7)
  })

  it('getDLAWithMonthlyPayment', () => {
    let tax = new Tax(1000, 28, 11, 3.05)
    
    expect(tax.getDLAWithContabilizeiMonthlyPayment(89)).toBe(569.7)
  })
  
})