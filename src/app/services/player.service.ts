import { Injectable } from '@angular/core';
import { ManOfTheMatch } from '../models/service/v1/man-of-the-match';
import { ApiResponse } from '../models/service/api-contracts/base/api-response';
import { ManOfTheMatchClient } from '../clients/man-of-the-match.client';
import { ImageUpdate } from '../models/service/v1/image';
import { AppConstants } from 'src/app-constants';
import { ApiRequest } from '../models/service/api-contracts/base/api-request';
import { ImageUpdateClient } from '../clients/imageUpdate.client';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(
    private monOfTheMatchClient: ManOfTheMatchClient,
    private imageUpdateClient: ImageUpdateClient
  ) {}
  async getManOfTheMatch(): Promise<ApiResponse<ManOfTheMatch>> {
    return await this.monOfTheMatchClient.GetManOfTheMatch();
  }

  async updateImage(
    imageUpdate: ImageUpdate
  ): Promise<ApiResponse<ImageUpdate>> {
    if (imageUpdate == null) {
      throw new Error(AppConstants.ErrorPrompts.Invalid_Input_Data);
    } else {
      let apiRequest = new ApiRequest<ImageUpdate>();
      apiRequest.reqData = imageUpdate;
      return await this.imageUpdateClient.ImageUpdate(apiRequest);
    }
  }
}
