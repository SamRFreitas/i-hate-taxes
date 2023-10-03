import { formatAmount } from "../../utils/format"
import { calculatePercentageValue } from "../../utils/calculate"

export class Inss {
  amount: number
  // inssDeductionTable = {
  //   '1': {
  //     aliquot: formatAmount(7.5, 2),
  //     deduction: formatAmount(0, 0)
  //   },
  //   '2': {
  //     aliquot: formatAmount(9, 2),
  //     deduction: formatAmount(18.18, 2)
  //   },
  //   '3': {
  //     aliquot: formatAmount(12, 2),
  //     deduction: formatAmount(91, 2)
  //   },
  //   '4': {
  //     aliquot: formatAmount(14, 2),
  //     deduction: formatAmount(163.82, 2)
  //   },
  // }
  // inssDeduction: any
  inssTax: number
  irrfDeductionTable = {
    '1': {
      aliquot: formatAmount(0, 0),
      deduction: formatAmount(0, 0)
    },
    '2': {
      aliquot: formatAmount(7.5, 2),
      deduction: formatAmount(142.80, 2)
    },
    '3': {
      aliquot: formatAmount(15, 2),
      deduction: formatAmount(354.80, 2)
    },
    '4': {
      aliquot: formatAmount(22.5, 2),
      deduction: formatAmount(636.13, 2)
    },
    '5': {
      aliquot: formatAmount(27.5, 2),
      deduction: formatAmount(869.36, 2)
    }
  }
  irrfDeduction: any
  irrfTax: number
  proLabore: number

  constructor (amount: number) {
    this.amount = formatAmount(amount, 2)
    // this.inssDeduction = this.getInssDeduction()
    this.inssTax = this.getInssTax()
    this.irrfDeduction = this.getIrrfDeduction()
    this.irrfTax = this.getIrrfTax()
    this.proLabore = this.getProLabore()
  }

  // getInssDeduction (): any {

  //   switch (true) {
  //     case (this.amount > 0 && this.amount <= 1212): {
  //       return this.inssDeductionTable['1']
  //     }
  //     case (this.amount >= 1212.01 && this.amount <= 2427.35): {
  //       return this.inssDeductionTable['2']
  //     }
  //     case (this.amount >= 2427.36 && this.amount <= 3641.03): {
  //       return this.inssDeductionTable['3']
  //     }
  //     case (this.amount >= 3641.04): {
  //       return this.inssDeductionTable['4']
  //     }
  //   }

  // }

  getInssTax (): number {
    const inssTax = calculatePercentageValue(this.amount, 11)
    return formatAmount(inssTax, 2)
  }

  getIrrfDeduction (): any {
    const amountWithoutInssTax: number = this.amount - this.inssTax

    switch (true) {
      case (amountWithoutInssTax > 0 && amountWithoutInssTax <= 1903.98): {
        return this.irrfDeductionTable['1']
      }
      case (amountWithoutInssTax >= 1903.99 && amountWithoutInssTax <= 2826.65): {
        return this.irrfDeductionTable['2']
      }
      case (amountWithoutInssTax >= 2826.66 && amountWithoutInssTax <= 3751.05): {
        return this.irrfDeductionTable['3']
      }
      case (amountWithoutInssTax >= 3751.06 && amountWithoutInssTax <= 4664.68): {
        return this.irrfDeductionTable['4']
      }
      case (amountWithoutInssTax > 4664.68): {
        return this.irrfDeductionTable['5']
      }
    }

  }

  getIrrfTax (): number {
    const amountWithoutInssTax = this.amount - this.inssTax
    const irrfTax = calculatePercentageValue(amountWithoutInssTax, this.irrfDeduction.aliquot) - this.irrfDeduction.deduction

    return irrfTax < 0 ? formatAmount(0, 0) : formatAmount(irrfTax, 2)
  }

  getProLabore (): number {
    return formatAmount(this.amount, 2)
  }

}
