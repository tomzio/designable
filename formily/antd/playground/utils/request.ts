import axios, { AxiosRequestConfig } from 'axios'

export interface ServerResponseType<T = any> {
  info: any
  error: any
  data: T
  [x: string]: any
}

const instance = axios.create({
  baseURL: '/api',
})

instance.interceptors.response.use((response) => {
  const { data } = response
  data.code === 0
    ? console.log(data.message) // 成功消息提示
    : console.error(data.message) // 失败消息提示
  return data
})

export const request = async <T = any>(config: AxiosRequestConfig): Promise<ServerResponseType<T>> => {
  try {
    const sessionToken = sessionStorage.getItem('sessionToken')
    const { data } = await instance.request<ServerResponseType<T>>({ ...config, headers: { sessionToken } })
    data.code === 0
      ? console.log(data.message) // 成功消息提示
      : console.error(data.message) // 失败消息提示
    return data
  } catch (err: any) {
    const message = err.message || '请求失败'
    console.error(message) // 失败消息提示
    return {
      info: -1,
      error: err,
      data: null as any,
    }
  }
}

export const get = <T = any>(url: string, config: AxiosRequestConfig): Promise<ServerResponseType<T>> => {
  return request({ ...config, url, method: 'GET' })
}
export const post = <T = any>(url: string, config: AxiosRequestConfig): Promise<ServerResponseType<T>> => {
  return request({ ...config, url, method: 'POST' })
}
export const put = <T = any>(url: string, config: AxiosRequestConfig): Promise<ServerResponseType<T>> => {
  return request({ ...config, url, method: 'PATCH' })
}

export default request
