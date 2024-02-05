import BaseService from '../service'
import { callApi } from '../../http'
import { ROSJob } from './types'

class RosJobService extends BaseService implements ROSJob.IJobService {

  protected prefixUrl: string = '/job'

  compensateOrder(): Promise<void> {
    return callApi(this.getApiUrl(this.compensateOrder), null)
  }

}

const rosJobService = new RosJobService()

export default rosJobService
