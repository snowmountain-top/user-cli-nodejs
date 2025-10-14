import envUtils from '../../utils/env'
import { camelToKebabCase } from '../../utils/string'

export default abstract class BaseService {
  private isPublicEnv: boolean
  /** URL一级路径 */
  protected abstract prefixUrl: string
  /** 子网域名 */
  protected readonly natDevHost = 'http://qgostaxv.user-service.nmkh74o4.rlwzae9d.com:8090'
  protected readonly natProdHost = 'http://bxbvjnca.user-service.cwl9ok0a.mk2u3r3l.com:8090'
  /** 公网域名 */
  protected readonly publicDevHost = 'https://user-service-dev.wejourney.top'
  protected readonly publicProdHost = 'https://user-service.wejourney.top'

  constructor() {
    /** 如果是云函数环境, 默认走公网访问 */
    this.isPublicEnv = (process.env.CONTAINER_ENV || 'SCF') === 'SCF'
  }

  /** 获取API URL */
  protected getApiUrl(func: Function): string {
    const host = this.isPublicEnv
      ? envUtils.isProduction()
        ? this.publicProdHost
        : this.publicDevHost
      : envUtils.isProduction()
        ? this.natProdHost
        : this.natDevHost
    return `${host}${this.prefixUrl}/${camelToKebabCase(func.name)}`
  }
}