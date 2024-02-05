import envUtils from '../../utils/env'
import { camelToKebabCase } from '../../utils/string'

export default abstract class BaseService {
  private isPublicEnv: boolean
  /** URL一级路径 */
  protected abstract prefixUrl: string
  /** 子网域名 */
  protected readonly natDevHost = 'http://qgostaxv.ros-app.nmkh74o4.rlwzae9d.com:8090'
  protected readonly natProdHost = 'http://bxbvjnca.ros-app.cwl9ok0a.mk2u3r3l.com:8090'
  /** 公网域名 */
  protected readonly publicDevHost = 'https://ros-app-74680-5-1304510571.sh.run.tcloudbase.com'
  protected readonly publicProdHost = 'https://ros-app-60660-10-1304510571.sh.run.tcloudbase.com'

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