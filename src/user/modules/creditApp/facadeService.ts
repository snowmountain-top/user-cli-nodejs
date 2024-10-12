import { callApi } from '../../http'
import BaseService from '../service'
import {Service} from "./types";

class FacadeService extends BaseService implements Service.FacadeController {
  getUserSpecialIdentityByUnionId(request: Service.Request.IGetUserSpecialIdentityByUnionIdParam): Promise<Service.Response.UserSpecialIdentityDTO[]> {
    return callApi<Service.FacadeController['getUserSpecialIdentityByUnionId']>(this.getApiUrl(this.getUserSpecialIdentityByUnionId),request)
  }
  listUserIntegralDetail(request:Service.Request.IUserIntegralDetail): Promise<Service.Response.UserVolunteerIntegralDetail[]>{
    return callApi<Service.FacadeController['listUserIntegralDetail']>(this.getApiUrl(this.listUserIntegralDetail),request)
  }
  updateUserBirthdayWeb(request: Service.Request.IUserBirthdayWeb): Promise<void> {
    return callApi<Service.FacadeController['updateUserBirthdayWeb']>(this.getApiUrl(this.updateUserBirthdayWeb),request)
  }
  queryAllValidBd(): Promise<Service.Response.UserBDRelationDTO[]> {
    return callApi<Service.FacadeController['queryAllValidBd']>(this.getApiUrl(this.queryAllValidBd))
  }
  getUserVolunteerDetail(request: Service.Request.IUserBirthdayWeb): Promise<Service.Response.UserVolunteerDetail> {
    return callApi<Service.FacadeController['getUserVolunteerDetail']>(this.getApiUrl(this.getUserVolunteerDetail),request)
  }
  getFollowButlerForMember(request:any): Promise<Service.Response.FollowButlerForMemberDTO> {
    return callApi<Service.FacadeController['getFollowButlerForMember']>(this.getApiUrl(this.getFollowButlerForMember), request)
  }
  addButler(param: Service.Request.addButlerParam): Promise<void> {
    return callApi<Service.FacadeController['addButler']>(this.getApiUrl(this.addButler), param)
  }
  getBdInfoByUnionIdAndType(param: Service.Request.getBdInfoByUnionIdAndTypeParam): Promise<Service.Response.UserBDRelationDTO> {
    return callApi<Service.FacadeController['getBdInfoByUnionIdAndType']>(this.getApiUrl(this.getBdInfoByUnionIdAndType), param)
  }
  queryButlers(param: Service.Request.queryButlersParam): Promise<any> {
    return callApi<Service.FacadeController['queryButlers']>(this.getApiUrl(this.queryButlers), param)
  }
  addBd(request: Service.Request.IBusinessDevelopmentStaff): Promise<void> {
    return callApi<Service.FacadeController['addBd']>(this.getApiUrl(this.addBd), request)
  }
  updateBd(request: Service.Request.IUpdateBd): Promise<void> {
    return callApi<Service.FacadeController['updateBd']>(this.getApiUrl(this.updateBd), request)
  }
  getBdVipGroupId(request: Service.Request.getBdVipGroupIdParam): Promise<Service.Response.bdVipGroupIdDTO> {
    return callApi<Service.FacadeController['getBdVipGroupId']>(this.getApiUrl(this.getBdVipGroupId), request)
  }

  protected prefixUrl: string = '/facade'

  queryUserByOpenId(request: Service.Request.QueryUserByOpenIdParam): Promise<any> {
    return callApi<Service.FacadeController['queryUserByOpenId']>(this.getApiUrl(this.queryUserByOpenId), request)
  }

  updateUserTouristsInfo(request:Service.Request.UpdateCommonlyTouristParam): Promise<Service.Response.CommonlyTouristDTO[]> {
    return callApi<Service.FacadeController['updateUserTouristsInfo']>(this.getApiUrl(this.updateUserTouristsInfo), request)
  }

  queryCreditRecordByUnionIdForWeb(request:Service.Request.QueryCreditRecordByUnionIdForWebParam): Promise<Service.Response.QueryCreditRecordByUnionIdForWebRes[]> {
    return callApi<Service.FacadeController['queryCreditRecordByUnionIdForWeb']>(this.getApiUrl(this.queryCreditRecordByUnionIdForWeb), request)
  }

  queryCreditAccountRecordByStatus(request:Service.Request.QueryCreditAccountRecordByStatusParam): Promise<Service.Response.QueryCreditRecordByUnionIdForWebRes[]> {
    return callApi<Service.FacadeController['queryCreditAccountRecordByStatus']>(this.getApiUrl(this.queryCreditAccountRecordByStatus), request)
  }

  querySumCreditWillExpire(request:Service.Request.QuerySumCreditWillExpireParam): Promise<number> {
    return callApi<Service.FacadeController['querySumCreditWillExpire']>(this.getApiUrl(this.querySumCreditWillExpire), request)
  }

  getUserInfoByUnionId(request:Service.Request.GetUserInfoByUnionIdParam): Promise<any> {
    return callApi<Service.FacadeController['getUserInfoByUnionId']>(this.getApiUrl(this.getUserInfoByUnionId), request)
  }

  bindUserMobileDirectly(request:Service.Request.BindUserMobileDirectlyParam): Promise<any> {
    return callApi<Service.FacadeController['bindUserMobileDirectly']>(this.getApiUrl(this.bindUserMobileDirectly), request)
  }

  getCreditReduceByUnionId(request:Service.Request.GetCreditReduceByUnionIdParam): Promise<number> {
    return callApi<Service.FacadeController['getCreditReduceByUnionId']>(this.getApiUrl(this.getCreditReduceByUnionId), request)
  }

  getMobileFeeCreditRecordFor30Days(request:Service.Request.GetMobileFeeCreditRecordFor30DaysParam): Promise<any> {
    return callApi<Service.FacadeController['getMobileFeeCreditRecordFor30Days']>(this.getApiUrl(this.getMobileFeeCreditRecordFor30Days), request)
  }

  getCreditRecordBySourceId(request:Service.Request.GetCreditRecordBySourceIdParam): Promise<any> {
    return callApi<Service.FacadeController['getCreditRecordBySourceId']>(this.getApiUrl(this.getCreditRecordBySourceId), request)
  }

  getTokenBeforeUserLogin(request:Service.Request.GetTokenBeforeUserLoginParam): Promise<Service.Response.GetTokenBeforeUserLoginRes> {
    return callApi<Service.FacadeController['getTokenBeforeUserLogin']>(this.getApiUrl(this.getTokenBeforeUserLogin), request)
  }

  getUserDetailForWeb(request:Service.Request.getUserDetailForWebParam): Promise<Service.Response.getUserDetailForWebVO> {
    return callApi<Service.FacadeController['getUserDetailForWeb']>(this.getApiUrl(this.getUserDetailForWeb), request)
  }
  getCreditRecordByStatus(request:Service.Request.getCreditRecordByStatusParam): Promise<Service.Response.getCreditRecordByStatusVO[]> {
    return callApi<Service.FacadeController['getCreditRecordByStatus']>(this.getApiUrl(this.getCreditRecordByStatus), request)
  }

  getCreditRecord(request:Service.Request.GetCreditRecordParam): Promise<Service.Response.CreditRecordFacadeDTO> {
    return callApi<Service.FacadeController['getCreditRecord']>(this.getApiUrl(this.getCreditRecord), request)
  }
  getMoneyDeductionFromCoin(request:Service.Request.GetMoneyDeductionFromCoinParam): Promise<number> {
    return callApi<Service.FacadeController['getMoneyDeductionFromCoin']>(this.getApiUrl(this.getMoneyDeductionFromCoin), request)
  }
  bindUserMobile(request:Service.Request.BindUserMobileParam): Promise<any> {
    return callApi<Service.FacadeController['bindUserMobile']>(this.getApiUrl(this.bindUserMobile), request)
  }
  updateUserType(request:Service.Request.UpdateUserTypeParam): Promise<void> {
    return callApi<Service.FacadeController['updateUserType']>(this.getApiUrl(this.updateUserType), request)
  }
  getCommonlyTouristByUnionId(request:Service.Request.GetByUnionIdParam): Promise<Service.Response.CommonlyTouristDTO[]> {
    return callApi<Service.FacadeController['getCommonlyTouristByUnionId']>(this.getApiUrl(this.getCommonlyTouristByUnionId), request)
  }
  userLogin(request:Service.Request.UserLoginParam): Promise<Service.Response.UserLoginResDTO> {
    return callApi<Service.FacadeController['userLogin']>(this.getApiUrl(this.userLogin), request)
  }
  getTouristInfoByIdCard(request:Service.Request.GetTouristInfoByIdCardParam): Promise<Service.Response.GetTouristInfoByIdCardRes> {
    return callApi<Service.FacadeController['getTouristInfoByIdCard']>(this.getApiUrl(this.getTouristInfoByIdCard), request)
  }
  deleteUserCommonlyTourist(request:Service.Request.DeleteCommonlyTouristParam): Promise<Service.Response.CommonlyTouristDTO[]> {
    return callApi<Service.FacadeController['deleteUserCommonlyTourist']>(this.getApiUrl(this.deleteUserCommonlyTourist), request)
  }
  queryUserListForWeb(request:Service.Request.QueryUserListForWebParam): Promise<Service.Response.QueryUserListForWebVO> {
    return callApi<Service.FacadeController['queryUserListForWeb']>(this.getApiUrl(this.queryUserListForWeb), request)
  }
  isUserMobileCorrect(request: Service.Request.IIsUserMobileCorrect): Promise<Service.Response.IIsUserMobileCorrect> {
    return callApi<Service.FacadeController['isUserMobileCorrect']>(this.getApiUrl(this.isUserMobileCorrect), request)
  }
}


const facadeService = new FacadeService()

export default facadeService
