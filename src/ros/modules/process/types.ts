import { ROS } from '../../../types'
import * as RosConstants from 'vitality-meta/enums/ros'
export namespace ReverseOrderProcess {
  export namespace Response {
    export interface IOrderCanBeReverseMsg {
      canRefunded: boolean
      errMsg?: string
    }
  }
  export namespace Request {
    export enum RefundOrderStatus {
      INIT = 'INIT',
      FIRST_TRAILED = 'FIRST_TRAILED',
      PENDING = 'PENDING',
      CANCELED = 'CANCELED',
      REJECTED = 'REJECTED',
      SUCCEED = 'SUCCEED'
    }

    export enum RefundResourceTypeEnum {
      CREDIT = 'CREDIT',
      SKU = 'SKU',
      PROMOTION_COUPON = 'PROMOTION_COUPON',
      MONEY = 'MONEY',
      ROOM_STOCK = 'ROOM_STOCK'
    }

    export interface RefundResource {
      bizId?: string
      skuId?: string
      refundAt?: number
      refunded: boolean
      type: RefundResourceTypeEnum
      value?: number
      extraInfo?: { [key: string]: any }
      // 历史数据遗留字段，现已删除
      reduce?: number
    }
    export interface RefundOrderEntity {
      _id?: string
      unionId: string
      tradeOrderId: string
      status: RefundOrderStatus
      money?: number
      isAllResourceRefunded?: boolean
      reasonType?: string
      reasonDetail?: string
      mediaList?: string[]
      chargeDesc?: string
      rejectedReason?: string
      canceledTourists?: string[]
      otherResources?: RefundResource[] | null
      refundMoneyAt?: number
      itemId?: string
      _createTime?: number
      _updateTime?: number
    }
    export interface RefundOrderOperateRecordEntity {
      _id?: string
      tradeOrderId: string
      refundOrderId: string
      operatorRole?: string
      operator?: string
      fromStatus: RefundOrderStatus | null
      toStatus: RefundOrderStatus
      _createTime?: number
      reason: string
    }
    export interface ISyncReverseOrder {
      refundOrder: RefundOrderEntity,
      recordEntity: RefundOrderOperateRecordEntity,
      categoryOne?: string,
      categoryTwo?: string
    }


    export interface IIsOrderCanBeReverse {
      /**
        * 正向订单ID
        */
      positiveOrderId: string
      unionId: string
      /** 操作人角色 */
      operatorRole?: ROS.Constants.OperatorRoleEnum
    }

    export interface IApply {
      /** 正向订单ID */
      positiveOrderId: string
      /** 退款金额 */
      money?: number
      /** 退定出行人 */
      tourists?: string[]
      /** 退还商品SKU列表 */
      skus?: { skuId: string, num: number }[]
      /** 退单原因 */
      reasonType: RosConstants.ReasonTypeEnum
      /** 退单原因描述 */
      reasonDetail?: string
      /** 手续费描述 */
      chargeDesc?: string
      /** 附件URL列表 */
      attachments?: string[]
      /** 操作人姓名 */
      operatorName: string
      /** 操作人角色 */
      operatorRole: ROS.Constants.OperatorRoleEnum
      /** 需要还的房间数量 */
      roomInfo?: {
        doubleBed: number
        singleBed: number
      }
    }

    export interface IModifyInfo {
      /** 逆向单ID */
      reverseOrderId: string
      /** 退还商品SKU列表 */
      skus?: { skuId: string, num: number }[]
      /** 退单原因 */
      reasonType: RosConstants.ReasonTypeEnum
      /** 退单原因描述 */
      reasonDetail?: string
      /** 附件URL列表 */
      attachments?: string[]
      tourists?: string[]
    }

    export interface IFirstAuditPass {
      /** 逆向单ID */
      reverseOrderId: string
      /** 操作人角色 */
      operatorRole: ROS.Constants.OperatorRoleEnum
      /** 操作人名称 */
      operatorName: string
      /** 退款金额 */
      refundMoney?: number
      /** 手续费说明 */
      chargeDesc?: string
      /** 退单原因类型 */
      reasonType?: RosConstants.ReasonTypeEnum
      /** 需要还的房间数量 */
      roomInfo?: {
        doubleBed: number
        singleBed: number
      }
    }

    export interface ISecondAuditPass {
      /** 逆向订单ID */
      reverseOrderId: string
      /** 操作人名称 */
      operatorName: string
      /** 操作人角色 */
      operatorRole: ROS.Constants.OperatorRoleEnum
      /** 退款平台 */
      refundPlatform?: 'BUS' | 'PLATFORM' | 'MERCHANT'
    }

    export interface IAuditReject {
      /** 逆向单ID */
      reverseOrderId: string
      /** 拒绝原因 */
      rejectedReason: string
      /** 操作人角色 */
      operatorRole: ROS.Constants.OperatorRoleEnum
      /** 操作人名称 */
      operatorName: string
    }
    export interface IReverseReject {
      /** 逆向单ID */
      reverseOrderId: string
      /** 驳回原因 */
      rejectedReason: string
      /** 操作人角色 */
      operatorRole: ROS.Constants.OperatorRoleEnum
      /** 操作人名称 */
      operatorName: string
    }
    export interface ICancel {
      /** 逆向单ID */
      reverseOrderId: string
      /** 操作人角色 */
      operatorRole: ROS.Constants.OperatorRoleEnum
      /** 操作人名称 */
      operatorName: string
    }

    export interface IDoRefund {
      /** 逆向单ID */
      reverseOrderId: string
    }

  }

  /**
   * 逆向流程服务
   */
  export interface IReverseOrderProcessController {

    /**
     * 查询正向订单是否可以发起逆向流程(带有ErrMsg)
     */
    isOrderCanBeReverseMsg(request: Request.IIsOrderCanBeReverse): Promise<Response.IOrderCanBeReverseMsg>
    /**
     * 查询正向订单是否可以发起逆向流程
     */
    isOrderCanBeReverse(request: Request.IIsOrderCanBeReverse): Promise<boolean>

    /**
     * 发起逆向申请
     */
    apply(request: Request.IApply): Promise<void>

    /**
     * 修改逆向申请信息
     */
    modifyInfo(request: Request.IModifyInfo): Promise<void>

    /**
     * 一审审核通过
     */
    firstAuditPass(request: Request.IFirstAuditPass): Promise<void>

    /**
     * 二审审核通过
     */
    secondAuditPass(request: Request.ISecondAuditPass): Promise<void>

    /**
     * 审核不通过
     */
    auditReject(request: Request.IAuditReject): Promise<void>

    /**
     * 撤销申请
     */
    cancel(request: Request.ICancel): Promise<void>

    /**
     * 执行资源退还动作
     */
    doRefund(request: Request.IDoRefund): Promise<void>

    /**
     * 旧转新
     * @param request
     */
    syncReverseOrder(request: ReverseOrderProcess.Request.ISyncReverseOrder): Promise<string>
  }
}