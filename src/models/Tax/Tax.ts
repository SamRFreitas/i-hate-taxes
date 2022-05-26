import { formatAmount } from "@/utils/format"

export class Tax {
  amount: number = 0 
  proLaborePercentage: number
  INSSPercentage: number
  DASPercentage: number

  constructor (amount: number, proLaborePercentage: number, INSSPercentage: number, DASPercentage: number) {
    this.amount = amount
    this.proLaborePercentage = proLaborePercentage
    this.DASPercentage = DASPercentage
    this.INSSPercentage = INSSPercentage
  }

  getProLabore (): number {
    return this.calculatePercentageValue(this.amount, this.proLaborePercentage)
  }

  getINSSTax (): number {
    return this.calculatePercentageValue(this.getProLabore(), this.INSSPercentage)
  }

  getDASTax (): number {
    return this.calculatePercentageValue(this.amount, this.DASPercentage)
  }

  getDLA (): number {
    return this.amount - this.getProLabore() - this.getINSSTax() - this.getDASTax()
  }

  getDLAWithContabilizeiMonthlyPayment (monthlyPayment: number): number {
    return this.amount - this.getProLabore() - this.getINSSTax() - this.getDASTax() - monthlyPayment
  }

  calculatePercentageValue (amount: number, percentage: number): number {
    let tax: number = amount * ( percentage / 100 )
    return formatAmount(tax)
  }

}
