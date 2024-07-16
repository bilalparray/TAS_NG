import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app-constants';
import {
  AdditionalRequestDetails,
  Authentication,
} from '../models/internal/additional-request-details';
import { BaseApiClient } from './base-client/base-api.client';
import { CommonResponseCodeHandler } from './helpers/common-response-code-handler.helper';
import { StorageCache } from './helpers/storage-cache.helper';
import { ApiRequest } from '../models/service/api-contracts/base/api-request';
import { ApiResponse } from '../models/service/api-contracts/base/api-response';
import { TokenRequestSM } from '../models/service/token/token-request-s-m';
import { TokenResponseSM } from '../models/service/token/token-response-s-m';
import { StorageService } from '../services/storage.service';
import { AppVersionSM } from '../models/service/v1/app-version-sm';

@Injectable({
  providedIn: 'root',
})
export class AccountsClient extends BaseApiClient {
  constructor(
    storageService: StorageService,
    storageCache: StorageCache,
    commonResponseCodeHandler: CommonResponseCodeHandler
  ) {
    super(storageService, storageCache, commonResponseCodeHandler);
  }
  GenerateToken = async (
    tokenRequestSM: ApiRequest<TokenRequestSM>
  ): Promise<ApiResponse<TokenResponseSM>> => {
    let resp = await this.GetResponseAsync<TokenRequestSM, TokenResponseSM>(
      `${AppConstants.ApiUrls.ACCOUNT_URL}/ValidateLoginAndGenerateToken`,
      'POST',
      tokenRequestSM,
      new AdditionalRequestDetails<TokenResponseSM>(false, Authentication.false)
    );
    return resp;
  };
  /**
   *
   * @returns version info.
   */
  GetAllVersionInfo = async (): Promise<ApiResponse<AppVersionSM>> => {
    let resp = await this.GetResponseAsync<number, AppVersionSM>(
      `${AppConstants.ApiUrls.APP_VERSIONING}`,
      'GET',
      null
    );
    return resp;
  };
}
