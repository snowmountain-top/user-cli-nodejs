import { ROS } from './types'
import rosProcessService from './ros/modules/process/service'
import rosQueryService from './ros/modules/query/service'
import rosJobService from './ros/modules/job/service'
import BizError from './errors/BizError'

/** 业务模块 */
export {
  rosProcessService,
  rosQueryService,
  rosJobService,
  /** 错误类 */
  BizError

}

/** 枚举类 */
export declare var RosConstants: typeof ROS.Constants;
