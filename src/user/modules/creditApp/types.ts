import {USER} from "../../../types";

export namespace Service {
  export namespace Request {

    export interface AddCreditParam {
      /** 用户id */
      unionId: string
      /** 状态 */
      status: USER.Constants.CreditRecordStatusEnum
      /** 来源类型 */
      sourceType: string
      /** 来源id */
      sourceId: string
      /** 积分数量 */
      credit: number
      /** 标题 */
      title: string
      /** 内容 */
      content: string[]
    }

    export interface DeductCreditParam {
      /** 用户id */
      unionId: string
      /** 来源类型 */
      sourceType: string
      /** 来源id */
      sourceId: string
      /** 积分数量 */
      credit: number
      /** 标题 */
      title: string
      /** 内容 */
      content: string[]
    }

    export interface GetCreditReduceParam {
      /** 用户id */
      unionId: string
    }

    export interface GrantPrepareCreditParam {
      /** 来源id */
      sourceId: string
    }
    export interface CancelPrepareCreditParam {
      /** 来源id */
      sourceId: string
    }
    export interface UpdatePrepareCreditParam {
      /** 来源id */
      sourceId: string
      /** 积分 */
      credit: number
    }
    export interface QueryCreditRecordParam {
      /** unionId */
      unionId: string
      /** 来源类型 */
      sourceType: string
      /** 创建时间开始 */
      createTimeStart: number
      /** 创建时间结束*/
      createTimeEnd: number
    }

    export interface queryCreditAccountPoolParam {
      /** unionId */
      unionId: string
      /** 开始时间 */
      startTime?: string
      /** 过期时间 */
      expireTime?: number
      /** 过期时间开始 */
      expireTimeStart?: number
      /** 过期时间结束 */
      expireTimeEnd?: number
    }
  }

  export namespace Response {
    export interface GrantPrepareCreditRes {
      credit: number
      reduce: number
      reason: string[]
    }
    export interface CreditRecordDTO {
      id:string
      extraInfo: { [key: string]: number }
      content: string[]
      title: string
      credit: number
      sourceId: string
      sourceType: string
      ownerId: string
      status: USER.Constants.CreditRecordStatusEnum
      operation: USER.Constants.OperationEnum
      expireTime: number
      updateTime: number
      createTime: number
    }

    export interface CreditAccountPoolDTO {
      id:string
      isConsumed: boolean
      remainCredit: number
      totalCredit: number
      ownerId: string
      expireTime: number
      updateTime: number
      createTime: number
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
    /**
     * 取消预发放的积分
     * @path /credit/cancel-prepare-credit
     */
    cancelPrepareCredit(request:Service.Request.CancelPrepareCreditParam): Promise<void>

    /**
     * 更新预发放的积分
     * @path /credit/update-prepare-credit
     */
    updatePrepareCredit(request:Service.Request.UpdatePrepareCreditParam): Promise<void>

    /**
     * 查询积分记录
     * @path /credit/query-credit-record
     */
    queryCreditRecord(request:Service.Request.QueryCreditRecordParam): Promise<Service.Response.CreditRecordDTO[]>

    /**
     * 查询积分池
     * @path /credit/query-credit-account-pool
     */
    queryCreditAccountPool(request:Service.Request.queryCreditAccountPoolParam): Promise<Service.Response.CreditAccountPoolDTO[]>
  }
}
