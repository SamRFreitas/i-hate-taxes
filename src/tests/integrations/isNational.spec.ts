import { Vrau } from "@/models/Vrau/Vrau"

describe('Models - Vrau and Das handle when isNational or NOT', () => {

  it('When is national', () => {
      const vrau = new Vrau(2000, 28, 0, true)
        
      expect(vrau.das.dasTax).toBe(130)
  })

  it('When is NOT national', () => {
      const vrau = new Vrau(2000, 28, 0, false)
    
      expect(vrau.das.dasTax).toBe(61)
  })

})