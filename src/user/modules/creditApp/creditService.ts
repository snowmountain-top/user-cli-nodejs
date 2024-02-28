import { Service } from './types'
import { callApi } from '../../http'
import BaseService from '../service'

class CreditService extends BaseService implements Service.CreditController {
  protected prefixUrl: string = '/credit'

  addCredit(request:Service.Request.AddCreditParam): Promise<any> {
    return callApi<Service.CreditController['addCredit']>(this.getApiUrl(this.addCredit), request)
  }
  deductCredit(request: Service.Request.DeductCreditParam): Promise<any> {
    return callApi<Service.CreditController['deductCredit']>(this.getApiUrl(this.deductCredit), request)
  }
  getCreditReduce(request:Service.Request.GetCreditReduceParam): Promise<Map<string, number>> {
    return callApi<Service.CreditController['getCreditReduce']>(this.getApiUrl(this.getCreditReduce), request)
  }
  grantPrepareCredit(request:Service.Request.GrantPrepareCreditParam): Promise<Service.Response.GrantPrepareCreditRes> {
    return callApi<Service.CreditController['grantPrepareCredit']>(this.getApiUrl(this.grantPrepareCredit), request)
  }
  cancelPrepareCredit(request:Service.Request.CancelPrepareCreditParam): Promise<void> {
    return callApi<Service.CreditController['cancelPrepareCredit']>(this.getApiUrl(this.cancelPrepareCredit), request)
  }
  updatePrepareCredit(request:Service.Request.UpdatePrepareCreditParam): Promise<any> {
    return callApi<Service.CreditController['updatePrepareCredit']>(this.getApiUrl(this.updatePrepareCredit), request)
  }
  queryCreditRecord(request:Service.Request.QueryCreditRecordParam): Promise<Service.Response.CreditRecordDTO[]> {
    return callApi<Service.CreditController['queryCreditRecord']>(this.getApiUrl(this.queryCreditRecord), request)
  }
  queryCreditAccountPool(request:Service.Request.QueryCreditAccountPoolParam): Promise<Service.Response.CreditAccountPoolDTO[]> {
    return callApi<Service.CreditController['queryCreditAccountPool']>(this.getApiUrl(this.queryCreditAccountPool), request)
  }
}


const creditService = new CreditService()

export default creditService
