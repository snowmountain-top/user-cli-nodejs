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

    export interface GrantPrepareCreditParam {
      /** 来源id */
      sourceId: string
    }
  }

  export namespace Response {
    export interface GrantPrepareCreditRes {
      credit: number
      reduce: number
      reason: string[]
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
    /**
     * 发放预发放的积分
     * @path /credit/grant-prepare-credit
     */
    grantPrepareCredit(request:Service.Request.GrantPrepareCreditParam): Promise<Service.Response.GrantPrepareCreditRes>

  }
}
