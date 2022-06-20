import { Das } from './Das'

describe('Das test - ', () => {

  it('getDasTax', () => {
    const das = new Das(100)
    
    expect(das.dasTax).toBe(3.05)
  })
  
})