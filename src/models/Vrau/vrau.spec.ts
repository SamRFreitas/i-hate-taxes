import { Das } from './../Das/Das'
import { Inss } from '../Inss/Inss'
import { Vrau } from './Vrau'

beforeEach(() => {

  jest.spyOn(Inss.prototype, 'getInssTax').mockImplementation(() => 10)
  jest.spyOn(Inss.prototype, 'getIrrfTax').mockImplementation(() => 100)
  jest.spyOn(Inss.prototype, 'getProLabore').mockImplementation(() => 1000)

  jest.spyOn(Das.prototype, 'getDasTax').mockImplementation(() => 3)

})

describe('Vrau test', () => {

  describe('getAmountForInssCalculation', () => {

    it('When INSS Calculation value is lesser or equals to 1100', () => {
      const vrau = new Vrau(2000, 28)
      
      expect(vrau.amountForInssCalculation).toBe(1100)
    })

    it('When INSS Calculation value use 28% of amount', () => {
      const vrau = new Vrau(10000, 28)
      
      expect(vrau.amountForInssCalculation).toBe(2800)
    })

  })

  it('getDla', () => {
    const vrau = new Vrau(2000, 28)
    
    expect(vrau.dla).toBe(887)
  })
  
})