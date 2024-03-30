import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { CurrencyClient } from "../clients/currency.client";
import { HttpClient } from "@angular/common/http";
import { ApiResponse } from "../models/service/api-contracts/base/api-response";
import { DummyTeacherSM } from "../models/service/v1/dummy-teacher-s-m";

@Injectable({
  providedIn: "root",
})
export class CurrencyService extends BaseService {
  constructor(private currencyClient: CurrencyClient) {
    super();
  }

  getAllCurrencyRates() {
    return this.currencyClient.GetAllCurrencyRates();
  }
}
