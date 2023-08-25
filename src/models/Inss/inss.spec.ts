import { Inss } from './Inss'

describe('Inss test', () => {

  it('getInssTax', () => {

    const inss: Inss = new Inss(1212)

    expect(inss.inssTax).toBe(133.32)

  })

  describe('getIrrfDeduction', () => {

    it('With (amount - inns tax) bigger then 0 and lesser or equal then 1903.98', () => {
      const inss: Inss = new Inss(1903.98)
      
      expect(inss.irrfDeduction.aliquot).toBe(0)
      expect(inss.irrfDeduction.deduction).toBe(0)
    })

    it('With (amount - inns tax) bigger or equal then 1903.99 and lesser or equal then 2826.65', () => {
      const inss: Inss = new Inss(2200)

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
      const inss: Inss = new Inss(2500)

      expect(inss.irrfTax).toBe(24.08)
    })

    it('Aliquot equals to 15% and deduction equals to 354.80', () => {
      const inss: Inss = new Inss(3200)

      expect(inss.irrfTax).toBe(72.4)
    })

    it('Aliquot equals to 22,5% and deduction equals to 636,13', () => {
      const inss: Inss = new Inss(4500)

      expect(inss.irrfTax).toBe(265)
    })

    it('Aliquot equals to 27,5% and deduction equals to 869,36', () => {
      const inss: Inss = new Inss(6000)

      expect(inss.irrfTax).toBe(599.14)
    })

  })

  describe('Inss taxes', () => {

    it('Insss and Irrf', () => {
      const inss: Inss = new Inss(5200)

      expect(inss.inssTax).toBe(572)
      expect(inss.irrfTax).toBe(405.17)
    })

  })

})