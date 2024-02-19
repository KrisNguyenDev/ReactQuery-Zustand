import { tnxApi } from '@/apis'
import { QueryKeys } from '@/constants/queryKeys'
import { tnx } from '@/types/tnx.type'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

type UseTnxDetailsOptions = Omit<UseQueryOptions<AxiosResponse<tnx>>, 'queryKey' | 'queryFn'>

export const useTnxDetails = (tnxId: string, options?: UseTnxDetailsOptions) => {
  return useQuery({
    ...options,
    queryKey: [QueryKeys.TNX_DETAIL, tnxId],
    queryFn: () => tnxApi.getDetails(tnxId),
    enabled: Boolean(tnxId),
    refetchInterval: (query) => {
      console.log(query)
      const currentStatus = String(query.state.data?.data?.status) || 'pending'
      console.log(currentStatus)
      if (['completed', 'cancelled', 'failed'].includes(currentStatus)) {
        return false
      }
      return 3000
    },
  })
}
