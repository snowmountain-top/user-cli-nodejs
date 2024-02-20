import { callApi } from '../../http'
import BaseService from '../service'
import {Service} from "./types";

class CreditFacadeService extends BaseService implements Service.CreditFacadeController {
  protected prefixUrl: string = '/credit/facade'

  getCreditRecord(request: any): Promise<any> {
    return callApi<Service.CreditFacadeController['getCreditRecord']>(this.getApiUrl(this.getCreditRecord), request)
  }
}


const creditFacadeService = new CreditFacadeService()

export default creditFacadeService
