import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app-constants';

import { StorageService } from '../services/storage.service';
import { BaseApiClient } from './base-client/base-api.client';
import { CommonResponseCodeHandler } from './helpers/common-response-code-handler.helper';
import { StorageCache } from './helpers/storage-cache.helper';
import { ApiResponse } from '../models/service/api-contracts/base/api-response';
import { ManOfTheMatch } from '../models/service/v1/man-of-the-match';
import { ImageUpdate } from '../models/service/v1/image';
import { ApiRequest } from '../models/service/api-contracts/base/api-request';
import { BattingOrder } from '../models/service/v1/battingorder';

@Injectable({
  providedIn: 'root',
})
export class BattingOrderClient extends BaseApiClient {
  constructor(
    storageService: StorageService,
    storageCache: StorageCache,
    commonResponseCodeHandler: CommonResponseCodeHandler
  ) {
    super(storageService, storageCache, commonResponseCodeHandler);
  }

  BattingOrder = async (): Promise<ApiResponse<BattingOrder>> => {
    let resp = await this.GetResponseAsync<BattingOrder, BattingOrder>(
      `${AppConstants.ApiUrls.BattingOrder}`,
      'GET'
    );
    return resp;
  };

  /**Add a new teacher */
  SetNewBattingOrder = async (
    addPlayerRequest: ApiRequest<BattingOrder>
  ): Promise<ApiResponse<BattingOrder>> => {
    let resp = await this.GetResponseAsync<BattingOrder, BattingOrder>(
      AppConstants.ApiUrls.BattingOrder,
      'PUT',
      addPlayerRequest
    );
    return resp;
  };
}
