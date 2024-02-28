import { callApi } from '../../http'
import BaseService from '../service'
import {Service} from "./types";

class CreditFacadeService extends BaseService implements Service.FacadeController {
  addBd(request: Service.Request.IBusinessDevelopmentStaff): Promise<void> {
    return callApi<Service.FacadeController['addBd']>(this.getApiUrl(this.addBd), request)
  }
  updateBd(request: Service.Request.IBusinessDevelopmentStaff): Promise<void> {
    return callApi<Service.FacadeController['updateBd']>(this.getApiUrl(this.updateBd), request)
  }
  getBdVipGroupId(request: Service.Request.getBdVipGroupIdParam): Promise<Service.Response.bdVipGroupIdDTO> {
    return callApi<Service.FacadeController['getBdVipGroupId']>(this.getApiUrl(this.getBdVipGroupId), request)
  }

  protected prefixUrl: string = '/facade'

  queryUserByOpenId(openId: string): Promise<any> {
    return callApi<Service.FacadeController['queryUserByOpenId']>(this.getApiUrl(this.queryUserByOpenId), openId)
  }

  getCreditRecord(request:Service.Request.GetCreditRecordParam): Promise<Service.Response.CreditRecordFacadeDTO> {
    return callApi<Service.FacadeController['getCreditRecord']>(this.getApiUrl(this.getCreditRecord), request)
  }
  getMoneyDeductionFromCoin(request:Service.Request.GetMoneyDeductionFromCoinParam): Promise<number> {
    return callApi<Service.FacadeController['getMoneyDeductionFromCoin']>(this.getApiUrl(this.getMoneyDeductionFromCoin), request)
  }
  bindUserMobile(request:Service.Request.BindUserMobileParam): Promise<void> {
    return callApi<Service.FacadeController['bindUserMobile']>(this.getApiUrl(this.bindUserMobile), request)
  }
  updateUserType(request:Service.Request.UpdateUserTypeParam): Promise<void> {
    return callApi<Service.FacadeController['updateUserType']>(this.getApiUrl(this.updateUserType), request)
  }
  getCommonlyTouristByUnionId(request:Service.Request.GetByUnionIdParam): Promise<Service.Response.CommonlyTouristDTO[]> {
    return callApi<Service.FacadeController['getCommonlyTouristByUnionId']>(this.getApiUrl(this.getCommonlyTouristByUnionId), request)
  }
  userLogin(request:Service.Request.UserLoginParam): Promise<any> {
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

}


const creditFacadeService = new CreditFacadeService()

export default creditFacadeService
