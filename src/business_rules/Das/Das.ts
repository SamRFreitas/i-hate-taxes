import { calculatePercentageValue } from "../../utils/calculate"
import { formatAmount } from "../../utils/format"

export class Das {

  amount = 0
  isNational: boolean
  dasPercentage: number
  dasTax: number

  constructor (amount: number, isNational = false) {

    this.amount = amount
    this.isNational = isNational
    this.dasPercentage = this.isNational ? 6.5 : 3.05
    this.dasTax = this.getDasTax()

  }

  getDasTax (): number {
    const percentageValue = calculatePercentageValue(this.amount, this.dasPercentage)
    return formatAmount(percentageValue, 2)
  }
  
}
