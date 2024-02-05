const envUtils = {
  // 环境判断
  isProduction() {
    return process.env.NODE_ENV === 'prod'
  },
  isDevelopment() {
    return process.env.NODE_ENV === 'development'
  },
  isPPE() {
    return process.env.NODE_ENV === 'ppe'
  }
}

export default envUtils
