import { callApi } from '../../http'
import BaseService from '../service'
import {Service} from "./types";

class UserService extends BaseService implements Service.UserController {
  protected prefixUrl: string = '/user'

  listUserBasicInfo(request: any): Promise<any> {
    return callApi<Service.UserController['listUserBasicInfo']>(this.getApiUrl(this.listUserBasicInfo), request)
  }
  getByUnionId(request: any): Promise<any> {
    return callApi<Service.UserController['getByUnionId']>(this.getApiUrl(this.getByUnionId), request)
  }
}


const userService = new UserService()

export default UserService
