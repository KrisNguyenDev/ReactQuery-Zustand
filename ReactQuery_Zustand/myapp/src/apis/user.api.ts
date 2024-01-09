import { UserProfile } from '@/types/userProfile.type'
import http from '@/utils/http'

export const userApi = {
  getProfile: () => http.get<UserProfile>('/public-profile'),
}
