import { userApi } from '@/apis/user.api'
import { useQuery } from '@tanstack/react-query'

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => userApi.getProfile(),
  })
}
