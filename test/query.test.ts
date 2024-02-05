import rosQueryService from '../src/ros/modules/query/service'

describe('ros query service', () => {
  it('should get api url', async () => {
    const result = await rosQueryService.getOrder({ id: '6542013476e3ab129c7c876e' })
  })
})
