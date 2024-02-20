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
}


const creditFacadeService = new CreditFacadeService()

export default creditFacadeService
