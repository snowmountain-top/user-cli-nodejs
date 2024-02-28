import {USER} from "../../../types";
import { LoginType } from 'vitality-meta/enums/user'
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
      unionId?: string
      sourceType?: string
      sourceId?: string
      credit?: number
      title?: string
      content?: string[]
      operatorId?: string
    }

    export interface GetCreditReduceParam {
      /** 用户id */
      unionIds: string[]
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
      /** 来源ids*/
      sourceIds?: string[]
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
      type: string
    }

    export interface UpdateUserParam {
      userInfo?: UserBasicInfoDTO
      userExtraInfo?: UserExtraInfoDTO
    }

    export interface ListUserBasicInfoParam {
      id?: string
      unionIds?: string[]
      avatar?: string
      nickName?: string
      mobile?: string
      realName?: string
      isDefault?: boolean
      riskRankLevel?: number
      type?: string
      birthday?: number
    }

    export interface QueryBDRelationInfoParam {
      name?: string
      nameLike?:string
      unionIds?: string[]
      qyUserIds?: string[]
      isOuter?: boolean
      isValid?: boolean
      BUs?: string[]
      vipGroupIds?: string[]
    }

    export interface IBusinessDevelopmentStaff {
      unionId?: string
      name?: string
      qyUserId?: string
      isOuter?: boolean
      isValid?: boolean
      _createTime?: number
      _updateTime?: number
    }

    export interface getBdVipGroupIdParam {
      unionId?: string
    }


    export interface GetByUnionIdParam {
      unionId?: string
    }
    export interface QueryUserTouristInfoByIdsParam {
      ids?: string[]
    }
    export interface UpdateCommonlyTouristParam {
      gender : number
      id : string
      idCard : string
      isSelf : boolean
      mobile : string
      name : string
      unionId : string
    }

    export interface DeleteCommonlyTouristParam {
      touristId : string
      unionId : string
    }

    export interface QueryUserListForWebParam {
      limit : number
      mobile : string
      nickName: string
      page : number
      queryBD : boolean
      queryMember : boolean
      touristMobile : string
      type : string
      unionId : string
    }


    export interface UserLoginParam {
      unionId?: string,
      openId?: string,
      fromAppId?: string,
      registerType?: string,
      scene?: string,
      loginType?: string,
      nickName?: string,
      code?: string,
      avatar?: string
    }

    export interface GetTouristInfoByIdCardParam {
      idCardImageUrl?: string,
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

    export interface QueryUserListForWebVO {
      userList: {
        _id : number
        unionId : string
        avatar : string
        nickName : string
        mobile : string
        realName : string
        isDefault : number
        riskRankLevel : number
        type : string
        _createTime : number
        _updateTime : number
        birthday : number
        isUserMember : boolean
        userMemberValid : string
        credit : number
        bdInfos: any
      }[]
      userCount: number
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
    export interface UserBDRelationDTO{
      name?: string
      unionId?: string
      qyUserId?: string
      isOuter?: boolean
      isValid?: boolean
      BU?: string
      vipGroupId?: string
      _createTime?: number
      _updateTime?: number
    }

    export interface bdVipGroupIdDTO{
      name?:string
      avatar:string
      bdName?: string
      unionId?: string
      vipGroupId?: string
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
    export interface GetTouristInfoByIdCardRes {
      idCard?: string,
      mobile?: string,
      name?: string,
      gender?: number,
      addr: string,
      nationality: string,
      birth: string,
      type: string,
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
    getCreditReduce(request:Service.Request.GetCreditReduceParam): Promise<Map<string, number>>
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
     * 更新用户
     * @path /user/update-user-info
     */
    updateUserInfo(request:Service.Request.UpdateUserParam): Promise<boolean>

    /**
     * 查询用户共比邻小程序openId
     * @path /user/get-be-link-open-id-by-union-id
     */
    getBeLinkOpenIdByUnionId(request:Service.Request.GetByUnionIdParam): Promise<string>

    /**
     * 查询用户出行人--ids
     * @path /user/query-user-tourist-info
     */
    queryUserTouristInfoByIds(request:Service.Request.QueryUserTouristInfoByIdsParam): Promise<Service.Response.CommonlyTouristDTO[]>

    /**
     * 更新出行人信息
     * @path /user/update-user-tourists-info
     */
    updateUserTouristsInfo(request:Service.Request.UpdateCommonlyTouristParam): Promise<Service.Response.CommonlyTouristDTO[]>

    queryUserByOpenId(openId: string): Promise<any>
  }

  export interface UserBdController {
    /**
     * 查询用户BD列表
     * @path /user/list-user-basic-info
     */
    queryBdRelationInfo(request:Service.Request.QueryBDRelationInfoParam): Promise<Service.Response.UserBDRelationDTO[]>


    sendWillExpireCreditSms(request:any):Promise<boolean>

    /**
     * 新增bd信息
     * @param request
     */
    addBdBasicInfo(request:Service.Request.IBusinessDevelopmentStaff): Promise<void>

    /**
     * 修改bd信息
     * @param request
     */
    updateBdBasicInfo(request:Service.Request.IBusinessDevelopmentStaff): Promise<void>

    /**
     * 获取bd信息
     * @param request
     */
    getBdVipGroupId(request:Service.Request.getBdVipGroupIdParam): Promise<Service.Response.bdVipGroupIdDTO>
  }
  export interface FacadeController {
    /**
     * 新增bd信息
     * @param request
     */
    addBd(request:Service.Request.IBusinessDevelopmentStaff): Promise<void>

    /**
     * 修改bd信息
     * @param request
     */
    updateBd(request:Service.Request.IBusinessDevelopmentStaff): Promise<void>
    /**
     * 获取bd信息
     * @param request
     */
    getBdVipGroupId(request:Service.Request.getBdVipGroupIdParam): Promise<Service.Response.bdVipGroupIdDTO>
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

    /**
     * 用户登录
     * @path /facade/user-login
     */
    userLogin(request:Service.Request.UserLoginParam): Promise<any>

    /**
     * 通过身份证获取出行人信息 身份证识别
     * @path /facade/get-tourist-info-by-id-card
     */
    getTouristInfoByIdCard(request:Service.Request.GetTouristInfoByIdCardParam): Promise<Service.Response.GetTouristInfoByIdCardRes>


    /**
     * 删除出行人信息
     * @path /facade/delete-user-commonly-tourist
     */
    deleteUserCommonlyTourist(request:Service.Request.DeleteCommonlyTouristParam): Promise<Service.Response.CommonlyTouristDTO[]>

    /**
     * web查询用户列表
     * @path /facade/query-user-list-for-web
     */
    queryUserListForWeb(request:Service.Request.QueryUserListForWebParam): Promise<Service.Response.QueryUserListForWebVO>
    queryUserByOpenId(openId: string): Promise<any>
  }

}
