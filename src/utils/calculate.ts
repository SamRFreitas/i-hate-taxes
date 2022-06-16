import { formatAmount } from "./format"

export function calculatePercentageValue (amount: number, percentage: number): number {
  let percantageValue: number = amount * ( percentage / 100 )
  return formatAmount(percantageValue, 2)
}