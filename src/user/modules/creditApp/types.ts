import {USER} from "../../../types";
import { LoginType } from 'vitality-meta/enums/user'
export namespace Service {
  export namespace Request {

    import UserBasicInfoDTO = Service.Response.UserBasicInfoDTO;
    import UserExtraInfoDTO = Service.Response.UserExtraInfoDTO;
    export interface CheckoutFirstOrderParam {
      unionId : string
    }
    export interface CreditRecordChangeTitleParam {
      sourceIds: string[]
      // 查需要更改记录
      sourceType: string
      // 更改记录对应的type
      addSourceType: string
      addRecordTitle: string
      addRecordContent: string[]
    }
    export interface AddCreditParam {
      /** 用户id */
      unionId: string
      /** 工作人员id */
      customUnionId?: string
      /** 工作人员手机号 */
      phoneNum?: string
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
      /** 额外信息 */
      extraInfo?: {}

      expireAt?: number

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
      page?: number
      size?: number
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
      page?: number
      size?: number
    }

    export interface GetCreditRecordParam {
      /** unionId */
      unionId?: string
      page?: number
      size?: number
    }
    export interface GetCreditRecordBySourceIdParam {
      sourceId?: string
    }
    export interface GetTokenBeforeUserLoginParam {
      jsCode?: string;
    }
    export interface getUserDetailForWebParam {
      unionId: string;
    }
    export interface getCreditRecordByStatusParam {
      /** unionId */
      unionId?: string
      page?: number
      size?: number
      status: USER.Constants.CreditRecordStatusEnum
    }


    export interface GetMoneyDeductionFromCoinParam {
      /** unionId */
      unionId: string
    }

    export interface BindUserMobileParam {
      cloudID: string,
      data: {
        countryCode: string,
        phoneNumber: string,
        purePhoneNumber: string,
        watermark: {
          appid: string,
          timestamp: number
        }
      }
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
      types?:string[]
      ids?:string[]
    }

    export interface sendWillExpireCreditSmsParam {
      remainCredit?: number
      ownerId?:string
      mobile?: string
    }

    export interface IBusinessDevelopmentStaff {
      id?:number
      unionId?: string
      name?: string
      qyUserId?: string
      isOuter?: boolean
      isValid?: boolean
      _createTime?: number
      _updateTime?: number
      type?:string
    }
    export interface IUserBirthdayWeb {
      unionId:string
      birthday:number
    }

    export interface IUpdateUserSpecialIdentity {
      unionId:string
      idCard:string
    }
    export interface IUserVolunteerDetail {
      unionId:string
    }
    export interface IUserIntegralDetail {
      unionId:string
    }


    export interface IBdInfoByUnionIdAndTypeDTO{
      type?: string
      unionId?: string
    }


    export interface IUpdateBd {
      unionId:string
      data:IBusinessDevelopmentStaff
    }

    export interface getBdVipGroupIdParam {
      unionId?: string
    }
    export interface addButlerParam {
      mobile?: string
      qyUserId?:string
    }
    export interface getBdInfoByUnionIdAndTypeParam {
      unionId?: string
      type?:string
    }
    export interface queryButlersParam {
      pageIndex?: number
      pageSize?:number
      name?:string
      mobile?:string
      qyUserId?:string
      types?:string[]
    }

    export interface GetByUnionIdParam {
      unionId?: string
    }
    export interface QueryUserTouristInfoByIdsParam {
      ids?: string[]
    }
    export interface UpdateCommonlyTouristParam {
      gender? : number
      id? : string
      idCard? : string
      isSelf? : boolean
      mobile? : string
      name? : string
      unionId? : string
      cardType: string
      passportInfo: {
        region: string
        birthday: number
        validityDate: number
        imageUrl: string
      }
    }

    export interface CreateCommonlyTouristParam {
      gender? : number
      id? : string
      idCard? : string
      isSelf? : boolean
      mobile? : string
      name? : string
      unionId? : string
      cardType: string
      passportInfo: {
        region: string
        birthday: number
        validityDate: number
        imageUrl: string
      }
    }

    export interface QueryUserByOpenIdParam {
      openId: string
    }

    export interface mgetUserIdentityParam {
      unionId: string
    }

    export interface GetFollowButlerForMemberParam {
      unionId : string
    }

    export interface UserInfoRecognitionParam {
      imageUrl? : string
      user?: string
    }
    export interface UserInfoRecognitionByGptParam {
      ocrContent?: string
      user?: string
    }
    export interface QueryUserRiskRankParam {
      appId?: string
      openId?: string
      clientIp?: string
    }

    export interface QueryCreditRecordByUnionIdForWebParam {
      unionId : string
      pageIndex : number
      pageSize : number
    }

    export interface QueryCreditAccountRecordByStatusParam {
      ownerId : string
      status : string;
    }

    export interface QuerySumCreditWillExpireParam {
      ownerId?: string
      startTime?: number
      expireTime?: number
    }

    export interface GetUserInfoByUnionIdParam {
      unionId : string
    }

    export interface IGetUserSpecialIdentityByUnionIdParam {
      unionId : string[]
      type : string
    }


    export interface BindUserMobileDirectlyParam {
      unionId : string
      mobile: string
    }

    export interface GetCreditReduceByUnionIdParam {
      unionId : string
    }

    export interface GetCustomCreditRecordByUnionIdParam {
      unionId : string
    }

    export interface GetMobileFeeCreditRecordFor30DaysParam {
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
      avatar?: string,
      jsCode?: string
    }

    export interface GetTouristInfoByIdCardParam {
      idCardImageUrl?: string,
    }

    export interface IIsUserMobileCorrect {
      unionId: string
    }

    export interface insertAppUserOperateRecordParam {
      pagePath: string
      enterTime: number
      exitTime: number
      duration: number
      unionId: string
      pageParams: {}
      type: string
    }
  }

  export namespace Response {
    export interface GrantPrepareCreditRes {
      credit: number
      reduce: number
      reason: string[]
    }
    export interface getCreditRecordByStatusVO {
      title: string
      content: string
      credit: number
      time: string
      isWxShopOrder: boolean
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
      isNew: boolean
      cardType: string
      passportInfo: {
        region: string
        birthday: number
        validityDate: number
        imageUrl: string
      }
    }

    export interface UserInfoRecognitionRes {
      type: string,
      data: {
        name: string,
        idCard: string,
        mobile: string,
      }[]
    }

    export interface GetUnionIdByCloudContextRes {
      unionId: string
    }
    export interface queryUserRiskRankRes {
      label_list: string[],
      risk_rank: number,
      unoin_id: string,
    }


    export interface QueryCreditRecordByUnionIdForWebRes {
      _id: string
      _createTime: number
      _updateTime : number
      basicInfo: {
        content: string[]
        credit : number
        operation : string
        ownerId : string
        sourceId : string
        sourceType : string
        status : string
        title : string
        expireTime : number
      }

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
        bdInfos: {
          name?: string
          unionId?: string
          qyUserId?: string
          isOuter?: boolean
          isValid?: boolean
          BU?: string
          vipGroupId?: string
          type?: string
        }
      }[]
      userCount: number
    }

    export interface getUserDetailForWebVO {
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
      bdInfos: {
        name?: string
        unionId?: string
        qyUserId?: string
        isOuter?: boolean
        isValid?: boolean
        BU?: string
        vipGroupId?: string
        type?: string
      }
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
      type?:string
    }

    export interface QueryButlersResDTO{
      total: number
      list: {
        id : string
        unionId : string
        name : string
        type : string
        qyUserId : string
        isOuter : boolean
        _createTime : number
        _updateTime : number
        isValid : boolean
        BU : string
        vipGroupId : string
        mobile : string
      }[]
    }

    export interface IconDetail {
      partyIcon: boolean;           // 聚会大使
      photographyIcon: boolean;     // 摄影专家
      teamIcon: boolean;            // 带团达人
      videoExpertsIcon: boolean;    // 短视频高手
      assistantIcon: boolean;       // 助教能手
      liveBroadcastIcon: boolean;   // 直播大咖
      starIcon: boolean;            // 出镜明星
      dandelionIcon: boolean;       // 超级蒲公英
  }
  export interface DetailList {
    desc: string;       // 描述
    integral: number;   // 星值
}

export interface UserVolunteerIntegralDetail {
    title: string;          // 标题
    integralSum: number;    // 总星值
    harvestIntegral: number; // 收获星值
    time: number;           // 时间
    detailList: DetailList[]; // 明细列表
}
  export interface UserVolunteerDetail {
      integralSum: number;          // 总星值
      joinTime: number;             // 加入时间
      iconDetail: IconDetail;
      partyDay?: number;            // 一日聚驻店天数
      shareNum?: number;            // 分享会驻场次数
      hotelNum?: number;            // 聚会酒店驻店次数
      tourNum?: number;             // 旅游出团次数
      memberNum?: number;           // 会员数
      partyOrderNum?: number;       // 一日聚单数
      hotelOrderNum?: number;       // 聚会酒店单数
      tourPeopleNum?: number;       // 旅游人次
      unionId?: string;
      name?: string;
  }
    export interface bdVipGroupIdDTO{
      name?:string
      avatar:string
      bdName?: string
      unionId?: string
      vipGroupId?: string
      type?:string
    }
    export interface FollowButlerForMemberDTO{
      name?:string
      avatar:string
      vipGroupId?: string
      unionId?: string
      type?: string
    }
    export interface UserInfoDTO{
      userInfoDTO?: UserBasicInfoDTO
      userExtraInfoDTO?: UserExtraInfoDTO
    }

    export interface UpdateUserResDTO{
      user: UserResDTO
    }

    export interface UserResDTO{
      _id?: string,
      unionId?: string,
      avatar?: string,
      nickName?: string,
      mobile?: string,
      realName?: string,
      isDefault?: boolean,
      riskRankLevel?: number,
      type?: string,
      _createTime?: number,
      _updateTime?: number,
      birthday?: number,
      wxIdentityMap?: {},
      growthInfo?: {
        signInCoiledNum?: number
      },
      creditInfo?: {
        reduce?: number
      },
      certification?: {} | [],
      tourismInfo?: {
        commonlyTourists?: CommonlyTouristDTO[]
      },
      role?: string,
    }

    export interface mgetUserIdentityRes{
      isUserMember: boolean
      isStaff: boolean
      isVolunteer: boolean
      isSuperMember: boolean
    }


    export interface UserSpecialIdentityDTO{
      id?: string,
      image?: string,
      unionId?: string,
      name?: string,
      joinTime?: number,
      status?: string,
      idCard?: string,
      outTime?: number,
      type?: string,
      createdAt?: number,
      updatedAt?: number,
    }

    export interface UserLoginResDTO{
      user: {
        isVolunteer?:boolean,
        _id?: string,
        unionId?: string,
        avatar?: string,
        nickName?: string,
        mobile?: string,
        realName?: string,
        isDefault?: boolean,
        riskRankLevel?: number,
        type?: string,
        _createTime?: number,
        _updateTime?: number,
        birthday?: number,
        wxIdentityMap?: {},
        growthInfo?: {
          signInCoiledNum?: number
        },
        creditInfo?: {
          reduce?: number
        },
        certification?: {} | [],
        tourismInfo?: {
          commonlyTourists?: CommonlyTouristDTO[]
        },
      },
      isNew: boolean
      token: string
    }

    export interface CreditRecordOldStructureResDTO{
      _id?: string
      _createTime?: number
      _updateTime?: number
      basicInfo?: {
        content?: string[]
        credit?: number
        operation?: string
        ownerId?: string
        sourceId?: string
        sourceType?: string
        status?: string
        title?: string
        expireTime?: number
      },
    }

    export interface GetTokenBeforeUserLoginRes{
      token?: string
      unionId?: string
    }

    export interface UserExtraInfoDTO{
      unionId?: string
      wxIdentityMap?: {}
      certification?: {}
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

    export interface GetMobileFeeCreditRecordFor30DaysRes {
      _id: string
      _createTime: number
      _updateTime: number
      basicInfo: {
        content: string[]
        credit: number
        operation: string
        ownerId: string
        sourceId: string
        sourceType: string
        status: string
        title: string
        expireTime: number
      }
    }

    export interface IIsUserMobileCorrect {
      isCorrect: boolean
    }

  }

  export interface CreditController {
    isFirstOrder(request:Service.Request.CheckoutFirstOrderParam):Promise<boolean>
    /**
     * 替换流水描述 软删+新增
     * @path /credit/batch-update-credit-record-title
     */
    batchUpdateCreditRecordTitle(request:Service.Request.CreditRecordChangeTitleParam):Promise<void>
    /**
     * 增加金币
     * @path /credit/add-credit
     */
    addCredit(request:Service.Request.AddCreditParam): Promise<string>
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

    /**
     * 查询剩余积分
     * @path /credit/get-credit-reduce-by-union-id
     */
    getCreditReduceByUnionId(request:Service.Request.GetCreditReduceByUnionIdParam): Promise<number>

    /**
     * 查询客服发放积分记录积分
     * @path /credit/getCustomCreditRecordByUnionId
     */
    getCustomCreditRecordByUnionId(request:Service.Request.GetCreditReduceByUnionIdParam): Promise<any>
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
    updateUserInfo(request:Service.Request.UpdateUserParam): Promise<Service.Response.UpdateUserResDTO>

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

    queryUserByOpenId(request:Service.Request.QueryUserByOpenIdParam): Promise<Service.Response.UserResDTO>

    mgetUserIdentity(request:Service.Request.mgetUserIdentityParam): Promise<Service.Response.mgetUserIdentityRes>

    createUserTourists(request:Service.Request.CreateCommonlyTouristParam): Promise<Service.Response.CommonlyTouristDTO[]>

    userInfoRecognition(request:Service.Request.UserInfoRecognitionParam): Promise<Service.Response.UserInfoRecognitionRes>

    userInfoRecognitionByGpt(request:Service.Request.UserInfoRecognitionByGptParam): Promise<Service.Response.UserInfoRecognitionRes>

    getUnionIdByCloudContext(): Promise<Service.Response.GetUnionIdByCloudContextRes>

    /**
     * 微信接口查询用户风险等级
     * @path /user/query-user-risk-rank
     */
    queryUserRiskRank(request:Service.Request.QueryUserRiskRankParam): Promise<Service.Response.queryUserRiskRankRes>
  }

  export interface UserBdController {
    /**
     * 查询用户BD列表
     * @path /user/list-user-basic-info
     */
    queryBdRelationInfo(request:Service.Request.QueryBDRelationInfoParam): Promise<Service.Response.UserBDRelationDTO[]>


    sendWillExpireCreditSms(request:Service.Request.sendWillExpireCreditSmsParam):Promise<boolean>

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
  export interface UserJobController {
    jobUpdateCreditIncomeSubMsg(): Promise<void>

    jobSendWillExpireCreditSms(): Promise<void>
  }

  export interface FacadeController {
    listUserIntegralDetail(request:Service.Request.IUserIntegralDetail): Promise<Service.Response.UserVolunteerIntegralDetail[]>

    getUserVolunteerDetail(request:Service.Request.IUserVolunteerDetail): Promise<Service.Response.UserVolunteerDetail>

    updateUserBirthdayWeb(request:Service.Request.IUserBirthdayWeb): Promise<void>
    /**
     * 新增bd信息
     * @param request
     */
    addBd(request:Service.Request.IBusinessDevelopmentStaff): Promise<void>
    queryAllValidBd(): Promise<Service.Response.UserBDRelationDTO[]>
    /**
     * 修改bd信息
     * @param request
     */
    updateBd(request:Service.Request.IUpdateBd): Promise<void>
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
    bindUserMobile(request:Service.Request.BindUserMobileParam): Promise<Service.Response.UserResDTO>

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
    userLogin(request:Service.Request.UserLoginParam): Promise<Service.Response.UserLoginResDTO>

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

    queryUserByOpenId(request: Service.Request.QueryUserByOpenIdParam): Promise<Service.Response.UserResDTO>


    getFollowButlerForMember(request:Service.Request.GetFollowButlerForMemberParam): Promise<Service.Response.FollowButlerForMemberDTO>

    addButler(param:Service.Request.addButlerParam): Promise<void>

    getBdInfoByUnionIdAndType(param:Service.Request.getBdInfoByUnionIdAndTypeParam): Promise<Service.Response.UserBDRelationDTO>

    queryButlers(param:Service.Request.queryButlersParam): Promise<Service.Response.QueryButlersResDTO>

    /**
     * 更新出行人信息
     * @path /facade/update-user-tourists-info
     */
    updateUserTouristsInfo(request:Service.Request.UpdateCommonlyTouristParam): Promise<Service.Response.CommonlyTouristDTO[]>


    queryCreditRecordByUnionIdForWeb(request:Service.Request.QueryCreditRecordByUnionIdForWebParam): Promise<Service.Response.QueryCreditRecordByUnionIdForWebRes[]>


    queryCreditAccountRecordByStatus(request:Service.Request.QueryCreditAccountRecordByStatusParam): Promise<Service.Response.QueryCreditRecordByUnionIdForWebRes[]>

    querySumCreditWillExpire(request:Service.Request.QuerySumCreditWillExpireParam): Promise<number>

    getUserInfoByUnionId(request:Service.Request.GetUserInfoByUnionIdParam): Promise<Service.Response.UserResDTO>

    updateUserSpecialIdentity(request: Service.Request.IUpdateUserSpecialIdentity): Promise<void>

    getUserSpecialIdentityByUnionId(request:Service.Request.IGetUserSpecialIdentityByUnionIdParam): Promise<Service.Response.UserSpecialIdentityDTO[]>

    bindUserMobileDirectly(request:Service.Request.BindUserMobileDirectlyParam):Promise<Service.Response.UserResDTO>

    getCreditReduceByUnionId(request:Service.Request.GetCreditReduceByUnionIdParam): Promise<number>

    getMobileFeeCreditRecordFor30Days(request:Service.Request.GetMobileFeeCreditRecordFor30DaysParam): Promise<Service.Response.CreditRecordOldStructureResDTO[]>

    getCreditRecordBySourceId(request:Service.Request.GetCreditRecordBySourceIdParam): Promise<Service.Response.CreditRecordOldStructureResDTO>

    getTokenBeforeUserLogin(request:Service.Request.GetTokenBeforeUserLoginParam): Promise<Service.Response.GetTokenBeforeUserLoginRes>

    /**
     * web端获取用户详情
     * @param request
     */
    getUserDetailForWeb(request:Service.Request.getUserDetailForWebParam): Promise<Service.Response.getUserDetailForWebVO>
    /**
     * 根据status获取用户积分记录
     * @param request
     */
    getCreditRecordByStatus(request:Service.Request.getCreditRecordByStatusParam): Promise<Service.Response.getCreditRecordByStatusVO[]>
    /**
     * 查询用户手机号是否正确
     */
    isUserMobileCorrect(request: Service.Request.IIsUserMobileCorrect): Promise<Service.Response.IIsUserMobileCorrect>

    /**
     * 用户小程序打点
     */
    insertAppUserOperateRecord(request: Service.Request.insertAppUserOperateRecordParam[]): Promise<void>

  }

}
