import { Service } from './types'
import { callApi } from '../../http'
import BaseService from '../service'

class CreditService extends BaseService implements Service.CreditController {
  protected prefixUrl: string = '/credit'
  checkReviewCanGrant(request:Service.Request.checkReviewCanGrantParam):Promise<boolean> {
    return callApi<Service.CreditController['checkReviewCanGrant']>(this.getApiUrl(this.checkReviewCanGrant),request)
  }
  checkOrderHasChangeSourceTypeCanGrant(request:Service.Request.checkOrderHasChangeSourceTypeCanGrantParam):Promise<boolean> {
    return callApi<Service.CreditController['checkOrderHasChangeSourceTypeCanGrant']>(this.getApiUrl(this.checkOrderHasChangeSourceTypeCanGrant),request)
  }
  checkMainOrderIsFirst(request: Service.Request.CheckoutAdjustmentFirstOrderParam): Promise<boolean> {
    return callApi<Service.CreditController['checkMainOrderIsFirst']>(this.getApiUrl(this.checkMainOrderIsFirst),request)
  }
  hasFirstOrder(request: Service.Request.CheckoutFirstOrderParam): Promise<boolean> {
    return callApi<Service.CreditController['hasFirstOrder']>(this.getApiUrl(this.hasFirstOrder),request)
  }
  batchUpdateCreditRecordTitle(request: Service.Request.CreditRecordChangeTitleParam): Promise<void> {
    return callApi<Service.CreditController['batchUpdateCreditRecordTitle']>(this.getApiUrl(this.batchUpdateCreditRecordTitle),request)
  }
  addCredit(request:Service.Request.AddCreditParam): Promise<string> {
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
  getCreditReduceByUnionId(request:Service.Request.GetCreditReduceByUnionIdParam): Promise<number> {
    return callApi<Service.CreditController['getCreditReduceByUnionId']>(this.getApiUrl(this.getCreditReduceByUnionId), request)
  }
  getCustomCreditRecordByUnionId(request:Service.Request.GetCreditReduceByUnionIdParam): Promise<any> {
    return callApi<Service.CreditController['getCustomCreditRecordByUnionId']>(this.getApiUrl(this.getCustomCreditRecordByUnionId), request)
  }
}


const creditService = new CreditService()

export default creditService
