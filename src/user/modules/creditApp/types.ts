import * as PosConstants from 'vitality-meta/enums/pos'
import * as DTO from '../../../types'


export namespace Service {
  export namespace Request {

    export interface createOrderInvoice {
      /** 快照:订单ID */
      tradeOrderId?: string
      /** 开票类型 */
      invoiceType?: string
      /** 发票抬头 */
      invoiceHeader?: string
      /** 发票抬头类型 */
      invoiceHeaderType?: string
      /** 税号 */
      taxNumber?: string
      /** address */
      address?: string
      /** 注册电话 */
      mobile?: string
      /** 开户银行 */
      bankBase?: string
      /** 银行账号 */
      bankAccount?: string

      /** 收货地址 */
      receivingExtraInfo?: {
        /** 收货地址 */
        receivingAddress?: string
        /** 收件人 */
        receivingName?: string
        /** 收件电话 */
        receivingMobile?: string
      }
    }

    export interface orderCreate {
      /** 基础信息 */
      basicInfo: {
        /** 用户id */
        unionId: string
        /** openId */
        openId: string
        /** 实际支付 */
        actuallyPaidFee: number
        /** 交易场景 */
        sceneInfo: {
          /** 场景1 */
          scene1: string
          /** 场景2 */
          scene2: string
          /** app场景 */
          appScene: number
        }
        /** 用户订单备注 */
        orderNote?: string
        /** 来源人Id */
        fromUnionId: string
        /** 来源人身份 */
        fromUserRole: string
        /** 主单Id */
        rootOrderId?: string
        /** 联系人信息 */
        contactInfo: {
          /** 联系人姓名 */
          name: string
          /** 联系人手机号 */
          mobile: string
          /** 身份证 */
          idCard?: string
        }
      }
      /** 出行人信息 */
      tourismInfo?: {
        /** 出行人id列表 */
        touristIdList?: string[]
      }
      /** 商品信息 */
      commodityInfo: {
        /** 商品id */
        itemId: string
        /** sku列表 */
        skuList: {
          skuId: string
          quantity: number
        }[]
      }
      /** 优惠信息 */
      promotionInfo: {
        /** 是否使用单品优惠券 */
        useItemCoupon: boolean
        /** 是否使用订单优惠券 */
        useOrderCoupon: boolean
        /** 是否使用会员价 */
        useMemberPrice: boolean
        /** 是否使用积分 */
        useCreditCoin: boolean
      }
      /** 履约信息 */
      fulfillInfo?: {
        /** 房间信息 */
        roomInfo?: {
          /** 单床房 */
          SINGLE_BED: {
            /** 数量 */
            count: number
          },
          /** 双床房 */
          DOUBLE_BED: {
            /** 数量 */
            count: number
          }
        },
        /** 自定义餐食 */
        customMealInfo: string
        /** 权益id */
        rightsIds?: string[]
      }
    }

    export interface thirdOrderInfoConfirmed {
      /** 订单id */
      tradeOrderId: string
      /** 三方订单id */
      thirdOrderId: string
      /** 三方skuId */
      thirdOrderSkuId: string
      /** 操作人 */
      operator: string
      /** 操作人角色 */
      operatorRole: PosConstants.TradeOperatorRoleEnum
    }

    export interface platformReject {
      /** 订单id */
      tradeOrderId: string
      /** 操作人 */
      operator: string
      /** 操作人角色 */
      operatorRole: PosConstants.TradeOperatorRoleEnum
      /** 拒单原因 */
      reason: string
    }

    export interface supplierRejected {
      /** 订单id */
      tradeOrderId: string
      /** 操作人 */
      operator: string
      /** 操作人角色 */
      operatorRole: PosConstants.TradeOperatorRoleEnum
      /** 拒单原因 */
      reason: string
    }

    export interface supplierConfirmed {
      /** 订单id */
      tradeOrderId: string
      /** 操作人 */
      operator: string
      /** 操作人角色 */
      operatorRole: PosConstants.TradeOperatorRoleEnum
    }

    export interface sendOrderPaidNotification {
      /** 订单Id */
      tradeOrderId: string
    }

    export interface submittedToSupplier {
      /** 订单Id */
      tradeOrderId: string
      /** 操作人 */
      operator: string
      /** 操作人角色 */
      operatorRole: PosConstants.TradeOperatorRoleEnum
    }
    export interface orderSettled {
      /** 订单Id */
      tradeOrderId: string
      /** 操作人 */
      operator: 'SYSTEM'
      /** 操作人角色 */
      operatorRole: PosConstants.TradeOperatorRoleEnum
    }

    export interface changeOrderContactInfo {
      /** 联系人姓名 */
      name: string
      /** 联系人身份证号 */
      idCard: string
      /** 联系人手机号 */
      mobile: string
      /** 订单号 */
      tradeOrderId: string
    }

    export interface onRefundTrigger {
      refundOrderId: string
      positiveOrderId: string
    }
  }

  export namespace Response {
    export interface orderCreate {
      /** 订单Id */
      tradeOrderId: string,
      /** 是否是微信渠道交易 */
      isWxChannelTrade: boolean,
      /** 微信支付参数 */
      wxPaymentParam: {
        /** appId */
        appId: string,
        /** 支付时间戳 */
        timeStamp: string,
        /** 随机字符串 */
        nonceStr: string,
        /** 订单详情扩展字符串 */
        package: string,
        /** 签名类型 */
        signType: string,
        /** 支付签名 */
        paySign: string
      }
    }
  }

  export interface CreditController {
    /**
     * 增加金币
     * @path /credit/add-credit
     */
    addCredit(request:any): Promise<any>
    /**
     * 扣减金币
     * @path /credit/deduct-credit
     */
    deductCredit(request: any): Promise<any>
    /**
     * 查询用户当前余额
     * @path /credit/get-credit-reduce
     */
    getCreditReduce(request:any): Promise<any>
  }
}
