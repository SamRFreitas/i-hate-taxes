import { Das } from './Das'

describe('Das test - ', () => {

  describe('getDasTax', () => {
    it('When isNational, dasTax should be 3.05', () => {
      const das = new Das(100)
      
      expect(das.dasTax).toBe(3.05)
    })

    it('When NOT isNational, dasTax should be 6.5', () => {
      const das = new Das(100, true)
      
      expect(das.dasTax).toBe(6.5)
    })
    
  })
  
})