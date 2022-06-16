export function formatAmount (amount: number, decimalDigts: number): number {
  return Number(amount.toFixed(decimalDigts))
}