import { rosProcessService } from './../src/index'

describe('test process', () => {
  test('', async () => {
    const request = { "recordEntity": { "tradeOrderId": "6541ceab043a8a5e2a79986095", "refundOrderId": "6543185ff6a388d80a6fe06f", "operatorRole": "USER", "operator": "o-RM65i7PsDiIEPBWfgDCk43obe4", "fromStatus": null, "toStatus": "INIT", "reason": "create", "_createTime": 1698895967777 }, "refundOrder": { "_id": "6543185ff6a388d80a6fe06f", "unionId": "o-RM65i7PsDiIEPBWfgDCk43obe4", "tradeOrderId": "6541ceab043a8a5e2a79986095", "status": "INIT", "money": null, "isAllResourceRefunded": 0, "reasonType": "退出行人", "reasonDetail": "想退", "chargeDesc": null, "rejectedReason": null, "canceledTourists": ["6541cea33f919093945f3617"], "otherResources": [{ "type": "SKU", "bizId": "64073178400d4754c9fb6a8f|6502d444c8db84d9382d8eb6", "value": 1, "refunded": false }], "_createTime": 1698895967746, "_updateTime": 1698895967757, "refundMoneyAt": null, "mediaList": [], "itemId": "64073178400d4754c9fb6a8f", "refundPlatform": "" } }
    // @ts-ignore
    await rosProcessService.syncReverseOrder(request)
  }, 60000)
})