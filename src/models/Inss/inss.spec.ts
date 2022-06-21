import { Inss } from './Inss'

describe('Inss test', () => {

  describe('getInssDeduction', () => {

    it('With amount bigger then 0 and lesser or equal then 1212', () => {
      const inss: Inss = new Inss(1212)
      
      expect(inss.inssDeduction.aliquot).toBe(7.5)
      expect(inss.inssDeduction.deduction).toBe(0)
    })

    it('With amount bigger or equal then 1212.01 and lesser or equal then 2427.35', () => {
      const inss: Inss = new Inss(1212.01)

      expect(inss.inssDeduction.aliquot).toEqual(9)
      expect(inss.inssDeduction.deduction).toBe(18.18)
    })

    it('With amount bigger or equal then 2427.36 and lesser or equal then 3641.03', () => {
      const inss: Inss = new Inss(2427.36)

      expect(inss.inssDeduction.aliquot).toBe(12)
      expect(inss.inssDeduction.deduction).toBe(91)
    })

    it('With amount bigger then 3641.04', () => {
      const inss: Inss = new Inss(3641.04)

      expect(inss.inssDeduction.aliquot).toBe(14)
      expect(inss.inssDeduction.deduction).toBe(163.82)
    })

  })

  describe('getInssTax', () => {

    it('Aliquot equals to 7.5% and deduction equals to 0', () => {
      const inss: Inss = new Inss(1212)

      expect(inss.inssTax).toBe(90.9)
    })
    

    it('Aliquot equals to 9% and deduction equals to 18.18', () => {
      const inss: Inss = new Inss(1500)

      expect(inss.inssTax).toBe(116.82)
    })

    it('Aliquot equals to 12% and deduction equals to 91', () => {
      const inss: Inss = new Inss(2427.36)

      expect(inss.inssTax).toBe(200.28)
    })

    it('Aliquot equals to 14% and deduction equals to 163.82', () => {
      const inss: Inss = new Inss(3641.04)

      expect(inss.inssTax).toBe(345.93)
    })

  })

  describe('getIrrfDeduction', () => {

    it('With (amount - inns tax) bigger then 0 and lesser or equal then 1903.98', () => {
      const inss: Inss = new Inss(1903.98)
      
      expect(inss.irrfDeduction.aliquot).toBe(0)
      expect(inss.irrfDeduction.deduction).toBe(0)
    })

    it('With (amount - inns tax) bigger or equal then 1903.99 and lesser or equal then 2826.65', () => {
      const inss: Inss = new Inss(2073)

      expect(inss.irrfDeduction.aliquot).toEqual(7.5)
      expect(inss.irrfDeduction.deduction).toBe(142.80)
    })

    it('With (amount - inns tax) bigger or equal then 2826.66 and lesser or equal then 3751.05', () => {
      const inss: Inss = new Inss(3200)

      expect(inss.irrfDeduction.aliquot).toBe(15)
      expect(inss.irrfDeduction.deduction).toBe(354.80)
    })

    it('With (amount - inns tax) bigger or equal then 3751.06 and lesser or equal then 4664.68', () => {
      const inss: Inss = new Inss(4500)

      expect(inss.irrfDeduction.aliquot).toBe(22.5)
      expect(inss.irrfDeduction.deduction).toBe(636.13)
    })

    it('With (amount - inns tax) bigger then 4664.68', () => {
      const inss: Inss = new Inss(6000)

      expect(inss.irrfDeduction.aliquot).toBe(27.5)
      expect(inss.irrfDeduction.deduction).toBe(869.36)
    })

  })

  describe('getIrrfTax', () => {

    it('Aliquot equals to 0% and deduction equals to 0', () => {
      const inss: Inss = new Inss(1903.98)

      expect(inss.irrfTax).toBe(0)
    })

    it('Aliquot equals to 7.5% and deduction equals to 142.80, but irrf is negative', () => {
      const inss: Inss = new Inss(1903.99)
      expect(inss.irrfTax).toBe(0)
    }) 

    it('Aliquot equals to 7.5% and deduction equals to 142.80', () => {
      const inss: Inss = new Inss(2073)

      expect(inss.irrfTax).toBe(0.05)
    })

    it('Aliquot equals to 15% and deduction equals to 354.80', () => {
      const inss: Inss = new Inss(3200)

      expect(inss.irrfTax).toBe(81.25)
    })

    it('Aliquot equals to 22,5% and deduction equals to 636,13', () => {
      const inss: Inss = new Inss(4500)

      expect(inss.irrfTax).toBe(271.48)
    })

    it('Aliquot equals to 27,5% and deduction equals to 869,36', () => {
      const inss: Inss = new Inss(6000)

      expect(inss.irrfTax).toBe(594.69)
    })

  })

  describe('getProLabore', () => {

    it('Pro-Labore with amount equals to 5200', () => {
      const inss: Inss = new Inss(5200)

      expect(inss.proLabore).toBe(4228.89)
    })

  })

})