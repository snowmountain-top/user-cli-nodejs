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
  userLoginCommunity(request: any): Promise<any> {
    return callApi<Service.FacadeController['userLoginCommunity']>(this.getApiUrl(this.userLoginCommunity), request)
  }

}


const creditFacadeService = new CreditFacadeService()

export default creditFacadeService
