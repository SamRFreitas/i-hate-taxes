import { calculatePercentageValue } from "@/utils/calculate"

export class Tax {
  amount: number = 0 
  minimumWage: number = 0 
  DASPercentage: number

  constructor (amount: number, DASPercentage: number, minimumWage: number) {
    this.amount = amount
    this.DASPercentage = DASPercentage
    this.minimumWage = minimumWage
  }

  // getProLabore (): number {
  //   return this.checkIfPercantageValueIsLesserThanMinimumWage() 
  //           ? this.minimumWage
  //           : this.proLabore
  // }

  // TODO - PRO LABORE TEM QUE IRRF -> QUANDO PRO LABORE > 1900
  // 


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


  // ERRADO, TEM QUE SER O TOTAL DE BRUTO DA EMPRESA
  //TODO CONFERIR COM O BIRIS
  // getDASTax (): number {
  //   return calculatePercentageValue(this.amount, this.DASPercentage)
  // }

  // getDLA (): number {
  //   return this.amount - this.getProLabore() - this.getINSSTax() - this.getDASTax()
  // }

  // getDLAWithContabilizeiMonthlyPayment (monthlyPayment: number): number {
  //   return this.amount - this.getProLabore() - this.getINSSTax() - this.getDASTax() - monthlyPayment
  // }

  // checkIfPercantageValueIsLesserThanMinimumWage () {
  //   return this.proLabore < this.minimumWage ? true : false
  // }

}
