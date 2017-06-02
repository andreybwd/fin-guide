export interface Budget {
  id: string,
  startDate: Date | string,
  endDate: Date | string,
  status: string,
  sumPlan?: number,
  sumSpent?: number,
  createdAt: Date
}
