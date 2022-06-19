import { formatAmount } from "@/utils/format"
import { calculatePercentageValue } from "@/utils/calculate"

export class Inss {
  amount: number = 0
  inssDeductionTable = {
    '1': {
      aliquot: formatAmount(7.5, 1),
      deduction: formatAmount(0, 0)
    },
    '2': {
      aliquot: formatAmount(9, 0),
      deduction: formatAmount(18.18, 2)
    },
    '3': {
      aliquot: formatAmount(12, 0),
      deduction: formatAmount(91, 0)
    },
    '4': {
      aliquot: formatAmount(14, 0),
      deduction: formatAmount(163.82, 2)
    },
  }
  inssDeduction: any
  inssTax: number
  irffDeductionTable = {
    '1': {
      aliquot: formatAmount(0, 0),
      deduction: formatAmount(0, 0)
    },
    '2': {
      aliquot: formatAmount(7.5, 1),
      deduction: formatAmount(142.80, 2)
    },
    '3': {
      aliquot: formatAmount(15, 0),
      deduction: formatAmount(354.80, 2)
    },
    '4': {
      aliquot: formatAmount(22.5, 1),
      deduction: formatAmount(636.13, 2)
    },
    '5': {
      aliquot: formatAmount(27.5, 1),
      deduction: formatAmount(869.36, 2)
    }
  }
  irrfDeduction: any
  irrfTax: number

  constructor (amount: number) {
    this.amount = formatAmount(amount, 2)
    this.inssDeduction = this.getInssDeduction()
    this.inssTax = this.getInssTax()
    this.irrfDeduction = this.getIrrfDeduction()
    this.irrfTax = this.getIrrfTax()
  }

  getInssDeduction (): any {

    switch (true) {
      case (this.amount > 0 && this.amount <= 1212): {
        return this.inssDeductionTable['1']
      }
      case (this.amount >= 1212.01 && this.amount <= 2427.35): {
        return this.inssDeductionTable['2']
      }
      case (this.amount >= 2427.36 && this.amount <= 3641.03): {
        return this.inssDeductionTable['3']
      }
      case (this.amount >= 3641.04): {
        return this.inssDeductionTable['4']
      }
    }

  }

  getInssTax (): number {
    let inssTax = calculatePercentageValue(this.amount, this.inssDeduction.aliquot) - this.inssDeduction.deduction
    return formatAmount(inssTax, 2)
  }

  getIrrfDeduction (): any {

    switch (true) {
      case (this.amount > 0 && this.amount <= 1903.98): {
        return this.irffDeductionTable['1']
      }
      case (this.amount >= 1903.98 && this.amount <= 2826.65): {
        return this.irffDeductionTable['2']
      }
      case (this.amount >= 2826.66 && this.amount <= 3751.05): {
        return this.irffDeductionTable['3']
      }
      case (this.amount >= 3751.06 && this.amount <= 4664.68): {
        return this.irffDeductionTable['4']
      }
      case (this.amount > 4664.68): {
        return this.irffDeductionTable['5']
      }
    }

  }

  getIrrfTax (): number {
    let amountWithoutInssTax = this.amount - this.inssTax
    let irrfTax = calculatePercentageValue(amountWithoutInssTax, this.irrfDeduction.aliquot) - this.irrfDeduction.deduction

    return irrfTax < 0 ? formatAmount(0, 0) : formatAmount(irrfTax, 2)
  }

}
