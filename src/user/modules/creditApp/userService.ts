import { callApi } from '../../http'
import BaseService from '../service'
import {Service} from "./types";

class UserService extends BaseService implements Service.UserController {
  queryUserByOpenId(request:Service.Request.QueryUserByOpenIdParam): Promise<Service.Response.UserResDTO> {
    return callApi<Service.UserController['queryUserByOpenId']>(this.getApiUrl(this.queryUserByOpenId), request)
  }
  protected prefixUrl: string = '/user'

  listUserBasicInfo(request:Service.Request.ListUserBasicInfoParam): Promise<Service.Response.UserBasicInfoDTO[]> {
    return callApi<Service.UserController['listUserBasicInfo']>(this.getApiUrl(this.listUserBasicInfo), request)
  }
  getByUnionId(request:Service.Request.GetByUnionIdParam): Promise<Service.Response.UserInfoDTO> {
    return callApi<Service.UserController['getByUnionId']>(this.getApiUrl(this.getByUnionId), request)
  }
  createUserTourists(request:Service.Request.CreateCommonlyTouristParam): Promise<Service.Response.CommonlyTouristDTO[]> {
    return callApi<Service.UserController['createUserTourists']>(this.getApiUrl(this.createUserTourists), request)
  }

  userInfoRecognition(request:Service.Request.UserInfoRecognitionParam): Promise<Service.Response.UserInfoRecognitionRes> {
    return callApi<Service.UserController['userInfoRecognition']>(this.getApiUrl(this.userInfoRecognition), request)
  }

  userInfoRecognitionByGpt(request:Service.Request.UserInfoRecognitionByGptParam): Promise<Service.Response.UserInfoRecognitionRes> {
    return callApi<Service.UserController['userInfoRecognitionByGpt']>(this.getApiUrl(this.userInfoRecognitionByGpt), request)
  }

  getUnionIdByCloudContext(): Promise<Service.Response.GetUnionIdByCloudContextRes> {
    return callApi<Service.UserController['getUnionIdByCloudContext']>(this.getApiUrl(this.getUnionIdByCloudContext))
  }

  queryUserRiskRank(request:Service.Request.QueryUserRiskRankParam): Promise<any> {
    return callApi<Service.UserController['queryUserRiskRank']>(this.getApiUrl(this.queryUserRiskRank), request)
  }
  getBeLinkOpenIdByUnionId(request:Service.Request.GetByUnionIdParam): Promise<string> {
    return callApi<Service.UserController['getBeLinkOpenIdByUnionId']>(this.getApiUrl(this.getBeLinkOpenIdByUnionId), request)
  }
  queryUserTouristInfoByIds(request:Service.Request.QueryUserTouristInfoByIdsParam): Promise<Service.Response.CommonlyTouristDTO[]> {
    return callApi<Service.UserController['queryUserTouristInfoByIds']>(this.getApiUrl(this.queryUserTouristInfoByIds), request)
  }
  updateUserInfo(request:Service.Request.UpdateUserParam): Promise<any> {
    return callApi<Service.UserController['updateUserInfo']>(this.getApiUrl(this.updateUserInfo), request)
  }
  updateUserTouristsInfo(request:Service.Request.UpdateCommonlyTouristParam): Promise<Service.Response.CommonlyTouristDTO[]> {
    return callApi<Service.UserController['updateUserTouristsInfo']>(this.getApiUrl(this.updateUserTouristsInfo), request)
  }
}


const userService = new UserService()

export default userService
