import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "./base.service";
import { VersionSM } from "../models/service/v1/client/version-s-m";
import { ApiResponse } from "../models/service/api-contracts/base/api-response";
import { VersionClient } from "../clients/version.client";

@Injectable({
  providedIn: "root",
})
export class VersionService extends BaseService {
  constructor(private versionClient: VersionClient, private http: HttpClient) {
    super();
  }

  async getAllVersionInfo(): Promise<ApiResponse<VersionSM>> {
    return await this.versionClient.GetAllVersionInfo();
  }
  // async getAllVersionInfo() {
  //   return this.http.get(
  //     "https://c8e7-2405-201-5504-a9ad-c3c-4f1b-dde-ec9.ngrok-free.app/api/v1/ApplicationUser/unitconvertor/Version"
  //   );
  // }
}
