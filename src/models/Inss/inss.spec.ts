import { Inss } from './Inss'

describe('Inss test', () => {

  describe('getInssDeduction', () => {

    it('With amount bigger then 0 and lesser or equal then 1212', () => {
      let inss = new Inss(1212)
      
      expect(inss.inssDeduction.aliquot).toBe(7.5)
      expect(inss.inssDeduction.deduction).toBe(0)
    })

    it('With amount bigger or equal then 1212.01 and lesser or equal then 2427.35', () => {
      let inss = new Inss(1212.01)

      expect(inss.inssDeduction.aliquot).toEqual(9)
      expect(inss.inssDeduction.deduction).toBe(18.18)
    })

    it('With amount bigger or equal then 2427.36 and lesser or equal then 3641.03', () => {
      let inss = new Inss(2427.36)

      expect(inss.inssDeduction.aliquot).toBe(12)
      expect(inss.inssDeduction.deduction).toBe(91)
    })

    it('With amount bigger or equal then 3641.04 and lesser or equal then 7087.22', () => {
      let inss = new Inss(3641.04)

      expect(inss.inssDeduction.aliquot).toBe(14)
      expect(inss.inssDeduction.deduction).toBe(163.82)
    })

  })

  describe('getInssTax', () => {

    it('Aliquot equals to 7.5% and deduction equals to 0', () => {
      let inss = new Inss(1212)

      expect(inss.inssTax).toBe(90.9)
    })

    it('Aliquot equals to 9% and deduction equals to 18.18', () => {
      let inss = new Inss(1500)

      expect(inss.inssTax).toBe(116.82)
    })

    it('Aliquot equals to 12% and deduction equals to 91', () => {
      let inss = new Inss(2427.36)

      expect(inss.inssTax).toBe(200.28)
    })

    it('Aliquot equals to 14% and deduction equals to 163.82', () => {
      let inss = new Inss(3641.04)

      expect(inss.inssTax).toBe(345.93)
    })

  })

  describe('getIrrfDeduction', () => {

    // it('With amount bigger then 0 and lesser or equal then 1212', () => {
    //   let inss = new Inss(1212)
      
    //   expect(inss.irrf.aliquot).toBe(7.5)
    //   expect(inss.irrf.deduction).toBe(0)
    // })

    // it('With amount bigger or equal then 1212.01 and lesser or equal then 2427.35', () => {
    //   let inss = new Inss(1212.01)

    //   expect(inss.inssDeduction.aliquot).toEqual(9)
    //   expect(inss.inssDeduction.deduction).toBe(18.18)
    // })

    // it('With amount bigger or equal then 2427.36 and lesser or equal then 3641.03', () => {
    //   let inss = new Inss(2427.36)

    //   expect(inss.inssDeduction.aliquot).toBe(12)
    //   expect(inss.inssDeduction.deduction).toBe(91)
    // })

    // it('With amount bigger or equal then 3641.04 and lesser or equal then 7087.22', () => {
    //   let inss = new Inss(3641.04)

    //   expect(inss.inssDeduction.aliquot).toBe(14)
    //   expect(inss.inssDeduction.deduction).toBe(163.82)
    // })

  })

  describe('getIrrfTax', () => {

    // it('Aliquot equals to 7.5% and deduction equals to 0', () => {
    //   let inss = new Inss(1212)

    //   expect(inss.inssTax).toBe(90.9)
    // })

    // it('Aliquot equals to 9% and deduction equals to 18.18', () => {
    //   let inss = new Inss(1500)

    //   expect(inss.inssTax).toBe(116.82)
    // })

    // it('Aliquot equals to 12% and deduction equals to 91', () => {
    //   let inss = new Inss(2427.36)

    //   expect(inss.inssTax).toBe(200.28)
    // })

    // it('Aliquot equals to 14% and deduction equals to 163.82', () => {
    //   let inss = new Inss(3641.04)

    //   expect(inss.inssTax).toBe(345.93)
    // })

  })

})