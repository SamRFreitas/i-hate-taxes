import { formatAmount } from "./format"

export function calculatePercentageValue (amount: number, percentage: number): number {
  const percantageValue = amount * ( percentage / 100 )
  return formatAmount(percantageValue, 2)
}