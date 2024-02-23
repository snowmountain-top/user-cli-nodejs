import { USER } from './types'
import creditService from './user/modules/creditApp/creditService'
import facadeService from './user/modules/creditApp/facadeService'
import userBdService from './user/modules/creditApp/userBdService'
import userService from './user/modules/creditApp/userService'
import BizError from './errors/BizError'

/** 业务模块 */
export {
  USER,
  creditService,
  facadeService,
  userBdService,
  userService,
  BizError

}

/** 枚举类 */
export declare var UserConstants: typeof USER.Constants;
