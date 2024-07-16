import { Injectable } from '@angular/core';
import { ManOfTheMatch } from '../models/service/v1/man-of-the-match';
import { ApiResponse } from '../models/service/api-contracts/base/api-response';
import { ManOfTheMatchClient } from '../clients/man-of-the-match.client';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private monOfTheMatchClient: ManOfTheMatchClient) {}
  async getManOfTheMatch(): Promise<ApiResponse<ManOfTheMatch>> {
    return await this.monOfTheMatchClient.GetManOfTheMatch();
  }
}
