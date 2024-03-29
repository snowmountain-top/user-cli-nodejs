import { callApi } from '../../http'
import BaseService from '../service'
import {Service} from "./types";

class UserJobService extends BaseService implements Service.UserJobController {
  jobUpdateCreditIncomeSubMsg(): Promise<void> {
    return callApi<Service.UserJobController['jobUpdateCreditIncomeSubMsg']>(this.getApiUrl(this.jobUpdateCreditIncomeSubMsg))
  }
  jobSendWillExpireCreditSms(): Promise<void> {
    return callApi<Service.UserJobController['jobSendWillExpireCreditSms']>(this.getApiUrl(this.jobSendWillExpireCreditSms))
  }
  protected prefixUrl: string = '/userJob'
}


const userJobService = new UserJobService()

export default userJobService
