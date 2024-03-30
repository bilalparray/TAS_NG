import { Injectable } from "@angular/core";
import { AppConstants } from "src/app-constants";
import {
  AdditionalRequestDetails,
  Authentication,
} from "../models/internal/additional-request-details";
import { BaseApiClient } from "./base-client/base-api.client";
import { CommonResponseCodeHandler } from "./helpers/common-response-code-handler.helper";
import { StorageCache } from "./helpers/storage-cache.helper";
import { ApiRequest } from "../models/service/api-contracts/base/api-request";
import { ApiResponse } from "../models/service/api-contracts/base/api-response";
import { TokenRequestSM } from "../models/service/token/token-request-s-m";
import { TokenResponseSM } from "../models/service/token/token-response-s-m";
import { StorageService } from "../services/storage.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CurrencyClient extends BaseApiClient {
  constructor(
    storageService: StorageService,
    storageCache: StorageCache,
    commonResponseCodeHandler: CommonResponseCodeHandler,
    private http: HttpClient
  ) {
    super(storageService, storageCache, commonResponseCodeHandler);
  }

  /**Get all currency */
  GetAllCurrencyRates = () => {
    return this.http.get(`${AppConstants.ApiUrls.CURRENCY_API_URL}`);
  };
}
