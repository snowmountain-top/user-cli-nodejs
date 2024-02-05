import * as RosConstants from 'vitality-meta/enums/ros'
export namespace ROS {

  /**
   * 常量类型
   */
  export namespace Constants {

    /**
     * 逆向订单状态
     * @enum
     */
    export const enum RefundOrderStatusEnum {
      /**
       * 初始化状态
       */
      INIT = 'INIT',
      /**
       * 一审审核通过
       */
      FIRST_TRAILED = 'FIRST_TRAILED',
      /**
       * 二审审核通过, 待退换资源
       */
      PENDING = 'PENDING',
      /**
       * 已取消
       */
      CANCELED = 'CANCELED',
      /**
       * 申请被拒绝
       */
      REJECTED = 'REJECTED',
      /**
       * 退换资源完成
       */
      SUCCEED = 'SUCCEED'
    }

    /** 操作人角色 */
    export const enum OperatorRoleEnum {
      /** 用户 */
      USER = 'USER',
      /** 员工 */
      STAFF = 'STAFF',
      /** 系统 */
      SYSTEM = 'SYSTEM'
    }
  }

  /**
   * 传输对象结构
   */
  export namespace DTO {

    /**
     * 逆向单
     */
    export interface IReverseOrderDTO {
      positiveOrderId: string;
      id: string;
      status: string;
      // 拒单原因
      rejectedReason: string;
      // 驳回原因
      operateInitReturnDesc: string;
      money: number;
      actuallyPaidFee:number;
      /** 退单原因 */
      reasonType: RosConstants.ReasonTypeEnum;
      reasonDetail: string;
      categoryOne: string;
      categoryTwo: string;
      chargeDesc: string;
      attachments: [];
      canceledTouristsDTO:ICanceledTouristsDTO[];
      canceledTourists: [];
      skuNum: number;
      singleRoomNum: number;
      childrenNum: number;
      adultNum: number;
      createdAt: number;
      updatedAt: number;
      days: number;
      hotelId: string;
      doubleBed: number;
      singleBed: number;
      beginTime: number;
      // 发起人
      promoterInfo: string;
  }

  export interface ICanceledTouristsDTO {
      mobile:string,
      name:string,
      idCard:string
  }

    /**
     * 逆向单资源
     */
    export interface IReverseOrderResourceDTO {

    }

    /**
     * 逆向单操作记录
     */
    export interface IReverseOrderOperateRecordDTO {

    }
  }
}
