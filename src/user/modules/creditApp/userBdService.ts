import { callApi } from '../../http'
import BaseService from '../service'
import {Service} from "./types";

class UserBdService extends BaseService implements Service.UserBdController {
  queryBDRelationInfo(request: Service.Request.QueryBDRelationInfoParam): Promise<Service.Response.UserBDRelationDTO[]> {
    return callApi<Service.UserBdController['queryBDRelationInfo']>(this.getApiUrl(this.queryBDRelationInfo), request)
  }
  sendWillExpireCreditSms(request: any): Promise<boolean> {
    return callApi<Service.UserBdController['sendWillExpireCreditSms']>(this.getApiUrl(this.sendWillExpireCreditSms), request)
  }
  addBDBasicInfo(request: Service.Request.IBusinessDevelopmentStaff): Promise<void> {
    return callApi<Service.UserBdController['addBDBasicInfo']>(this.getApiUrl(this.addBDBasicInfo), request)
  }
  updateBDBasicInfo(request: Service.Request.IBusinessDevelopmentStaff): Promise<void> {
    return callApi<Service.UserBdController['updateBDBasicInfo']>(this.getApiUrl(this.updateBDBasicInfo), request)
  }
  getBdVipGroupId(request: Service.Request.getBdVipGroupIdParam): Promise<Service.Response.bdVipGroupIdDTO> {
    return callApi<Service.UserBdController['getBdVipGroupId']>(this.getApiUrl(this.getBdVipGroupId), request)
  }
  protected prefixUrl: string = '/userBd'
}


const userService = new UserBdService()

export default UserBdService
