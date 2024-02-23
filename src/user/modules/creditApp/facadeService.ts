import { callApi } from '../../http'
import BaseService from '../service'
import {Service} from "./types";

class CreditFacadeService extends BaseService implements Service.FacadeController {
  protected prefixUrl: string = '/facade'

  getCreditRecord(request: any): Promise<any> {
    return callApi<Service.FacadeController['getCreditRecord']>(this.getApiUrl(this.getCreditRecord), request)
  }
  getMoneyDeductionFromCoin(request: any): Promise<any> {
    return callApi<Service.FacadeController['getMoneyDeductionFromCoin']>(this.getApiUrl(this.getMoneyDeductionFromCoin), request)
  }
  bindUserMobile(request: any): Promise<any> {
    return callApi<Service.FacadeController['bindUserMobile']>(this.getApiUrl(this.bindUserMobile), request)
  }
  updateUserType(request: any): Promise<any> {
    return callApi<Service.FacadeController['updateUserType']>(this.getApiUrl(this.updateUserType), request)
  }
  getCommonlyTouristByUnionId(request: any): Promise<any> {
    return callApi<Service.FacadeController['getCommonlyTouristByUnionId']>(this.getApiUrl(this.getCommonlyTouristByUnionId), request)
  }
  userLogin(request: any): Promise<any> {
    return callApi<Service.FacadeController['userLogin']>(this.getApiUrl(this.userLogin), request)
  }
  getTouristInfoByIdCard(request: any): Promise<any> {
    return callApi<Service.FacadeController['getTouristInfoByIdCard']>(this.getApiUrl(this.getTouristInfoByIdCard), request)
  }
  deleteUserCommonlyTourist(request: any): Promise<any> {
    return callApi<Service.FacadeController['deleteUserCommonlyTourist']>(this.getApiUrl(this.deleteUserCommonlyTourist), request)
  }
  queryUserListForWeb(request: any): Promise<any> {
    return callApi<Service.FacadeController['queryUserListForWeb']>(this.getApiUrl(this.queryUserListForWeb), request)
  }

}


const creditFacadeService = new CreditFacadeService()

export default creditFacadeService
