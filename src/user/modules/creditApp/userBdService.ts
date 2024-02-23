import { callApi } from '../../http'
import BaseService from '../service'
import {Service} from "./types";

class UserBdService extends BaseService implements Service.UserBdController {
  queryBdRelationInfo(request: Service.Request.QueryBDRelationInfoParam): Promise<Service.Response.UserBDRelationDTO[]> {
    return callApi<Service.UserBdController['queryBdRelationInfo']>(this.getApiUrl(this.queryBdRelationInfo), request)
  }
  sendWillExpireCreditSms(request: any): Promise<boolean> {
    return callApi<Service.UserBdController['sendWillExpireCreditSms']>(this.getApiUrl(this.sendWillExpireCreditSms), request)
  }
  addBdBasicInfo(request: Service.Request.IBusinessDevelopmentStaff): Promise<void> {
    return callApi<Service.UserBdController['addBdBasicInfo']>(this.getApiUrl(this.addBdBasicInfo), request)
  }
  updateBdBasicInfo(request: Service.Request.IBusinessDevelopmentStaff): Promise<void> {
    return callApi<Service.UserBdController['updateBdBasicInfo']>(this.getApiUrl(this.updateBdBasicInfo), request)
  }
  getBdVipGroupId(request: Service.Request.getBdVipGroupIdParam): Promise<Service.Response.bdVipGroupIdDTO> {
    return callApi<Service.UserBdController['getBdVipGroupId']>(this.getApiUrl(this.getBdVipGroupId), request)
  }
  protected prefixUrl: string = '/userBd'
}


const userService = new UserBdService()

export default userService
