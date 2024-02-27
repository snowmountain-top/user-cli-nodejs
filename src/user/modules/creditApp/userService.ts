import { callApi } from '../../http'
import BaseService from '../service'
import {Service} from "./types";

class UserService extends BaseService implements Service.UserController {
  queryUserByOpenId(openId: string): Promise<any> {
    return callApi<Service.UserController['queryUserByOpenId']>(this.getApiUrl(this.queryUserByOpenId), openId)
  }
  protected prefixUrl: string = '/user'

  listUserBasicInfo(request: any): Promise<any> {
    return callApi<Service.UserController['listUserBasicInfo']>(this.getApiUrl(this.listUserBasicInfo), request)
  }
  getByUnionId(request: any): Promise<any> {
    return callApi<Service.UserController['getByUnionId']>(this.getApiUrl(this.getByUnionId), request)
  }
  getBeLinkOpenIdByUnionId(request: any): Promise<any> {
    return callApi<Service.UserController['getBeLinkOpenIdByUnionId']>(this.getApiUrl(this.getBeLinkOpenIdByUnionId), request)
  }
  queryUserTouristInfoByIds(request: any): Promise<any> {
    return callApi<Service.UserController['queryUserTouristInfoByIds']>(this.getApiUrl(this.queryUserTouristInfoByIds), request)
  }
  updateUserInfo(request: any): Promise<any> {
    return callApi<Service.UserController['updateUserInfo']>(this.getApiUrl(this.updateUserInfo), request)
  }
  updateUserTouristsInfo(request: any): Promise<any> {
    return callApi<Service.UserController['updateUserTouristsInfo']>(this.getApiUrl(this.updateUserTouristsInfo), request)
  }
}


const userService = new UserService()

export default userService
