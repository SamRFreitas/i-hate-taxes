import { Vrau } from "./models/Vrau/Vrau"

const vrau1: Vrau = new Vrau(10000, 28)

console.log(`------------------Valores--------------------`)
console.log(`Contabilizei:----> ${vrau1.contabilizeiMonthlyFee}`)
console.log(`INSS:------------> ${vrau1.inss.inssTax}`)
console.log(`IRRF:------------> ${vrau1.inss.irrfTax}`)
console.log(`Pro-lábore:------> ${vrau1.inss.proLabore}`)
console.log(`DAS:-------------> ${vrau1.das.dasTax}`)
console.log(`DLA:-------------> ${vrau1.dla}`)
console.log(`---------------------------------------------`)

const vrau2: Vrau = new Vrau(10000, 28, 9000)


console.log(`------------------Valores--------------------`)
console.log(`Contabilizei:----> ${vrau2.contabilizeiMonthlyFee}`)
console.log(`INSS:------------> ${vrau2.inss.inssTax}`)
console.log(`IRRF:------------> ${vrau2.inss.irrfTax}`)
console.log(`Pro-lábore:------> ${vrau2.inss.proLabore}`)
console.log(`DAS:-------------> ${vrau2.das.dasTax}`)
console.log(`DLA:-------------> ${vrau2.dla}`)
console.log(`---------------------------------------------`)




