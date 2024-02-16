import { tnx } from '@/types/tnx.type'
import http from '@/utils/http'

export const tnxApi = {
  getDetails: (tnxId: string) => http.get<tnx>(`/transaction/${tnxId}`),
}
