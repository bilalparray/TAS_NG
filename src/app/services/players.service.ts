import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app-constants';
import { DummyTeacherClient } from '../clients/dummy-teacher.client';
import { BaseService } from './base.service';
import { ApiResponse } from '../models/service/api-contracts/base/api-response';
import { DeleteResponseRoot } from '../models/service/common-response/delete-response-root';
import { DummyTeacherSM } from '../models/service/v1/dummy-teacher-s-m';
import { Players } from '../models/player';
import { PlayersClient } from '../clients/players-client';
import { ApiRequest } from '../models/service/api-contracts/base/api-request';

@Injectable({
  providedIn: 'root',
})
export class PlayersService extends BaseService {
  constructor(private playersClient: PlayersClient) {
    super();
  }

  async getAllPlayers(): Promise<ApiResponse<Players[]>> {
    return await this.playersClient.GetAllPlayers();
  }
  async getPlayerById(id: string): Promise<ApiResponse<Players>> {
    return await this.playersClient.GetPlayerById(id);
  }

  async addPlayer(player: Players): Promise<ApiResponse<Players>> {
    if (player == null) {
      throw new Error(AppConstants.ErrorPrompts.Invalid_Input_Data);
    } else {
      let apiRequest = new ApiRequest<Players>();
      apiRequest.reqData = player;
      return await this.playersClient.AddPlayer(apiRequest);
    }
  }

  async updatePlayer(player: Players): Promise<ApiResponse<Players>> {
    if (player == null) {
      throw new Error(AppConstants.ErrorPrompts.Invalid_Input_Data);
    } else {
      let apiRequest = new ApiRequest<Players>();
      apiRequest.reqData = player;
      return await this.playersClient.UpdatePlayer(apiRequest);
    }
  }
}
