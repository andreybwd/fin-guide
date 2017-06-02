export interface Transaction {
  id: string,
  budgetId: string,
  tidRelated?: string,
  widFrom?: string,
  widTo?: string,
  type: string,
  status: string,
  sum: number,
  sumOriginal?: number,
  balanceAfter?: number,
  description?: string,
  createdAt: Date
}
