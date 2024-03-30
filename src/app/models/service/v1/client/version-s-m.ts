import { SampleServiceModelBase } from "../../base/sample-service-model-base";

export class VersionSM extends SampleServiceModelBase<number> {
  baseVersion!: string;
  minimumVersion!: string;
  currentVersion!: string;
  latestVersion!: string;
}
