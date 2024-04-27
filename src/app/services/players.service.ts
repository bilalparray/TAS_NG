import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app-constants';
import { DummyTeacherClient } from '../clients/dummy-teacher.client';
import { BaseService } from './base.service';
import { ApiResponse } from '../models/service/api-contracts/base/api-response';
import { DeleteResponseRoot } from '../models/service/common-response/delete-response-root';
import { DummyTeacherSM } from '../models/service/v1/dummy-teacher-s-m';
import { Players } from '../models/player';
import { PlayersClient } from '../clients/players-client';

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
}
