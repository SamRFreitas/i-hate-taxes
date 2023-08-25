import { calculatePercentageValue } from "../../utils/calculate"
import { formatAmount } from "../../utils/format"

export class Das {
  amount = 0  
  dasPercentage = 6.5
  dasTax: number

  constructor (amount: number) {
    this.amount = amount
    this.dasTax = this.getDasTax()
  }

  getDasTax (): number {
    const percentageValue = calculatePercentageValue(this.amount, this.dasPercentage)
    return formatAmount(percentageValue, 2)
  }
}
