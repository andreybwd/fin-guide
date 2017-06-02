export interface Wallet {
  id: string,
  name: string,
  currency: string,
  sum: number,
  type: string,
  status: string,
  createdAt: Date
  icon?: string
}
