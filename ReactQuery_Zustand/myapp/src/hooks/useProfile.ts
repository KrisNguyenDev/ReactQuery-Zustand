import { userApi } from '@/apis/user.api'
import { QueryKeys } from '@/constants/queryKeys'
import { UserProfile } from '@/types/userProfile.type'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

type UseProfileOptions = Omit<UseQueryOptions<AxiosResponse<UserProfile>>, 'queryKey' | 'queryFn'>

export const useProfile = (options?: UseProfileOptions) => {
  return useQuery({
    ...options,
    queryKey: [QueryKeys.USER_DETAILS],
    queryFn: userApi.getProfile,
  })
}
