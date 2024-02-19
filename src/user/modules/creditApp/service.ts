import { Service } from './types'
import { callApi } from '../../http'
import BaseService from '../service'

class CreditService extends BaseService implements Service.CreditController {
  protected prefixUrl: string = '/credit'

  addCredit(request: any): Promise<any> {
    return callApi<Service.CreditController['addCredit']>(this.getApiUrl(this.addCredit), request)
  }
  deductCredit(request: any): Promise<any> {
    return callApi<Service.CreditController['deductCredit']>(this.getApiUrl(this.deductCredit), request)
  }
  getCreditReduce(request: any): Promise<any> {
    return callApi<Service.CreditController['getCreditReduce']>(this.getApiUrl(this.getCreditReduce), request)
  }
  grantPrepareCredit(request: any): Promise<any> {
    return callApi<Service.CreditController['grantPrepareCredit']>(this.getApiUrl(this.grantPrepareCredit), request)
  }
  cancelPrepareCredit(request: any): Promise<any> {
    return callApi<Service.CreditController['cancelPrepareCredit']>(this.getApiUrl(this.cancelPrepareCredit), request)
  }
  updatePrepareCredit(request: any): Promise<any> {
    return callApi<Service.CreditController['updatePrepareCredit']>(this.getApiUrl(this.updatePrepareCredit), request)
  }
}


const creditService = new CreditService()

export default creditService
