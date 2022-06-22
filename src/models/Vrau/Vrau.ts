import { calculatePercentageValue } from "../../utils/calculate"
import { Das } from "../Das/Das"
import { Inss } from "../Inss/Inss"

export class Vrau {
  amount: number 
  reciviedAmount: number
  minimumWage: number = 1100 
  proLaborePercentage: number
  amountForInssCalculation: number
  inss: Inss
  das: Das 
  dla: number


  constructor (amount: number, proLaborePercentage: number, reciviedAmount: number = 0) {
    this.amount = amount
    this.reciviedAmount = reciviedAmount
    this.proLaborePercentage = proLaborePercentage
    this.amountForInssCalculation = this.getAmountForInssCalculation()
    this.inss = new Inss(this.amountForInssCalculation)

    if (reciviedAmount > 0) {
      this.das = new Das(this.reciviedAmount)
      this.dla = this.getDla(this.reciviedAmount)
    } else {
      this.das = new Das(this.amount)
      this.dla = this.getDla(this.amount)
    }
    
  }

  getAmountForInssCalculation (): number {
    let amountForInssCalculation = calculatePercentageValue(this.amount, this.proLaborePercentage)
    return amountForInssCalculation > 1100 ? amountForInssCalculation : this.minimumWage
  }

  getDla (amount: number): number {
    return amount - this.das.dasTax - this.inss.proLabore - this.inss.inssTax - this.inss.irrfTax
  }


  // TODO - EXPECETD 100000
  // Pro Labore - 2800 - OK  
  // INSS IMPOSTO - 308 - OK 
  // IRRF tem que - tem que implementar isso
  // DAS IMPOSTO - 305 
  // DLA - 6587 recalcular

  // 9000 - RECIVIED
  // Pro Labore - 2520
  // INSS IMPOSTO - 277.2
  // DAS IMPOSTO - 274.5 - OK vai receber
  // DLA - 5928.3 - recalcular

  //É ISSO
  // O PROLABORE, INSS E IRRF EM CIMA DO AMOUNT EXPECTED
  // E O DAS E O DLA EM CIMA DO 9000

}
