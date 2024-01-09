import HttpStatusCode from '@/constants/httpStatusCode.enum'
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { toast } from 'react-toastify'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://js-post-api.herokuapp.com/api',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.instance.interceptors.response.use(
      function (response: AxiosResponse) {
        return response
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast.error(message)
        }
        return Promise.reject(error)
      },
    )
  }
}

const http = new Http().instance
export default http
