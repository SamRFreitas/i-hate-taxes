import { calculatePercentageValue } from "@/utils/calculate"
import { formatAmount } from "@/utils/format"

export class Das {
  amount: number = 0  
  dasPercentage: number = 3.05
  dasTax: number

  constructor (amount: number) {
    this.amount = amount
    this.dasTax = this.getDasTax()
  }

  getDasTax (): number {
    let percentageValue = calculatePercentageValue(this.amount, this.dasPercentage)
    return formatAmount(percentageValue, 2)
  }
}
