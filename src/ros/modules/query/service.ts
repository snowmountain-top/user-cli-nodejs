import BaseService from '../service'
import { callApi } from '../../http'
import { ReverseOrderQuery } from './types'
import { ROS } from '../../../types'

class RosQueryService extends BaseService implements ReverseOrderQuery.IReverseOrderQueryController {

  protected prefixUrl = '/query'

  queryOrders(request: ReverseOrderQuery.Request.IQueryOrdersRequest): Promise<ROS.DTO.IReverseOrderDTO[]> {
    return callApi(this.getApiUrl(this.queryOrders), request)
  }
  queryOrdersCount(request: ReverseOrderQuery.Request.IQueryOrdersCountRequest): Promise<number> {
    return callApi(this.getApiUrl(this.queryOrdersCount), request)
  }
  getOrder(request: ReverseOrderQuery.Request.IGetOrderRequest): Promise<ROS.DTO.IReverseOrderDTO> {
    return callApi(this.getApiUrl(this.getOrder), request)
  }
  batchQueryHasPendingRefundOrder(orderIdList: string[]): Promise<Record<string, boolean>>{
    return callApi(this.getApiUrl(this.batchQueryHasPendingRefundOrder), orderIdList)
  }


}

const rosQueryService = new RosQueryService()

export default rosQueryService
