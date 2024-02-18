import {USER} from "../../../types";
import { CreditAccountSourceTypeEnum } from 'vitality-meta/enums/user'

export namespace Service {
  export namespace Request {

    export interface AddCreditParam {
      /** 用户id */
      unionId: string
      /** 状态 */
      status: USER.Constants.CreditRecordStatusEnum
      /** 来源类型 */
      sourceType: typeof CreditAccountSourceTypeEnum
      /** 来源id */
      sourceId: string
      /** 积分数量 */
      credit: number
      /** 标题 */
      title: string
      /** 内容 */
      content: string
    }

    export interface DeductCreditParam {
      /** 用户id */
      unionId: string
      /** 来源类型 */
      sourceType: typeof CreditAccountSourceTypeEnum
      /** 来源id */
      sourceId: string
      /** 积分数量 */
      credit: number
      /** 标题 */
      title: string
      /** 内容 */
      content: string
    }

    export interface GetCreditReduceParam {
      /** 用户id */
      unionId: string
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
    addCredit(request:Service.Request.AddCreditParam): Promise<any>
    /**
     * 扣减金币
     * @path /credit/deduct-credit
     */
    deductCredit(request: Service.Request.DeductCreditParam): Promise<string>
    /**
     * 查询用户当前余额
     * @path /credit/get-credit-reduce
     */
    getCreditReduce(request:Service.Request.GetCreditReduceParam): Promise<number>
  }
}
