import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app-constants';
import {
  AdditionalRequestDetails,
  Authentication,
} from '../models/internal/additional-request-details';
import { StorageService } from '../services/storage.service';
import { BaseApiClient } from './base-client/base-api.client';
import { CommonResponseCodeHandler } from './helpers/common-response-code-handler.helper';
import { StorageCache } from './helpers/storage-cache.helper';
import { ApiResponse } from '../models/service/api-contracts/base/api-response';
import { ApiRequest } from '../models/service/api-contracts/base/api-request';
import { QueryFilter } from '../models/service/api-contracts/query-filter';
import { DeleteResponseRoot } from '../models/service/common-response/delete-response-root';
import { DummyTeacherSM } from '../models/service/v1/dummy-teacher-s-m';
import { Players } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class PlayersClient extends BaseApiClient {
  constructor(
    storageService: StorageService,
    storageCache: StorageCache,
    commonResponseCodeHandler: CommonResponseCodeHandler
  ) {
    super(storageService, storageCache, commonResponseCodeHandler);
  }

  /**Get all players */
  GetAllPlayers = async (): Promise<ApiResponse<Players[]>> => {
    let resp = await this.GetResponseAsync<number, Players[]>(
      `${AppConstants.ApiUrls.PLAYERS}`,
      'GET'
    );
    return resp;
  };
  /**Get all players */
  GetPlayerById = async (id: string): Promise<ApiResponse<Players>> => {
    let resp = await this.GetResponseAsync<string, Players>(
      `${AppConstants.ApiUrls.PLAYER}/${id}`,
      'GET'
    );
    return resp;
  };
}
