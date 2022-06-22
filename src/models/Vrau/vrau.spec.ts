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


  describe('Expected amount and recivied amount', () => {

    describe('With Expected amount', () => {
      it('Without recivied amount, recieved amount is equals to 0', () => {
        const vrau = new Vrau(100000, 28)
  
        expect(vrau.reciviedAmount).toBe(0)
      })

      it('With recivied amount, the class should follow the normal flow', () => {
        const vrau = new Vrau(10000, 28)
        expect(vrau.dla).toBe(8887)
      })
    })

    describe('With Expected and Recivied amount', () => {
      it('With recivied amount', () => {
        const vrau = new Vrau(100000, 28, 9000)
  
        expect(vrau.reciviedAmount).toBe(9000)
      })

      it('With recivied amount, the inss will use the expected amount, dla and das will use recivied amount', () => {
        jest.spyOn(Das.prototype, 'getDasTax').mockImplementation(() => 2)

        const vrau = new Vrau(10000, 28, 9000)
        
        expect(vrau.dla).toBe(7888)
      })
    })

  })
  
})