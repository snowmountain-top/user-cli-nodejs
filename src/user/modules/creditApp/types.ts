import {USER} from "../../../types";

export namespace Service {
  export namespace Request {

    import UserBasicInfoDTO = Service.Response.UserBasicInfoDTO;
    import UserExtraInfoDTO = Service.Response.UserExtraInfoDTO;

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
      unionId?: string
      /** 来源类型 */
      sourceType?: string
      /** 来源id */
      sourceId?: string
      /** 积分数量 */
      credit?: number
      /** 标题 */
      title?: string
      /** 内容 */
      content?: string[]
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
      unionId?: string
      /** operation */
      operation?: USER.Constants.OperationEnum
      /** 状态 */
      status?: USER.Constants.CreditRecordStatusEnum
      /** 来源类型 */
      sourceType?: string
      /** 创建时间开始 */
      createTimeStart?: number
      /** 创建时间结束*/
      createTimeEnd?: number
    }

    export interface QueryCreditAccountPoolParam {
      /** unionId */
      unionId?: string
      /** 开始时间 */
      startTime?: string
      /** 过期时间 */
      expireTime?: number
      /** 过期时间开始 */
      expireTimeStart?: number
      /** 过期时间结束 */
      expireTimeEnd?: number
    }

    export interface GetCreditRecordParam {
      /** unionId */
      unionId: string
    }

    export interface GetMoneyDeductionFromCoinParam {
      /** unionId */
      unionId: string
    }

    export interface BindUserMobileParam {
      /** phoneNumber */
      phoneNumber: string
    }

    export interface UpdateUserTypeParam {
      /** unionId */
      unionId: string
      data: {
        type: string
      }
    }

    export interface UpdateUserParam {
      userInfo?: UserBasicInfoDTO
      userExtraInfo?: UserExtraInfoDTO
    }

    export interface ListUserBasicInfoParam {
      id?: string
      unionId?: string
      avatar?: string
      nickName?: string
      mobile?: string
      realName?: string
      isDefault?: boolean
      riskRankLevel?: number
      type?: string
      birthday?: number
    }

    export interface GetByUnionIdParam {
      unionId?: string
    }
  }

  export namespace Response {
    export interface GrantPrepareCreditRes {
      credit: number
      reduce: number
      reason: string[]
    }
    export interface CommonlyTouristDTO {
      id: string
      unionId: string
      gender: number
      idCard: string
      isSelf: number
      mobile: string
      name: string
      status: string
      createTime: number
      updateTime: number
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
      id?:string
      isConsumed?: boolean
      remainCredit?: number
      totalCredit?: number
      ownerId?: string
      expireTime?: number
      updateTime?: number
      createTime?: number
    }

    export interface UserBasicInfoDTO{
      id?: string
      unionId?: string
      avatar?: string
      nickName?: string
      mobile?: string
      realName?: string
      isDefault?: boolean
      riskRankLevel?: number
      type?: string
      birthday?: number
      createTime?: number
      updateTime?: number
    }

    export interface UserInfoDTO{
      userInfoDTO?: UserBasicInfoDTO
      userExtraInfoDTO?: UserExtraInfoDTO
    }

    export interface UserExtraInfoDTO{
      unionId?: string
      wxIdentityMap?: any
      certification?: any
      signInCoiledNum?: number
      coinRemain?: number
      createTime?: number
      updateTime?: number
      totalConsumeCnt?: number
      totalConsumeFee?: number
    }

    export interface CreditRecordFacadeDTO {
      income: CreditRecordIncomeDTO[]
      expenditure: CreditRecordExpenditureDTO[]
    }

    export interface CreditRecordIncomeDTO {
      title: string
      content: string
      credit: number
      time: string
    }
    export interface CreditRecordExpenditureDTO {
      title: string
      content: string
      credit: number
      time: string
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
    queryCreditAccountPool(request:Service.Request.QueryCreditAccountPoolParam): Promise<Service.Response.CreditAccountPoolDTO[]>
  }

  export interface UserController {
    /**
     * 查询用户列表
     * @path /user/list-user-basic-info
     */
    listUserBasicInfo(request:Service.Request.ListUserBasicInfoParam): Promise<Service.Response.UserBasicInfoDTO[]>

    /**
     * 查询用户聚合
     * @path /user/get-by-unionId
     */
    getByUnionId(request:Service.Request.GetByUnionIdParam): Promise<Service.Response.UserInfoDTO>

    /**
     * 查询用户共比邻小程序openId
     * @path /user/get-be-link-open-id-by-union-id
     */
    getBeLinkOpenIdByUnionId(request:Service.Request.GetByUnionIdParam): Promise<string>
  }

  export interface FacadeController {
    /**
     * 前端获取用户积分流水
     * @path /facade/get-credit-record
     */
    getCreditRecord(request:Service.Request.GetCreditRecordParam): Promise<Service.Response.CreditRecordFacadeDTO>

    /**
     * 查询金币已抵扣的金额
     * @path /facade/get-money-deduction-from-coin
     */
    getMoneyDeductionFromCoin(request:Service.Request.GetMoneyDeductionFromCoinParam): Promise<number>

    /**
     * 根据用户授权存储用户手机号
     * @path /facade/bind-user-mobile
     */
    bindUserMobile(request:Service.Request.BindUserMobileParam): Promise<void>

    /**
     * 更新用户的员工身份
     * @path /facade/update-user-type
     */
    updateUserType(request:Service.Request.UpdateUserTypeParam): Promise<void>

    /**
     * 查询常用旅客
     * @path /facade/get-commonly-tourist-by-unionId
     */
    getCommonlyTouristByUnionId(request:Service.Request.GetByUnionIdParam): Promise<Service.Response.CommonlyTouristDTO[]>

  }
}
