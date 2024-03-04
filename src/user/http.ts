import axios, { AxiosError } from 'axios'
import UserError from '../errors/UserError'
import { v4 as uuidV4 } from 'uuid'
import BizError from '../errors/BizError'
type ResponseData = {
  data: any
  message: string
}

export async function callApi<T extends (args: any) => Promise<any>>(url: string, ...request: Parameters<T>)
  : Promise<Awaited<ReturnType<T>>> {
  const requestId = uuidV4()
  const maxRetries = 3 // 最大重试次数
  let retries = 0
  let errorInfo: any = null

  while (retries < maxRetries) {
    try {
      console.info(`准备发起USER请求[${requestId}]: ${url}, 参数: ${JSON.stringify(request)}`);
      const response = await axios.post(url, request[0], {
        headers: {
          'X-Request-Id': requestId
        },
        timeout: 60000, // 设置超时时间为 60 秒
      });

      const responseData = response.data as ResponseData
      return responseData.data
    } catch (error: any) {
      console.error(`USER请求失败[${requestId}]: ${error.message}`)
      errorInfo = error
      const axiosError = error as AxiosError
      const ErrorClass = axiosError.response
        ? axiosError.response.status === 400
          ? BizError
          : UserError
        : UserError
      if (axiosError.response) {
        const response = axiosError.response
        const data = response.data as ResponseData
        console.error(`USER 异常: ${axiosError.message},requestId: ${requestId}`)
        console.info('响应信息', data.message)
        console.info('响应信息Data', JSON.stringify(data))
        console.error('异常堆栈', JSON.stringify(error.stack))
        if (axiosError.response.status !== 502) {
          throw new ErrorClass(data.message || 'User Error', response.status)
        }
        if (retries === maxRetries) {
          throw new ErrorClass(data.message || 'User Error', response.status)
        }
      }
      console.error(`USER 未知异常: ${axiosError.message}`, error.stack)
      if (retries === maxRetries) {
        throw error
      }
      retries++
      // 进行重试
      await new Promise(resolve => setTimeout(resolve, 1000)) // 延时 1 秒再重试
    }
  }

  // 如果重试次数达到上限，抛出错误
  throw new Error(errorInfo)
}
