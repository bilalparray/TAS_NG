import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app-constants';
import { AccountsClient } from '../clients/accounts.client';
import { BaseService } from './base.service';
import { ApiRequest } from '../models/service/api-contracts/base/api-request';
import { ApiResponse } from '../models/service/api-contracts/base/api-response';
import { RoleTypeSM } from '../models/service/enums/role-type-s-m.enum';
import { TokenRequestSM } from '../models/service/token/token-request-s-m';
import { TokenResponseSM } from '../models/service/token/token-response-s-m';
import { BattingOrderClient } from '../clients/batting-order.client';
import { BattingOrder } from '../models/service/v1/battingorder';

@Injectable({
  providedIn: 'root',
})
export class BattingOrderService extends BaseService {
  constructor(private battingOrderClient: BattingOrderClient) {
    super();
  }
  async getBattingOrder(): Promise<ApiResponse<BattingOrder>> {
    return await this.battingOrderClient.BattingOrder();
  }

  async setNewBattingOrder(
    battingOrder: BattingOrder
  ): Promise<ApiResponse<BattingOrder>> {
    if (battingOrder == null) {
      throw new Error(AppConstants.ErrorPrompts.Invalid_Input_Data);
    } else {
      let apiRequest = new ApiRequest<BattingOrder>();
      apiRequest.reqData = battingOrder;
      return await this.battingOrderClient.SetNewBattingOrder(apiRequest);
    }
  }
}
