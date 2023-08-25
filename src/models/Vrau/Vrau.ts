import { formatAmount } from "../../utils/format"
import { calculatePercentageValue } from "../../utils/calculate"
import { Das } from "../Das/Das"
import { Inss } from "../Inss/Inss"

export class Vrau {
  amount: number 
  reciviedAmount: number
  minimumWage = 1320 
  contabilizeiMonthlyFee = 54.5
  proLaborePercentage: number
  amountForInssCalculation: number
  isNational: boolean
  inss: Inss
  das: Das 
  dla: number


  constructor (amount: number, proLaborePercentage: number, reciviedAmount: number, isNational = false) {
    this.amount = amount
    this.proLaborePercentage = proLaborePercentage
    this.reciviedAmount = reciviedAmount
    this.isNational = isNational
    this.amountForInssCalculation = this.getAmountForInssCalculation()
    this.inss = new Inss(this.amountForInssCalculation)

    if (reciviedAmount > 0) {
      this.das = new Das(this.reciviedAmount, this.isNational)
      this.dla = this.getDla(this.reciviedAmount)
    } else {
      this.das = new Das(this.amount, this.isNational)
      this.dla = this.getDla(this.amount)
    }
    
  }

  getAmountForInssCalculation (): number {
    const amountForInssCalculation = calculatePercentageValue(this.amount, this.proLaborePercentage)
    return amountForInssCalculation > this.minimumWage ? amountForInssCalculation : this.minimumWage
  }

  getDla (amount: number): number {
    const dla = amount - this.das.dasTax - this.inss.proLabore - this.inss.inssTax - this.inss.irrfTax - this.contabilizeiMonthlyFee
    return formatAmount(dla, 2)
  }

}
