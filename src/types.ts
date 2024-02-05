export namespace USER {

  /**
   * 常量类型
   */
  export namespace Constants {
    /**
     * 流水类型
     * @enum
     */
    export const enum OperationEnum {
      /**
       * 增加
       */
      ADD = 'ADD',
      /**
       * 扣减
       */
      SUBTRACT = 'SUBTRACT',
    }

    /**
     * 记录状态
     * @enum
     */
    export const enum CreditRecordStatusEnum {
      EXPIRED = 'EXPIRED',
      PREPARE_TO_GRANT = 'PREPARE_TO_GRANT',
      ARRIVED = 'ARRIVED'
    }
  }
}