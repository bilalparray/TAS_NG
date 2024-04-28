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
      `${AppConstants.ApiUrls.ADDPLAYER}/${id}`,
      'GET'
    );
    return resp;
  };

  /**Add a new teacher */
  AddPlayer = async (
    addPlayerRequest: ApiRequest<Players>
  ): Promise<ApiResponse<Players>> => {
    let resp = await this.GetResponseAsync<Players, Players>(
      AppConstants.ApiUrls.ADDPLAYER,
      'POST',
      addPlayerRequest
    );
    return resp;
  };

  UpdatePlayer = async (
    player: ApiRequest<Players>
  ): Promise<ApiResponse<Players>> => {
    let resp = await this.GetResponseAsync<Players, Players>(
      `${AppConstants.ApiUrls.ADDPLAYER}/${player.reqData._id}`,
      'PUT',
      player,
      new AdditionalRequestDetails<Players>(false, Authentication.false)
    );
    return resp;
  };
}
