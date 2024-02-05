import BaseService from '../service'
import { callApi } from '../../http'
import { ReverseOrderProcess } from './types'

class RosProcessService extends BaseService implements ReverseOrderProcess.IReverseOrderProcessController {

  protected prefixUrl = '/process'

  isOrderCanBeReverseMsg(request: ReverseOrderProcess.Request.IIsOrderCanBeReverse): Promise<ReverseOrderProcess.Response.IOrderCanBeReverseMsg> {
    return callApi(this.getApiUrl(this.isOrderCanBeReverseMsg), request)
  }
  isOrderCanBeReverse(request: ReverseOrderProcess.Request.IIsOrderCanBeReverse): Promise<boolean> {
    return callApi(this.getApiUrl(this.isOrderCanBeReverse), request)
  }
  apply(request: ReverseOrderProcess.Request.IApply): Promise<void> {
    return callApi(this.getApiUrl(this.apply), request)
  }
  modifyInfo(request: ReverseOrderProcess.Request.IModifyInfo): Promise<void> {
    return callApi(this.getApiUrl(this.modifyInfo), request)
  }
  firstAuditPass(request: ReverseOrderProcess.Request.IFirstAuditPass): Promise<void> {
    return callApi(this.getApiUrl(this.firstAuditPass), request)
  }
  secondAuditPass(request: ReverseOrderProcess.Request.ISecondAuditPass): Promise<void> {
    return callApi(this.getApiUrl(this.secondAuditPass), request)
  }
  auditReject(request: ReverseOrderProcess.Request.IAuditReject): Promise<void> {
    return callApi(this.getApiUrl(this.auditReject), request)
  }
  reverseReject(request: ReverseOrderProcess.Request.IReverseReject): Promise<void> {
    return callApi(this.getApiUrl(this.reverseReject), request)
  }
  cancel(request: ReverseOrderProcess.Request.ICancel): Promise<void> {
    return callApi(this.getApiUrl(this.cancel), request)
  }
  doRefund(request: ReverseOrderProcess.Request.IDoRefund): Promise<void> {
    return callApi(this.getApiUrl(this.doRefund), request)
  }
  syncReverseOrder(request: ReverseOrderProcess.Request.ISyncReverseOrder): Promise<string> {
    return callApi(this.getApiUrl(this.syncReverseOrder), request)
  }

}

const rosProcessService = new RosProcessService()

export default rosProcessService
