import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app-constants';

import { StorageService } from '../services/storage.service';
import { BaseApiClient } from './base-client/base-api.client';
import { CommonResponseCodeHandler } from './helpers/common-response-code-handler.helper';
import { StorageCache } from './helpers/storage-cache.helper';
import { ApiResponse } from '../models/service/api-contracts/base/api-response';
import { ManOfTheMatch } from '../models/service/v1/man-of-the-match';

@Injectable({
  providedIn: 'root',
})
export class ManOfTheMatchClient extends BaseApiClient {
  constructor(
    storageService: StorageService,
    storageCache: StorageCache,
    commonResponseCodeHandler: CommonResponseCodeHandler
  ) {
    super(storageService, storageCache, commonResponseCodeHandler);
  }

  /**Get all teachers */
  GetManOfTheMatch = async (): Promise<ApiResponse<ManOfTheMatch>> => {
    let resp = await this.GetResponseAsync<ManOfTheMatch, ManOfTheMatch>(
      `${AppConstants.ApiUrls.ManOfTheMatch}`,
      'GET'
    );
    return resp;
  };
}
