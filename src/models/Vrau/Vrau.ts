import { calculatePercentageValue } from "@/utils/calculate"
import { Das } from "../Das/Das"
import { Inss } from "../Inss/Inss"

export class Vrau {
  amount: number = 0 
  minimumWage: number = 1100 
  proLaborePercentage: number
  amountForInssCalculation: number
  inss: Inss
  das: Das 
  dla: number


  constructor (amount: number, proLaborePercentage: number) {
    this.amount = amount
    this.proLaborePercentage = proLaborePercentage
    this.amountForInssCalculation = this.getAmountForInssCalculation()
    this.inss = new Inss(this.amountForInssCalculation)
    this.das = new Das(this.amount)
    this.dla = this.getDla()
  }

  getAmountForInssCalculation (): number {
    let amountForInssCalculation = calculatePercentageValue(this.amount, this.proLaborePercentage)
    return amountForInssCalculation > 1100 ? amountForInssCalculation : this.minimumWage
  }

  getDla (): number {
    return this.amount - this.das.dasTax - this.inss.proLabore - this.inss.inssTax - this.inss.irrfTax
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

}
