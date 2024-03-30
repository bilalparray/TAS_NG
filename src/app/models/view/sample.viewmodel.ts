import { BaseViewModel } from "../internal/base.viewmodel";
import { TokenRequestSM } from "../service/token/token-request-s-m";
import { TokenResponseSM } from "../service/token/token-response-s-m";
import { VersionSM } from "../service/v1/client/version-s-m";

export class SampleViewModel implements BaseViewModel {
  PageTitle: string = "Sample";
  tokenRequest!: TokenRequestSM;
  tokenResponse!: TokenResponseSM;
  version!: VersionSM;
}
