import { ROS } from '../../../types'

export namespace ReverseOrderQuery {
  export namespace Request {
    export interface IQueryOrdersCountRequest {
      /**
       * 筛选条件
       */
      condition: {
        /**
         * 正向订单ID
         */
        positiveOrderId?: string[]
        /**
 * 逆向订单id
 */
        id?: string[]
        /**
         * 状态
         */
        statusList?: ROS.Constants.RefundOrderStatusEnum[]
        categoryOne?: string[]
        categoryTwo?: string[]
      }
    }
    export interface IQueryOrdersRequest {
      /**
       * 筛选条件
       */
      condition: {
        /**
         * 正向订单ID
         */
        positiveOrderId: string[]
        /**
         * 状态
         */
        statusList?: ROS.Constants.RefundOrderStatusEnum[]
        categoryOne?: string[]
        categoryTwo?: string[]
      }
      /**
       * 排序条件
       */
      sort: {
        /**
         * 创建时间
         */
        createdAt?: 'ASC' | 'DESC'
        /**
         * 更新时间
         */
        updatedAt?: 'ASC' | 'DESC'
      }
      /**
       * 页码. 从0开始, 默认为0
       */
      page?: number

      /**
       * 条数. 默认为10, 最大100
       */
      limit?: number

    }

    export interface IGetOrderRequest {
      /**
       * 逆向单ID
       */
      id: string
    }

  }

  /**
   * 逆向单查询服务
   */
  export interface IReverseOrderQueryController {

    /**
     * 查询逆向单列表
     */
    queryOrders(request: Request.IQueryOrdersRequest): Promise<ROS.DTO.IReverseOrderDTO[]>

    /**
     * 查询逆向单count
     */
    queryOrdersCount(request: Request.IQueryOrdersRequest): Promise<number>

    /**
     * 查询逆向单详情
     */
    getOrder(request: Request.IGetOrderRequest): Promise<ROS.DTO.IReverseOrderDTO>

  }
}