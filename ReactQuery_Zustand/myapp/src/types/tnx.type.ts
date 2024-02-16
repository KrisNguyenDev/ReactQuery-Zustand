export type tnx = {
  id: string
  date: string
  amount: string
  description: string
  sender: string
  receiver: string
  status: 'processing' | 'completed' | 'failed' | 'cancelled' | 'pending'
  createdAt: number
  updatedAt: number
}
