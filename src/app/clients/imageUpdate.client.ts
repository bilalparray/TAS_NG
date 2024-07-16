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

@Injectable({
  providedIn: 'root',
})
export class ImageUpdateClient extends BaseApiClient {
  constructor(
    storageService: StorageService,
    storageCache: StorageCache,
    commonResponseCodeHandler: CommonResponseCodeHandler
  ) {
    super(storageService, storageCache, commonResponseCodeHandler);
  }

  ImageUpdate = async (
    imageUpdate: ApiRequest<ImageUpdate>
  ): Promise<ApiResponse<ImageUpdate>> => {
    let resp = await this.GetResponseAsync<ImageUpdate, ImageUpdate>(
      `${AppConstants.ApiUrls.ImageUpdate}`,
      'PUT',
      imageUpdate
    );
    return resp;
  };

  //   UpdateTeacher = async (
  //     updateTeacherRequest: ApiRequest<ImageUpdate>
  //   ): Promise<ApiResponse<ImageUpdate>> => {
  //     let resp = await this.GetResponseAsync<ImageUpdate, ImageUpdate>(
  //       `${AppConstants.ApiUrls.ImageUpdate}/${updateTeacherRequest.id}`,
  //       'PUT',
  //       updateTeacherRequest
  //     );
  //     return resp;
  //   };
}
