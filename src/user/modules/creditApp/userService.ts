import { callApi } from '../../http'
import BaseService from '../service'
import {Service} from "./types";

class UserService extends BaseService implements Service.UserController {
  queryBDRelationInfo(request: Service.Request.QueryBDRelationInfoParam): Promise<Service.Response.UserBDRelationDTO[]> {
    return callApi<Service.UserController['queryBDRelationInfo']>(this.getApiUrl(this.queryBDRelationInfo), request)
  }
  sendWillExpireCreditSms(request: any): Promise<boolean> {
    return callApi<Service.UserController['sendWillExpireCreditSms']>(this.getApiUrl(this.sendWillExpireCreditSms), request)
  }
  addBDBasicInfo(request: Service.Request.IBusinessDevelopmentStaff): Promise<void> {
    return callApi<Service.UserController['addBDBasicInfo']>(this.getApiUrl(this.addBDBasicInfo), request)
  }
  updateBDBasicInfo(request: Service.Request.IBusinessDevelopmentStaff): Promise<void> {
    return callApi<Service.UserController['updateBDBasicInfo']>(this.getApiUrl(this.updateBDBasicInfo), request)
  }
  getBdVipGroupId(request: Service.Request.getBdVipGroupIdParam): Promise<Service.Response.bdVipGroupIdDTO> {
    return callApi<Service.UserController['getBdVipGroupId']>(this.getApiUrl(this.getBdVipGroupId), request)
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
}


const userService = new UserService()

export default UserService
