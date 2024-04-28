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
import axios from 'axios';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PlayersService extends BaseService {
  constructor(private playersClient: PlayersClient, private http: HttpClient) {
    super();
  }

  async getAllPlayers(): Promise<ApiResponse<Players[]>> {
    return await this.playersClient.GetAllPlayers();
  }
  async getPlayerById(id: string): Promise<ApiResponse<Players>> {
    return await this.playersClient.GetPlayerById(id);
  }

  // async addPlayer(player: Players): Promise<ApiResponse<Players>> {
  //   if (player == null) {
  //     throw new Error(AppConstants.ErrorPrompts.Invalid_Input_Data);
  //   } else {
  //     let apiRequest = new ApiRequest<Players>();
  //     apiRequest.reqData = player;
  //     return await this.playersClient.AddPlayer(apiRequest);
  //   }
  // }

  async updatePlayer(player: Players): Promise<ApiResponse<Players>> {
    if (player == null) {
      throw new Error(AppConstants.ErrorPrompts.Invalid_Input_Data);
    } else {
      let apiRequest = new ApiRequest<Players>();
      apiRequest.reqData = player;
      return await this.playersClient.UpdatePlayer(apiRequest);
    }
  }

  getAllPlayersByAxios(): Observable<any> {
    return new Observable((observer) => {
      axios
        .get(AppConstants.ApiUrls.PLAYERS)
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  getHttpPlayers() {
    return this.http.get<Players[]>(
      `${environment.apiBaseUrl}${AppConstants.ApiUrls.PLAYERS}`
    );
  }
  addPlayer(player: Players) {
    return this.http.post<Players>(
      `${environment.apiBaseUrl}${AppConstants.ApiUrls.ADDPLAYER}`,
      player
    );
  }
}
